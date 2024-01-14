import { styled } from "styled-components";
import TotalBlock from "./TotalBlock/TotalBlock";
import { MdOutlineViewAgenda } from "react-icons/md";
import Candidate from "./candidates/Candidates";
import People from "../../../public/people.png";
import Web from "../../../public/web.png";

const AssessmentsOverview = () => {
  const cardData = [
    {
      type: "TotalBlock",
      heading: "Total Assessment",
      number: 34,
      icons: MdOutlineViewAgenda,
      flex: "15%",
    },
    {
      type: "Candidate",
      heading: "Candidate",
      title1: "Total Candidate",
      title2: "Who Attamped",
      number: "11,145",
      number2: "1,14",
      smallnum1: "+89",
      smallnum2: "+89",
      image: People,
      bg: "red",
      color: "white",
      flex: "15%",
    },
    {
      type: "Candidate",
      heading: "Candidate Source",
      title1: "Email",
      title2: "Social Share",
      number: "11,000",
      number2: "145",
      number3: 145,
      title3: "Unique Link",
      smallnum1: "+89",
      smallnum2: "+89",
      smallnum3: "+89",
      image: Web,
      bg: "blue",
      color: "yellow",
      flex: "15%",
    },
    {
      type: "TotalBlock",
      heading: "Total Purpose",
      number: 11,
      icons: MdOutlineViewAgenda,
      flex: "15%",
    },
  ];

  return (
    <Assessment>
      <Heading>Assessments Overview</Heading>
      <OverviewBox>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </OverviewBox>
    </Assessment>
  );
};

const Card = ({ type, ...props }) => {
  if (type === "TotalBlock") {
    return (
      <div style={{ flex: props.flex }}>
        <TotalBlock {...props} />
      </div>
    );
  } else if (type === "Candidate") {
    return (
      <div style={{ flex: props.flex }}>
        <Border>
          <Candidate {...props} />
        </Border>
      </div>
    );
  }
  return null;
};

const Assessment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 0.5em;
  background-color: #ffffff;
  flex-wrap: wrap;
`;

const Heading = styled.div`
  color: #1c4980;
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
`;

const OverviewBox = styled.div`
  display: flex;
  border: 2px solid #dde5ea;
  border-radius: 10px;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Border = styled.div`
  border: 2px solid #dde5ea;
  /* border-bottom: 0; */
  /* border-top: 0; */
  margin: -1px;
  /* &:nth-child(even) {
    border: 2px solid red;
    border-radius: 0 0px 15px 15px;
  } */
`;

export default AssessmentsOverview;
