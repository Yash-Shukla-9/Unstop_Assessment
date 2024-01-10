import { styled } from "styled-components";
import TotalBlock from "./TotalBlock/TotalBlock";
import { MdOutlineViewAgenda } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";
import Candidate from "./candidates/Candidates";

const AssessmentsOverview = () => {
  const cardData = [
    {
      type: "TotalBlock",
      heading: "Total Assessment",
      number: 34,
      icons: MdOutlineViewAgenda,
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
      PeopleIcon: MdPeopleAlt,
      bg: "red",
      color: "white",
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
      PeopleIcon: TbWorldShare,
      bg: "blue",
      color: "yellow",
    },
    {
      type: "TotalBlock",
      heading: "Total Purpose",
      number: 11,
      icons: MdOutlineViewAgenda,
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
    return <TotalBlock {...props} />;
  } else if (type === "Candidate") {
    return <Candidate {...props} />;
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
`;

const OverviewBox = styled.div`
  display: flex;
  border: 2px solid #dde5ea;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default AssessmentsOverview;
