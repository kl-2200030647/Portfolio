import React from 'react';

function Contact() {
  const sectionStyle = {
    padding: '64px 20px',
    backgroundColor: '#f7fafc',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '16px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#4a5568',
    marginBottom: '16px',
  };

  const detailsStyle = {
    fontSize: '18px',
    color: '#2d3748',
    marginBottom: '8px',
  };

  const linkStyle = {
    color: '#dd6b20',
    textDecoration: 'underline',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Contact Me</h2>
        <p style={paragraphStyle}>
          You can reach me at the following contact details:
        </p>
        <div>
          <p style={detailsStyle}>
            <strong>Email:</strong>{' '}
            <a href="hematadikamalla@gmail.com" style={linkStyle}>
            hematadikamalla@gmail.com
            </a>
          </p>
          <p style={detailsStyle}>
            <strong>Phone:</strong> +91 9160845062
          </p>
          {/* You can add more details like social media or LinkedIn if needed */}
          <p style={detailsStyle}>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/hema-tadikamalla-1844a828a/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              LinkedIn Profile
            </a>
          </p>
          <p style={detailsStyle}>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/kl-2200030647"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
