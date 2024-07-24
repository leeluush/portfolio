import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { useTheme } from '../Home/ThemeContext';
import bulbOnIcon from '../../assets/blubOn.png';  
import bulbOffIcon from '../../assets/blubOff.png';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('');
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    scrollSpy.update();
    const handleScroll = () => {
      if (!userHasScrolled) setUserHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
    };
  }, [userHasScrolled]);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      setUserHasScrolled(true);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end');
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleIconClick = () => {
    toggleTheme();
    setIconClicked(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getIcon = () => {
    if (theme.palette.mode === 'light') {
      return isHovered || iconClicked
        ? <img src={bulbOnIcon} alt="Light Mode" style={{ width: '24px', height: '24px', transition: 'transform 0.3s ease' }} />
        : <img src={bulbOffIcon} alt="Dark Mode" style={{ width: '24px', height: '24px', transition: 'transform 0.3s ease' }} />;
    } else {
      return iconClicked
        ? <img src={bulbOnIcon} alt="Dark Mode" style={{ width: '24px', height: '24px', transition: 'transform 0.3s ease' }} />
        : <img src={bulbOffIcon} alt="Light Mode" style={{ width: '24px', height: '24px', transition: 'transform 0.3s ease' }} />;
    }
  };

  // Define links for navigation
  const links = [
    { key: 'heroSection', id: 'heroSection', label: 'Home' },
    { key: 'skillsSection', id: 'skillsSection', label: 'My Skills' },
    { key: 'portfolioSection', id: 'portfolioSection', label: 'Portfolio' },
    { key: 'contactSection', id: 'contactSection', label: 'Contact Me' }
  ];

  return (
    <AppBar position="fixed" sx={{ boxShadow: 3, bgcolor: 'background.paper' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 30px' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Caveat', color: theme.palette.text.primary }}>
          Lee Pozmantir Confino
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={handleIconClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              transform: (iconClicked || isHovered) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'rotate(180deg)' }
            }}
          >
            {getIcon()}
          </IconButton>
          {links.map((link) => (
            <ScrollLink
              key={link.key}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActive}
              onClick={() => handleLinkClick(link.key)}
            >
              <Button sx={{
                fontFamily: 'Caveat',
                bgcolor: activeLink === link.key ? 'rgba(255, 255, 102, 0.7)' : 'transparent',
                color: activeLink === link.key ? theme.palette.text.primary : theme.palette.text.primary,
                '&:hover': { bgcolor: 'rgba(255, 255, 102, 0.7)', color: 'black' }
              }} color={activeLink === link.key ? 'primary' : 'inherit'}>
                {link.label}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
