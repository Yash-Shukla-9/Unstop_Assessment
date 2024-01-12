import { styled } from "styled-components";
import { BiMobile } from "react-icons/bi";
import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";

const Navbar = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div>
      <Nav>
        <Block1>
          <div>
            <div className="Dashopen">
              <img
                src="/segment.png"
                className="dashicon"
                alt="Dashbord"
                onClick={closeModal}
              />
              <span className="text1">Assessment</span>
            </div>
          </div>

          <Line></Line>
          <div>
            <span className="text2">My Assessments</span>
          </div>
        </Block1>
      </Nav>
      <MobileTextview>
        <div className="text3">My Assessments</div>
        <div className="text4">Unstop Assessments</div>
      </MobileTextview>
    </div>
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

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    padding-left: 30px;
    margin: 0;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 40px;
  background-color: lightgray;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Block1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .Dashopen {
    display: flex;
    align-items: center;
    gap: 10px;

    .dashicon {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  .text1 {
    font-size: 22px;
    font-weight: 600;
    color: #1c4984;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .text2 {
    font-size: 15px;
    font-weight: 600;
    color: #0073e6;
    padding-bottom: 22px;

    border-bottom: 3.5px solid #0073e6;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const MobileTextview = styled.div`
  display: flex;
  height: 50px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: white;
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }

  .text3 {
    border-bottom: 2px solid #0073e6;
    background: #fff;
    color: #0073e6;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 10px 0;
  }
  .text4 {
    border-bottom: 2px solid #f6f8fa;
    background: #fff;
    color: #3e6493;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 10px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    /* justify-content: start; */
  }
`;
