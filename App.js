import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import UserRoutes from './Users/routes.js';
import cors from 'cors';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import QuizRoutes from './Kanbas/quizzes/routes.js';
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);

ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
QuizRoutes(app);

Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000)