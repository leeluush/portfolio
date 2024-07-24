import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import data from '../../data/index.json';
import { useTheme } from '../Home/ThemeContext'; // Ensure this path is correct

const sectionStyles = {
  sectionPadding: {
    padding: '50px'
  },
  centerText: {
    textAlign: 'center'
  },
  cardImageStyle: {
    height: '250px', 
    objectFit: 'cover'
  },
  commonFont: {
    fontFamily: 'Caveat, cursive'
  }
};

function PortfolioCard({ item }) {
  const { theme } = useTheme();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.paper }}>
      <CardMedia
        component="img"
        image={item.src}
        alt={item.title}
        sx={sectionStyles.cardImageStyle}
      />
      <CardContent sx={{ flexGrow: 1 }}>
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
          sx={{ fontFamily:'Caveat', marginTop: '25px', color: theme.palette.text.primary, backgroundColor: theme.palette.background.paper, '&:hover': { backgroundColor: 'var(--hover-bg6)' } }}
        >
          View Live Demo
        </Button>
      </CardContent>
    </Card>
  );
}

function MyPortfolio() {
  const { theme } = useTheme();
  return (
    <Container className="portfolio--section" id="portfolioSection" sx={{ ...sectionStyles.sectionPadding, backgroundColor: theme.palette.background.container, ...sectionStyles.centerText }}>
      <Typography variant="h2" sx={{ ...sectionStyles.commonFont, fontSize: '36px', marginBottom: '25px', color: theme.palette.text.primary }}>
        My Portfolio
      </Typography>
      <Typography variant="subtitle1" sx={{ ...sectionStyles.commonFont, fontSize: '24px', marginBottom: '50px', color: theme.palette.text.primary }}>
        Recent Projects
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {data.portfolio.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <PortfolioCard item={item} />
          </Grid>
        ))}
      </Grid>
      <div style={{ ...sectionStyles.centerText, marginTop: '20px' }}>
        <Button variant="contained" sx={{ fontFamily: 'Caveat', padding: '10px 20px', marginTop: '25px', backgroundColor: 'var(--hover-bg5)', color: 'var(--black)', borderRadius: '5px', border: '1px solid black', '&:hover': { backgroundColor: 'var(--hover-bg6)' } }}>
          <img src="/img/github-1.png" alt="GitHub" style={{ width: 32, height: 32, marginRight: '10px' }} />
          Visit My GitHub
        </Button>
      </div>
    </Container>
  );
}

export default MyPortfolio;
