import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

const Axios = axios.create({
  baseURL: `${baseUrl}/api/lends`,
  headers: { Authorization: cookie.get("token") }
});

export const submitNewLend = async (
  text,
  petname,
  location,
  picUrl,
  setLends,
  setNewLend,
  setError
) => {
  try {
    const res = await Axios.post("/", { text, location, picUrl,petname });

    setLends(prev => [res.data, ...prev]);
    setNewLend({ text: "", location: "",petname:"" });
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const deleteLend = async (lendId, setLends, setShowToastr) => {
  try {
    await Axios.delete(`/${lendId}`);
    setLends(prev => prev.filter(lend => lend._id !== lendId));
    setShowToastr(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const likeLend = async (lendId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios.post(`/like/${lendId}`);
      setLikes(prev => [...prev, { user: userId }]);
    }
    //
    else if (!like) {
      await Axios.put(`/unlike/${lendId}`);
      setLikes(prev => prev.filter(like => like.user !== userId));
    }
  } catch (error) {
    alert(catchErrors(error));
  }
};
