import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CssBaseline, AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import Dashboard from './components/Dashboard';
import requireAuth from './hoc/requireAuth';
import Sidebar from './components/Sidebar';  


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('auth') === 'true'; 
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);  
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false); 
  };

  return (
    <>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Portal App
            </Typography>
            <Button
              color="inherit"
              onClick={isLoggedIn ? handleLogout : handleLogin}
            >
              {isLoggedIn ? 'Log Out' : 'Log In'}
            </Button>
          </Toolbar>
        </AppBar>
        <Sidebar isLoggedIn={isLoggedIn}/>
        <Container>
          <Routes>
            <Route path="/" element={requireAuth(Dashboard)({})} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
