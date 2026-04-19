'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const handleYes = () => setIsVerified(true);
  const handleNo = () => {
    alert("You must be 18 or older to enter.");
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      {/* Blurry background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `url('https://picsum.photos/id/1011/2000/1200'), url('https://picsum.photos/id/1027/2000/1200')`,
        backgroundSize: 'cover',
        filter: 'blur(28px) brightness(0.45)',
        zIndex: -1
      }} />

      {/* Age Gate - Mobile friendly */}
      {!isVerified && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(10,5,25,0.96)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#1a1a2e',
            padding: '40px 30px',
            borderRadius: '24px',
            textAlign: 'center',
            maxWidth: '420px',
            width: '100%',
            border: '3px solid #ff3366'
          }}>
            <h1 style={{ fontSize: '2.4rem', color: '#ff3366', marginBottom: '1.2rem' }}>
              Are you 18+?
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '2.5rem' }}>
              Start your free trial with an AI crush
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={handleYes}
                style={{
                  padding: '18px 50px',
                  fontSize: '1.25rem',
                  background: '#ff3366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '700',
                  flex: '1 1 auto',
                  maxWidth: '180px'
                }}
              >
                Yes, I am 18+
              </button>
              <button 
                onClick={handleNo}
                style={{
                  padding: '18px 50px',
                  fontSize: '1.25rem',
                  background: 'transparent',
                  color: '#ddd',
                  border: '2px solid #777',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  flex: '1 1 auto',
                  maxWidth: '180px'
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Landing Page - Mobile friendly */}
      {isVerified && (
        <div style={{
          minHeight: '100vh',
          padding: '80px 20px',
          textAlign: 'center',
          color: '#f0e6ff',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 8vw, 5.4rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            lineHeight: 1.1
          }}>
            CrushGF.ai
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.4rem, 5vw, 2.1rem)', 
            marginBottom: '3rem', 
            opacity: 0.95,
            lineHeight: 1.3
          }}>
            Start your free trial.<br />
            Chat. Flirt. Then add real SMS texts.
          </p>

          <Link href="/crushes">
            <button style={{
              padding: '20px 60px',
              fontSize: '1.4rem',
              background: 'linear-gradient(to right, #7b2cbf, #c026d3)',
              color: 'white',
              border: 'none',
              borderRadius: '60px',
              cursor: 'pointer',
              fontWeight: '700',
              width: '100%',
              maxWidth: '320px',
              margin: '0 auto'
            }}>
              Start Free Trial
            </button>
          </Link>

          <p style={{ marginTop: '4rem', opacity: 0.7, fontSize: '1rem' }}>
            No credit card required • Real SMS add-on available
          </p>
        </div>
      )}
    </>
  );
}
