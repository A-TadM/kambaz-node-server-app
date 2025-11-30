import model from "./model.js";
import { v4 as uuidv4 } from "uuid";


export default function CoursesDao() {
 //let { courses, enrollments } = db;  

 const findAllCourses = () => model.find({}, { name: 1, description: 1 }); 

 function createCourse(course) {
   const newCourse = { ...course, _id: uuidv4() };
   return model.create(newCourse);
 }

 function deleteCourse(courseId) {
   return model.deleteOne({ _id: courseId });
 }

 function updateCourse(courseId, courseUpdates) {
   return model.updateOne({ _id: courseId }, { $set: courseUpdates });
 }

 async function findUnenrolledCourses(enrolledCourses) {
   enrolledCourses = enrolledCourses.map((course) => course._id);

   const unenrolledCourses = await model.find({_id: { $nin: enrolledCourses }});
  //const unenrolledCourses = db.courses.filter(course => !(enrolledCourses).includes(course))
   return unenrolledCourses;
 }

 const findCourseById = async (courseId) => await model.find({ _id: courseId }); 


 return { findAllCourses, createCourse,
          deleteCourse, updateCourse, findUnenrolledCourses, findCourseById };
}
