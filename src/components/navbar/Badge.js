import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    // border: `2px solid ${theme.palette.background.paper}`,
    // padding: '0 4px',
    backgroundColor:'none',
    color:'none',
    
  },
 
  
}));

export default function CustomizedBadges({icon,text,colors}) {
  return (
      <StyledBadge badgeContent={text}  color={colors} >
         
         {icon}
        
      </StyledBadge>
    
  );
}