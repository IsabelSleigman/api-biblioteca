import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id",LivroController.buscaPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.editarLivro)

export default router;