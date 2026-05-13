import React, { useState } from 'react';
import { Card, ActionBtn } from '../../style/style.component';
import styled from 'styled-components';

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f4f7fe;
`;

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ maxWidth: '700px' }}>
      <Card accent="#4318ff">
        <h3>⚙️ Tizim Sozlamalari (Settings)</h3>

        <SettingRow>
          <div>
            <p style={{ fontWeight: 'bold' }}>Dark Mode</p>
            <p style={{ fontSize: '12px', color: '#a3aed0' }}>Tizim interfeysini qora rangga o'tkazish</p>
          </div>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </SettingRow>

        <SettingRow>
          <div>
            <p style={{ fontWeight: 'bold' }}>Profil ma'lumotlari</p>
            <p style={{ fontSize: '12px', color: '#a3aed0' }}>Ism, Familiya va Avatar</p>
          </div>
          <ActionBtn>Tahrirlash</ActionBtn>
        </SettingRow>

        <SettingRow>
          <div>
            <p style={{ fontWeight: 'bold' }}>Xavfsizlik</p>
            <p style={{ fontSize: '12px', color: '#a3aed0' }}>Parolni yangilash</p>
          </div>
          <ActionBtn variant="danger">Yangilash</ActionBtn>
        </SettingRow>

        <div style={{ marginTop: '30px', textAlign: 'center', color: '#a3aed0' }}>
          <p>Version: 1.0.4 - Official CRM</p>
          <p>Developed by Saidazimxon Soft Group</p>
        </div>
      </Card>
    </div>
  );
};

export default About;