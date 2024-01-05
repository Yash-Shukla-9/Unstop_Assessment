import { styled } from "styled-components";
import AssessmentsOverview from "../AssessmentsOverview/AssessmetsOverview";
import Navbar from "../navbar/Navbar";
import NewAssessment from "../MyAssessments/NewAssessment/NewAssessment";
import MathAssessments from "../MyAssessments/MathAssessment/MathAssessments";
const Right = () => {
  return (
    <div>
      <Navbar />
      <Content>
        <AssessmentsOverview />
        <div>
          <h2 className="sec-heading">My Assessment</h2>
          <AssessmentSection>
            <NewAssessment />
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

  .sec-heading {
    padding: 15px;
  }
`;

const AssessmentSection = styled.div`
  display: flex;
  width: 1224px;
  align-items: flex-start;
  gap: 30px;
`;
