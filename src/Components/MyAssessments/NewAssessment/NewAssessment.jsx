import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { styled } from "styled-components";
import AssessmentModal from "../../Modal/Assessment Modal/AssessmentModal";
const NewAssessment = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <MainAssessment>
      <div className="circle" onClick={openModal}>
        <FaPlus className="icon" />
      </div>
      <TextBox>
        <div>New Assessment</div>
        <div className="child-text">
          <p>From here can add questions of multiple types like</p>
          <p>MCQs, subjective (text or paragraph)!</p>
        </div>
      </TextBox>

      {modal && (
        <div className="modal">
          <AssessmentModal modal={modal} setModal={setModal} />
        </div>
      )}
    </MainAssessment>
  );
};

export default NewAssessment;

const MainAssessment = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  border: 1px dashed #dadce0;
  background-color: #f6f8fa;
  width: 385px;
  height: 215px;
  @media (max-width: 900px) {
    width: 100%;
  }

  .modal {
    position: absolute;
    left: 100px;
  }

  .circle {
    display: flex;
    width: 70px;
    height: 70px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 72px;
    background: #fff;

    .icon {
      width: 30px;
      height: 30px;
      color: #0073e6;
    }
  }
`;

const TextBox = styled.div`
  text-align: center;
  /* font-family: Inter; */
  font-size: 18px;

  font-weight: 500;
  line-height: normal;
  color: #1c4980;

  .child-text {
    color: #1c4980;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    padding-top: 12px;
  }
`;
