import React from 'react';

function Certifications() {
  const sectionStyle = {
    padding: '64px 20px',
    backgroundColor: '#f7fafc',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '32px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '8px',
  };

  const linkStyle = {
    color: '#dd6b20', // orange
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#c05621', // darker orange on hover
    textDecoration: 'underline',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Certifications</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={titleStyle}>AWS Certified Cloud Practitioner CLF-02</h3>
            <a
              href="https://www.credly.com/badges/65ae31d0-ef28-437a-a34b-51f09fc363b9/public_url"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View Certificate
            </a>
          </div>
          <div style={cardStyle}>
            <h3 style={titleStyle}>Red Hat Certified Enterprise Application Developer</h3>
            <a
              href="https://www.credly.com/badges/b7fbc892-3170-4f71-8a12-675d11f09049/public_url"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
