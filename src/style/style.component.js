import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
  body { background-color: #f4f7fe; color: #2b3674; }
`;

export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  flex: 1;
  padding: 25px;
  overflow-y: auto;
`;

export const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin-bottom: 20px;
  border-left: 5px solid ${props => props.accent || '#4318ff'};
`;

export const TopMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 25px;
`;

export const NavBox = styled.div`
  background: white;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #e0e5f2;
  &:hover { background: #4318ff; color: white; }
  h4 { margin-top: 5px; font-size: 14px; }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  th { text-align: left; padding: 12px; color: #a3aed0; font-size: 12px; text-transform: uppercase; }
  td { padding: 12px; border-top: 1px solid #f4f7fe; font-weight: 600; }
`;

export const ActionBtn = styled.button`
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  background: ${props => props.variant === 'danger' ? '#ee5d50' : '#4318ff'};
  color: white;
  cursor: pointer;
  margin-right: 5px;
  font-size: 12px;
`;

export const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 10px;
  background: ${props => props.status === 'Kelgan' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.status === 'Kelgan' ? '#05cd99' : '#ee5d50'};
`;

// LOGIN UCHUN QO'SHIMCHA (Xatolik bermasligi uchun):
export const InputField = styled.input`
  width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 12px;
  border: 1px solid #e0e5f2; outline: none; &:focus { border-color: #4318ff; }
`;

export const StyledButton = styled(ActionBtn)`
  width: 100%; padding: 15px; font-weight: bold; margin-top: 10px;
`;