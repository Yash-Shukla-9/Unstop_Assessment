import { styled, keyframes } from "styled-components";
import AssessmentsOverview from "../AssessmentsOverview/AssessmetsOverview";
import Navbar from "../navbar/Navbar";
import NewAssessment from "../MyAssessments/NewAssessment/NewAssessment";
import MathAssessments from "../MyAssessments/MathAssessment/MathAssessments";
import { useState } from "react";
import FilterList from "../Modal/FilterListModal/FilterList";

const FilterWrapper = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.show ? "500px" : "0")};
  transition: max-height 0.5s ease-in-out;

  & > div {
    transition: opacity 0.5s ease-in-out;
    opacity: ${(props) => (props.show ? "1" : "0")};
  }
`;
const Right = () => {
  const [filterlist, setFillterlist] = useState(false);

  const OpenFilterModal = () => {
    setFillterlist(!filterlist);
  };

  return (
    <div>
      <Navbar />
      <Content>
        <div className="Assessment">
          <AssessmentsOverview />
        </div>

        <FilterWrapper show={filterlist}>
          <FilterList />
        </FilterWrapper>

        <div>
          <MyAssessmentBox>
            <h2 className="sec-heading">My Assessment</h2>
            <div className="iconBox">
              <div className="iconbox ">
                <img src="/search.png" alt="search" className="icon1" />
              </div>

              <div className="iconbox">
                <img
                  src="/filter_list_alt.png"
                  alt="search"
                  className="icon2"
                />
              </div>

              <div className="icon3box">
                <img
                  src="/bar_chart.jpg"
                  alt="search"
                  className="icon3"
                  onClick={OpenFilterModal}
                />
              </div>
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
  padding: 20px 10px;

  margin: 0 0.5rem;
  @media (max-width: 768px) {
    margin: 0 0;
  }

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
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const AssessmentSection = styled.div`
  display: flex;

  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
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

  .iconbox {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background: #fff;
  }

  .icon3box {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 1px solid #0073e6;
    background: #f2f8fe;
  }
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
