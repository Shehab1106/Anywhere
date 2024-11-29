import { Box, Typography} from '@mui/material';

const Home = ({isLoggedIn}) => {

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '10%',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '2rem',
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Dashboard App
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Please log in to access your dashboard
      </Typography>
    </Box>
  );
};

export default Home;
