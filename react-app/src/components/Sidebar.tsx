import { Box, List, ListItem, ListItemText } from '@mui/material';
import '../styles/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';  
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = ({isLoggedIn}) => {
  return (
    <Box className="sidebar">
      <List>
        <ListItem className="sidebar-item">
          <HomeIcon className="sidebar-icon" /> 
          <ListItemText primary="Home" />
        </ListItem>
        {isLoggedIn?
        <ListItem className="sidebar-item">
          <DashboardIcon className="sidebar-icon" /> 
          <ListItemText primary="Dashboard" />
        </ListItem>:null}
      </List>
    </Box>
  );
};

export default Sidebar;
