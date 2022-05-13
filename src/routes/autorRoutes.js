import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

router
    .get("/autor", AutorController.listarAutores)
    .get("/autor/:id",AutorController.buscaPorId)
    .post("/autor", AutorController.cadastrarAutor)
    .put("/autor/:id", AutorController.editarAutor)
    .delete("/autor/:id",AutorController.excluirAutor)

export default router;