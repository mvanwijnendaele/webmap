var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Statuut_1 = new ol.format.GeoJSON();
var features_Statuut_1 = format_Statuut_1.readFeatures(json_Statuut_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Statuut_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statuut_1.addFeatures(features_Statuut_1);
var lyr_Statuut_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Statuut_1, 
                style: style_Statuut_1,
                interactive: true,
    title: 'Statuut<br />\
    <img src="styles/legend/Statuut_1_0.png" /> Autorisé<br />\
    <img src="styles/legend/Statuut_1_1.png" /> Autorisé (En réalisation)<br />\
    <img src="styles/legend/Statuut_1_2.png" /> Avis de démarrage envoyé<br />\
    <img src="styles/legend/Statuut_1_3.png" /> Avis de démarrage envoyé (En réalisation)<br />\
    <img src="styles/legend/Statuut_1_4.png" /> Demande en attente d\'avis CCC<br />\
    <img src="styles/legend/Statuut_1_5.png" /> Demande retirée<br />\
    <img src="styles/legend/Statuut_1_6.png" /> Demande transmise<br />\
    <img src="styles/legend/Statuut_1_7.png" /> En coordination<br />\
    <img src="styles/legend/Statuut_1_8.png" /> Enregistré<br />\
    <img src="styles/legend/Statuut_1_9.png" /> Incomplet/Non conforme<br />\
    <img src="styles/legend/Statuut_1_10.png" /> Préparation de demande d\'autorisation<br />\
    <img src="styles/legend/Statuut_1_11.png" /> Programmé<br />\
    <img src="styles/legend/Statuut_1_12.png" /> Prorogation transmise<br />\
    <img src="styles/legend/Statuut_1_13.png" /> Refusé par défaut (En réalisation)<br />\
    <img src="styles/legend/Statuut_1_14.png" /> Renoncé<br />\
    <img src="styles/legend/Statuut_1_15.png" /> Renoncé (En réalisation)<br />\
    <img src="styles/legend/Statuut_1_16.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Statuut_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Statuut_1];
lyr_Statuut_1.set('fieldAliases', {'B1': 'B1', 'Nom': 'Nom', 'Statut': 'Statut', 'Benaming': 'Benaming', 'DELTAREF': 'DELTAREF', 'leidend ambtenaar': 'leidend ambtenaar', 'dienst': 'dienst', 'MILESTONES Programma(einde proces)': 'MILESTONES Programma(einde proces)', 'Prioriteitsniveau': 'Prioriteitsniveau', 'Risk': 'Risk', });
lyr_Statuut_1.set('fieldImages', {'B1': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'Benaming': 'TextEdit', 'DELTAREF': 'TextEdit', 'leidend ambtenaar': 'TextEdit', 'dienst': 'TextEdit', 'MILESTONES Programma(einde proces)': 'DateTime', 'Prioriteitsniveau': 'Range', 'Risk': 'TextEdit', });
lyr_Statuut_1.set('fieldLabels', {'B1': 'header label', 'Nom': 'no label', 'Statut': 'no label', 'Benaming': 'no label', 'DELTAREF': 'inline label', 'leidend ambtenaar': 'no label', 'dienst': 'no label', 'MILESTONES Programma(einde proces)': 'header label', 'Prioriteitsniveau': 'no label', 'Risk': 'header label', });
lyr_Statuut_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});