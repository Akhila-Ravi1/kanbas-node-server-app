import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    };

    const updateCourse = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateCourse(id, req.body);
        res.sendStatus(204);
    };

    const getAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    };

    const getCourseById = async (req, res) => {
        const course = await dao.findCourseById(req.params.id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.json(course);
    }

    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    }

    app.get("/api/courses", getAllCourses);
    app.get("/api/courses/:id", getCourseById);
    app.delete("/api/courses/:id", deleteCourse);
    app.put("/api/courses/:id", updateCourse);
    app.post("/api/courses", createCourse);
}