import Right from "./Components/RightConatiner/Right";
import Sidebar from "./Components/sidebar/Sidebar";
import { styled } from "styled-components";
const App = () => {
  return (
    <Main>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="content">
        <Right />
      </div>
    </Main>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  .menu {
    flex: 1;
  }
  .content {
    flex: 7;
  }
`;
