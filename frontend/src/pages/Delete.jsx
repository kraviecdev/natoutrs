import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    if (window.confirm("Do you want to delete this item?")) {
      const route = params.pathname.split("-")[1];
      await customFetch.delete(`${route}/${params.id}`);
      toast.success("Element deleted successfully");
    } else {
      toast.info("You have cancelled delete request");
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }

  return redirect(`/settings/${params.pathname}`);
};
