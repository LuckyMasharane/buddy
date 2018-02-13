function calDistance(coords, location){
   
        var lat1 = coords.latitude;
        var lon1 = coords.longitude;
        var lat2 = location[0];
        var lon2 = location[1];
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        dist = dist * 1.609344;
        console.log(dist.toFixed(1));
        return dist.toFixed(1);
}

export { calDistance };