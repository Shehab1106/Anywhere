import { Box, List, ListItem, ListItemText } from '@mui/material';
import '../styles/Sidebar.css';

const Sidebar = ({isLoggedIn}) => {
  return (
    <Box className="sidebar">
      <List>
        <ListItem className="sidebar-item">
          <ListItemText primary="Home" />
        </ListItem>
        {isLoggedIn?
        <ListItem className="sidebar-item">
          <ListItemText primary="Dashboard" />
        </ListItem>:null}
      </List>
    </Box>
  );
};

export default Sidebar;
