import React from "react";

const Skills = () => {
  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#fff4e6", // warm beige background
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#6d4c41", // warm brown
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
    maxWidth: "600px",
    margin: "0 auto",
  };

  const liStyle = {
    padding: "12px",
    fontSize: "18px",
    color: "#5d4037", // dark brown
    backgroundColor: "#ffe0b2", // soft orange background
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    marginBottom: "12px",
  };

  const handleHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover ? "#ffcc80" : "#ffe0b2"; // deeper orange on hover
    e.target.style.color = isHover ? "#4e342e" : "#5d4037"; // slightly darker brown on hover
    e.target.style.transform = isHover ? "scale(1.02)" : "scale(1)";
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={headingStyle}>Skills</h2>
      <ul style={ulStyle}>
        {[
          "Java, C",
          "Python",
          "HTML, CSS, JavaScript",
          "ReactJS, Node.js",
          "Spring, Spring Boot, Hibernate",
          "MySQL, MongoDB",
          "Git, GitHub",
        ].map((skill, index) => (
          <li
            key={index}
            style={liStyle}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
