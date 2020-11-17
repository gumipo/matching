import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getGirlName,
  getGirlAge,
  getGirlAddress,
  getGirlDescription,
  getGirlImage,
  getGirlLebel,
} from "../Redux/Girls/selector";
import { fetchGirls } from "../Redux/Girls/oparations";
import styled from "styled-components";
import { lebelUpAction } from "../Redux/Girls/actions";

const GirlsSelect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const girlName = getGirlName(selector);
  const girlAge = getGirlAge(selector);
  const girlAddress = getGirlAddress(selector);
  const girlDescription = getGirlDescription(selector);
  const girlImage = getGirlImage(selector);
  let lebel = getGirlLebel(selector);

  useEffect(() => {
    lebel++;
    dispatch(lebelUpAction(lebel));
  }, []);

  useEffect(() => {
    if (lebel === 0) {
      return;
    }
    const stringLebel = String(lebel);
    dispatch(fetchGirls(stringLebel));
  }, [lebel]);

  return (
    <StyledSection>
      <h1>{girlName + "さんとマッチングしました"}</h1>
      <StyledCard>
        <StyledCardHeader>
          <img src={girlImage} />
        </StyledCardHeader>
        <StyledCardBottom>
          <p>{`ニックネーム: ${girlName}  (${girlAge})`}</p>
          <p>住んでるところ: {girlAddress}</p>
          <h3>コメント</h3>
          <p>{girlDescription}</p>
        </StyledCardBottom>
      </StyledCard>
      <StyledButton onClick={() => history.push("/chat")}>
        {girlName + "さんとチャットする"}
      </StyledButton>
    </StyledSection>
  );
};

export default GirlsSelect;

const StyledSection = styled.section`
  display: grid;
  place-items: center;
`;

const StyledCard = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: -2px -1px 20px 0px pink;
`;

const StyledCardHeader = styled.div`
  img {
    border-radius: 10px 10px 0 0;
    width: 450px;
    height: 450px;
    object-fit: cover;
  }
`;

const StyledCardBottom = styled.div`
  h3 {
    margin-left: 10px;
  }
  p {
    margin-left: 10px;
  }
`;

const StyledButton = styled.button`
  display: grid;
  place-items: center;
  background-color: pink;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 17px;
`;
