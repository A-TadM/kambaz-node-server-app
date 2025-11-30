import EnrollmentsDao from "./dao.js";


export default function EnrollmentRoutes(app) {
 const dao = EnrollmentsDao();
  
  const findAllEnrollments = async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.json(enrollments);
  };

  const deleteEnrollment = async (req, res) => {
    const { enrollmentId } = req.params;
    const status = await dao.deleteEnrollment(enrollmentId);
    res.send(status);
  };

  const createEnrollment = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = req.body;
    const newEnrollment = await dao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newEnrollment);
  };


  app.get("/api/enrollments", findAllEnrollments);
  app.delete("/api/enrollments/:enrollmentId", deleteEnrollment);
  app.post("/api/users/current/enrollments", createEnrollment);
}