
const Hero = require('../entities/hero/heroSchema');

exports.create = (request, response) => {
    const newData = validatePayload(request.body);
    const hero = new Hero(newData);
    hero.save(newData)
    .then(data => {
        response.status(200).send(data);
        return ;
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Unknow error occurred while creating the hero registry."
        });
    });
};

exports.findAll = (request, response) => {
    Hero.find()
    .then(data => {
        response.status(200).send(data);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Unknow error occurred while fetching hero data."
        });
    });
};

exports.findById = (request, response) => {
    Hero.findById(request.params.id)
    .then(data =>{         
        if(data){
            response.status(200).send(data);
        } else {
            response.status(404).send({message: `hero with id ${request.params.id} not found!`});
        }
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Unknow error occurred while fetching hero data."
        });
    });
};

exports.update = (request, response) => {
    const newData = validatePayload(request.body);
    Hero.findByIdAndUpdate(request.params.id, newData, {new: true})
    .then(data => {
        if(data){
            response.status(201).send(data);
        } else {
            response.status(404).send({message: `hero with id ${request.params.id} not found!`});
        }
    })
    .catch(error => { 
        response.status(500).send({
            message: error.message || "Unknow error occurred while updating hero data."
        });
    });
};

exports.delete = (request, response) => {
    Hero.findByIdAndRemove(request.params.id)
    .then(data => {
        response.status(204).send();
    }).catch(error => { 
        response.status(500).send({
            message: error.message || "Unknow error occurred while deleting hero data."
        });
    });
};

function validatePayload(data){
    const newData = {
        codeName: data.codeName ? data.codeName : undefined,
        rank: data.rank ? data.rank : undefined, 
        acceptSokoviaAccords: data.acceptSokoviaAccords ? data.acceptSokoviaAccords : undefined,
        active: data.active ? data.active : undefined
    }
    return newData;
}