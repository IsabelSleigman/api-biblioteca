import autores from "../models/Autor.js";

class AutorController{

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static buscaPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, Autor) => {
            if(err) {
                res.status(400).send({message: `${err} - Id não encontrado}`});
            }else{
                res.status(200).send(Autor);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor.`})
            }
            else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static editarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso!'});
            }else{
                res.status(500).send({message: `${err.message} - Falha ao editar Autor.`});
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController