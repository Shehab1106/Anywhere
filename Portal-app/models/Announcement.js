const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true 
  },
  course: { 
    type: String,
    required: true 
    },
  description: {
    type: String,
    required: true 
    },
});

const Announcement = mongoose.model('Announcement', AnnouncementSchema); 

module.exports = Announcement;