/* eslint-disable no-unused-vars */
import styled from "styled-components";
import OptionsPanel from "../OptionsPanel/OptionsPanel";
import { useContext, useState } from "react";
import { AppContext } from "../../utils/Context/AppContext";

const StyledPanel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 100%;
  width: 80vw;
  margin: 2em 0;
  padding: 1em;
  border-radius: 1em;
  background: #101010;
  box-shadow: inset 0 0 40px 1px #000;
  color: rgba(255, 255, 255, 0.8);

  h1 {
    margin: 1em 0;
  }
  .textarea {
    margin: 0 1%.5;
  }
`;

function MainStoryPanel() {
  const {
    storyTextContent,
    setStoryTextContent,
    storyTitleContent,
    setStoryTitleContent,
  } = useContext(AppContext);

  return (
    <StyledPanel>
      <div>
        <h1>{storyTitleContent}</h1>
        <div className="textarea">{storyTextContent}</div>
      </div>
      <OptionsPanel />
    </StyledPanel>
  );
}

export default MainStoryPanel;
