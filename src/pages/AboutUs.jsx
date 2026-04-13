import React from 'react';
import '../styles/Pages.css';

const AboutUs = () => {
  const members = [
    { name: "Student 1", role: "Group Leader / ML Engineer", email: "student1@my.sliit.lk" },
    { name: "Student 2", role: "Frontend Developer", email: "student2@my.sliit.lk" },
    { name: "Student 3", role: "Backend Developer", email: "student3@my.sliit.lk" },
    { name: "Student 4", role: "Blockchain/Cloud Dev", email: "student4@my.sliit.lk" },
    { name: "Student 5", role: "UI/UX & QA", email: "student5@my.sliit.lk" },
    { name: "Student 6", role: "Data Scientist", email: "student6@my.sliit.lk" }
  ];

  return (
    <div className="container fade-in" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">About Us</h2>
      <p className="text-center" style={{ marginBottom: '40px' }}>
        We are a team of final-year Software Engineering undergraduates from SLIIT, dedicated to modernizing agriculture through AI capabilities.
      </p>

      <h3 className="section-subtitle">Supervisor</h3>
      <div className="supervisor-card shadow-card mx-auto text-center">
         <div className="avatar">👨‍🏫</div>
         <h4>Dr. Supervisor Name</h4>
         <p>Project Supervisor</p>
         <a href="mailto:supervisor@sliit.lk" className="email">supervisor@sliit.lk</a>
      </div>

      <h3 className="section-subtitle">Team Members</h3>
      <div className="team-grid">
        {members.map((m, i) => (
          <div className="team-member shadow-card text-center" key={i}>
            <div className="avatar">🧑‍💻</div>
            <h4>{m.name}</h4>
            <p className="role">{m.role}</p>
            <a href={`mailto:${m.email}`} className="email">{m.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
