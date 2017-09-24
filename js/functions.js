function converter() {
    //Latitude
    var longitudeGraus = parseFloat(document.getElementById("longGraus").value);
    var longitudeMinutos = parseFloat(document.getElementById("longMinutos").value);
    var longitudeSegundos = parseFloat(document.getElementById("longSegundos").value);

    var longitudeUTM = longitudeGraus + (longitudeMinutos/60) + (longitudeSegundos/3600);
    var longitude = arredondar(longitudeUTM, 6);
    console.log(longitude);

    //Longitude
    var latitudeGraus = parseFloat(document.getElementById("latGraus").value);
    var latitudeMinutos = parseFloat(document.getElementById("latMinutos").value);
    var latitudeSegundos = parseFloat(document.getElementById("latSegundos").value);

    var latitudeUTM = latitudeGraus + (latitudeMinutos/60) + (latitudeSegundos/3600);
    var latitude = arredondar(latitudeUTM, 6);
    console.log(latitude);

    var stringCodigo = 
    "## create an empty memory layer" + "\n" +
    "layer = iface.activeLayer()" + "\n" +
    "newlayer =  QgsVectorLayer('Point?crs=epsg:4326', 'point_layer' , \"memory\")" + "\n" +
    "pr = newlayer.dataProvider()" + "\n" +
    "ft = QgsFeature()" + "\n" +
    "## set the geometry defined from the point X: -60, Y: -6" + "\n" +
    "ft.setGeometry(QgsGeometry.fromPoint(QgsPoint("+longitude+", "+latitude+")))" + "\n" +
    "## finally insert the feature" + "\n" +
    "pr.addFeatures([ft])" + "\n" +
    "## add layer to the registry and over the map canvas" + "\n" +
    "QgsMapLayerRegistry.instance().addMapLayer(newlayer)";

    document.getElementById("codigo").textContent = stringCodigo;
    alert(stringCodigo);
    console.log(stringCodigo);

    return false;
}

function arredondar(valor, casas) { 
    var aux = Math.pow(10, casas);
    return Math.floor(valor * aux)/aux;
 }