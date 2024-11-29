import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const fetchData = async () => {
    try {
      const announcementResponse = await axios.get('http://localhost:3000/api/announcements');
      setAnnouncements(announcementResponse.data);
      const quizResponse = await axios.get('http://localhost:3000/api/quizzes');
      setQuizzes(quizResponse.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  // Helper function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0'); 
    let hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    let h = date.getHours();
    if(h===24){
      hours='00';
      h=0;
    }
    const hourconfig = h>11? 'PM': 'AM';
    return `Date:${day}/${month}/${year} - Time:${hours}:${minutes} ${hourconfig}`;
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1, padding: '4rem', ml: 15, mt: -15 }}>
          <Paper elevation={3} sx={{ marginBottom: '20px', padding: '15px' }}>
            <Typography variant="h5" gutterBottom>
              Announcements
            </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <List>
              {announcements.map((announcement) => (
                <ListItem key={announcement.id}>
                  <ListItemText
                    primary={`${announcement.course}: ${announcement.description}`}
                    secondary={`From: ${announcement.from}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper elevation={3} sx={{ padding: '15px' }}>
            <Typography variant="h5" gutterBottom>
              Quizzes
            </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <List>
              {quizzes.map((quiz) => (
                <ListItem key={quiz.id}>
                  <ListItemText
                    primary={`${quiz.title}`}
                    secondary={`Course: ${quiz.course} | Due: ${formatDate(quiz.due)}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
