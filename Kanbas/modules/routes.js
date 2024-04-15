import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.id);
        res.json(status);
    };

    const updateModule = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateModule(id, req.body);
        res.sendStatus(204);
    };

    const getAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
    };

    const getModuleById = async (req, res) => {
        const module = await dao.findModuleById(req.params.id);
        if (!module) {
            res.status(404).send("Module not found");
            return;
        }
        res.json(module);
    }

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString()
        };
        const module = await dao.createModule(newModule);
        res.json(module);
    }

    app.get("/api/courses/:cid/modules", getAllModules);
    app.get("/api/courses/:cid/modules/:id", getModuleById);
    app.delete("/api/modules/:id", deleteModule);
    app.put("/api/modules/:id", updateModule);
    app.post("/api/courses/:cid/modules", createModule);
}

