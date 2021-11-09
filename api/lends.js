const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");
const LendModel= require("../models/LendModel");
const uuid = require("uuid").v4;

//Create a Lend Request

router.post("/", authMiddleware, async (req, res) => {
    const { text, location, picUrl,petname } = req.body;
  
    if (text.length < 1)
      return res.status(401).send("Text must be atleast 1 character");

    if(location.length<1)
      return res.status(401).send("Location must be atleast 1 character");
  
    try {
      const newLend = {
        user: req.userId,
        text,
        location,
        picUrl,
      
      };

      if(petname)newLend.petname=petname;


      
  
      const lend = await new LendModel(newLend).save();
      const lendCreated=await new LendModel(lend._id).populate('user');
  
      
      return res.json(lendCreated);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  

  //GET ALL LEND REQUESTS
  router.get("/", authMiddleware, async (req, res) => {
  try {
    const lends=await LendModel.find().sort({
      createdAt:-1
    }).populate('user')
      return res.json(lends);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // GET LEND REQUEST BY ID
  
  router.get("/:lendId", authMiddleware, async (req, res) => {
    try {
      const lend = await LendModel.findById(req.params.lendId)
        .populate("user");
  
      if (!lend) {
        return res.status(404).send("Lend request not found");
      }
  
      return res.json(lend);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // DELETE LEND REQUEST
  
  router.delete("/:lendId", authMiddleware, async (req, res) => {
    try {
      const { userId } = req;
  
      const { lendId } = req.params;
  
      const lend = await LendModel.findById(lendId);
      if (!lend) {
        return res.status(404).send("Lend request not found");
      }
  
      const user = await UserModel.findById(userId);
  
      if (lend.user.toString() !== userId) {
        if (user.role === "root") {
          await lend.remove();
          return res.status(200).send("lend request deleted Successfully");
        } else {
          return res.status(401).send("Unauthorized");
        }
      }
  
      await lend.remove();
      return res.status(200).send("Lend Request deleted Successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // LIKE A POST
  
  router.post("/like/:lendId", authMiddleware, async (req, res) => {
    try {
      const { lendId } = req.params;
      const { userId } = req;
  
      const lend = await LendModel.findById(lendId);
      if (!lend) {
        return res.status(404).send("No Lend request found");
      }
  
      const isLiked =
        lend.likes.filter(like => like.user.toString() === userId).length > 0;
  
      if (isLiked) {
        return res.status(401).send("Lend request already liked");
      }
  
      await lend.likes.unshift({ user: userId });
      await lend.save();
  
      return res.status(200).send("Lend post liked");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // UNLIKE A POST
  
  router.put("/unlike/:lendId", authMiddleware, async (req, res) => {
    try {
      const { lendId } = req.params;
      const { userId } = req;
  
      const lend = await LendModel.findById(lendId);
      if (!lend) {
        return res.status(404).send("No Lend request found");
      }
  
      const isLiked =
        lend.likes.filter(like => like.user.toString() === userId).length === 0;
  
      if (isLiked) {
        return res.status(401).send("Lend request not liked before");
      }
  
      const index = lend.likes.map(like => like.user.toString()).indexOf(userId);
  
      await lend.likes.splice(index, 1);
  
      await lend.save();
  
      return res.status(200).send("Lend request Unliked");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  // GET ALL LIKES OF A POST
  
  router.get("/like/:lendId", authMiddleware, async (req, res) => {
    try {
      const { lendId } = req.params;
  
      const lend = await LendModel.findById(lendId).populate("likes.user");
      if (!lend) {
        return res.status(404).send("No Lend Request found");
      }
  
      return res.status(200).json(lend.likes);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  module.exports=router;