import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 280px;
  background: white;
  min-height: 100vh;
  padding: 30px 20px;
  border-right: 1px solid #f4f7fe;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #4318ff;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 800;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  text-decoration: none;
  color: #a3aed0;
  font-weight: 500;
  border-radius: 15px;
  margin-bottom: 5px;
  transition: 0.3s;
  
  &.active {
    background: #f4f7fe;
    color: #2b3674;
    font-weight: 700;
    border-right: 4px solid #4318ff;
  }
  &:hover { background: #f8faff; }
`;

const Sidebar = ({ role, onLogout }) => {
  return (
    <SidebarWrapper>
      <Logo>CRM SOFT</Logo>
      <div style={{ flex: 1 }}>
        <MenuLink to="/">🏠 Dashboard</MenuLink>
        <MenuLink to="/students">👥 Talabalar</MenuLink>
        <MenuLink to="/new">➕ Yangi Qo'shish</MenuLink>
        <MenuLink to="/settings">⚙️ Settings</MenuLink>
        
        {role === 'director' && (
          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
            <p style={{ fontSize: '12px', color: '#a3aed0', marginBottom: '10px', paddingLeft: '20px' }}>DIRECTOR PANELI</p>
            <MenuLink to="/reports">📊 Statistika</MenuLink>
            <MenuLink to="/users">🔐 Foydalanuvchilar</MenuLink>
          </div>
        )}
      </div>
      <MenuLink to="/login" onClick={onLogout} style={{ color: '#ee5d50' }}>
        🚪 Tizimdan Chiqish
      </MenuLink>
    </SidebarWrapper>
  );
};

export default Sidebar;