import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { GlobalStyle, AppLayout, MainContainer } from './style/style.component';
import Sidebar from './component/saidbar/Saidbar';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import Login from './component/login/Login';
import Talabalar from './pages/talabalar/Talabalar';
import YangiSahifa from './component/yangisahifa/Yangisahifa';
import About from './pages/about/About';
import Footer from './component/footer/Footer';

const INITIAL_DB = {
  students: [
    { id: 1, name: "Ali Valiyev", group: "Frontend-01", phone: "901234567", debt: 150000, status: 'Active', joinedDate: '2026-01-10' },
    { id: 2, name: "Sardor Komilov", group: "Backend-05", phone: "931112233", debt: 0, status: 'Active', joinedDate: '2026-02-15' },
    { id: 3, name: "Madina Karimoiva", group: "Graphic Design", phone: "945556677", debt: 200000, status: 'Active', joinedDate: '2026-03-01' }
  ],
  teachers: [
    { id: 1, name: "Saidazimxon", science: "FullStack", phone: "998887766", salary: 5000000 },
    { id: 2, name: "Jasur Akramov", science: "English", phone: "901112233", salary: 3500000 }
  ],
  groups: [
    { id: 1, name: "Frontend-01", teacher: "Saidazimxon", time: "14:00", days: "Toq kunlar" },
    { id: 2, name: "Backend-05", teacher: "Jasur Akramov", time: "10:00", days: "Juft kunlar" }
  ],
  payments: [
    { id: 1, studentId: 1, studentName: "Ali Valiyev", amount: 500000, date: "2026-05-10", method: 'Naqd' },
    { id: 2, studentId: 2, studentName: "Sardor Komilov", amount: 450000, date: "2026-05-12", method: 'Karta' }
  ]
};

function App() {
  const [db, setDb] = useState(() => {
    const saved = localStorage.getItem('crm_db');
    return saved ? JSON.parse(saved) : INITIAL_DB;
  });

  const [auth, setAuth] = useState({ isLogged: false, user: '', role: '', avatar: '' });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('crm_db', JSON.stringify(db));
  }, [db]);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123') {
      setAuth({ isLogged: true, user: 'Saidazimxon', role: 'director', avatar: 'S' });
      navigate('/');
      return true;
    } else if (username === 'manager' && password === '111') {
      setAuth({ isLogged: true, user: 'Manager', role: 'manager', avatar: 'M' });
      navigate('/');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setAuth({ isLogged: false, user: '', role: '', avatar: '' });
    navigate('/login');
  };

  const syncData = (type, payload, action = 'add') => {
    if (action === 'delete' && auth.role !== 'director') {
      alert("Faqat Director o'chirishi mumkin!");
      return;
    }

    setDb(prev => {
      const currentList = prev[type] || [];
      let updatedList;
      if (action === 'add') {
        updatedList = [...currentList, { ...payload, id: Date.now() }];
      } else if (action === 'delete') {
        updatedList = currentList.filter(item => item.id !== payload);
      } else if (action === 'edit') {
        updatedList = currentList.map(item => item.id === payload.id ? payload : item);
      }
      return { ...prev, [type]: updatedList };
    });
  };

  return (
    <>
      <GlobalStyle />
      {auth.isLogged ? (
        <AppLayout>
          <Sidebar role={auth.role} onLogout={handleLogout} />
          <MainContainer>
            <Header user={auth.user} avatar={auth.avatar} role={auth.role} />
            <Routes>
              <Route path="/" element={<Home db={db} role={auth.role} />} />
              <Route path="/students" element={<Talabalar data={db.students} role={auth.role} onAction={syncData} />} />
              <Route path="/new" element={<YangiSahifa onAdd={syncData} groups={db.groups} />} />
              <Route path="/settings" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </MainContainer>
        </AppLayout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;