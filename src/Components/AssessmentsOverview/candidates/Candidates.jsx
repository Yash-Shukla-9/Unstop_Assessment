import React from "react";
import { styled } from "styled-components";

const Candidate = ({
  heading,
  number,
  title1,
  number2,
  title2,
  number3,
  title3,
  PeopleIcon,
  smallnum1,
  smallnum2,
  smallnum3,
}) => {
  return (
    <Block2>
      <span>{heading}</span>
      <BoxIcon>
        {PeopleIcon && (
          <IconContainer>
            <PeopleIcon className="icon" />
          </IconContainer>
        )}
        {renderInfoBlock(number, title1, smallnum1)}
        {number2 && title2 && renderInfoBlock(number2, title2, smallnum2)}
        {number3 && title3 && renderInfoBlock(number3, title3, smallnum3)}
      </BoxIcon>
    </Block2>
  );
};

const renderInfoBlock = (number, title, smallNum) => (
  <>
    <div>
      <div className="part1">
        <span className="num">{number}</span>
        {smallNum && <span className="active-green">{smallNum}</span>}
      </div>
      <Title className="title">{title}</Title>
    </div>
    {smallNum && <Line></Line>}
  </>
);

export default Candidate;

const IconContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ebe8fd;
  border-radius: 6px;
  .icon {
    color: #6548ee;
    font-size: 20px;
  }
`;

const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Block2 = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  font-size: 14px;
  width: 390px;
  font-style: normal;
  font-weight: 600;
  color: #1c4980;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  border-left: 2px solid #dde5ea;
`;

const Line = styled.div`
  width: 2px;
  height: 35px;
  background-color: #dde5ea;
`;

const Title = styled.div`
  color: #1c4980;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 3px;
`;
