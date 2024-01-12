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
          <div>Job</div>
          <Line></Line>
          <div>
            <div className="calendar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                fill="none"
                viewBox="0 0 12 13"
              >
                <path
                  fill="#8DA4BF"
                  d="M7.995 9.123l.865-.857-2.254-2.254V2.846H5.394V6.52l2.601 2.603zM6 12.5c-.83 0-1.607-.156-2.334-.469a6.045 6.045 0 01-3.198-3.2A5.87 5.87 0 010 6.494a5.953 5.953 0 011.756-4.244A6.11 6.11 0 013.668.969 5.87 5.87 0 016.007.5c.83 0 1.61.157 2.34.472a6.049 6.049 0 011.901 1.282c.54.54.966 1.174 1.28 1.903.315.73.472 1.51.472 2.343 0 .83-.156 1.607-.469 2.334a6.117 6.117 0 01-1.28 1.91A5.947 5.947 0 016 12.5zm.007-1.27c1.309 0 2.423-.462 3.343-1.385.92-.924 1.38-2.041 1.38-3.352s-.46-2.426-1.38-3.345C8.43 2.23 7.316 1.77 6.007 1.77c-1.308 0-2.425.46-3.35 1.378-.925.919-1.387 2.034-1.387 3.345 0 1.31.462 2.428 1.387 3.352.925.923 2.042 1.385 3.35 1.385z"
                ></path>
              </svg>
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
              <img src="/link.png" alt="link icon" />
              <div>Share</div>
            </Share>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="30"
              fill="none"
              viewBox="0 0 59 30"
            >
              <rect
                width="29"
                height="29"
                x="0.68"
                y="0.5"
                fill="#6548EE"
                rx="14.5"
              ></rect>
              <rect
                width="29"
                height="29"
                x="0.68"
                y="0.5"
                stroke="#fff"
                rx="14.5"
              ></rect>
              <path
                fill="#fff"
                d="M7.561 20.5V10.318h2.153v8.407h4.365V20.5H7.561zm7.944 0V10.318h4.017c.772 0 1.43.148 1.974.443.543.291.957.697 1.242 1.218.289.517.433 1.113.433 1.79 0 .676-.146 1.272-.438 1.79-.291.516-.714.919-1.267 1.207-.55.289-1.217.433-1.999.433h-2.56v-1.725h2.212c.414 0 .756-.072 1.024-.214.272-.146.474-.346.607-.602.136-.258.204-.555.204-.89 0-.338-.068-.633-.204-.885a1.362 1.362 0 00-.607-.591c-.271-.143-.616-.214-1.034-.214h-1.452V20.5h-2.152z"
              ></path>
              <rect
                width="29"
                height="29"
                x="15.09"
                y="0.5"
                fill="#3079E1"
                rx="14.5"
              ></rect>
              <rect
                width="29"
                height="29"
                x="15.09"
                y="0.5"
                stroke="#fff"
                rx="14.5"
              ></rect>
              <path
                fill="#fff"
                d="M21.971 20.5V10.318h2.153v8.407h4.365V20.5h-6.518zm7.944 0V10.318h4.017c.772 0 1.43.148 1.973.443.544.291.958.697 1.243 1.218.289.517.433 1.113.433 1.79 0 .676-.146 1.272-.438 1.79-.291.516-.714.919-1.267 1.207-.55.289-1.217.433-2 .433h-2.56v-1.725h2.213c.414 0 .756-.072 1.024-.214.272-.146.474-.346.607-.602.136-.258.203-.555.203-.89 0-.338-.068-.633-.203-.885a1.361 1.361 0 00-.607-.591c-.272-.143-.616-.214-1.034-.214h-1.452V20.5h-2.152z"
              ></path>
              <rect
                width="29"
                height="29"
                x="29.5"
                y="0.5"
                fill="#E9407A"
                rx="14.5"
              ></rect>
              <rect
                width="29"
                height="29"
                x="29.5"
                y="0.5"
                stroke="#fff"
                rx="14.5"
              ></rect>
              <path
                fill="#fff"
                d="M36.381 20.5V10.318h2.153v8.407h4.365V20.5H36.38zm7.943 0V10.318h4.017c.773 0 1.43.148 1.974.443.544.291.958.697 1.243 1.218.288.517.433 1.113.433 1.79 0 .676-.146 1.272-.438 1.79-.292.516-.714.919-1.268 1.207-.55.289-1.216.433-1.998.433h-2.56v-1.725h2.212c.414 0 .755-.072 1.024-.214.272-.146.474-.346.606-.602.136-.258.204-.555.204-.89 0-.338-.068-.633-.204-.885a1.361 1.361 0 00-.606-.591c-.272-.143-.617-.214-1.034-.214h-1.452V20.5h-2.153z"
              ></path>
            </svg>
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
  gap: 12px;
  flex: 30%;
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
    width: 100%;
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
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  .box1 {
    display: flex;
    align-items: center;
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
  width: 100%;
  align-items: center;
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
    gap: 6px;
    align-items: center;

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
