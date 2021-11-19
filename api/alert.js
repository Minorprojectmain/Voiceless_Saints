const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");
const AlertModel= require("../models/AlertModel");

const uuid = require("uuid").v4;
const {
  newCommentNotification,
  removeCommentNotification
} = require("../utilsServer/notificationActions");





//Create an Alert Request

router.post("/", authMiddleware, async (req, res) => {
    const { text, location, picUrl } = req.body;
  
    if (text.length < 1)
      return res.status(401).send("Text must be atleast 1 character");

    if(location.length<1)
      return res.status(401).send("Location must be atleast 1 character");
  
    try {
      const newAlert = {
        user: req.userId,
        text,
        location,
        picUrl,
      
      };

      

      
  
      const alert = await new AlertModel(newAlert).save();
      const alertCreated=await new AlertModel(alert._id).populate('user');
  
      
      return res.json(alertCreated);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  

  //GET ALL ALERT REQUESTS
  router.get("/", authMiddleware, async (req, res) => {
  try {
    const alerts=await AlertModel.find().sort({
      createdAt:-1
    }).populate('user')
      return res.json(alerts);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // GET ALERT REQUEST BY ID
  
  router.get("/:alertId", authMiddleware, async (req, res) => {
    try {
      const alert = await AlertModel.findById(req.params.alertId)
        .populate("user");
  
      if (!alert) {
        return res.status(404).send("Alert request not found");
      }
  
      return res.json(alert);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // DELETE ALERT REQUEST
  
  router.delete("/:alertId", authMiddleware, async (req, res) => {
    try {
      const { userId } = req;
  
      const { alertId } = req.params;
  
      const alert = await AlertModel.findById(alertId);
      if (!alert) {
        return res.status(404).send("Alert request not found");
      }
  
      const user = await UserModel.findById(userId);
  
      if (alert.user.toString() !== userId) {
        if (user.role === "root") {
          await alert.remove();
          return res.status(200).send("alert request deleted Successfully");
        } else {
          return res.status(401).send("Unauthorized");
        }
      }
  
      await alert.remove();
      return res.status(200).send("Alert Request deleted Successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });



  // CREATE A COMMENT

router.post("/comment/:alertId", authMiddleware, async (req, res) => {
    try {
      const { alertId } = req.params;
  
      const { userId } = req;
      const { text } = req.body;
  
      if (text.length < 1)
        return res.status(401).send("Alert should be atleast 1 character");
  
      const alert = await AlertModel.findById(alertId);
  
      if (!alert) return res.status(404).send("Alert not found");
  
      const newComment = {
        _id: uuid(),
        text,
        user: userId,
        date: Date.now()
      };
  
      await alert.comments.unshift(newComment);
      await alert.save();
  
      if (alert.user.toString() !== userId) {
        await newCommentNotification(
          alertId,
          newComment._id,
          userId,
          alert.user.toString(),
          text
        );
      }
  
      return res.status(200).json(newComment._id);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // DELETE A COMMENT
  
  router.delete("/:alertId/:commentId", authMiddleware, async (req, res) => {
    try {
      const { alertId, commentId } = req.params;
      const { userId } = req;
  
      const alert = await AlertModel.findById(alertId);
      if (!alert) return res.status(404).send("Alert not found");
  
      const comment = alert.comments.find(comment => comment._id === commentId);
      if (!comment) {
        return res.status(404).send("No Comment found");
      }
  
      const user = await UserModel.findById(userId);
  
      const deleteComment = async () => {
        const indexOf = alert.comments.map(comment => comment._id).indexOf(commentId);
  
        await alert.comments.splice(indexOf, 1);
  
        await alert.save();
  
        if (alert.user.toString() !== userId) {
          await removeCommentNotification(alertId, commentId, userId, alert.user.toString());
        }
  
        return res.status(200).send("Deleted Successfully");
      };
  
      if (comment.user.toString() !== userId) {
        if (user.role === "root") {
          await deleteComment();
        } else {
          return res.status(401).send("Unauthorized");
        }
      }
  
      await deleteComment();
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });




  











module.exports =router;