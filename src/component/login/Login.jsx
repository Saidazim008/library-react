import React, { useState } from 'react';
import { Card, StyledButton, InputField } from '../../style/style.component';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ user: '', pass: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // Dinamik input o'zgarishi
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // Foydalanuvchi yoza boshlasa xatoni o'chirish
    if (error) setError('');
  };

  const startLogin = () => {
    const { user, pass } = credentials;

    // 1. Validatsiya
    if (!user.trim() || !pass.trim()) {
      setError("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);

    // 2. Kirish simulyatsiyasi (1 sekund kutish)
    setTimeout(() => {
      const isSuccess = onLogin(user, pass);

      if (!isSuccess) {
        setError("Login yoki parol noto'g'ri kiritildi!");
        setCredentials({ user: '', pass: '' }); // Xato bo'lsa tozalash
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #4318ff 0%, #b2a5ff 100%)',
      overflow: 'hidden'
    }}>
      <Card style={{ width: '420px', padding: '50px', textAlign: 'center', border: 'none' }}>
        <h1 style={{ color: '#2B3674', fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>
          Xush Kelibsiz!
        </h1>
        <p style={{ color: '#A3AED0', marginBottom: '35px' }}>
          CRM tizimiga kirish uchun ma'lumotlarni yozing
        </p>

        {/* Xatolik xabari */}
        {error && (
          <div style={{
            color: '#ee5d50',
            background: '#fff5f5',
            padding: '12px',
            borderRadius: '12px',
            marginBottom: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            {error}
          </div>
        )}

        <div style={{ textAlign: 'left' }}>
          <label style={{ color: '#2B3674', fontWeight: '700', fontSize: '14px', marginLeft: '5px' }}>
            Login
          </label>
          <InputField
            name="user"
            placeholder="login kiriting"
            value={credentials.user}
            onChange={handleChange}
            style={{ marginTop: '8px', marginBottom: '20px' }}
          />

          <label style={{ color: '#2B3674', fontWeight: '700', fontSize: '14px', marginLeft: '5px' }}>
            Parol
          </label>
          <InputField
            name="pass"
            type="password"
            placeholder="parol kiriting"
            value={credentials.pass}
            onChange={handleChange}
            style={{ marginTop: '8px' }}
          />
        </div>

        <StyledButton
          disabled={loading}
          onClick={startLogin}
          style={{ width: '100%', height: '55px', marginTop: '25px' }}
        >
          {loading ? 'Tekshirilmoqda...' : 'Tizimga Kirish'}
        </StyledButton>

        <p style={{ marginTop: '25px', color: '#A3AED0', fontSize: '12px' }}>
          Parolni unutdingizmi? Administrator bilan bog'laning.
        </p>
      </Card>
    </div>
  );
};

export default Login;