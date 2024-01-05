import { styled } from "styled-components";

const Line = () => {
  return (
    <div>
      <Container>
        <OverviewBox>Item 1</OverviewBox>
        <OverviewBox>Item 2</OverviewBox>
        <OverviewBox>Item 3</OverviewBox>
        <OverviewBox>Item 4</OverviewBox>
      </Container>
      ;
    </div>
  );
};

export default Line;

const OverviewBox = styled.div`
  display: flex;
  border: 2px solid #dde5ea;
  border-radius: 10px;

  &:nth-child(even) {
    border-left: 1px solid #dde5ea;
    background-color: red;
  }
`;

// Example usage in a parent container
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Usage in a component
