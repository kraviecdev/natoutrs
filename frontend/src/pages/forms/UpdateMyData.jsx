import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setUser } from "../dashboard/usersSlice.js";
import customFetch from "../../utils/customFetch.js";
import Form from "../../components/_assets/Form/index.jsx";
import { z } from "zod";

const UpdateMyData = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateMyDataState = [
    {
      name: "name",
      label: "Your name",
      type: "text",
      placeholder: user?.name,
      value: user?.name,
    },
    {
      name: "email",
      label: "Your email",
      type: "email",
      placeholder: user?.email,
      value: user?.email,
    },
    {
      name: "photo",
      label: "change profile image",
      type: "file",
      accept: "image/*",
      multiple: false,
      value: "",
      avatarPath: `/img/users/${user?.photo}`,
    },
  ];

  const updateMyDataSchema = z.object({
    name: z.string().min(3).max(64),
    email: z.string().email(),
    photo: z.any(),
  });

  const onSubmit = async (data, setError) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);

    data = { ...data, photo: data.photo[0] };

    try {
      const response = await customFetch.patch(`/users/update-my-data`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        const {
          data: { user },
        } = response.data;
        dispatch(setUser(user));
        return navigate("/settings");
      }
    } catch (error) {
      return setError("root", {
        type: error?.response?.statusText,
        message: error?.response?.data?.message,
      });
    }
  };

  return (
    <Form
      $second
      initialState={updateMyDataState}
      schema={updateMyDataSchema}
      onSubmit={onSubmit}
      heading="Update your account"
      button="Save changes"
    />
  );
};

export default UpdateMyData;
