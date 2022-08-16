const router = require('express').Router();
const {
  getThought,
  // getSingleCourse,
  createThought,
  // updateCourse,
  // deleteCourse,
} = require('../../controllers/thoughtController');

// /api/courses
router.route('/').get(getThought)
                 .post(createThought);

// router.route('/').post(createThought);

// /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;
