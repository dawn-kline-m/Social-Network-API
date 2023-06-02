const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtByID,
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
  .get(getThoughtByID)
  .put(updateThoughtByID)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
