import { Description } from "@material-ui/icons";

export const FETCH_GIRL = "FETCH_GIRL";
export const fetchGirlAction = (girl) => {
  return {
    type: "FETCH_GIRL",
    payload: {
      name: girl.name,
      age: girl.age,
      description: girl.description,
      address: girl.address,
      image: girl.image,
    },
  };
};
