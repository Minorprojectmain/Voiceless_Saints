import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

const Axios = axios.create({
  baseURL: `${baseUrl}/api/alert`,
  headers: { Authorization: cookie.get("token") }
});

export const submitNewAlert = async (
  text,
  location,
  picUrl,
  setAlerts,
  setNewAlert,
  setError
) => {
  try {
    const res = await Axios.post("/", { text, location, picUrl});

    setAlerts(prev => [res.data, ...prev]);
    setNewAlert({ text: "", location: ""});
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const deleteAlert = async (alertId, setAlerts, setShowToastr) => {
  try {
    await Axios.delete(`/${alertId}`);
    setAlerts(prev => prev.filter(alert => alert._id !== alertId));
    setShowToastr(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${alertId}`, { text });

    const newComment = {
      _id: res.data,
      user,
      text,
      date: Date.now()
    };

    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert(catchErrors(error));
  } 
};

export const deleteComment = async (alertId, commentId, setComments) => {
  try {
    await Axios.delete(`/${alertId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert(catchErrors(error));
  }
};
