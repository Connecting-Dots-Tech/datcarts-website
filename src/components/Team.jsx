import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "ADARSH B",
    role: "CEO",
    desc: "4 YEARS IN SALES. 7 YEARS AS ENTREPRENEUR",
    img: "/assets/team/adharsh.png",
    roleColor: "#FFD600",
  },
  {
    name: "NEVIN MICHAEL",
    role: "CFO",
    desc: "6 YEARS EXPERIENCE AS HEAD OF OPERATIONS IN TECHNOLOGY COMPANIES AND VC FIRMS",
    img: "/assets/team/nevin.png",
    roleColor: "#FFD600",
  },
  {
    name: "ABHISHEK RAJ",
    role: "CSO",
    desc: "3 YEARS IN CIVIL ENGINEERING. 8 YEARS AS AN ENTREPRENEUR",
    img: "/assets/team/abhishek.png",
    roleColor: "#FFD600",
  },
  {
    name: "K S KURIAN",
    role: "CTO",
    desc: "8+ YEARS EXPERIENCE IN TECHNOLOGY SECTOR",
    img: "/assets/team/kurian.png",
    roleColor: "#FFD600",
  },
  {
    name: "ABIN M P",
    role: "CMO",
    desc: "7+ YEARS IN FILM & MEDIA INDUSTRY AS CINEMATOGRAPHER",
    img: "/assets/team/abin.png",
    roleColor: "#FFD600",
  },
];

const Team = () => (
  <section className="team-section">
    <h3 className="team-title">OUR LEADERSHIP</h3>
    <h2 className="team-company">DATCARTS COMPANY</h2>
    <p className="team-desc">
      At DATCARTS, leadership means more than just steering the company — it's
      about shaping the future of retail advertising. Our leaders bring together
      expertise in technology, retail operations, marketing, and business
      strategy, united by one mission: to create a dynamic, personalized
      in-store media network that transforms the way brands connect with
      shoppers.
    </p>
    <div className="team-cards">
      {teamMembers.map((member, idx) => (
        <div className="team-card" key={idx}>
          <img src={member.img} alt={member.name} className="team-img" />
          <div className="team-name">{member.name}</div>
          <div className="team-role" style={{ color: member.roleColor }}>
            {member.role}
          </div>
          <div className="team-bio">{member.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;