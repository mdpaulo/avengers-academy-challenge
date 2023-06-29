
const { createHero, findAllHeros, findHeroById, updateHero, deleteHero } = require('../service/heroService');

exports.create = async (request, response) => {
    validatePayload(request, response);
    try {
        const result = await createHero(request.body)
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send({
            message: error.message || "Unknow error occurred while creating the hero registry."
        });
    }
    
};

exports.findAll = (request, response) => {
    try {
        response.status(200).send(findAllHeros());
    } catch (error) {
        response.status(500).send({
            message: error.message || "Unknow error occurred while fetching hero data."
        });
    }
};

exports.findOne = (request, response) => {
    try {
        response.status(200).send(findHeroById(request.params.id));
    } catch (error) {
        response.status(500).send({
            message: error.message || "Unknow error occurred while fetching hero data."
        });
    }
};

exports.update = async (request, response) => {
    try {
        validatePayload(request, response)
        const result = await updateHero(request.body)
        response.status(201).send(result);
    } catch (error) {
        response.status(500).send({
            message: error.message || "Unknow error occurred while updating hero data."
        });
    }
};

exports.delete = (request, response) => {
    try {
        deleteHero(request.params.id);
        response.status(204).send();
    } catch (error) {
        response.status(500).send({
            message: error.message || "Unknow error occurred while deleting hero data."
        });
    }
};

function validatePayload(request, response){
    if(!request.body) {
        return response.status(400).send({
            message: "Hero data can not be empty"
        });
    }
}