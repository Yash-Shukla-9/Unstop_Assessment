import { styled } from "styled-components";
import { BiMobile } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Block1>
          <div>
            <span className="text1">Assessment</span>
          </div>
          <Line></Line>
          <div>
            <span className="text2">My Assessments</span>
          </div>
        </Block1>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  color: #1c4984;
  margin: 0 0.5em;
  background-color: #ffffff;
  padding: 0 20px 0 20px;
  height: 70px;
  border-bottom: 2px solid #dde5ea;
  border-radius: 12px 12px 0 0;
  .icon {
    font-size: 25px;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 40px;
  background-color: lightgray;
`;

const Block1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .text1 {
    font-size: 22px;
    font-weight: 600;
    color: #1c4984;
  }

  .text2 {
    font-size: 15px;
    font-weight: 600;
    color: #0073e6;
    padding-bottom: 22px;
    border-bottom: 3.5px solid #0073e6;
  }
`;
