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

export const LEVEL_UP = "LEVEL_UP";
export const levelUpAction = (level) => {
  return {
    type: "LEVEL_UP",
    payload: {
      level: level,
    },
  };
};
