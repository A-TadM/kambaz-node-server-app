import { v4 as uuidv4 } from "uuid";


export default function CoursesDao(db) {
 //let { courses, enrollments } = db;  

 const findAllCourses = () => db.courses; 

 function findCoursesForEnrolledUser(userId) {
   const enrolledCourses = db.courses.filter((course) =>
     db.enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
   return enrolledCourses;
 }

 function createCourse(course) {
   const newCourse = { ...course, _id: uuidv4() };
   db.courses = [...db.courses, newCourse];
   return newCourse;
 }

 function deleteCourse(courseId) {
   db.courses = db.courses.filter((course) => course._id !== courseId);
   db.enrollments = db.enrollments.filter((enrollment) => enrollment.course !== courseId);
 }

 function updateCourse(courseId, courseUpdates) {
   db.courses = db.courses.map((course) => (course._id === courseId ? courseUpdates : course))
 }

 function findUnenrolledCourses(userId) {
  const enrolledCourses = db.courses.filter((course) =>
    db.enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id)); 

  const unenrolledCourses = db.courses.filter(course => !(enrolledCourses).includes(course))
  return unenrolledCourses;
 }


 return { findAllCourses, findCoursesForEnrolledUser, createCourse, deleteCourse, updateCourse, findUnenrolledCourses };
}
