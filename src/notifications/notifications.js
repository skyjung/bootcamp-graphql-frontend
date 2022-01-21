import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = () =>
  toast.info("Playlist Created!", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const notifyError = () =>
  toast.error("Not enough similar artists", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
