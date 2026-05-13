import React, { useState } from 'react';
import { Card, StyledTable, ActionBtn, Badge } from '../../style/style.component';

const Talabalar = ({ data, onAction, role }) => {
    const [activeTab, setActiveTab] = useState('list'); // list, attendance, tasks, payments
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', overflowX: 'auto', paddingBottom: '10px' }}>
                <ActionBtn onClick={() => setActiveTab('list')} style={{ background: activeTab === 'list' ? '#4318ff' : '#a3aed0' }}>👥 Talabalar Ro'yxati</ActionBtn>
                <ActionBtn onClick={() => setActiveTab('attendance')} style={{ background: activeTab === 'attendance' ? '#4318ff' : '#a3aed0' }}>📅 Yo'qlama</ActionBtn>
                <ActionBtn onClick={() => setActiveTab('tasks')} style={{ background: activeTab === 'tasks' ? '#4318ff' : '#a3aed0' }}>📝 Topshiriqlar</ActionBtn>
                <ActionBtn onClick={() => setActiveTab('payments')} style={{ background: activeTab === 'payments' ? '#4318ff' : '#a3aed0' }}>💰 To'lov Holati</ActionBtn>
            </div>

            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3>{activeTab === 'list' ? 'Umumiy Ro\'yxat' : activeTab === 'attendance' ? 'Bugungi Yo\'qlama' : 'Guruh Nazorati'}</h3>
                    <input
                        type="text"
                        placeholder="Ism yoki guruh bo'yicha qidirish..."
                        style={{ padding: '10px 15px', borderRadius: '10px', border: '1px solid #e0e5f2', width: '300px' }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {activeTab === 'list' && (
                    <StyledTable>
                        <thead>
                            <tr>
                                <th>F.I.SH</th>
                                <th>Yo'nalish / Guruh</th>
                                <th>Telefon</th>
                                <th>Qarzdorlik</th>
                                <th>Status</th>
                                <th>Amal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.group}</td>
                                    <td>{student.phone}</td>
                                    <td style={{ color: student.debt > 0 ? '#ee5d50' : '#05cd99' }}>{student.debt.toLocaleString()} UZS</td>
                                    <td><Badge status={student.debt > 0 ? 'Kelmagan' : 'Kelgan'}>{student.debt > 0 ? 'Qarz' : 'To\'langan'}</Badge></td>
                                    <td>
                                        <ActionBtn onClick={() => alert('Tahrirlash: ' + student.name)}>📝</ActionBtn>
                                        {role === 'director' && (
                                            <ActionBtn variant="danger" onClick={() => onAction('students', student.id, 'delete')}>🗑️</ActionBtn>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </StyledTable>
                )}

                {activeTab === 'attendance' && (
                    <div>
                        <p style={{ marginBottom: '15px', fontWeight: 'bold', color: '#707eae' }}>Sana: {new Date().toLocaleDateString()}</p>
                        {filteredData.map(student => (
                            <div key={student.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #f4f7fe' }}>
                                <span>{student.name} ({student.group})</span>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button style={{ padding: '8px 15px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#d1fae5', color: '#05cd99', fontWeight: 'bold' }}>Keldi</button>
                                    <button style={{ padding: '8px 15px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#fee2e2', color: '#ee5d50', fontWeight: 'bold' }}>Kelmagan</button>
                                </div>
                            </div>
                        ))}
                        <ActionBtn style={{ marginTop: '20px', width: '100%' }}>Yo'qlamani Yakunlash</ActionBtn>
                    </div>
                )}

                {activeTab === 'tasks' && (
                    <div>
                        <div style={{ background: '#f4f7fe', padding: '15px', borderRadius: '15px', marginBottom: '15px' }}>
                            <h4>Yangi Vazifa Yuklash</h4>
                            <input style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '8px', border: '1px solid #e0e5f2' }} placeholder="Vazifa nomi..." />
                            <input type="date" style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '8px', border: '1px solid #e0e5f2' }} />
                            <ActionBtn style={{ marginTop: '10px' }}>Yuborish</ActionBtn>
                        </div>
                        <StyledTable>
                            <thead><tr><th>Talaba</th><th>Vazifa</th><th>Deadline</th><th>Status</th></tr></thead>
                            <tbody>
                                {filteredData.map(s => (
                                    <tr key={s.id}>
                                        <td>{s.name}</td>
                                        <td>Uyga vazifa #4</td>
                                        <td>20.05.2026</td>
                                        <td><Badge status="Kelgan">Bajarildi</Badge></td>
                                    </tr>
                                ))}
                            </tbody>
                        </StyledTable>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default Talabalar;