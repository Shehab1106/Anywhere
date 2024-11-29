const Announcement = require('../models/Announcement');
const {handleError} = require('../error/handleError');
const apperror = require('../AppError');

const getAnnouncements = handleError(async (req, res,next) => {
    const announcements = await Announcement.find({});
    res.status(200).json(announcements);
});

const createAnnouncement = handleError(async (req, res,next) => {
    const newAnnouncement = new Announcement(req.body);
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
});

const deleteAnnouncement = handleError(async(req,res,next)=>{
    const{id} = req.params;
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
    if(!deletedAnnouncement){
        throw new apperror(404,'Announcement Not Found');
    }
    res.status(200).json({ message: 'Announcement deleted successfully' });
});

const updateAnnouncement = handleError(async(req,res,next)=>{
    const{id} =req.params;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(id,req.body);
    if(!updatedAnnouncement){
        throw new apperror(404,'Announcement Not Found');
    }
    res.status(200).json(updatedAnnouncement);
});

module.exports = { getAnnouncements, createAnnouncement, deleteAnnouncement, updateAnnouncement };
