let lat1 = 28.3741597;
let lat2 = 28.589528;
let lon1 = -81.42769529999998;
let lon2 = -81.19995599999999;

Number.prototype.toRad = function() {
   return this * Math.PI / 180;
};

//-- Define degrees function
if (typeof (Number.prototype.toDeg) === "undefined") {
    Number.prototype.toDeg = function () {
        return this * (180 / Math.PI);
    };
}


function distance(lat1,lat2,lon1,lon2){
  let R = 6371;
  let dLat = (lat2-lat1).toRad();
  let dLon = (lon2-lon1).toRad();
  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  let d = R * c;

  return d;
}


function middlePoint(lat1, lng1, lat2, lng2) {

    //-- Longitude difference
    var dLng = (lng2 - lng1).toRad();

    //-- Convert to radians
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
    lng1 = lng1.toRad();

    var bX = Math.cos(lat2) * Math.cos(dLng);
    var bY = Math.cos(lat2) * Math.sin(dLng);
    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY));
    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

    //-- Return result
    return [lng3.toDeg(), lat3.toDeg()];
}

console.log(distance(lat1, lat2, lon1,lon2),middlePoint(lat1,lon1,lat2,lon2));
