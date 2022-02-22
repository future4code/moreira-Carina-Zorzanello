import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {StyledToolBard} from "./Styled";
import {goToLogin, routes} from "../../routes/Coordinator";
import  {useNavigate}  from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
  return (
 
      <AppBar position="static">
        <StyledToolBard>
          <Typography variant="h6">
            LabEddit
          </Typography>
          <Button onClick={() => {navigate("/")}} color="inherit">Login</Button>
        </StyledToolBard>
      </AppBar>
   
  );
}

export default Header