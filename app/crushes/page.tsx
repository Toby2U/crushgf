'use client';

export default function Crushes() {
  const crushes = [
    { id: "riley", name: "Riley", desc: "Hot Girl Next Door", vibe: "Confident • Teasing • Mature" },
    { id: "emma", name: "Emma", desc: "Dominant Office Manager", vibe: "Part Asian • Bossy • Flirty" },
    { id: "sophie", name: "Sophie", desc: "Smart Elegant Coworker", vibe: "Elegant • Secretly Naughty" },
    { id: "mia", name: "Mia", desc: "Gym Fitness Crush", vibe: "Athletic • Bold • Teasing" },
    { id: "roxy", name: "Roxy", desc: "Bold & Seductive", vibe: "Direct • Passionate" },
    { id: "isabella", name: "Isabella", desc: "Passionate Latina Artist", vibe: "Warm • Artistic" },
    { id: "harper", name: "Harper", desc: "Sporty Tomboy", vibe: "Energetic • Playful" },
    { id: "lila", name: "Lila", desc: "Mysterious Bookstore Girl", vibe: "Quiet • Intriguing" },
    { id: "zoe", name: "Zoe", desc: "Energetic Party Girl", vibe: "Fun • Outgoing" },
    { id: "aiko", name: "Aiko", desc: "Bubbly Anime Girl", vibe: "Cute • Energetic" },
    { id: "yuna", name: "Yuna", desc: "Elegant Anime Shrine Maiden", vibe: "Graceful • Mysterious" },
    { id: "sakura", name: "Sakura", desc: "Teasing Anime Idol", vibe: "Playful • Charismatic" },
    { id: "hana", name: "Hana", desc: "Cool Mysterious Anime Girl", vibe: "Calm • Alluring" },
    { id: "luna", name: "Luna", desc: "Dreamy Night Owl", vibe: "Romantic • Soft" },
    { id: "alex", name: "Alex", desc: "Charming Guy Crush", vibe: "Warm • Protective • Funny" },
    { id: "create", name: "Create Your Own", desc: "Build your perfect crush", vibe: "Any look & personality" },
  ];

  const openChat = (id) => {
    if (id === "create") {
      alert("Create Your Own Crush - Coming soon!");
      return;
    }
    window.location.href = `/chat/${id}`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0519',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3.2rem', marginBottom: '3rem' }}>Choose Your Crush</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        {crushes.map((crush) => (
          <div 
            key={crush.id}
            onClick={() => openChat(crush.id)}
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '28px 20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '58px', marginBottom: '16px' }}>
              {crush.id === "create" ? "✨" : "👤"}
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{crush.name}</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '6px', opacity: 0.9 }}>{crush.desc}</p>
            <p style={{ fontSize: '0.95rem', opacity: 0.75 }}>{crush.vibe}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
