import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Chip } from '@mui/material';
import CardCarousel from '../components/Slider';

const Works = () => {
  const tooltips = ['All', 'Development', 'UI/UX Design', 'App Development'];

  return (
    <Box sx={{mt: 4, mb: 4}}>
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // height: '100vh',
        mb: 5
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, fontStyle: "italic", color: 'red' }}>Works</Typography>
      <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>My Creative Portfolio</Typography>
      <div style={{ display: 'flex', gap: '20px' }}>
        {tooltips.map((text) => (
          <Chip
            key={text}
            label={text}
            sx={{
              margin: '0px',
              fontSize: { xs: '12px', sm: '16px' },
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
                cursor: 'pointer',
              }
            }}
          />
        ))}
      </div>
    </Box>
    <CardCarousel/>
    </Box>
  );
};

export default Works;