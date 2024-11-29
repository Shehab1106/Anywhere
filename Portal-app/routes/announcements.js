const express = require('express');
const { getAnnouncements, createAnnouncement, deleteAnnouncement, updateAnnouncement } = require('../controllers/announcementController');
const router = express.Router();
const methodOverride = require('method-override');

router.use(methodOverride('_method'))

router.get('/', getAnnouncements);
router.post('/', createAnnouncement);
router.delete('/:id',deleteAnnouncement);
router.put('/:id',updateAnnouncement);

module.exports = router;