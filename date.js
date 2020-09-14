
module.exports.setDate= setDate;

function setDate(){
    var today=new Date();

    var options={
      weekday : "long",
      day:"numeric",
      month:"long"
    };

    var day = today.toLocaleDateString("en-US",options);
    return day;
}

module.exports.setDay= setDay;
function setDay(){
    var today=new Date();

    var options={
      weekday : "long"
    } 

    var day = today.toLocaleDateString("en-US",options);
    return day;
}
