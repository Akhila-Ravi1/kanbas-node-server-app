import model from "./model.js";

export const createCourse = (course) => {
    // delete user._id;
    return model.create(course);
}

export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const findCourseByCourseName = (coursename) => model.findOne({ name: coursename });
//export const findUserByCredentials = (coursename, password) => model.findOne({ coursename, password });
export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
//export const findUsersByRole = (role) => model.find({ role: role });