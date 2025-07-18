var size = 0;
var placement = 'point';

var style_AM_CONCEPCION_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "19.5px \'Impact\', sans-serif";
    var labelFill = "#e89a0a";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("COMUNA") !== null) {
        labelText = String(feature.get("COMUNA"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,132,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
