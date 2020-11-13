import React, { useState, useCallback, useEffect } from "react";
import { TextInput, PrimaryButton } from "../Components/UIkit";
import ImageArea from "./ImageArea";
import { db } from "../Firebase/index";

const AddGirlsData = () => {
  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [age, setAge] = useState(""),
    [image, setImage] = useState(""),
    [address, setAddress] = useState(""),
    [level, setLevel] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputAge = useCallback(
    (event) => {
      setAge(event.target.value);
    },
    [setAge]
  );

  const inputAddress = useCallback(
    (event) => {
      setAddress(event.target.value);
    },
    [setAddress]
  );

  const inputLevel = useCallback(
    (event) => {
      setLevel(event.target.value);
    },
    [setLevel]
  );
  const girlsRef = db.collection("girls");

  const saveGirls = (name, description, age, image, address, level) => {
    const data = {
      image: image,
      name: name,
      age: age,
      address: address,
      description: description,
      level: level,
    };

    girlsRef
      .doc()
      .set(data)
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <section>
      <h2>女この登録</h2>
      <div>
        <ImageArea image={image} setImage={setImage} />

        <TextInput
          fullWidth={true}
          label={"名前"}
          multiline={false}
          required={true}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          fullWidth={true}
          label={"レベル"}
          multiline={false}
          required={true}
          rows={1}
          value={level}
          type={"number"}
          onChange={inputLevel}
        />
        <TextInput
          fullWidth={true}
          label={"年齢"}
          multiline={true}
          required={true}
          rows={1}
          value={age}
          type={"number"}
          onChange={inputAge}
        />
        <TextInput
          fullWidth={true}
          label={"住まい"}
          multiline={true}
          required={true}
          rows={1}
          value={address}
          type={"number"}
          onChange={inputAddress}
        />
        <TextInput
          fullWidth={true}
          label={"コメント"}
          multiline={false}
          required={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />

        <div>
          <PrimaryButton
            label={"ガール登録"}
            onClick={() =>
              saveGirls(name, description, age, image, address, level)
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AddGirlsData;
