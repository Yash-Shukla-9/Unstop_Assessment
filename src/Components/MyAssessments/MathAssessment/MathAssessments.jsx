import React from "react";
import { styled } from "styled-components";

const MathAssessments = () => {
  return (
    <MainContainer>
      <IconBox>
        <div>
          <img src="/work.png" alt="workicon" className="iconimage" />
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="17"
            viewBox="0 0 5 17"
            fill="none"
          >
            <path
              d="M2.41667 4.66667C3.56726 4.66667 4.5 3.73393 4.5 2.58333C4.5 1.43274 3.56726 0.5 2.41667 0.5C1.26607 0.5 0.333334 1.43274 0.333334 2.58333C0.333334 3.73393 1.26607 4.66667 2.41667 4.66667Z"
              fill="#1C4980"
            />
            <path
              d="M2.41667 10.5C3.56726 10.5 4.5 9.56726 4.5 8.41667C4.5 7.26607 3.56726 6.33333 2.41667 6.33333C1.26607 6.33333 0.333334 7.26607 0.333334 8.41667C0.333334 9.56726 1.26607 10.5 2.41667 10.5Z"
              fill="#1C4980"
            />
            <path
              d="M2.41667 16.3333C3.56726 16.3333 4.5 15.4006 4.5 14.25C4.5 13.0994 3.56726 12.1667 2.41667 12.1667C1.26607 12.1667 0.333334 13.0994 0.333334 14.25C0.333334 15.4006 1.26607 16.3333 2.41667 16.3333Z"
              fill="#1C4980"
            />
          </svg>
        </div>
      </IconBox>
      <Title>
        <p className="heading">Math Assessment</p>
        <div className="flex">
          <div className="flex-title1">Job</div>
          <Line></Line>
          <div>
            <div className="calendar">
              <div>
                <img src="/calendar_today.png" alt="" />
              </div>
              <p className="date">20 Apr 2023</p>
            </div>
          </div>
        </div>

        <DashedLine>
          <div className="line"></div>
        </DashedLine>

        <Part3>
          <div className="box1">
            <div className="num-title">
              00
              <div className="duration">Duration</div>
            </div>
            <div className="num-title">
              00
              <div className="duration">Questions</div>
            </div>
          </div>
          <Sharebox>
            <Share>
              <img src="/public/link.png" alt="link icon" />
              <div>Share</div>
            </Share>
            <div className="circle-parent">
              <div className="share-circle">Lp</div>
              <div className="share-circle">Lp</div>
              <div className="share-circle">Lp</div>
            </div>
          </Sharebox>
        </Part3>
      </Title>
    </MainContainer>
  );
};

export default MathAssessments;

const MainContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  /* flex: 1 0 0; */
  width: 388px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #dadce0;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  .iconimage {
    width: 50px;
    height: 50px;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 20px;
  border-left: 2px solid #dadce0;
`;
const DashedLine = styled.div`
  padding-top: 16px;
  width: 100%;
  .line {
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    border: 1px dashed #dadce0;
    flex: 1 0 0;
    align-self: stretch;
  }
`;

const Part3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: start;
    gap: 65px;
  }

  .box1 {
    display: flex;
    margin-top: 10px;
    align-items: flex-start;
    gap: 10px;

    .num-title {
      color: #1c4980;
      font-size: 14px;
      font-weight: 600;

      .duration {
        color: #1c4980;
        font-size: 12px;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }
`;

const Title = styled.div`
  .heading {
    color: #1c4980;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;

    .flex-title1 {
      font-weight: 600;
      line-height: 140%;
    }
  }

  .calendar {
    display: flex;
    gap: 10px;

    .date {
      color: #8da4bf;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

const Sharebox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .circle-parent {
    display: flex;
    position: relative;
    top: -15px;
    left: -10px;
    margin: 0 10px;
  }

  .share-circle {
    display: flex;
    position: absolute;
    &:nth-child(2) {
      left: 13px;
      background-color: #3079e1;
    }
    &:nth-child(3) {
      left: 25px;
      background-color: #e9407a;
    }
    width: 30px;
    height: 30px;
    padding: 5px 6px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    border-radius: 32px;
    border: 1px solid #fff;
    background-color: #6548ee;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
  }
`;

const Share = styled.div`
  display: flex;
  height: 30px;
  padding: 2px 8px 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 50px;
  border: 1px solid #1c4980;
  color: #1c4980;
  font-size: 14px;
  font-weight: 500;
`;
