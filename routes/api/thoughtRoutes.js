const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  // updateCourse,
  // deleteCourse,
} = require('../../controllers/thoughtController');

// /api/courses
router.route('/').get(getThought)
                 .post(createThought);

// router.route('/').post(createThought);

// /api/courses/:courseId
router.route('/:thoughtId').get(getSingleThought)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;
