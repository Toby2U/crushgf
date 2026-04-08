'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function Chat() {
  const params = useParams();
  const crushId = params.id as string;

  const crushInfo = {
    riley: { name: "Riley", desc: "Hot Girl Next Door" },
    emma: { name: "Emma", desc: "Dominant Office Manager" },
    sophie: { name: "Sophie", desc: "Smart Elegant Coworker" },
    mia: { name: "Mia", desc: "Gym Fitness Crush" },
    roxy: { name: "Roxy", desc: "Bold & Seductive" },
    aiko: { name: "Aiko", desc: "Bubbly Anime Girl" },
    alex: { name: "Alex", desc: "Charming Guy Crush" },
  };

  const crush = crushInfo[crushId] || { name: "Crush", desc: "Your AI Companion" };

  const [messages, setMessages] = useState([
    { role: "assistant", content: `Hey... I've been thinking about you 😊` }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const replies = [
        "Mmm, I was hoping you'd message me...",
        "You always know how to make me smile ❤️",
        "Tell me more... I'm listening 😏",
        "You're making my heart race right now...",
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      setMessages(prev => [...prev, { role: "assistant", content: randomReply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div style={{
      height: '100vh',
      background: '#0a0519',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#f0e6ff'
    }}>
      <div style={{
        padding: '16px 20px',
        background: '#1f0f33',
        borderBottom: '1px solid #ff4da6',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <div style={{ fontSize: '32px' }}>👤</div>
        <div>
          <div style={{ fontSize: '1.4rem', fontWeight: '600' }}>{crush.name}</div>
          <div style={{ fontSize: '0.95rem', opacity: 0.7 }}>{crush.desc}</div>
        </div>
      </div>

      <div style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '75%',
              padding: '14px 18px',
              borderRadius: '18px',
              backgroundColor: msg.role === 'user' ? '#ff4da6' : '#2a1f4d',
              color: 'white',
              borderBottomRightRadius: msg.role === 'user' ? '4px' : '18px',
              borderBottomLeftRadius: msg.role === 'user' ? '18px' : '4px'
            }}
          >
            {msg.content}
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start', padding: '14px 18px', opacity: 0.7 }}>
            {crush.name} is typing...
          </div>
        )}
      </div>

      <div style={{
        padding: '16px',
        backgroundColor: '#1f0f33',
        borderTop: '1px solid #ff4da6'
      }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={`Message ${crush.name}...`}
            style={{
              flex: 1,
              padding: '16px 20px',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: '#2a1f4d',
              color: 'white',
              fontSize: '1.05rem'
            }}
          />
          <button 
            onClick={sendMessage}
            style={{
              padding: '0 28px',
              backgroundColor: '#ff4da6',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
