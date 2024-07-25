import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import data from '../../data/index.json';
import { useTheme } from '../Home/ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sectionStyles = {
  sectionPadding: {
    padding: '50px'
  },
  centerText: {
    textAlign: 'center'
  },
  cardImageStyle: {
    height: '200px', // Reduced the height
    objectFit: 'cover'
  },
  commonFont: {
    fontFamily: 'Caveat, cursive'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  }
};

function PortfolioCard({ item }) {
  const { theme } = useTheme();

  return (
    <Card sx={{ width: '300px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.paper, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', marginLeft: '25%', marginBottom: '10px' }}>
      <CardMedia
        component="img"
        image={item.src}
        alt={item.title}
        sx={sectionStyles.cardImageStyle}
      />
      <CardContent sx={{ flexGrow: 1}}> {/* Added marginTop */}
        <Typography gutterBottom variant="h5" sx={{ ...sectionStyles.commonFont, fontSize: '18px', color: theme.palette.text.primary }}>
          {item.title}
        </Typography>
        <Typography sx={{ ...sectionStyles.commonFont, fontSize: '18px', color: theme.palette.text.primary }}>
          {item.description}
        </Typography>
        <Button
          variant="contained"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: 'Caveat',
            marginTop: '25px',
            color: '#fff',
            backgroundColor: '#ff69b4',
            '&:hover': {
              backgroundColor: '#ff85c1',
              color: '#fff',
            },
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            border: '1px solid #ff69b4',
            borderRadius: '5px'
          }}
        >
          View Live Demo
        </Button>
      </CardContent>
    </Card>
  );
}

function MyPortfolio() {
  const { theme } = useTheme();

  const settings = {
    infinite: data.portfolio.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, data.portfolio.length),
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, data.portfolio.length),
          slidesToScroll: 1,
          infinite: data.portfolio.length > 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: data.portfolio.length > 1
        }
      }
    ]
  };

  return (
    <Container
      className="portfolio--section"
      id="portfolioSection"
      sx={{
        ...sectionStyles.sectionPadding,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        ...sectionStyles.centerText
      }}
      data-theme={theme.palette.mode}
    >
      <Typography variant="h2" sx={{ ...sectionStyles.commonFont, fontSize: '36px', marginBottom: '25px', color: theme.palette.text.primary }}>
        My Portfolio
      </Typography>
      <Typography variant="subtitle1" sx={{ ...sectionStyles.commonFont, fontSize: '24px', marginBottom: '50px', color: theme.palette.text.primary }}>
        Recent Projects
      </Typography>
      <div style={{ paddingBottom: '80px' }}> {/* Added padding to ensure cards are fully visible */}
        <Slider {...settings}>
          {data.portfolio.map((item, index) => (
            <div key={index}>
              <PortfolioCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
      <div style={sectionStyles.buttonContainer}>
        <Button
          variant="contained"
          href="https://github.com/leeluush"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            height: '48px',
            width: '200px',
            marginTop: '40px',
            backgroundColor: 'var(--highlight-color)',
            color: 'var(--button-color)',
            border: '1px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            fontFamily: 'Caveat',
            fontSize: '18px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#7BBAFF',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
            }
          }}
        >
          <img src="/img/github-1.png" alt="GitHub" style={{ width: 32, height: 32, marginRight: '10px' }} />
          Visit My GitHub
        </Button>
      </div>
    </Container>
  );
}

export default MyPortfolio;
