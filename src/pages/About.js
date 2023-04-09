import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FullHeightBox = styled(Box)(props => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(to right, ${props.theme.palette.primary.main}, ${props.theme.palette.secondary.main})`,
  transition: 'background 1s ease',
  '&:hover': {
    background: `linear-gradient(to right, ${props.theme.palette.secondary.main}, ${props.theme.palette.primary.main})`,
  },
}));

const About = () => {
  return (
    <FullHeightBox>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>About Me</Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 4, color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae consectetur nibh. Nullam hendrerit dictum nisi, nec vestibulum orci sagittis vel.
        </Typography>
      </Container>
    </FullHeightBox>
  )
}

export default About;

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