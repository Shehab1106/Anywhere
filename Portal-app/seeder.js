const Announcement = require('./models/Announcement');
const Quiz = require('./models/Quiz');
const connectDB = require('./config/db');


connectDB();

const announcementData = [
  {from:'Ahmed Mostafa', course: 'Math', description: 'The semester starts on September 1st.' },
  {from:'Mai Omar', course: 'Science', description: 'Exam schedule will be released on October 15th.' },
];

const quizData = [
  {title:'Unit 2 quiz', course:'Physics',due:'2024-12-06T09:00:00Z'},
  {title:'Unit 3 quiz', course:'Chemistry',due:'2024-12-08T10:00:00Z'}
];

const seedDatabase = async () => {
  try {
    await Announcement.deleteMany();
    await Quiz.deleteMany();

    await Announcement.insertMany(announcementData);
    await Quiz.insertMany(quizData);

    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedDatabase();
