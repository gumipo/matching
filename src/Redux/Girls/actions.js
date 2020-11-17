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

export const LEBEL_UP = "LEBEL_UP";
export const lebelUpAction = (lebel) => {
  return {
    type: "LEBEL_UP",
    payload: {
      lebel: lebel,
    },
  };
};
