const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsByID,
  createThought,
  updateThoughtByID,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtsById)
  .put(updateThoughtsById)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thougthId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
