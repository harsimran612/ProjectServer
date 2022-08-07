// const mongoose = require("mongoose");
const Story = require('../models/storyContent.js')

const getStories = (req,res) => {
    Story.find({}).exec()
    .then(results => {
        res.status(200).json(results)
    })
    .catch(error => res.status(404).json({message: error.message}));
}

const createStory = (req,res) => {

    const {caption, username, image, tags} = req.body;

    let newStory = new Story({
        // code goes here of the geting data from the parameters
        caption:caption,
        username: username,
        image:image,
        tags:tags,
    })

    newStory.save()
    .then(results => {
        res.status(201).json(newStory)
    })
    .catch(error => res.status(409).json({message: error.message}) )
}

module.exports = {getStories, createStory}