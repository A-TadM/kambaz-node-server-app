import EnrollmentsDao from "./dao.js";


export default function EnrollmentRoutes(app, db) {
 const dao = EnrollmentsDao(db);
  
  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  };

  const deleteEnrollment = (req, res) => {
    const { enrollmentId } = req.params;
    dao.deleteEnrollment(enrollmentId);
    res.sendStatus(200);
  };

  const createEnrollment = (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = req.body;
    const newEnrollment = dao.createEnrollment(currentUser._id, newCourse._id);
    res.json(newEnrollment);
  };


  app.get("/api/enrollments", findAllEnrollments);
  app.delete("/api/enrollments/:enrollmentId", deleteEnrollment);
  app.post("/api/users/current/enrollments", createEnrollment);
}