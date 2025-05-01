import React from "react";

const Hero = () => (
  <>
    <style>
      {`
        .hero-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 60px 40px;
          background: linear-gradient(to right, #edf2f7, #e2e8f0);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero-name {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2d3748;
          flex: 1;
          animation: slideInLeft 1s ease-out;
        }

        .hero-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          flex: 2;
          color: #4a5568;
          animation: fadeIn 1.5s ease-in;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }

          .hero-name, .hero-desc {
            flex: none;
            margin-bottom: 20px;
          }
        }
      `}
    </style>

    <section id="home" className="hero-container">
      <h1 className="hero-name">Tadikamalla Venkata Sesha Hema</h1>
      <p className="hero-desc">
        A highly motivated and detail-oriented Computer Science student with a strong foundation in full-stack development,
        software engineering, and cloud computing. Proficient in Java, React.js, Spring Boot with hands-on experience in
        building scalable applications. Passionate about problem-solving, web development, and DevOps. Adept at working
        in collaborative environments with excellent communication and self-learning abilities.
      </p>
    </section>
  </>
);

export default Hero;
