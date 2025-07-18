ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.890943, -37.465235, -71.767448, -36.305329]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AM_CONCEPCION_1 = new ol.format.GeoJSON();
var features_AM_CONCEPCION_1 = format_AM_CONCEPCION_1.readFeatures(json_AM_CONCEPCION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AM_CONCEPCION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AM_CONCEPCION_1.addFeatures(features_AM_CONCEPCION_1);
var lyr_AM_CONCEPCION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AM_CONCEPCION_1, 
                style: style_AM_CONCEPCION_1,
                popuplayertitle: 'AM_CONCEPCION',
                interactive: true,
                title: '<img src="styles/legend/AM_CONCEPCION_1.png" /> AM_CONCEPCION'
            });
var format_20BARRIOS_ASOCIADOS_2 = new ol.format.GeoJSON();
var features_20BARRIOS_ASOCIADOS_2 = format_20BARRIOS_ASOCIADOS_2.readFeatures(json_20BARRIOS_ASOCIADOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_20BARRIOS_ASOCIADOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20BARRIOS_ASOCIADOS_2.addFeatures(features_20BARRIOS_ASOCIADOS_2);
var lyr_20BARRIOS_ASOCIADOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20BARRIOS_ASOCIADOS_2, 
                style: style_20BARRIOS_ASOCIADOS_2,
                popuplayertitle: '20BARRIOS_ASOCIADOS',
                interactive: true,
                title: '<img src="styles/legend/20BARRIOS_ASOCIADOS_2.png" /> 20BARRIOS_ASOCIADOS'
            });
var format_SITIOS_SELEC_3 = new ol.format.GeoJSON();
var features_SITIOS_SELEC_3 = format_SITIOS_SELEC_3.readFeatures(json_SITIOS_SELEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SITIOS_SELEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITIOS_SELEC_3.addFeatures(features_SITIOS_SELEC_3);
var lyr_SITIOS_SELEC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SITIOS_SELEC_3, 
                style: style_SITIOS_SELEC_3,
                popuplayertitle: 'SITIOS_SELEC',
                interactive: true,
                title: '<img src="styles/legend/SITIOS_SELEC_3.png" /> SITIOS_SELEC'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AM_CONCEPCION_1.setVisible(true);lyr_20BARRIOS_ASOCIADOS_2.setVisible(true);lyr_SITIOS_SELEC_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AM_CONCEPCION_1,lyr_20BARRIOS_ASOCIADOS_2,lyr_SITIOS_SELEC_3];
lyr_AM_CONCEPCION_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_20BARRIOS_ASOCIADOS_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_SITIOS_SELEC_3.set('fieldAliases', {'Name': 'Name', 'visibility': 'visibility', 'X_coord': 'X_coord', 'Y_coord': 'Y_coord', 'AsistAnual': 'AsistAnual', 'Ninos': 'Ninos', 'Adultos': 'Adultos', 'Hombres': 'Hombres', 'Mujeres': 'Mujeres', 'Video': 'Video', });
lyr_AM_CONCEPCION_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_20BARRIOS_ASOCIADOS_2.set('fieldImages', {'Id': 'TextEdit', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'TextEdit', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_SITIOS_SELEC_3.set('fieldImages', {'Name': 'TextEdit', 'visibility': 'TextEdit', 'X_coord': 'TextEdit', 'Y_coord': 'TextEdit', 'AsistAnual': 'TextEdit', 'Ninos': 'TextEdit', 'Adultos': 'TextEdit', 'Hombres': 'TextEdit', 'Mujeres': 'TextEdit', 'Video': 'TextEdit', });
lyr_AM_CONCEPCION_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_20BARRIOS_ASOCIADOS_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_SITIOS_SELEC_3.set('fieldLabels', {'Name': 'no label', 'visibility': 'inline label - always visible', 'X_coord': 'inline label - always visible', 'Y_coord': 'inline label - always visible', 'AsistAnual': 'inline label - visible with data', 'Ninos': 'inline label - always visible', 'Adultos': 'inline label - always visible', 'Hombres': 'inline label - always visible', 'Mujeres': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_SITIOS_SELEC_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});