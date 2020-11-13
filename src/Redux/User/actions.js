export const SAVE_USER = "SAVE_USER";
export const saveUserAction = (userdata) => {
  return {
    type: "SAVE_USER",
    payload: {
      name: userdata.name,
      image: userdata.image,
    },
  };
};
