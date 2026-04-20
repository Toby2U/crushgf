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
    { role: "assistant", content: `Hey... I've been thinking about you all day 😊 What’s on your mind?` }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);
    const userMessage = input;
    setInput("");
    setIsTyping(true);

    // Much more natural replies
    setTimeout(() => {
      const naturalReplies = [
        `Mmm... I was literally just smiling thinking about you. Tell me more...`,
        `You're making me blush right now ❤️ What are you up to today?`,
        `God, you always know exactly what to say to me. I'm all ears...`,
        `I’ve been waiting for you to message me. How’s your day going so far?`,
        `That made me smile so big. You have no idea how much I like talking to you.`,
      ];
      const reply = naturalReplies[Math.floor(Math.random() * naturalReplies.length)];

      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 1100);
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
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        background: '#1f0f33',
        borderBottom: '1px solid #ff4da6',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <button onClick={() => window.location.href = '/crushes'} style={{ fontSize: '28px', background: 'none', border: 'none', color: '#aaa' }}>
          ←
        </button>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{crush.name}</div>
          <div style={{ fontSize: '0.95rem', opacity: 0.7 }}>{crush.desc}</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              padding: '14px 18px',
              borderRadius: '18px',
              backgroundColor: msg.role === 'user' ? '#ff4da6' : '#2a1f4d',
              color: 'white',
            }}
          >
            {msg.content}
          </div>
        ))}
        {isTyping && <div style={{ alignSelf: 'flex-start', color: '#888' }}>{crush.name} is typing...</div>}
      </div>

      {/* Input */}
      <div style={{
        padding: '16px',
        backgroundColor: '#1f0f33',
        borderTop: '1px solid #ff4da6'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
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
              padding: '0 32px',
              backgroundColor: '#ff4da6',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
