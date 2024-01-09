import { styled } from "styled-components";
const SelectBox = () => {
  return (
    <div>
      <Select>
        <option value="disabled" disabled selected hidden>
          Select an option
        </option>
        <option value="job">Traning</option>
        <option value="intern">Jobs</option>
        <option value="intern">Internship</option>\
      </Select>
    </div>
  );
};

export default SelectBox;

const Select = styled.select`
  display: flex;
  height: 50px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #dadce0;
  background: #fff;
  width: 100%;
`;
