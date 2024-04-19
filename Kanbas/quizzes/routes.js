import * as dao from "./dao.js";

export default function QuizRoutes(app) {
    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.id);
        res.json(status);
    };

    const updateQuiz = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateQuiz(id, req.body);
        res.sendStatus(204);
    };

    const getAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };

    const getQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.id);
        if (!quiz) {
            res.status(404).send("Quiz not found");
            return;
        }
        res.json(quiz);
    }

    const createQuiz = async (req, res) => {
        try {
            const quiz = await dao.createQuiz(req.body);
            res.json(quiz);
        } catch (error) {
            res.status(404).send("Quiz not created! Try again!");
            return;
        }
    }

    app.get("/api/courses/:cid/quizzes", getAllQuizzes);
    app.get("/api/courses/:cid/quizzes/:id", getQuizById);
    app.delete("/api/quizzes/:id", deleteQuiz);
    app.put("/api/quizzes/:id", updateQuiz);
    app.post("/api/courses/:cid/quizzes", createQuiz);
}