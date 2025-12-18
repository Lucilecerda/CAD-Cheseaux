var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_DonnesdesbtimentsRomanel_1 = new ol.format.GeoJSON();
var features_DonnesdesbtimentsRomanel_1 = format_DonnesdesbtimentsRomanel_1.readFeatures(json_DonnesdesbtimentsRomanel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DonnesdesbtimentsRomanel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DonnesdesbtimentsRomanel_1.addFeatures(features_DonnesdesbtimentsRomanel_1);
var lyr_DonnesdesbtimentsRomanel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DonnesdesbtimentsRomanel_1, 
                style: style_DonnesdesbtimentsRomanel_1,
                popuplayertitle: 'Données des bâtiments Romanel',
                interactive: true,
    title: 'Données des bâtiments Romanel<br />\
    <img src="styles/legend/DonnesdesbtimentsRomanel_1_0.png" /> Chauffage à distance<br />\
    <img src="styles/legend/DonnesdesbtimentsRomanel_1_1.png" /> Fossile<br />\
    <img src="styles/legend/DonnesdesbtimentsRomanel_1_2.png" /> Pompe à chaleur<br />\
    <img src="styles/legend/DonnesdesbtimentsRomanel_1_3.png" /> Renouvelable<br />\
    <img src="styles/legend/DonnesdesbtimentsRomanel_1_4.png" /> <br />' });
var format_AmenagementcommunauxRomanel_2 = new ol.format.GeoJSON();
var features_AmenagementcommunauxRomanel_2 = format_AmenagementcommunauxRomanel_2.readFeatures(json_AmenagementcommunauxRomanel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmenagementcommunauxRomanel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmenagementcommunauxRomanel_2.addFeatures(features_AmenagementcommunauxRomanel_2);
var lyr_AmenagementcommunauxRomanel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmenagementcommunauxRomanel_2, 
                style: style_AmenagementcommunauxRomanel_2,
                popuplayertitle: 'Amenagement communaux Romanel',
                interactive: true,
                title: '<img src="styles/legend/AmenagementcommunauxRomanel_2.png" /> Amenagement communaux Romanel'
            });
var format_InformationroutesRomanel_3 = new ol.format.GeoJSON();
var features_InformationroutesRomanel_3 = format_InformationroutesRomanel_3.readFeatures(json_InformationroutesRomanel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InformationroutesRomanel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InformationroutesRomanel_3.addFeatures(features_InformationroutesRomanel_3);
var lyr_InformationroutesRomanel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InformationroutesRomanel_3, 
                style: style_InformationroutesRomanel_3,
                popuplayertitle: 'Information routes Romanel',
                interactive: true,
    title: 'Information routes Romanel<br />\
    <img src="styles/legend/InformationroutesRomanel_3_0.png" /> Travaux achevés<br />\
    <img src="styles/legend/InformationroutesRomanel_3_1.png" /> Travaux à venir<br />' });
var format_Statutcommercialisationdonnesbaseewz_4 = new ol.format.GeoJSON();
var features_Statutcommercialisationdonnesbaseewz_4 = format_Statutcommercialisationdonnesbaseewz_4.readFeatures(json_Statutcommercialisationdonnesbaseewz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Statutcommercialisationdonnesbaseewz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statutcommercialisationdonnesbaseewz_4.addFeatures(features_Statutcommercialisationdonnesbaseewz_4);
var lyr_Statutcommercialisationdonnesbaseewz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Statutcommercialisationdonnesbaseewz_4, 
                style: style_Statutcommercialisationdonnesbaseewz_4,
                popuplayertitle: 'Statut commercialisation (données base ewz)',
                interactive: true,
    title: 'Statut commercialisation (données base ewz)<br />\
    <img src="styles/legend/Statutcommercialisationdonnesbaseewz_4_0.png" /> En cours<br />\
    <img src="styles/legend/Statutcommercialisationdonnesbaseewz_4_1.png" /> Envoyé pour signature<br />\
    <img src="styles/legend/Statutcommercialisationdonnesbaseewz_4_2.png" /> Signé<br />\
    <img src="styles/legend/Statutcommercialisationdonnesbaseewz_4_3.png" /> Refus<br />' });
var format_Parcelles_5 = new ol.format.GeoJSON();
var features_Parcelles_5 = format_Parcelles_5.readFeatures(json_Parcelles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_5.addFeatures(features_Parcelles_5);
var lyr_Parcelles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_5, 
                style: style_Parcelles_5,
                popuplayertitle: 'Parcelles',
                interactive: true,
                title: '<img src="styles/legend/Parcelles_5.png" /> Parcelles'
            });
var format_Etiquettesdesparcelles_6 = new ol.format.GeoJSON();
var features_Etiquettesdesparcelles_6 = format_Etiquettesdesparcelles_6.readFeatures(json_Etiquettesdesparcelles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etiquettesdesparcelles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etiquettesdesparcelles_6.addFeatures(features_Etiquettesdesparcelles_6);
var lyr_Etiquettesdesparcelles_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etiquettesdesparcelles_6, 
                style: style_Etiquettesdesparcelles_6,
                popuplayertitle: 'Etiquettes des parcelles',
                interactive: true,
                title: 'Etiquettes des parcelles'
            });
var format_Btimentenprojet_7 = new ol.format.GeoJSON();
var features_Btimentenprojet_7 = format_Btimentenprojet_7.readFeatures(json_Btimentenprojet_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btimentenprojet_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btimentenprojet_7.addFeatures(features_Btimentenprojet_7);
var lyr_Btimentenprojet_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btimentenprojet_7, 
                style: style_Btimentenprojet_7,
                popuplayertitle: 'Bâtiment en projet',
                interactive: true,
                title: '<img src="styles/legend/Btimentenprojet_7.png" /> Bâtiment en projet'
            });
var format_Btimentshorssol_8 = new ol.format.GeoJSON();
var features_Btimentshorssol_8 = format_Btimentshorssol_8.readFeatures(json_Btimentshorssol_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btimentshorssol_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btimentshorssol_8.addFeatures(features_Btimentshorssol_8);
var lyr_Btimentshorssol_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btimentshorssol_8, 
                style: style_Btimentshorssol_8,
                popuplayertitle: 'Bâtiments hors sol',
                interactive: true,
                title: '<img src="styles/legend/Btimentshorssol_8.png" /> Bâtiments hors sol'
            });
var format_Btimentssoussol_9 = new ol.format.GeoJSON();
var features_Btimentssoussol_9 = format_Btimentssoussol_9.readFeatures(json_Btimentssoussol_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btimentssoussol_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btimentssoussol_9.addFeatures(features_Btimentssoussol_9);
var lyr_Btimentssoussol_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btimentssoussol_9, 
                style: style_Btimentssoussol_9,
                popuplayertitle: 'Bâtiments sous-sol',
                interactive: true,
                title: '<img src="styles/legend/Btimentssoussol_9.png" /> Bâtiments sous-sol'
            });
var group_CadastreMensurationofficielle = new ol.layer.Group({
                                layers: [lyr_Parcelles_5,lyr_Etiquettesdesparcelles_6,lyr_Btimentenprojet_7,lyr_Btimentshorssol_8,lyr_Btimentssoussol_9,],
                                fold: 'close',
                                title: 'Cadastre - Mensuration officielle'});
var group_MO_BF_PARCELLE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE'});
var group_MO_BF_PARCELLE_COMMUNE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_COMMUNE'});
var group_MO_BF_PARCELLE_COMMUNE_NO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_COMMUNE_NO'});
var group_MO_BF_PARCELLE_DDP_COMMUNE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_DDP_COMMUNE'});
var group_MO_BF_PARCELLE_DDP_COMMUNE_NO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_DDP_COMMUNE_NO'});
var group_MO_BF_PARCELLE_DP = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_DP'});
var group_MO_BF_PARCELLE_DP_NO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_DP_NO'});
var group_MO_BF_PARCELLE_NO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_BF_PARCELLE_NO'});
var group_MO_CS_BATIMENT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_BATIMENT'});
var group_MO_CS_BATIMENT_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_BATIMENT_H'});
var group_MO_CS_COULEUR_ACCES_PLACE_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_ACCES_PLACE_H'});
var group_MO_CS_COULEUR_CHAMP_PRE_PATURAGE_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_CHAMP_PRE_PATURAGE_H'});
var group_MO_CS_COULEUR_CHEMIN_FER_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_CHEMIN_FER_H'});
var group_MO_CS_COULEUR_EAU_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_EAU_H'});
var group_MO_CS_COULEUR_FORET_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_FORET_H'});
var group_MO_CS_COULEUR_ILOT_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_ILOT_H'});
var group_MO_CS_COULEUR_JARDIN_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_JARDIN_H'});
var group_MO_CS_COULEUR_ROUTE_CHEMIN_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_ROUTE_CHEMIN_H'});
var group_MO_CS_COULEUR_TROTTOIR_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_COULEUR_TROTTOIR_H'});
var group_MO_CS_FORET_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_FORET_H'});
var group_MO_CS_LIMITE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_LIMITE'});
var group_MO_CS_OD_ECA_NO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_OD_ECA_NO'});
var group_MO_CS_TEXTE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_CS_TEXTE'});
var group_MO_DivAdm_PLAN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_DivAdm_PLAN'});
var group_MO_DivAdm_PLAN_CACHE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_DivAdm_PLAN_CACHE'});
var group_MO_LimTer_COMMUNE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_LimTer_COMMUNE'});
var group_MO_LimTer_COMMUNE_CACHE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_LimTer_COMMUNE_CACHE'});
var group_MO_OD_AUTRE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_AUTRE'});
var group_MO_OD_AUTRE_CORPS_BATIMENT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_AUTRE_CORPS_BATIMENT'});
var group_MO_OD_BATIMENT_SOUT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_BATIMENT_SOUT'});
var group_MO_OD_BATIMENT_SOUT_H = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_BATIMENT_SOUT_H'});
var group_MO_OD_COUVERT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_COUVERT'});
var group_MO_OD_EAU_LS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_EAU_LS'});
var group_MO_OD_MUR = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_MUR'});
var group_MO_OD_PISCINE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_PISCINE'});
var group_MO_OD_PONT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_PONT'});
var group_MO_OD_SENTIER = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_SENTIER'});
var group_MO_OD_TEXTE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_TEXTE'});
var group_MO_OD_VOIE_FERREE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_OD_VOIE_FERREE'});
var group_TT_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TT_3d'});
var group_TT_conduite = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TT_conduite'});
var group_TT_conduite_HS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TT_conduite_HS'});
var group_TT_label = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TT_label'});
var group_TT_trame = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TT_trame'});
var group_Commercialisation = new ol.layer.Group({
                                layers: [lyr_Statutcommercialisationdonnesbaseewz_4,],
                                fold: 'close',
                                title: 'Commercialisation'});
var group_Infrastructuresettravaux = new ol.layer.Group({
                                layers: [lyr_AmenagementcommunauxRomanel_2,lyr_InformationroutesRomanel_3,],
                                fold: 'close',
                                title: 'Infrastructures et travaux'});
var group_Donnesdebasebtiments = new ol.layer.Group({
                                layers: [lyr_DonnesdesbtimentsRomanel_1,],
                                fold: 'close',
                                title: 'Données de base bâtiments'});
var group_fonddecarte = new ol.layer.Group({
                                layers: [lyr_Positronretina_0,],
                                fold: 'close',
                                title: 'fond de carte'});

lyr_Positronretina_0.setVisible(true);lyr_DonnesdesbtimentsRomanel_1.setVisible(true);lyr_AmenagementcommunauxRomanel_2.setVisible(true);lyr_InformationroutesRomanel_3.setVisible(true);lyr_Statutcommercialisationdonnesbaseewz_4.setVisible(true);lyr_Parcelles_5.setVisible(true);lyr_Etiquettesdesparcelles_6.setVisible(true);lyr_Btimentenprojet_7.setVisible(true);lyr_Btimentshorssol_8.setVisible(true);lyr_Btimentssoussol_9.setVisible(true);
var layersList = [group_fonddecarte,group_Donnesdebasebtiments,group_Infrastructuresettravaux,group_Commercialisation,group_CadastreMensurationofficielle];
lyr_DonnesdesbtimentsRomanel_1.set('fieldAliases', {'fid': 'fid', 'egid': 'egid', 'egrid': 'egrid', 'Classe bât': 'Classe bât', 'Année de construction': 'Année de construction', 'Etages': 'Etages', 'Nombre de logements': 'Nombre de logements', 'Source de chauffage 1': 'Source de chauffage 1', 'Source de chauffage 2': 'Source de chauffage 2', 'Source de chaleur eau chaude 1': 'Source de chaleur eau chaude 1', 'Source de chaleur eau chaude 2': 'Source de chaleur eau chaude 2', 'Type de bâtiment': 'Type de bâtiment', 'Classe de vecteur énergétique': 'Classe de vecteur énergétique', 'SRE': 'SRE', 'Intérêt': 'Intérêt', 'Commentaire': 'Commentaire', 'ObjectId': 'ObjectId', 'Shape__Are': 'Shape__Are', 'Creator': 'Creator', 'perimeter2': 'perimeter2', 'kwh_updated': 'kwh_updated', 'kW_updated': 'kW_updated', 'N° parcelle': 'N° parcelle', 'Adresse': 'Adresse', });
lyr_AmenagementcommunauxRomanel_2.set('fieldAliases', {'fid': 'fid', 'Type d\'aménagement': 'Type d\'aménagement', 'Année': 'Année', 'Raccordement possible': 'Raccordement possible', });
lyr_InformationroutesRomanel_3.set('fieldAliases', {'fid': 'fid', 'Année': 'Année', 'Projet': 'Projet', 'Emplacement': 'Emplacement', 'Achevé': 'Achevé', });
lyr_Statutcommercialisationdonnesbaseewz_4.set('fieldAliases', {'fid': 'fid', 'egid': 'egid', 'egrid': 'egrid', 'Classe bât': 'Classe bât', 'Année de construction': 'Année de construction', 'Etages': 'Etages', 'Nombre de logements': 'Nombre de logements', 'Source de chauffage 1': 'Source de chauffage 1', 'Source de chauffage 2': 'Source de chauffage 2', 'Source de chaleur eau chaude 1': 'Source de chaleur eau chaude 1', 'Source de chaleur eau chaude 2': 'Source de chaleur eau chaude 2', 'Type de bâtiment': 'Type de bâtiment', 'Classe de vecteur énergétique': 'Classe de vecteur énergétique', 'SRE': 'SRE', 'Intérêt': 'Intérêt', 'Commentaire': 'Commentaire', 'ObjectId': 'ObjectId', 'Shape__Are': 'Shape__Are', 'Creator': 'Creator', 'perimeter2': 'perimeter2', 'kwh_updated': 'kwh_updated', 'kW_updated': 'kW_updated', 'Statut de commercialisation': 'Statut de commercialisation', 'Propriétaire': 'Propriétaire', 'Date de raccordement ': 'Date de raccordement ', 'Puissance contractualisable (kW)': 'Puissance contractualisable (kW)', 'N° Contrat': 'N° Contrat', 'Cout de raccordement (CHF)': 'Cout de raccordement (CHF)', 'Abonnement puissance (CHF/an)': 'Abonnement puissance (CHF/an)', 'Adresse': 'Adresse', 'N° parcelle': 'N° parcelle', });
lyr_Parcelles_5.set('fieldAliases', {'EGRIS_EGRI': 'EGRIS_EGRI', 'GENRE': 'GENRE', 'GENRE_TXT': 'GENRE_TXT', 'ID': 'ID', 'IDENTDN': 'IDENTDN', 'IDEX2000': 'IDEX2000', 'INTEGRAL_C': 'INTEGRAL_C', 'INTEGRAL_T': 'INTEGRAL_T', 'NUMERO': 'NUMERO', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'SUPERFICIE': 'SUPERFICIE', 'SUPERF_RF': 'SUPERF_RF', 'SUPERF_TOT': 'SUPERF_TOT', 'VALIDITE': 'VALIDITE', 'VALIDITE_T': 'VALIDITE_T', });
lyr_Etiquettesdesparcelles_6.set('fieldAliases', {'ID': 'ID', 'LABEL_TEXT': 'LABEL_TEXT', 'NUMERO': 'NUMERO', 'ORIENTATIO': 'ORIENTATIO', });
lyr_Btimentenprojet_7.set('fieldAliases', {'DATE1': 'DATE1', 'DESIGNATIO': 'DESIGNATIO', 'EN_VIGUEUR': 'EN_VIGUEUR', 'GENRE_TXT': 'GENRE_TXT', 'IDENTDN': 'IDENTDN', 'IDENTIFICA': 'IDENTIFICA', 'NOM': 'NOM', 'NUMERO': 'NUMERO', 'QUALITE_TX': 'QUALITE_TX', 'REGBL_EGID': 'REGBL_EGID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'VALIDITE_T': 'VALIDITE_T', });
lyr_Btimentshorssol_8.set('fieldAliases', {'DESIGNAT_C': 'DESIGNAT_C', 'DESIGNAT_T': 'DESIGNAT_T', 'GENRE': 'GENRE', 'GENRE_TXT': 'GENRE_TXT', 'ID': 'ID', 'IDENTDN': 'IDENTDN', 'NUMERO': 'NUMERO', 'QUALITE': 'QUALITE', 'QUALITE_TX': 'QUALITE_TX', 'REGBL_EGID': 'REGBL_EGID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Btimentssoussol_9.set('fieldAliases', {'DESIGNAT_C': 'DESIGNAT_C', 'DESIGNAT_T': 'DESIGNAT_T', 'ID': 'ID', 'NUMERO': 'NUMERO', 'QUALITE': 'QUALITE', 'QUALITE_TX': 'QUALITE_TX', 'REGBL_EGID': 'REGBL_EGID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_DonnesdesbtimentsRomanel_1.set('fieldImages', {'fid': 'TextEdit', 'egid': 'TextEdit', 'egrid': 'TextEdit', 'Classe bât': 'TextEdit', 'Année de construction': 'Range', 'Etages': 'Range', 'Nombre de logements': 'Range', 'Source de chauffage 1': 'TextEdit', 'Source de chauffage 2': 'TextEdit', 'Source de chaleur eau chaude 1': 'TextEdit', 'Source de chaleur eau chaude 2': 'TextEdit', 'Type de bâtiment': 'TextEdit', 'Classe de vecteur énergétique': 'TextEdit', 'SRE': 'TextEdit', 'Intérêt': 'TextEdit', 'Commentaire': 'TextEdit', 'ObjectId': 'TextEdit', 'Shape__Are': 'TextEdit', 'Creator': 'TextEdit', 'perimeter2': 'Range', 'kwh_updated': 'Range', 'kW_updated': 'Range', 'N° parcelle': 'Range', 'Adresse': 'TextEdit', });
lyr_AmenagementcommunauxRomanel_2.set('fieldImages', {'fid': 'TextEdit', 'Type d\'aménagement': 'TextEdit', 'Année': 'TextEdit', 'Raccordement possible': 'CheckBox', });
lyr_InformationroutesRomanel_3.set('fieldImages', {'fid': 'TextEdit', 'Année': 'TextEdit', 'Projet': 'TextEdit', 'Emplacement': 'TextEdit', 'Achevé': 'CheckBox', });
lyr_Statutcommercialisationdonnesbaseewz_4.set('fieldImages', {'fid': 'TextEdit', 'egid': 'TextEdit', 'egrid': 'TextEdit', 'Classe bât': 'TextEdit', 'Année de construction': 'Range', 'Etages': 'Range', 'Nombre de logements': 'Range', 'Source de chauffage 1': 'TextEdit', 'Source de chauffage 2': 'TextEdit', 'Source de chaleur eau chaude 1': 'TextEdit', 'Source de chaleur eau chaude 2': 'TextEdit', 'Type de bâtiment': 'TextEdit', 'Classe de vecteur énergétique': 'TextEdit', 'SRE': 'TextEdit', 'Intérêt': 'TextEdit', 'Commentaire': 'TextEdit', 'ObjectId': 'TextEdit', 'Shape__Are': 'TextEdit', 'Creator': 'TextEdit', 'perimeter2': 'Range', 'kwh_updated': 'Range', 'kW_updated': 'Range', 'Statut de commercialisation': 'TextEdit', 'Propriétaire': 'TextEdit', 'Date de raccordement ': 'DateTime', 'Puissance contractualisable (kW)': 'Range', 'N° Contrat': 'TextEdit', 'Cout de raccordement (CHF)': 'Range', 'Abonnement puissance (CHF/an)': 'Range', 'Adresse': 'TextEdit', 'N° parcelle': 'Range', });
lyr_Parcelles_5.set('fieldImages', {'EGRIS_EGRI': 'TextEdit', 'GENRE': 'TextEdit', 'GENRE_TXT': 'TextEdit', 'ID': 'TextEdit', 'IDENTDN': 'TextEdit', 'IDEX2000': 'TextEdit', 'INTEGRAL_C': 'TextEdit', 'INTEGRAL_T': 'TextEdit', 'NUMERO': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUPERF_RF': 'TextEdit', 'SUPERF_TOT': 'TextEdit', 'VALIDITE': 'TextEdit', 'VALIDITE_T': 'TextEdit', });
lyr_Etiquettesdesparcelles_6.set('fieldImages', {'ID': 'TextEdit', 'LABEL_TEXT': 'TextEdit', 'NUMERO': 'TextEdit', 'ORIENTATIO': 'TextEdit', });
lyr_Btimentenprojet_7.set('fieldImages', {'DATE1': '', 'DESIGNATIO': '', 'EN_VIGUEUR': '', 'GENRE_TXT': '', 'IDENTDN': '', 'IDENTIFICA': '', 'NOM': '', 'NUMERO': '', 'QUALITE_TX': '', 'REGBL_EGID': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', 'VALIDITE_T': '', });
lyr_Btimentshorssol_8.set('fieldImages', {'DESIGNAT_C': '', 'DESIGNAT_T': '', 'GENRE': '', 'GENRE_TXT': '', 'ID': '', 'IDENTDN': '', 'NUMERO': '', 'QUALITE': '', 'QUALITE_TX': '', 'REGBL_EGID': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Btimentssoussol_9.set('fieldImages', {'DESIGNAT_C': 'TextEdit', 'DESIGNAT_T': 'TextEdit', 'ID': 'TextEdit', 'NUMERO': 'TextEdit', 'QUALITE': 'TextEdit', 'QUALITE_TX': 'TextEdit', 'REGBL_EGID': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_DonnesdesbtimentsRomanel_1.set('fieldLabels', {'fid': 'hidden field', 'egid': 'header label - always visible', 'egrid': 'hidden field', 'Classe bât': 'header label - always visible', 'Année de construction': 'header label - always visible', 'Etages': 'header label - always visible', 'Nombre de logements': 'header label - always visible', 'Source de chauffage 1': 'header label - always visible', 'Source de chauffage 2': 'hidden field', 'Source de chaleur eau chaude 1': 'header label - always visible', 'Source de chaleur eau chaude 2': 'hidden field', 'Type de bâtiment': 'header label - always visible', 'Classe de vecteur énergétique': 'header label - always visible', 'SRE': 'header label - always visible', 'Intérêt': 'hidden field', 'Commentaire': 'hidden field', 'ObjectId': 'hidden field', 'Shape__Are': 'hidden field', 'Creator': 'hidden field', 'perimeter2': 'hidden field', 'kwh_updated': 'header label - always visible', 'kW_updated': 'header label - always visible', 'N° parcelle': 'header label - always visible', 'Adresse': 'header label - always visible', });
lyr_AmenagementcommunauxRomanel_2.set('fieldLabels', {'fid': 'hidden field', 'Type d\'aménagement': 'header label - always visible', 'Année': 'header label - always visible', 'Raccordement possible': 'hidden field', });
lyr_InformationroutesRomanel_3.set('fieldLabels', {'fid': 'hidden field', 'Année': 'header label - always visible', 'Projet': 'header label - always visible', 'Emplacement': 'header label - always visible', 'Achevé': 'hidden field', });
lyr_Statutcommercialisationdonnesbaseewz_4.set('fieldLabels', {'fid': 'hidden field', 'egid': 'header label - always visible', 'egrid': 'hidden field', 'Classe bât': 'hidden field', 'Année de construction': 'hidden field', 'Etages': 'hidden field', 'Nombre de logements': 'hidden field', 'Source de chauffage 1': 'hidden field', 'Source de chauffage 2': 'hidden field', 'Source de chaleur eau chaude 1': 'hidden field', 'Source de chaleur eau chaude 2': 'hidden field', 'Type de bâtiment': 'header label - always visible', 'Classe de vecteur énergétique': 'header label - always visible', 'SRE': 'hidden field', 'Intérêt': 'hidden field', 'Commentaire': 'hidden field', 'ObjectId': 'hidden field', 'Shape__Are': 'hidden field', 'Creator': 'hidden field', 'perimeter2': 'hidden field', 'kwh_updated': 'header label - always visible', 'kW_updated': 'header label - always visible', 'Statut de commercialisation': 'header label - always visible', 'Propriétaire': 'header label - always visible', 'Date de raccordement ': 'hidden field', 'Puissance contractualisable (kW)': 'hidden field', 'N° Contrat': 'hidden field', 'Cout de raccordement (CHF)': 'hidden field', 'Abonnement puissance (CHF/an)': 'hidden field', 'Adresse': 'header label - always visible', 'N° parcelle': 'header label - always visible', });
lyr_Parcelles_5.set('fieldLabels', {'EGRIS_EGRI': 'hidden field', 'GENRE': 'hidden field', 'GENRE_TXT': 'hidden field', 'ID': 'hidden field', 'IDENTDN': 'hidden field', 'IDEX2000': 'hidden field', 'INTEGRAL_C': 'hidden field', 'INTEGRAL_T': 'hidden field', 'NUMERO': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'SUPERFICIE': 'header label - always visible', 'SUPERF_RF': 'hidden field', 'SUPERF_TOT': 'hidden field', 'VALIDITE': 'hidden field', 'VALIDITE_T': 'hidden field', });
lyr_Etiquettesdesparcelles_6.set('fieldLabels', {'ID': 'hidden field', 'LABEL_TEXT': 'hidden field', 'NUMERO': 'header label - always visible', 'ORIENTATIO': 'hidden field', });
lyr_Btimentenprojet_7.set('fieldLabels', {'DATE1': 'header label - always visible', 'DESIGNATIO': 'header label - always visible', 'EN_VIGUEUR': 'hidden field', 'GENRE_TXT': 'hidden field', 'IDENTDN': 'hidden field', 'IDENTIFICA': 'hidden field', 'NOM': 'hidden field', 'NUMERO': 'hidden field', 'QUALITE_TX': 'hidden field', 'REGBL_EGID': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'VALIDITE_T': 'hidden field', });
lyr_Btimentshorssol_8.set('fieldLabels', {'DESIGNAT_C': 'header label - always visible', 'DESIGNAT_T': 'hidden field', 'GENRE': 'header label - always visible', 'GENRE_TXT': 'hidden field', 'ID': 'hidden field', 'IDENTDN': 'hidden field', 'NUMERO': 'hidden field', 'QUALITE': 'hidden field', 'QUALITE_TX': 'hidden field', 'REGBL_EGID': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', });
lyr_Btimentssoussol_9.set('fieldLabels', {'DESIGNAT_C': 'header label - always visible', 'DESIGNAT_T': 'hidden field', 'ID': 'hidden field', 'NUMERO': 'hidden field', 'QUALITE': 'hidden field', 'QUALITE_TX': 'hidden field', 'REGBL_EGID': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', });
lyr_Btimentssoussol_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});