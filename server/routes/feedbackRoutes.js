const { getFeedback, createFeedback } = require('../controllers/feedbackControllers');
const {Router} = require("express");

const router = Router();

router.get("/",getFeedback);
router.post("/",createFeedback);

module.exports = router;