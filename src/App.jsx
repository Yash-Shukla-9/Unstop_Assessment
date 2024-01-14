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
    position: sticky;
    top: 0;
    height: 100vh;
    @media (max-width: 768px) {
      flex: 0;
    }
  }
  .content {
    flex: 8.5;
    @media (max-width: 768px) {
      flex: 1;
    }
  }
`;
