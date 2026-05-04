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
    <div className="container fade-in about-page-container">
      <div className="badge-container">
        <span className="section-badge">Our Team</span>
      </div>
      <h2 className="section-title">About Us</h2>

      <p className="about-intro-text">
        Meet the team driving the smart farming revolution of CeylonPepper
      </p>

      <h3 className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Project Supervisors</h3>
      <div className="supervisors-container">
        <div className="supervisor-card shadow-card text-center supervisor-card-width">
           <img src={getImgUrl("1FEo_ez98zAeQXgtWejNmViksWWYIy3_0")} alt="Ms. Ishara Weerathunga" className="supervisor-img-styled" />
           <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Ms. Ishara Weerathunga</h4>
           <p style={{ fontWeight: '500', color: '#4b5563', marginBottom: '10px' }}>Supervisor</p>
           <div className="supervisor-info-text">
             <span className="supervisor-dept-highlight">Department of Software Engineering</span><br />
             Faculty of Computing<br />
             Sri Lanka Institute of Information Technology
           </div>
           <a href="mailto:ishara.w@sliit.lk" className="email supervisor-contact-link">ishara.w@sliit.lk</a>
        </div>
        
        <div className="supervisor-card shadow-card text-center supervisor-card-width">
           <img src={getImgUrl("1VmFxQ79WSoSJkJ_y5Y97vCuvGcWZU-DB")} alt="Mr. Eishan Weerasinghe" className="supervisor-img-styled" />
           <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Mr. Eishan Weerasinghe</h4>
           <p style={{ fontWeight: '500', color: '#4b5563', marginBottom: '10px' }}>Co-Supervisor</p>
           <div className="supervisor-info-text">
             <span className="supervisor-dept-highlight">Department of Software Engineering</span><br />
             Faculty of Computing<br />
             Sri Lanka Institute of Information Technology
           </div>
           <a href="mailto:eishan.w@sliit.lk" className="email supervisor-contact-link">eishan.w@sliit.lk</a>
        </div>
      </div>

      <h3 className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Research Team</h3>
      <div className="team-grid team-grid-layout">
        {members.map((m, i) => (
          <div className="team-member shadow-card text-center" key={i}>
            {m.img ? (
              <img src={m.img} alt={m.name} className="member-img-styled" />
            ) : (
              <div className="avatar member-avatar-fallback">🧑‍💻</div>
            )}
            <h4 className="member-name-text">{m.name}</h4>
            <p className="role member-role-text">{m.role}</p>
            <a href={`mailto:${m.email}`} className="email member-contact-link">{m.email}</a>
            <div className="social-links social-links-wrapper">
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                <Linkedin size={20} />
              </a>
              <a href={m.github} target="_blank" rel="noopener noreferrer" className="social-btn github">
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
