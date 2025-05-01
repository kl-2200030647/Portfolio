import React from "react";

function Education() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#fef9f4", // Soft cream background
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "600",
    color: "#4a3f35", // Deep warm gray
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "30px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  };

  const subHeadingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#5d4037", // Warm brown
    marginBottom: "8px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#6d4c41", // Darker brown
    margin: "4px 0",
  };

  // Responsive columns for medium+ screens
  const mediaQuery = window.innerWidth >= 768 ? { gridTemplateColumns: "1fr 1fr" } : {};

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Education</h2>
        <div style={{ ...gridStyle, ...mediaQuery }}>
          <div style={cardStyle}>
            <h3 style={subHeadingStyle}>Intermediate</h3>
            <p style={textStyle}>Sri Sadhana Junior College, Markapuram</p>
            <p style={textStyle}>Percentage: 90%</p>
            <p style={{ ...textStyle, color: "#a1887f" }}>2020-2022</p>
          </div>

          <div style={cardStyle}>
            <h3 style={subHeadingStyle}>Bachelor of Technology</h3>
            <p style={textStyle}>Computer Science Engineering</p>
            <p style={textStyle}>K L University, Vaddeswaram</p>
            <p style={textStyle}>CGPA: 9.47</p>
            <p style={{ ...textStyle, color: "#a1887f" }}>2022-2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
