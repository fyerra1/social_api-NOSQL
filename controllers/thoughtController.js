const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // // Get all courses
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // // Get a course
  // getSingleCourse(req, res) {
  //   Course.findOne({ _id: req.params.courseId })
  //     .select('-__v')
  //     .then((course) =>
  //       !course
  //         ? res.status(404).json({ message: 'No course with that ID' })
  //         : res.json(course)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  // Create a course
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return thought
      })
        .then((thought) => {
          return User.findOneAndUpdate(
            {id: req.body.userId},
            {$set: {thoughts: thought._id}},
            { runValidators: true, new: true }
            )
        }).then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // // Delete a course
  // deleteCourse(req, res) {
  //   Course.findOneAndDelete({ _id: req.params.courseId })
  //     .then((course) =>
  //       !course
  //         ? res.status(404).json({ message: 'No course with that ID' })
  //         : Student.deleteMany({ _id: { $in: course.students } })
  //     )
  //     .then(() => res.json({ message: 'Course and students deleted!' }))
  //     .catch((err) => res.status(500).json(err));
  // },
  // // Update a course
  // updateCourse(req, res) {
  //   Course.findOneAndUpdate(
  //     { _id: req.params.courseId },
  //     { $set: req.body },
  //     { runValidators: true, new: true }
  //   )
  //     .then((course) =>
  //       !course
  //         ? res.status(404).json({ message: 'No course with this id!' })
  //         : res.json(course)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
};
