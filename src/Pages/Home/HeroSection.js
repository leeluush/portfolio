import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../Home/ThemeContext'; 
import { Card, CardContent, Button, Typography, Box } from '@mui/material';
import 'wired-elements';

export default function HeroSection() {
  const { theme } = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const heroImageSrc = isDarkMode ? './img/meDrawLampOn.png' : './img/meDrawWithLamp.png';
  const placeholderImageSrc = isDarkMode ? './img/meDrawLampOn-small.png' : './img/meDrawWithLamp-small.png';

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  }

  return (
    <section id="heroSection" className="hero--section" style={{ backgroundColor: theme.palette.background.default }}>
      <Box className="hero--section-content-box">
        <Card 
          elevation={5} 
          className="hero--section-content-card"
          sx={{ 
            padding: '20px', 
            maxWidth: '600px',  
            backgroundColor: theme.palette.background.paper, 
            borderColor: theme.palette.mode === 'dark' ? '#555' : '#ccc',
            borderWidth: '1px',
            borderStyle: 'solid',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            fontFamily: '"Caveat", cursive'
          }}
        >
          <CardContent>
            <Typography 
              variant="h6" 
              className="section-title" 
              style={{ color: theme.palette.text.primary, fontFamily: 'Caveat, cursive' }}
            >
              👋 Hi, I'm Lee
            </Typography>
            <Typography 
              variant="h2" 
              className="hero--section-title" 
              style={{ color: theme.palette.text.primary, fontFamily: 'Caveat, cursive', fontSize: '48px' }}
            >
              <span className="hero--section-title--color" style={{ color: theme.palette.text.primary }}>Full Stack</span><br />
              Developer
            </Typography>
            <Typography 
              variant="body1" 
              className="hero--section-description" 
              style={{ color: theme.palette.text.primary, fontFamily: 'Caveat, cursive', fontSize: '18px', lineHeight: '1.5' }}
            >
              I develop seamless, robust, and intuitive web applications that bring your digital visions to life. With a passion for both front-end and back-end technologies, I craft comprehensive solutions that enhance user interaction and deliver functionality efficiently. Whether you're looking to build from scratch or refine an existing project, I'm here to help you make a significant impact online.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ScrollLink to="contactSection" spy={true} smooth={true} offset={-70} duration={500}>
                <Button 
                  variant="contained" 
                  className="btn-primary" 
                  sx={{
                    marginTop: '20px',
                    height: '36px',
                    width: '160px',
                    backgroundColor: 'var(--highlight-color)', 
                    color: 'var(--button-color)',
                    border: '1px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, box-shadow 0.3s',
                    fontFamily: 'Caveat, cursive',
                    fontSize: '18px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                      backgroundColor: '#7BBAFF', 
                      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', 
                    },
                    textTransform: 'none',
                  }}
                >
                  GET IN TOUCH
                </Button>
              </ScrollLink>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <div className="image-container">
        <div className={`blurred-img ${loaded ? 'loaded' : ''}`} style={{ backgroundImage: `url(${placeholderImageSrc})` }}>
          <img
            className={`hero-image ${loaded ? 'loaded' : ''}`}
            src={heroImageSrc}
            alt="Hero Section"
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </section>
  );
}
