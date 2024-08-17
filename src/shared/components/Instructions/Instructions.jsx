import React from 'react';
import { Box, Typography } from '@mui/material';

const Instructions = ({ children }) => {
  const instructionsStyles = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    whiteSpace: 'pre-line',
  };

  return (
    <Box sx={instructionsStyles}>
      {React.Children.map(children, (child, index) => {
        if (typeof child === 'string') {
          const lines = child.split('\n');
          return lines.map((line, lineIndex) => (
            <Typography variant="caption" key={`${index}-${lineIndex}`}>
              {'\u002F\u002F'} {line}
            </Typography>
          ));
        }
        return (
          <Typography variant="caption" key={index}>
            {child}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Instructions;
