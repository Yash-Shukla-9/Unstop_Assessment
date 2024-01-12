import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ModalContext } from "../../Context/ModalContext";
import MobileSidebar from "./MobileviewSidebar";

const Sidebar = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {isDesktopSidebarOpen && (
        <MainContainer>
          <div className="main">
            <Menu>
              <span>Menu</span>
              <div className="Cutbox">
                <img
                  src="/cut.png"
                  alt="dashboard"
                  className="cuticon"
                  onClick={closeModal}
                />
              </div>
            </Menu>

            <Blocks1>
              <img src="/dashboard.png" alt="dashboard" className="icon" />
              <span>Dashboard</span>
            </Blocks1>

            <Active>
              <img src="/note_alt.png" alt="dashboard" className="icon" />
              <span>Assessment</span>
            </Active>

            <Blocks1>
              <img src="/quiz.png" alt="dashboard" className="icon" />
              <span>My Library</span>
            </Blocks1>

            <Block2>
              <Admin>Admin</Admin>
              <Blocks12>
                <img src="/admin_meds.png" alt="dashboard" className="icon" />
                <span>Round Status</span>
              </Blocks12>
            </Block2>
          </div>
        </MainContainer>
      )}

      {
        <Mobileview>
          <MobileSidebar closeModal={closeModal} />
        </Mobileview>
      }
    </>
  );
};

export default Sidebar;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 990px;
  padding: 16px 20px 20px 30px;
  color: #1c4984;
  background-color: white;

  @media (max-width: 768px) {
    position: absolute;
    width: 230px;
    height: 100vh;
    padding: 40px 20px 10px 20px;
    align-items: flex-start;
    gap: 10px;
    background: #f2f8fe;
  }

  .icon {
    font-size: 20px;
  }
`;

const Blocks1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  font-size: 12px;
  padding: 10px 0px;

  @media (max-width: 768px) {
    height: 50px;
    padding: 10px;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    flex-direction: row;
  }
`;

const Active = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  padding: 10px 0px;
  border-radius: 8px;
  border: 1px solid #0073e6;
  background: #e5f1fc;
  font-size: 12px;
  color: #0073e6;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  .Activeicon {
    font-size: 20px;
    color: #0073e6;
  }
`;

const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin: 10px;
  gap: 16px;
  padding: 10px 20px;
  border-top: 1px dashed lightgray;
  @media (max-width: 768px) {
    height: 50px;
    flex-direction: row-reverse;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
`;

const Blocks12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  font-size: 12px;
  padding: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Admin = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: Red;
  background-color: #ffefea;
  padding: 2px 8px;
  border: 2px solid red;
  border-radius: 20px;
`;

const Menu = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 10px 20px;
  display: none;
  .Cutbox {
  }

  @media (max-width: 768px) {
    display: flex;
  }

  gap: 20px;
  .cuticon {
    cursor: pointer;
  }
`;

const Mobileview = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
