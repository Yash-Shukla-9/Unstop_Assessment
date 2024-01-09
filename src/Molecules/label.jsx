import React from "react";
import { styled } from "styled-components";

const Label = ({ name }) => {
  return (
    <LabelHead>
      <div className="title">{name}</div>
    </LabelHead>
  );
};

export default Label;

const LabelHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  color: #1c4980;
  margin: 10px 0;

  .title {
    color: #1c4980;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
