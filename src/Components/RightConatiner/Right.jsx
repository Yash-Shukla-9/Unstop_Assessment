import { styled } from "styled-components";
import AssessmentsOverview from "../AssessmentsOverview/AssessmetsOverview";
import Navbar from "../navbar/Navbar";
import NewAssessment from "../MyAssessments/NewAssessment/NewAssessment";
import MathAssessments from "../MyAssessments/MathAssessment/MathAssessments";
import { useState } from "react";
const Right = () => {
  const [filterlist, setFillterlist] = useState("");

  return (
    <div>
      <Navbar />
      <Content>
        <div className="Assessment">
          <AssessmentsOverview />
        </div>
        <div>
          <MyAssessmentBox>
            <h2 className="sec-heading">My Assessment</h2>
            <div className="iconBox">
              <img src="/public/search.png" alt="search" className="icon1" />
              <img
                src="/public/filter_list_alt.png"
                alt="search"
                className="icon2"
              />
              <img src="/public/bar_chart.png" alt="search" className="icon3" />
            </div>
          </MyAssessmentBox>
          <AssessmentSection>
            <NewAssessment />
            <MathAssessments />
            <MathAssessments />
            <MathAssessments />
            <MathAssessments />
            <MathAssessments />
            <MathAssessments />
          </AssessmentSection>
        </div>
      </Content>
    </div>
  );
};

export default Right;

const Content = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 0 0.5rem;
  .Assessment {
    @media (max-width: 768px) {
      display: none;
      margin: 0 0;
      padding: 20px 15px;
    }
  }

  .sec-heading {
    padding: 15px;
    color: #1c4980;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const AssessmentSection = styled.div`
  display: flex;
  width: 1224px;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 20px 15px;
    align-items: flex-start;
    gap: 20px;
  }
`;

const MyAssessmentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .iconBox {
    display: flex;
    align-items: center;
    gap: 10px;
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .icon1 {
    width: 22px;
    height: 22px;
  }
  .icon1 {
    width: 24px;
    height: 24px;
  }

  .icon3 {
    width: 16px;
    height: 16px;
  }
`;
