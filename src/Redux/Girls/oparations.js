import { db } from "../../Firebase/index";
import { fetchGirlAction } from "./actions";

export const fetchGirls = (level) => {
  return async (dispatch) => {
    const query = db.collection("girls").where("level", "==", level);
    query.get().then((snapshots) => {
      snapshots.forEach((snapshot) => {
        const girl = snapshot.data();
        const data = {
          name: girl.name,
          description: girl.description,
          address: girl.address,
          age: girl.age,
          image: girl.image.path,
        };
        dispatch(fetchGirlAction(data));
      });
    });
  };
};
