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
              <svg
                onClick={closeModal}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
              >
                <rect width="40" height="40" fill="#F2F8FE" rx="20"></rect>
                <g clipPath="url(#clip0_0_955)">
                  <path
                    fill="#1C4980"
                    d="M23.75 27.5h-15V25h15v2.5zm7.5-15V15H8.75v-2.5h22.5zm-7.5 8.75h-15v-2.5h15v2.5z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_0_955">
                    <path
                      fill="#fff"
                      d="M0 0H30V30H0z"
                      transform="matrix(-1 0 0 1 35 5)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
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
        <div className="text-box">
          <div className="text3">My Assessments</div>
          <div className="bottom-line"></div>
        </div>

        <div className="text-box">
          <div className="text4">Unstop Assessments</div>
          <div className="bottom-line2"></div>
        </div>
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
  gap: 10px;
  background-color: white;
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .text3 {
    background: #fff;
    color: #0073e6;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 10px 0;
  }

  .bottom-line {
    /* width: 208px; */
    width: 100%;
    height: 2px;
    background-color: #0073e6;
  }

  .bottom-line2 {
    /* width: 208px; */
    width: 100%;
    height: 2px;
    background-color: #f6f8fa;
  }

  .text4 {
    background: #fff;
    color: #3e6493;
    font-size: 16px;
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
