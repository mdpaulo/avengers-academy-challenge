const Hero = require('../entities/hero/heroSchema');

function createHero(heroData){
    const hero = new Hero(heroData);    
    hero.save()
    .then(data => {
        return data;
    }).catch(error => {
        throw Error(`Error creating hero registry: ${error.message}`);
    });
}

function findAllHeros(){
    Hero.find()
    .then(data => {
        return data;
    }).catch(error => {
        throw Error('Failed to retrive hero data')
    })
}

function findHeroById(id){
    Hero.find(id)
    .then(data =>{ 
        if(!data) return undefined;
        return data;
    }).catch(error => {
        throw Error(`Error searching for hero with id: ${id}`);
    })
}

function updateHero(heroData){
    if(!heroData) throw Error(`Error: Hero data must be present! Received: ${heroData}`);
    const newData = {
        codeName: heroData.codeName,
        rank: heroData.rank,
        acceptSokoviaAccords: heroData.acceptSokoviaAccords,
        active: heroData.active
    };
    Hero.updateOne(heroData.id, newData, {new: true})
    .then(data => { 
        return data
    })
    .catch(error => { 
        throw Error(`Error: Failed to update hero data: ${error.message}`)
    });
}

function deleteHero(id){
    Hero.deleteOne(id)
    .then(data => {
        if(!data) return undefined;
    }).catch(error => { 
        throw Error(`Error: Failed to delete hero data: ${error.message}`)
    });
}

module.exports = {
    createHero,
    findAllHeros,
    findHeroById,
    updateHero,
    deleteHero
}