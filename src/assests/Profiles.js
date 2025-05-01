import React from 'react';

function Profiles() {
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

  const profileStyle = {
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
        <h2 style={headingStyle}>Coding Profiles</h2>
        <p style={paragraphStyle}>
          Connect with me on the following platforms:
        </p>
        <div>
          <p style={profileStyle}>
            <strong>LeetCode:</strong>{' '}
            <a
              href="https://leetcode.com/u/hema__123/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Profile
            </a>
          </p>
          <p style={profileStyle}>
            <strong>CodeChef:</strong>{' '}
            <a
              href="https://www.codechef.com/users/hema_30647"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Profile
            </a>
          </p>
          <p style={profileStyle}>
            <strong>HackerRank:</strong>{' '}
            <a
              href="https://www.hackerrank.com/profile/h2200030647"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Profile
            </a>
          </p>
          <p style={profileStyle}>
            <strong>MentorPick:</strong>{' '}
            <a
              href="https://mentorpick.com/profile/2200030647-hema"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profiles;
