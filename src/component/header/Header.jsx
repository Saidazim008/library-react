import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(244, 247, 254, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 20px;
`;

const SearchBar = styled.div`
  background: white;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  input { border: none; outline: none; margin-left: 10px; width: 100%; }
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 5px 5px 5px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4318ff 0%, #b094ff 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Header = ({ user, avatar, role }) => {
  return (
    <HeaderBox>
      <div>
        <p style={{ color: '#707eae', fontSize: '14px' }}>Sahifa / Dashboard</p>
        <h2 style={{ color: '#2b3674', fontSize: '28px', fontWeight: '700' }}>Asosiy Panel</h2>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <SearchBar>
          <span>🔍</span>
          <input type="text" placeholder="Search..." />
        </SearchBar>
        <ProfileArea>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: '#2b3674' }}>{user}</p>
            <p style={{ fontSize: '12px', color: '#a3aed0' }}>{role === 'director' ? 'Director' : 'Manager'}</p>
          </div>
          <Avatar>{avatar}</Avatar>
        </ProfileArea>
      </div>
    </HeaderBox>
  );
};

export default Header;