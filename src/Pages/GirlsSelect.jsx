import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getGirlName,
  getGirlAge,
  getGirlAddress,
  getGirlDescription,
  getGirlImage,
  getGirlLevel,
  getisReplayState,
} from "../Redux/Girls/selector";
import { fetchGirls } from "../Redux/Girls/oparations";
import styled from "styled-components";
import { levelUpAction } from "../Redux/Girls/actions";
import { LoadingMotion } from "../Components/index";

const GirlsSelect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const girlName = getGirlName(selector);
  const girlAge = getGirlAge(selector);
  const girlAddress = getGirlAddress(selector);
  const girlDescription = getGirlDescription(selector);
  const girlImage = getGirlImage(selector);
  const isReplayState = getisReplayState(selector);
  let level = getGirlLevel(selector);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isReplayState === true) {
      return;
    }
    level++;
    setLoading(true);
    dispatch(levelUpAction(level));
  }, []);

  useEffect(() => {
    if (level === 0) {
      return;
    }
    const stringLevel = String(level);
    dispatch(fetchGirls(stringLevel));
  }, [level]);

  useEffect(() => {
    if (girlImage.length === 0) {
      return;
    }
    setLoading(false);
  }, [girlImage]);

  return (
    <>
      {loading ? (
        <StyledSection>
          <LoadingMotion />
        </StyledSection>
      ) : (
        <StyledSection>
          <StyledGirlSelectTitle>
            {girlName + "さんとマッチングしました"}
          </StyledGirlSelectTitle>
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
      )}
    </>
  );
};

export default GirlsSelect;

const StyledSection = styled.section`
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;
  display: grid;
  place-items: center;
`;

const StyledGirlSelectTitle = styled.h1`
  font-family: sans-serif;
`;

const StyledCard = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: -2px -1px 20px 0px black;
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
  margin-bottom: 100px;
  font-size: 17px;
  font-weight: bold;
  box-shadow: 2px 2px 2px 2px;
`;
