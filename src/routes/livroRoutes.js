import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
    .get("/livro", LivroController.listarLivros)
    .get("/livro/:id",LivroController.buscaPorId)
    .post("/livro", LivroController.cadastrarLivro)
    .put("/livro/:id", LivroController.editarLivro)
    .delete("/livro/:id",LivroController.excluirLivro)

export default router;