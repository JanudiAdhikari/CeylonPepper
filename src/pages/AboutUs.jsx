import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import '../styles/Pages.css';

const getImgUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const AboutUs = () => {
  const members = [
    { name: "Madara Meegama", role: "Undergraduate Researcher", email: "madarameegama7@gmail.com", img: getImgUrl("1MMkcKt23FqlDQdgzqsL9p_GVHXUPqnFd"), linkedin: "https://www.linkedin.com/in/madara-meegama-296697243/", github: "https://github.com/madarameegama7" },
    { name: "Janudi Adhikari", role: "Undergraduate Researcher", email: "januditharushika@gmail.com", img: getImgUrl("1muAR5aaXeWTxR2sIsVjG5npuyIPGiBhm"), linkedin: "https://www.linkedin.com/in/janudi-adhikari-b5a724313/", github: "https://github.com/JanudiAdhikari" },
    { name: "Ashika Ridimahaliyadda", role: "Undergraduate Researcher", email: "ashikaridi2002@gmail.com", img: getImgUrl("14Ni9SOim_bdCxhDxjlKaSn9T0ta7QHJj"), linkedin: "https://www.linkedin.com/in/ashika-ridimahaliyadda-27aa432a2/", github: "https://github.com/0326ashi" },
    { name: "Induwara Ranasinghe", role: "Undergraduate Researcher", email: "iranasinghe98@gmail.com", img: getImgUrl("1FGikbFx6ruHoqasUFbcgLnbf3g0LP3iv"), linkedin: "https://www.linkedin.com/in/induwarar98/", github: "https://github.com/induwaraR98" }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 50px', maxWidth: '1400px' }}>
      <div className="badge-container">
        <span className="section-badge">Our Team</span>
      </div>
      <h2 className="section-title">About Us</h2>
      <p className="text-center" style={{ marginBottom: '50px', fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '500', maxWidth: '800px', margin: '0 auto 50px' }}>
        Meet the team behind CeylonPepper: SLIIT Software Engineering undergraduates driving the future of smart agriculture with ML and Blockchain.
      </p>

      <h3 className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Project Supervisors</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <div className="supervisor-card shadow-card text-center" style={{ width: '420px' }}>
           <img src={getImgUrl("1FEo_ez98zAeQXgtWejNmViksWWYIy3_0")} alt="Ms. Ishara Weerathunga" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 15px', border: '3px solid #f0fdf4', display: 'block' }} />
           <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Ms. Ishara Weerathunga</h4>
           <p style={{ fontWeight: '500', color: '#4b5563', marginBottom: '10px' }}>Supervisor</p>
           <div style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '15px', lineHeight: '1.6' }}>
             <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>Department of Software Engineering</span><br />
             Faculty of Computing<br />
             Sri Lanka Institute of Information Technology
           </div>
           <a href="mailto:ishara.w@sliit.lk" className="email" style={{ color: 'var(--primary)', textDecoration: 'none' }}>ishara.w@sliit.lk</a>
        </div>
        
        <div className="supervisor-card shadow-card text-center" style={{ width: '420px' }}>
           <img src={getImgUrl("1VmFxQ79WSoSJkJ_y5Y97vCuvGcWZU-DB")} alt="Mr. Eishan Weerasinghe" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 15px', border: '3px solid #f0fdf4', display: 'block' }} />
           <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Mr. Eishan Weerasinghe</h4>
           <p style={{ fontWeight: '500', color: '#4b5563', marginBottom: '10px' }}>Co-Supervisor</p>
           <div style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '15px', lineHeight: '1.6' }}>
             <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>Department of Software Engineering</span><br />
             Faculty of Computing<br />
             Sri Lanka Institute of Information Technology
           </div>
           <a href="mailto:eishan.w@sliit.lk" className="email" style={{ color: 'var(--primary)', textDecoration: 'none' }}>eishan.w@sliit.lk</a>
        </div>
      </div>

      <h3 className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Research Team</h3>
      <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
        {members.map((m, i) => (
          <div className="team-member shadow-card text-center" key={i}>
            {m.img ? (
              <img src={m.img} alt={m.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 15px', border: '3px solid #f0fdf4' }} />
            ) : (
              <div className="avatar" style={{ fontSize: '3.5rem', marginBottom: '15px', lineHeight: '100px', height: '100px' }}>🧑‍💻</div>
            )}
            <h4 style={{ fontSize: '1.15rem', marginBottom: '5px', whiteSpace: 'nowrap' }}>{m.name}</h4>
            <p className="role" style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '15px' }}>{m.role}</p>
            <a href={`mailto:${m.email}`} className="email" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.95rem', display: 'block', marginBottom: '15px' }}>{m.email}</a>
            <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#f1f5f9', color: '#475569', borderRadius: '10px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.color = '#0077b5'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}>
                <Linkedin size={20} />
              </a>
              <a href={m.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#f1f5f9', color: '#475569', borderRadius: '10px', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.color = '#111827'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}>
                <Github size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
