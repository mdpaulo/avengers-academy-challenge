function OccurrenceDAO(connection){
    this._connection = connection;
}

OccurrenceDAO.prototype.getByStatus = function(status,callback){
    this._connection.query("select * from occurrence where status = ? ", status, callback);
}

OccurrenceDAO.prototype.saveOccurrence = function(ocurrenceNotify, callback){
    var sql = "insert into occurrence (latitude,longitude,dangerlevel,monstername) values ('?','?',?,?)";
    var data =[ocurrenceNotify.location[0].lat, ocurrenceNotify.location[0].lng , ocurrenceNotify.dangerLevel,ocurrenceNotify.monsterName]
    this._connection.query(sql, data, callback);
}

module.exports = function(){
    return OccurrenceDAO;
}