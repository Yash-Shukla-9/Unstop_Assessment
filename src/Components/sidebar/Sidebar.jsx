import { styled } from "styled-components";

const Sidebar = () => {
  return (
    <MainConatiner>
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

        <img src="/admin_meds.png" alt="dashboard" className="icon" />
        <span>
          Round <br />
          Status
        </span>
      </Block2>
    </MainConatiner>
  );
};

export default Sidebar;

const MainConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 990px;
  padding: 16px 20px 20px 30px;
  color: #1c4984;
  background-color: #ffffff;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
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
