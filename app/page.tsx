'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0a0519 0%, #1f0f33 100%)',
      color: '#e0d4ff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '120px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '5.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
        CrushGF.ai
      </h1>
      <p style={{ fontSize: '2rem', marginBottom: '4rem', opacity: 0.9 }}>
        Your AI crush is waiting
      </p>

      <Link href="/crushes">
        <button style={{
          padding: '24px 80px',
          fontSize: '1.5rem',
          background: 'linear-gradient(to right, #7b2cbf, #c026d3)',
          color: 'white',
          border: 'none',
          borderRadius: '60px',
          cursor: 'pointer',
          fontWeight: '700'
        }}>
          Browse All Crushes
        </button>
      </Link>
    </div>
  );
}
