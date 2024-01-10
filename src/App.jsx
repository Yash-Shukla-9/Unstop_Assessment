import Right from "./Components/RightConatiner/Right";
import Sidebar from "./Components/sidebar/Sidebar";
import { styled } from "styled-components";
import { ModalProvider } from "./Context/ModalContext";
const App = () => {
  return (
    <ModalProvider>
      <Main>
        <div className="menu">
          <Sidebar />
        </div>
        <div className="content">
          <Right />
        </div>
      </Main>
    </ModalProvider>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  .menu {
    flex: 1;
  }
  .content {
    flex: 8.5;
  }
`;
