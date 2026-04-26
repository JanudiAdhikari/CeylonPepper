import React from 'react';
import '../styles/Pages.css';

const AboutUs = () => {
  const members = [
    { name: "Madara Meegama", role: "Undergraduate Researcher", email: "it22097224@my.sliit.lk" },
    { name: "Janudi Adhikari", role: "Undergraduate Researcher", email: "it22195548@my.sliit.lk" },
    { name: "Ashika Ridimahaliyadda", role: "Undergraduate Researcher", email: "it22250674@my.sliit.lk" },
    { name: "Induwara Ranasinghe", role: "Undergraduate Researcher", email: "it22353870@my.sliit.lk" }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px', maxWidth: '1200px' }}>
      <h2 className="section-title">About Us</h2>
      <p className="text-center" style={{ marginBottom: '50px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
        We are a team of final-year Software Engineering undergraduates from SLIIT, dedicated to modernizing agriculture through AI capabilities.
      </p>

      <h3 className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Supervising Committee</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <div className="supervisor-card shadow-card text-center" style={{ width: '300px', padding: '30px 20px', borderRadius: '12px', background: 'white' }}>
           <div className="avatar" style={{ fontSize: '3rem', marginBottom: '15px' }}>👩‍🏫</div>
           <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Ms. Ishara Weerathunga</h4>
           <p style={{ fontWeight: '500', color: '#4b5563', marginBottom: '10px' }}>Supervisor</p>
           <a href="mailto:ishara.w@sliit.lk" className="email" style={{ color: 'var(--primary)', textDecoration: 'none' }}>ishara.w@sliit.lk</a>
        </div>
        
        <div className="supervisor-card shadow-card text-center" style={{ width: '300px', padding: '30px 20px', borderRadius: '12px', background: 'white' }}>
           <div className="avatar" style={{ fontSize: '3rem', marginBottom: '15px' }}>👨‍🏫</div>
           <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Mr. Eishan Weerasinghe</h4>
           <p style={{ fontWeight: '500', color: '#4b5563', marginBottom: '10px' }}>Co-Supervisor</p>
           <a href="mailto:eishan.w@sliit.lk" className="email" style={{ color: 'var(--primary)', textDecoration: 'none' }}>eishan.w@sliit.lk</a>
        </div>
      </div>

      <h3 className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Team Members</h3>
      <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
        {members.map((m, i) => (
          <div className="team-member shadow-card text-center" key={i} style={{ padding: '30px 20px', borderRadius: '12px', background: 'white' }}>
            <div className="avatar" style={{ fontSize: '3rem', marginBottom: '15px' }}>🧑‍💻</div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{m.name}</h4>
            <p className="role" style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '15px' }}>{m.role}</p>
            <a href={`mailto:${m.email}`} className="email" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.95rem' }}>{m.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
