import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel({value}) {
    if(value>0){
        return (
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={value} />
              </Box>
        
              <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                  value,
                )}%`}</Typography>
              </Box>
            </Box>
          );
    }else{
        return{
            
        }
    }

}

export default LinearProgressWithLabel ;




