import { styled } from "styled-components";
import { RxCross2 } from "react-icons/rx";
const skillslist = [
  { title: "UI/UX and Design" },
  { title: "No of Question" },
  { title: "Web Development" },
  { title: "UI/UX and Design" },
  { title: "Web Development" },
];

const Skills = () => {
  return (
    <Skillbox>
      <div className="wrapper">
        {skillslist.map((item, index) => {
          return (
            <div className="skillcontainer" key={index}>
              <div className="title">{item.title}</div>
              <RxCross2 className="icon" />
            </div>
          );
        })}
      </div>
      <Inputbox>
        <input type="text" placeholder="Type here" className="inputfeild" />
      </Inputbox>
    </Skillbox>
  );
};

export default Skills;

const Skillbox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;

  .wrapper {
    display: flex;
    padding: 16px;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid #dde5ea;
  }

  .skillcontainer {
    display: flex;
    padding: 6px 8px 6px 10px;
    justify-content: flex-end;
    align-items: center;
    gap: 2px;
    border-radius: 22px;
    background: #ddedff;

    .title {
      display: flex;
      align-items: center;
      color: #1c4980;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }

    .icon {
      width: 18px;
      height: 18px;
    }
  }
`;

const Inputbox = styled.div`
  display: flex;
  height: 50px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #dde5ea;
  border-top: 0;
  .inputfeild {
    outline: none;
    border: none;
  }
`;
