import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../Home/ThemeContext'; 
import 'wired-elements';

export default function HeroSection() {
  const { theme } = useTheme();
  const heroImageSrc = theme.palette.mode === 'dark' ? './img/meDrawLampOn.png' : './img/meDrawWithLamp.png';

  return (
    <section id="heroSection" className="hero--section" style={{ backgroundColor: theme.palette.background.default }}>
      <div className="hero--section-content-box">
        <wired-card elevation="5" fill={theme.palette.background.paper}>
          <div className="hero--section-content">
            <p className="section-title" style={{ color: theme.palette.text.primary }}>👋 Hi, I'm Lee</p>
            <h1 className="hero--section-title" style={{ color: theme.palette.text.primary }}>
              <span className="hero--section-title--color" style={{ color: theme.palette.text.primary }}>Full Stack</span><br />
              Developer
            </h1>
            <p className="hero--section-description" style={{ color: theme.palette.text.primary }}>
              I develop seamless, robust, and intuitive web applications that bring your digital visions to life. With a passion for both front-end and back-end technologies, I craft comprehensive solutions that enhance user interaction and deliver functionality efficiently. Whether you're looking to build from scratch or refine an existing project, I'm here to help you make a significant impact online.
            </p>
          </div>
          <ScrollLink to="contactSection" spy={true} smooth={true} offset={-70} duration={500}>
            <button elevation="3" className="btn-primary" style={{
              fontFamily: 'Caveat, cursive', 
              fontSize: '18px', 
              backgroundColor: 'var(--button-bg)',    
              color: theme.palette.text.primary, 
              border: '1px solid black', 
              borderRadius: '5px', 
              cursor: 'pointer',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              boxShadow: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg5)';
              e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--button-bg)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Get In Touch
            </button>
          </ScrollLink>
        </wired-card>
      </div>
      <div className="hero--section--img">
        <wired-image src={heroImageSrc} alt="Hero Section" elevation="5" style={{ width: '450px', height: 'auto' }}></wired-image>
      </div>
    </section>
  );
}
