import { styled } from "styled-components";

const TotalBlock = ({ heading, number, icons: Micon }) => {
  return (
    <Block1>
      <span>{heading}</span>
      <BoxIcon>
        <IconConatiner>
          <Micon className="icon" />
        </IconConatiner>
        <span className="num">{number}</span>
      </BoxIcon>
    </Block1>
  );
};

export default TotalBlock;

const IconConatiner = styled.div`
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

const Block1 = styled.div`
  display: flex;

  /* width: 172px; */
  padding: 16px 20px;
  flex-direction: column;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #1c4980;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;

  @media (max-width: 768px) {
    border-left: 2px solid #dde5ea;
  }

  .num {
    color: #1c4980;
    font-size: 20px;
    font-weight: 700;
  }
`;
