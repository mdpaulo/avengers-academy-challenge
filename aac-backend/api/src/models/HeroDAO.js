function HeroDAO(connection){
    this._connection = connection;
}

HeroDAO.prototype.getAllHeros = function(callback){
    this._connection.query("select * from avengers", callback);
}

HeroDAO.prototype.saveHeroInfo = function(avengerinfo, callback){
    this._connection.query("insert into avengers set ?", avengerinfo, callback);
}

HeroDAO.prototype.updateHeroInfo = function(avengerinfo, callback){
    var result = this._connection.query("select id from avengers where id = ?", avengerinfo.id);
    if(result.rows == avengerinfo.id){
        var sql = "update avengers set codename = ?, arank = ?, latitude= ?, longitude= ?, status= ? where id= ?";
        var data =[avengerinfo.codename, avengerinfo.arank ,avengerinfo.latitude ,avengerinfo.longitude , avengerinfo.status, avengerinfo.id]
        this._connection.query(sql, data, callback);
    }else{
        return null;
    }
    
}

HeroDAO.prototype.deleteHeroInfo = function(avengerinfo, callback){
    var result = this._connection.query("select id from avengers where id = ?", avengerinfo.id);
    if(result.rows == avengerinfo.id){
        this._connection.query("delete from avengers where id = ?", avengerinfo.id, callback);
    }else{
        return null;
    }
}

module.exports = function(){
    return HeroDAO;
}