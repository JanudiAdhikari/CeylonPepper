import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import '../styles/Pages.css';

const getImgUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const AboutUs = () => {
  const members = [
    {
      name: "Madara Meegama",
      role: "Undergraduate Researcher",
      email: "it22097224@my.sliit.lk",
      img: getImgUrl("1MMkcKt23FqlDQdgzqsL9p_GVHXUPqnFd"),
      linkedin: "https://www.linkedin.com/in/madara-meegama-296697243/",
      github: "https://github.com/madarameegama7",
    },
    {
      name: "Janudi Adhikari",
      role: "Undergraduate Researcher",
      email: "it22195548@my.sliit.lk",
      img: getImgUrl("1muAR5aaXeWTxR2sIsVjG5npuyIPGiBhm"),
      linkedin: "https://www.linkedin.com/in/janudi-adhikari-b5a724313/",
      github: "https://github.com/JanudiAdhikari",
    },
    {
      name: "Ashika Ridimahaliyadda",
      role: "Undergraduate Researcher",
      email: "it22250674@my.sliit.lk",
      img: getImgUrl("14Ni9SOim_bdCxhDxjlKaSn9T0ta7QHJj"),
      linkedin: "https://www.linkedin.com/in/ashika-ridimahaliyadda-27aa432a2/",
      github: "https://github.com/0326ashi",
    },
    {
      name: "Induwara Ranasinghe",
      role: "Undergraduate Researcher",
      email: "it22353870@my.sliit.lk",
      img: getImgUrl("1FGikbFx6ruHoqasUFbcgLnbf3g0LP3iv"),
      linkedin: "https://www.linkedin.com/in/induwarar98/",
      github: "https://github.com/induwaraR98",
    },
  ];

  const supervisors = [
    {
      name: "Ms. Ishara Weerathunga",
      role: "Supervisor",
      img: getImgUrl("1FEo_ez98zAeQXgtWejNmViksWWYIy3_0"),
      dept: "Department of Software Engineering",
      faculty: "Faculty of Computing, SLIIT",
      email: "ishara.w@sliit.lk",
    },
    {
      name: "Mr. Eishan Weerasinghe",
      role: "Co-Supervisor",
      img: getImgUrl("1VmFxQ79WSoSJkJ_y5Y97vCuvGcWZU-DB"),
      dept: "Department of Software Engineering",
      faculty: "Faculty of Computing, SLIIT",
      email: "eishan.w@sliit.lk",
    },
  ];

  return (
    <div className="fade-in">
      <div className="about-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="scope-tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <span className="scope-tag-dot" />
            The Team
          </div>
          <h1>Meet the <em style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>Researchers</em></h1>
          <p>SLIIT Software Engineering undergraduates driving the future of smart agriculture through Machine Learning and Blockchain innovation.</p>
        </div>
      </div>

      <div className="about-page">
        {/* Supervisors */}
        <div style={{ marginBottom: '72px' }}>
          <div className="section-divider" style={{ marginBottom: '40px' }}>
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>Academic Guidance</div>
            <h2 className="section-title">Project <span>Supervisors</span></h2>
          </div>
          <div className="supervisors-row">
            {supervisors.map((s) => (
              <div className="supervisor-card" key={s.name}>
                <img src={s.img} alt={s.name} className="supervisor-img" />
                <h3 className="supervisor-name">{s.name}</h3>
                <span className="supervisor-role-badge">{s.role}</span>
                <p className="supervisor-dept">
                  <strong>{s.dept}</strong><br />
                  {s.faculty}
                </p>
                <a href={`mailto:${s.email}`} className="supervisor-email">
                  <Mail size={14} /> {s.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="section-divider" style={{ marginBottom: '40px' }}>
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>Research Team</div>
            <h2 className="section-title">The <span>Developers</span></h2>
          </div>
          <div className="team-grid">
            {members.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-img-wrap">
                  <img src={m.img} alt={m.name} className="team-img" />
                  <div className="team-online-dot" />
                </div>
                <h4 className="team-name">{m.name}</h4>
                <p className="team-role">{m.role}</p>
                <a href={`mailto:${m.email}`} className="team-email">{m.email}</a>
                <div className="team-socials">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-btn"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-btn"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;