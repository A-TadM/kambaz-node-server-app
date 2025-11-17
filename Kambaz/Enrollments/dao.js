import { v4 as uuidv4 } from "uuid";


export default function EnrollmentsDao(db) {
 //let { enrollments } = db;    

 function enrollUserInCourse(userId, courseId) {
   db.enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
 }

 const findAllEnrollments = () => db.enrollments;

 function deleteEnrollment(enrollmentId) {
   db.enrollments = db.enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
 }

 function createEnrollment(user, course) {
   const newEnrollment = { _id: uuidv4(), user, course };
   db.enrollments = [...db.enrollments, newEnrollment];
   return newEnrollment;
 }


  return { findAllEnrollments, deleteEnrollment, createEnrollment, enrollUserInCourse };
}
