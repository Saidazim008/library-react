import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopMenuGrid, NavBox, Card, StyledTable, Badge } from '../../style/style.component';

const Home = ({ db, role }) => {
  const navigate = useNavigate();

  const totalStudents = db.students.length;
  const totalRevenue = db.payments.reduce((acc, curr) => acc + curr.amount, 0);
  const activeDebtors = db.students.filter(s => s.debt > 0).length;

  const statistics = [
    { title: 'Jami Talabalar', value: totalStudents, icon: '👥', color: '#4318ff' },
    { title: 'Umumiy Tushum', value: totalRevenue.toLocaleString() + ' UZS', icon: '💰', color: '#05cd99' },
    { title: 'Qarzdorlar', value: activeDebtors + ' kishi', icon: '⚠️', color: '#ee5d50' }
  ];

  return (
    <div>
      {/* SXEMADAGI TOP MENU */}
      <TopMenuGrid>
        <NavBox onClick={() => navigate('/students')}>
          <div style={{ fontSize: '24px' }}>👥</div>
          <h4>Talabalar</h4>
          <p style={{ fontSize: '10px', color: '#a3aed0' }}>Ro'yxat va boshqaruv</p>
        </NavBox>
        <NavBox onClick={() => navigate('/teachers')}>
          <div style={{ fontSize: '24px' }}>👨‍🏫</div>
          <h4>O'qituvchilar</h4>
          <p style={{ fontSize: '10px', color: '#a3aed0' }}>Kadrlar bo'limi</p>
        </NavBox>
        <NavBox onClick={() => navigate('/students?tab=payments')}>
          <div style={{ fontSize: '24px' }}>💵</div>
          <h4>To'lovlar</h4>
          <p style={{ fontSize: '10px', color: '#a3aed0' }}>Moliya nazorati</p>
        </NavBox>
        <NavBox onClick={() => navigate('/groups')}>
          <div style={{ fontSize: '24px' }}>📚</div>
          <h4>Guruhlar</h4>
          <p style={{ fontSize: '10px', color: '#a3aed0' }}>Dars jadvali</p>
        </NavBox>
      </TopMenuGrid>

      {/* SXEMADAGI UMUMIY HISOB */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {statistics.map((stat, index) => (
          <Card key={index} accent={stat.color}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ background: '#f4f7fe', padding: '15px', borderRadius: '50%', fontSize: '20px' }}>{stat.icon}</div>
              <div>
                <p style={{ color: '#a3aed0', fontSize: '14px', fontWeight: '500' }}>{stat.title}</p>
                <h3 style={{ fontSize: '20px', fontWeight: '700' }}>{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* OXIRGI TO'LOVLAR (DIRECTOR NAZORATI) */}
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3>So'nggi To'lovlar</h3>
            <span style={{ color: '#4318ff', cursor: 'pointer', fontWeight: 'bold' }}>Barchasi</span>
          </div>
          <StyledTable>
            <thead>
              <tr><th>Talaba</th><th>Summa</th><th>Sana</th><th>Tur</th></tr>
            </thead>
            <tbody>
              {db.payments.slice(-4).reverse().map(p => (
                <tr key={p.id}>
                  <td>{p.studentName}</td>
                  <td>{p.amount.toLocaleString()}</td>
                  <td>{p.date}</td>
                  <td><Badge status="Kelgan">{p.method}</Badge></td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </Card>

        {/* DIRECTOR QISMI: TEZKOR ESLATMA */}
        <Card accent="#ffb800">
          <h3>Eslatmalar</h3>
          <ul style={{ marginTop: '15px', listStyle: 'none' }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f4f7fe' }}>📌 O'qituvchilar oyligi: 20-may</li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f4f7fe' }}>📌 Yangi guruh ochish: Backend-06</li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f4f7fe' }}>📌 Ijara to'lovi: 1-iyun</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;