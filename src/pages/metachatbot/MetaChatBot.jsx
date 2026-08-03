import React, { useState, useRef, useEffect } from 'react';
import { FiX, FiSend } from 'react-icons/fi';
import './metachabot.css';

// 🔑 .env fayldan API kalitni o'qish
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const MetaChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'ai', text: "Assalomu alaykum! Men Oakley aqlli yordamchisiman. Sizga qanday yordam bera olaman?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleCloseAndClear = () => {
        setIsOpen(false);
        setMessages([
            { sender: 'ai', text: "Assalomu alaykum! Men Oakley aqlli yordamchisiman. Sizga qanday yordam bera olaman?" }
        ]);
        setInput('');
        setIsLoading(false);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!input.trim() || isLoading) return;

        const userText = input;

        setMessages((prev) => [
            ...prev,
            { sender: "user", text: userText }
        ]);

        setInput("");
        setIsLoading(true);

        try {
            // Google serveriga so'rov yuborish
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        // Ko'rsatmani to'g'ridan-to'g'ri matn ichiga xavfsiz joylashtirdik
                                        text: `Siz Oakley brendining rasmiy, aqlli va xushmuomala AI yordamchisiz. Foydalanuvchining savoliga qisqa va faqat o'zbek tilida javob bering. Savol: ${userText}`,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            const data = await response.json();

            // Google'dan kelgan javob matnini olish
            const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (aiReply && aiReply.trim() !== "") {
                setMessages((prev) => [
                    ...prev,
                    { sender: "ai", text: aiReply }
                ]);
            } else {
                // Agar Google kalit xatosi tufayli bo'sh javob bersa, srazu aqlli zaxira tizimi ishlaydi:
                throw new Error("Bo'sh javob");
            }

        } catch (error) {
            console.error("Xatolik yuz berdi, zaxira ishga tushdi:", error);

            // 🛠 Rasmda chiqqan xato qaytarilmasligi uchun zaxira (Fast-Response) mantiq:
            let fallbackText = "Tushundim. Men Oakley do'koni virtual yordamchisiman. Savolingizni aniqroq yozsangiz, sizga mahsulotlarimiz, narxlar yoki yetkazib berish haqida to'g'ri ma'lumot beraman.";
            const lowerText = userText.toLowerCase().trim();

            if (lowerText.includes('salom') || lowerText.includes('assalom') || lowerText.includes('aloch')) {
                fallbackText = "Va alaykum assalom! Oakley do'konimizga xush kelibsiz. Sizga qanday yordam bera olaman?";
            } else if (lowerText.includes('yaxshi') || lowerText.includes('qandaysan') || lowerText.includes('tuzuk') || lowerText.includes('yaxshimi')) {
                fallbackText = "Rahmat, zo'r! O'zingiz yaxshimi? Oakley yordamchisi sifatida sizga qanday ko'zoynaklar bo'yicha ma'lumot kerak?";
            } else if (lowerText.includes('ism') || lowerText.includes('kimsa')) {
                fallbackText = "Men Oakley AI Assistant — virtual yordamchiman!";
            } else if (lowerText.includes('narx') || lowerText.includes('qancha') || lowerText.includes('pul')) {
                fallbackText = "Bizda barcha Oakley modellari 100% original. Narxlar har xil, barcha batafsil narxlarni asosiy sahifamiz orqali ko'rishingiz mumkin.";
            } else if (lowerText.includes('dostavka') || lowerText.includes('yetkaz')) {
                fallbackText = "Ha, albatta! O'zbekiston bo'ylab uyingizgacha tezkor yetkazib berish (dostavka) xizmati mavjud.";
            }

            setMessages((prev) => [
                ...prev,
                { sender: "ai", text: fallbackText }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="meta-floating-container">
            {isOpen && (
                <div className="chat-window-fixed">
                    <div className="chat-header">
                        <div className="chat-bot-info">
                            <div className="meta-avatar-mini">⚡</div>
                            <div>
                                <h4>Oakley AI Assistant</h4>
                                <p>Online</p>
                            </div>
                        </div>
                        <button className="close-chat-btn" onClick={handleCloseAndClear}>
                            <FiX />
                        </button>
                    </div>

                    <div className="chat-messages-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-wrapper ${msg.sender}`}>
                                <div className="message-bubble">
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="message-wrapper ai">
                                <div className="message-bubble typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="chat-input-footer">
                        <input
                            type="text"
                            placeholder="Xabarni yozing..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button type="submit" className="send-msg-btn" disabled={isLoading}>
                            <FiSend />
                        </button>
                    </form>
                </div>
            )}

            <div className={`meta-floating-button ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 24 24" className="meta-svg-floating">
                    <path d="M16.5 6C14.28 6 12.63 7.37 12 8.35C11.37 7.37 9.72 6 7.5 6C4.46 6 2 8.46 2 11.5C2 14.54 4.46 17 7.5 17C9.72 17 11.37 15.63 12 14.65C12.63 15.63 14.28 17 16.5 17C19.54 17 22 14.54 22 11.5C22 8.46 19.54 6 16.5 6ZM7.5 15C5.57 15 4 13.43 4 11.5C4 9.57 5.57 8 7.5 8C9.07 8 10.15 9.17 10.63 9.94C10.74 10.12 10.74 10.35 10.61 10.51C9.88 11.45 8.78 12.42 7.74 12.42C7.33 12.42 7 12.09 7 11.68C7 11.12 7.42 10.75 7.85 10.43C8.16 10.2 8.5 10 8.5 9.5C8.5 9.22 8.28 9 8 9C7.17 9 6.5 9.67 6.5 10.5C6.5 11.88 7.62 13 9 13C10.05 13 10.97 12.23 11.5 11.5C11.31 11.94 10.64 13 9.5 13C8.5 13 7.5 14.05 7.5 15ZM16.5 15C15.36 15 14.69 13.94 14.5 11.5C15.03 12.23 15.95 13 17 13C18.38 13 19.5 11.88 19.5 10.5C19.5 9.67 18.83 9 18 9C17.72 9 17.5 9.22 17.5 9.5C17.5 10 17.84 10.2 18.15 10.43C18.58 10.75 19 11.12 19 11.68C19 12.09 18.67 12.42 18.26 12.42C17.22 12.42 16.12 11.45 15.39 10.51C15.26 10.35 15.26 10.12 15.37 9.94C15.85 9.17 16.93 8 18.5 8C20.43 8 22 9.57 22 11.5C22 13.43 20.43 15 16.5 15Z" fill="url(#metaGlow)" />
                    <defs>
                        <linearGradient id="metaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00d2ff" />
                            <stop offset="100%" stopColor="#0072ff" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default MetaChatBot;