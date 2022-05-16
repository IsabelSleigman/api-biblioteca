import editoras from "../models/Editora.js";

class EditoraController{

    static listarEditoras = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        })
    }

    static buscaPorId = (req, res) => {
        const id = req.params.id;

        editoras.findById(id, (err, editora) => {
            if(err) {
                res.status(400).send({message: `${err} - Id não encontrado}`});
            }else{
                res.status(200).send(editora);
            }
        })
    }

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body);

        editora.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar editora.`})
            }
            else{
                res.status(201).send(editora.toJSON())
            }
        })
    }

    static editarEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'editora atualizado com sucesso!'});
            }else{
                res.status(500).send({message: `${err.message} - Falha ao editar editora.`});
            }
        })
    }

    static excluirEditora = (req, res) =>{
        const id = req.params.id;

        editoras.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'editora removido com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default EditoraController