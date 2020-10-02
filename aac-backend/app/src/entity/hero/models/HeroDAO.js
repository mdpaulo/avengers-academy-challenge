function HeroDAO(connection){
    this._connection = connection;
}

HeroDAO.prototype.getAllHeros = function(callback){
    this._connection.query("select * from avengers", callback);
}

HeroDAO.prototype.getById = function(id, callback){
    this._connection.query("select * from avengers where id = ?", id, callback);
}

HeroDAO.prototype.saveHeroInfo = function(avengerinfo, callback){
    this._connection.query("insert into avengers set ?", avengerinfo, callback);
}

HeroDAO.prototype.updateHeroInfo = function(avengerinfo, callback){
    var sql = "update avengers set codename = ?, arank = ?, latitude= ?, longitude= ?, status= ? where id= ?";
    var data =[avengerinfo.codename, avengerinfo.arank ,avengerinfo.latitude ,avengerinfo.longitude , avengerinfo.status, avengerinfo.id]
    this._connection.query(sql, data, callback);
}

HeroDAO.prototype.deleteHeroInfo = function(id, callback){
    this._connection.query("delete from avengers where id = ?", id, callback);    
}

module.exports = function(){
    return HeroDAO;
}