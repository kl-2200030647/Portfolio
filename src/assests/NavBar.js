import React from "react";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "#2d3748", // Dark gray background
    color: "#ffffff",
    padding: "16px 32px",
    position: "sticky",
    top: "0",
    zIndex: "50",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };

  const liStyle = {
    fontSize: "1rem",
  };

  const aStyle = {
    textDecoration: "none",
    color: "#f7fafc",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
  };

  const hoverEffect = (e, color) => {
    e.target.style.color = color;
  };

  const resumeLinkStyle = {
    color: "#38b2ac", // Teal color
    fontWeight: "600",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        {["Home", "Skills", "Education", "Projects", "Certifications", "Contact"].map((section) => (
          <li key={section} style={liStyle}>
            <a
              href={`#${section.toLowerCase()}`}
              style={aStyle}
              onMouseOver={(e) => hoverEffect(e, "#48bb78")}  // Green hover
              onMouseOut={(e) => hoverEffect(e, aStyle.color)}
            >
              {section}
            </a>
          </li>
        ))}
        <li style={liStyle}>
          <a
            href="/resume_Hema.pdf"
            download
            style={resumeLinkStyle}
            onMouseOver={(e) => hoverEffect(e, "#2b6cb0")} // Darker blue on hover
            onMouseOut={(e) => hoverEffect(e, resumeLinkStyle.color)}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
