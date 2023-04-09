import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const FullHeightBox = styled(Box)(props => ({
  minHeight: '100vh',
  background: `linear-gradient(to right, ${props.theme.palette.primary.main}, ${props.theme.palette.secondary.main})`,
  animation: '$animateGradient 15s ease infinite',
}));

const Home = () => {
  return (
  <FullHeightBox>
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>Jyoti Patowary</Typography>
      <Typography variant="h4" sx={{ fontWeight: 400, mb: 4, color: 'white' }}>UX Designer & Front-end Developer</Typography>
      <Button variant="contained" color="secondary" size="large" sx={{ mb: 3 }}>View Portfolio</Button>
    </Container>
  </FullHeightBox>
  )
}

export default Home;

const animateGradient = () => ({
  '0%': {
    backgroundPosition: '0% 50%'
  },
  '50%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0% 50%'
  }
});

FullHeightBox.defaultProps = {
  theme: {
    palette: {
      primary: {
        main: '#673AB7'
      },
      secondary: {
        main: '#2196F3'
      }
    }
  }
};

FullHeightBox.animations = {
  animateGradient: animateGradient
};