const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  // addAssignment,
  // removeAssignment,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers)
                 .post(createUser);

// /api/users/userId
router.route('/:userId')
        .get(getSingleUser)
        .delete(deleteUser)
        .put(updateUser);

router.route('/:userId/friends/:friendId')
        .post(addFriend);
        

// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
