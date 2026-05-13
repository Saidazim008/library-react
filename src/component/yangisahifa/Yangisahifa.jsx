import React, { useState } from 'react';
import { Card, ActionBtn } from '../../style/style.component';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: 20px;
  label { display: block; margin-bottom: 8px; font-weight: 600; color: #2b3674; }
  input, select { 
    width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e0e5f2; outline: none;
    &:focus { border-color: #4318ff; }
  }
`;

const YangiSahifa = ({ onAdd, groups }) => {
  const [type, setType] = useState('student'); // student, group, payment
  const [formData, setFormData] = useState({});

  const handleSave = () => {
    if (!formData.name && !formData.amount) return alert("Ma'lumotlarni to'ldiring!");
    onAdd(type === 'student' ? 'students' : type === 'group' ? 'groups' : 'payments', formData);
    alert("Muvaffaqiyatli saqlandi!");
    setFormData({});
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <ActionBtn onClick={() => setType('student')} style={{ opacity: type === 'student' ? 1 : 0.5 }}>Talaba Qo'shish</ActionBtn>
        <ActionBtn onClick={() => setType('group')} style={{ opacity: type === 'group' ? 1 : 0.5 }}>Guruh Ochish</ActionBtn>
        <ActionBtn onClick={() => setType('payment')} style={{ opacity: type === 'payment' ? 1 : 0.5 }}>To'lov Qabul Qilish</ActionBtn>
      </div>

      <Card accent={type === 'payment' ? '#05cd99' : '#4318ff'}>
        <h3>{type === 'student' ? 'Yangi Talaba Formasi' : type === 'group' ? 'Yangi Guruh Formasi' : 'To\'lov Formasi'}</h3>
        <hr style={{ margin: '20px 0', border: '0.1px solid #f4f7fe' }} />

        {type === 'student' && (
          <>
            <FormGroup>
              <label>Ism Sharif*</label>
              <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <label>Guruhni Tanlang*</label>
              <select onChange={(e) => setFormData({...formData, group: e.target.value})}>
                <option value="">Tanlang...</option>
                {groups.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
              </select>
            </FormGroup>
            <FormGroup>
              <label>Telefon Raqam</label>
              <input type="text" placeholder="+998" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </FormGroup>
          </>
        )}

        {type === 'payment' && (
          <>
            <FormGroup>
              <label>Talaba Ismi*</label>
              <input type="text" onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <label>To'lov Summasi*</label>
              <input type="number" onChange={(e) => setFormData({...formData, amount: Number(e.target.value)})} />
            </FormGroup>
            <FormGroup>
              <label>To'lov Usuli</label>
              <select onChange={(e) => setFormData({...formData, method: e.target.value})}>
                <option value="Naqd">Naqd</option>
                <option value="Karta">Karta (P2P)</option>
                <option value="Click">Click / Payme</option>
              </select>
            </FormGroup>
          </>
        )}

        <ActionBtn onClick={handleSave} style={{ width: '100%', padding: '15px' }}>
          Tizimga Saqlash
        </ActionBtn>
      </Card>
    </div>
  );
};

export default YangiSahifa;