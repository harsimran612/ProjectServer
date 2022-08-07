const router = require("express").Router();
const { getStories, createStory } = require('../controllers/stories.js')

router.get("/", getStories);
router.post("/", createStory);

module.exports =  router;