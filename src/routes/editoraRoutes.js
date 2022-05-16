import express from "express";
import EditoraController from "../controllers/editoraController.js";

const router = express.Router();

router
    .get("/editora", EditoraController.listarEditoras)
    .get("/editora/:id",EditoraController.buscaPorId)
    .post("/editora", EditoraController.cadastrarEditora)
    .put("/editora/:id", EditoraController.editarEditora)
    .delete("/editora/:id",EditoraController.excluirEditora)

export default router;