import React from "react";

function Projects() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#fff8f0", // light warm background
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "600",
    color: "#4a3f35", // rich warm brown
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: window.innerWidth >= 768 ? "1fr 1fr" : "1fr",
    gap: "30px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#5d4037", // dark brown
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#6d4c41",
    lineHeight: "1.6",
    marginBottom: "8px",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#8d6e63",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Projects</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={titleStyle}>Project 1: Academic Student Course Registration System</h3>
            <p style={textStyle}>
              <span style={labelStyle}>Features:</span> Secure student login, real-time course selection, and database management.
            </p>
            <p style={textStyle}>
              <span style={labelStyle}>Technologies Used:</span> Node.js, JavaScript, React.js, MongoDB, REST APIs.
            </p>
            <p style={textStyle}>
              <span style={labelStyle}>Impact:</span> Streamlined the registration process.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Project 2: Online Donation Management System</h3>
            <p style={textStyle}>
              <span style={labelStyle}>Features:</span> Real-time tracking of donations, automated notifications, and donor management.
            </p>
            <p style={textStyle}>
              <span style={labelStyle}>Technologies Used:</span> Spring Boot, React.js, MySQL.
            </p>
            <p style={textStyle}>
              <span style={labelStyle}>Impact:</span> Reduced manual tracking errors, enabling real-time reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
