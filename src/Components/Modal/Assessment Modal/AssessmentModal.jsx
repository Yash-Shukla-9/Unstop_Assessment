import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import SelectBox from "../../../Molecules/SelectBox";
import Label from "../../../Molecules/label";
import Skills from "../../../Molecules/Skills";

const AssessmentModal = ({ setModal }) => {
  const [assessmentName, setAssessmentName] = useState("");

  const handleInputChange = (e) => {
    setAssessmentName(e.target.value);
  };

  return (
    <Main>
      <ModalContent>
        <div className="headbox">
          <h3 className="title">Create new assessment</h3>
          <div className="iconbox">
            <RxCross2 className="icon2" onClick={() => setModal(false)} />
          </div>
        </div>
        <Line />
        <InputBox>
          <div className="inputlabel">
            <Label name="Name of the assessment" />
            <input
              type="text"
              placeholder="Type Here"
              value={assessmentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="selectcontainer">
            <div className="">
              <Label name="Purpose of the test is" />
              <SelectBox />
            </div>
            <div>
              <Label name="Description" />
              <SelectBox />
            </div>
          </div>
          <div className="skills">
            <Label name="Skills" />
            <Skills />
          </div>
          <div className="inputlabel">
            <Label name="Duratin of assessment" />
            <input
              type="text"
              placeholder="HH:MM:SS"
              value={assessmentName}
              onChange={handleInputChange}
            />
          </div>
        </InputBox>
        <Button>
          <button className="btn">save</button>
        </Button>
      </ModalContent>
    </Main>
  );
};

export default AssessmentModal;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100%;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  animation: slideIn 0.3s ease forwards;
  width: 600px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .iconbox {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 60px;
    background: #fbebea;
  }

  .headbox {
    display: flex;
    height: 70px;
    padding: 30px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid #dadce0;
    background: #fff;

    .title {
      color: #1c4980;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: normal;
    }
  }

  .icon2 {
    font-size: 20px;
    cursor: pointer;
    color: #d63500;
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
  }

  .inputlabel {
    display: flex;
    flex-direction: column;
    width: 100%;

    & input {
      display: flex;
      padding: 20px 30px;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      align-self: stretch;
      border-radius: 8px;
      border: 1px solid #dadce0;
      background: #fff;
      width: 100%;
    }
  }
`;

const Line = styled.div`
  /* Styles for Line component */
`;

const InputBox = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 20px; */
  align-self: stretch;
  width: 100%;

  .selectcontainer {
    width: 100%;
  }

  .skills {
    width: 100%;
  }
`;

const Button = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 0px 0px 8px 8px;
  border-right: 1px solid #dadce0;
  border-bottom: 1px solid #dadce0;
  border-left: 1px solid #dadce0;
  background: #fff;
  box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.09);

  .btn {
    display: flex;
    height: 40px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 8px;
    background-color: #0073e6;
    color: white;
    border: none;
  }
`;
