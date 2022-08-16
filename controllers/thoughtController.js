const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // // Get all courses
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  createThought(req, res) {
    Thought.create(req.body)
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
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
