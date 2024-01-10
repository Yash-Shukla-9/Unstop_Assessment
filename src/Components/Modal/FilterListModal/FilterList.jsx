import { styled } from "styled-components";
import { MdOutlineViewAgenda } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";
import TotalBlock from "../../AssessmentsOverview/TotalBlock/TotalBlock";
import Candidate from "../../AssessmentsOverview/candidates/Candidates";

const FilterList = () => {
  const cardData = [
    {
      type: "TotalBlock",
      heading: "Total Assessment",
      number: 34,
      icons: MdOutlineViewAgenda,
    },

    {
      type: "TotalBlock",
      heading: "Total Purpose",
      number: 11,
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
  ];

  return (
    <Assessment>
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
      <Totalborder>
        <TotalBlock {...props} />
      </Totalborder>
    );
  } else if (type === "Candidate") {
    return (
      <Candidateborder>
        <Candidate {...props} />
      </Candidateborder>
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

const OverviewBox = styled.div`
  display: flex;
  border: 2px solid #dde5ea;
  border-radius: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Totalborder = styled.div`
  border-bottom: 2px solid #dde5ea;
  border-left: 0;
  width: 100%;
`;

const Candidateborder = styled.div`
  &:nth-child(odd) {
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
  width: 100%;

  border-top: 2px solid #dde5ea;
  border-left: 0;
  border-right: 0;
`;

export default FilterList;
