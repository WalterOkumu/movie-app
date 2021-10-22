import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

// functional component
const Contact = () => {

    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(props.value)}%`}
              </Typography>
            </Box>
          </Box>
        );
    }
    const myDigit = 70
    return (
        <div className = 'container'>
            Contact Us
            <div className = 'container'>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                        variant = 'determinate'
                        value = {myDigit}
                        color = 'primary'
                        size = '5rem'
                    />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h6" component="div" color="text.secondary">
                            <strong>{`${Math.round(myDigit)}%`}</strong>
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Contact