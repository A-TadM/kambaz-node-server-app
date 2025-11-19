import { v4 as uuidv4 } from "uuid";


export default function AssignmentsDao(db) {

  function findAssignmentsForCourse(courseId) {
    return db.assignments.filter((assignment) => assignment.course === courseId);
  }

  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
  }

  function deleteAssignment(assignmentId) {
    db.assignments = db.assignments.filter((assignment) => assignment._id !== assignmentId);
  }

  function updateAssignment(assignmentId, assignmentUpdates) {
    db.assignments = db.assignments.map((assignment) => (assignment._id === assignmentId ? assignmentUpdates : assignment))
  }

  const findAssignmentById = (assignmentId) => db.assignments.find((assignment) => assignment._id === assignmentId);


  return { findAssignmentsForCourse, createAssignment, deleteAssignment, updateAssignment, findAssignmentById };
}