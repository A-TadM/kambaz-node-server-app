import model from "./model.js";
import { v4 as uuidv4 } from "uuid";


export default function EnrollmentsDao() {
 //let { enrollments } = db;    

 function enrollUserInCourse(userId, courseId) {
   return model.create({user: userId, course: courseId, _id: uuidv4(), });
 }

 const findAllEnrollments = () => model.find();

 function deleteEnrollment(enrollmentId) {
   return model.deleteOne({ _id: enrollmentId });
 }


 async function findCoursesForUser(userId) {
   const enrollments = await model.find({ user: userId }).populate("course");
   return enrollments.map((enrollment) => enrollment.course);
 }
 async function findUsersForCourse(courseId) {
   const enrollments = await model.find({ course: courseId }).populate("user");
   return enrollments.map((enrollment) => enrollment.user);
 }
 function unenrollUserFromCourse(user, course) {
   return model.deleteOne({ user, course });
 }

 function unenrollAllUsersFromCourse(courseId) {
   return model.deleteMany({ course: courseId });
 }


 return { findAllEnrollments, deleteEnrollment, enrollUserInCourse,
           findCoursesForUser, findUsersForCourse, unenrollUserFromCourse,
           unenrollAllUsersFromCourse
        };
}
