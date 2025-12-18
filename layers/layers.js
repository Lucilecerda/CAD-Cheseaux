var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Parcelles_1 = new ol.format.GeoJSON();
var features_Parcelles_1 = format_Parcelles_1.readFeatures(json_Parcelles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_1.addFeatures(features_Parcelles_1);
var lyr_Parcelles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_1, 
                style: style_Parcelles_1,
                popuplayertitle: 'Parcelles',
                interactive: true,
                title: '<img src="styles/legend/Parcelles_1.png" /> Parcelles'
            });
var format_Etiquettesdesparcelles_2 = new ol.format.GeoJSON();
var features_Etiquettesdesparcelles_2 = format_Etiquettesdesparcelles_2.readFeatures(json_Etiquettesdesparcelles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etiquettesdesparcelles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etiquettesdesparcelles_2.addFeatures(features_Etiquettesdesparcelles_2);
var lyr_Etiquettesdesparcelles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etiquettesdesparcelles_2, 
                style: style_Etiquettesdesparcelles_2,
                popuplayertitle: 'Etiquettes des parcelles',
                interactive: true,
                title: 'Etiquettes des parcelles'
            });
var format_Btimentenprojet_3 = new ol.format.GeoJSON();
var features_Btimentenprojet_3 = format_Btimentenprojet_3.readFeatures(json_Btimentenprojet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btimentenprojet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btimentenprojet_3.addFeatures(features_Btimentenprojet_3);
var lyr_Btimentenprojet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btimentenprojet_3, 
                style: style_Btimentenprojet_3,
                popuplayertitle: 'Bâtiment en projet',
                interactive: true,
                title: '<img src="styles/legend/Btimentenprojet_3.png" /> Bâtiment en projet'
            });
var format_Btimentshorssol_4 = new ol.format.GeoJSON();
var features_Btimentshorssol_4 = format_Btimentshorssol_4.readFeatures(json_Btimentshorssol_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btimentshorssol_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btimentshorssol_4.addFeatures(features_Btimentshorssol_4);
var lyr_Btimentshorssol_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btimentshorssol_4, 
                style: style_Btimentshorssol_4,
                popuplayertitle: 'Bâtiments hors sol',
                interactive: true,
                title: '<img src="styles/legend/Btimentshorssol_4.png" /> Bâtiments hors sol'
            });
var format_Etiquettedesobjetsdivers_5 = new ol.format.GeoJSON();
var features_Etiquettedesobjetsdivers_5 = format_Etiquettedesobjetsdivers_5.readFeatures(json_Etiquettedesobjetsdivers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etiquettedesobjetsdivers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etiquettedesobjetsdivers_5.addFeatures(features_Etiquettedesobjetsdivers_5);
var lyr_Etiquettedesobjetsdivers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etiquettedesobjetsdivers_5, 
                style: style_Etiquettedesobjetsdivers_5,
                popuplayertitle: 'Etiquette des objets divers',
                interactive: true,
                title: 'Etiquette des objets divers'
            });
var group_Statutcommercialisationdonnesurbio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Statut commercialisation (données urbio)'});
var group_SuiviContratsCADCheseaux = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Suivi Contrats CAD Cheseaux'});
var group_InformationsCommune = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Informations Commune'});
var group_CadastreMensurationofficielle = new ol.layer.Group({
                                layers: [lyr_Parcelles_1,lyr_Etiquettesdesparcelles_2,lyr_Btimentenprojet_3,lyr_Btimentshorssol_4,lyr_Etiquettedesobjetsdivers_5,],
                                fold: 'close',
                                title: 'Cadastre - Mensuration officielle'});
var group_Donnesdebasebtiments = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Données de base bâtiments'});
var group_Donnesurbio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Données urbio'});
var group_0 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '0'});
var group_AS_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AS_3d'});
var group_AS_collecteur = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AS_collecteur'});
var group_AS_dtailempriseouvrage = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AS_dÃ©tail emprise ouvrage'});
var group_AS_label = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AS_label'});
var group_AS_trame = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AS_trame'});
var group_CC_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CC_3d'});
var group_CC_conduite = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CC_conduite'});
var group_CC_objet = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CC_objet'});
var group_CC_trame = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CC_trame'});
var group_EA_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EA_3d'});
var group_EA_conduite = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EA_conduite'});
var group_EA_conduite_AB = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EA_conduite_AB'});
var group_EA_label = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EA_label'});
var group_EA_trame = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EA_trame'});
var group_EL_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_3d'});
var group_EL_SYN_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_SYN_3d'});
var group_EL_SYN_armoire = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_SYN_armoire'});
var group_EL_SYN_chambre = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_SYN_chambre'});
var group_EL_SYN_conduite = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_SYN_conduite'});
var group_EL_armoire = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_armoire'});
var group_EL_chambre = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_chambre'});
var group_EL_conduite = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'EL_conduite'});
var group_EL_label = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_label'});
var group_EL_trame = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EL_trame'});
var group_GA_3d = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GA_3d'});
var group_GA_conduite = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GA_conduite'});
var group_GA_conduite_AB = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GA_conduite_AB'});
var group_GA_label = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GA_label'});
var group_MO_AdrBat_POLICE_NO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_AdrBat_POLICE_NO'});
var group_MO_AdrBat_ROUTE_TEXTE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MO_AdrBat_ROUTE_TEXTE'});
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
var group_Rseaulectrique = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Réseau électrique'});
var group_Rseaucheseauxouest = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Réseau cheseaux ouest'});
var group_RseaucheseauxEst = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Réseau cheseaux Est'});
var group_RseaucheseauxSud = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Réseau cheseaux Sud'});
var group_Collecteurscheseaux = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Collecteurs cheseaux'});
var group_RsultatsimulationcentraleMigros = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Résultat simulation centrale Migros'});
var group_fonddecarte = new ol.layer.Group({
                                layers: [lyr_Positronretina_0,],
                                fold: 'open',
                                title: 'fond de carte'});

lyr_Positronretina_0.setVisible(true);lyr_Parcelles_1.setVisible(true);lyr_Etiquettesdesparcelles_2.setVisible(true);lyr_Btimentenprojet_3.setVisible(true);lyr_Btimentshorssol_4.setVisible(true);lyr_Etiquettedesobjetsdivers_5.setVisible(true);
var layersList = [group_fonddecarte,group_CadastreMensurationofficielle];
lyr_Parcelles_1.set('fieldAliases', {'EGRIS_EGRI': 'EGRIS_EGRI', 'GENRE': 'GENRE', 'GENRE_TXT': 'GENRE_TXT', 'ID': 'ID', 'IDENTDN': 'IDENTDN', 'IDEX2000': 'IDEX2000', 'INTEGRAL_C': 'INTEGRAL_C', 'INTEGRAL_T': 'INTEGRAL_T', 'NUMERO': 'NUMERO', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'SUPERFICIE': 'SUPERFICIE', 'SUPERF_RF': 'SUPERF_RF', 'SUPERF_TOT': 'SUPERF_TOT', 'VALIDITE': 'VALIDITE', 'VALIDITE_T': 'VALIDITE_T', });
lyr_Etiquettesdesparcelles_2.set('fieldAliases', {'ID': 'ID', 'LABEL_TEXT': 'LABEL_TEXT', 'NUMERO': 'NUMERO', 'ORIENTATIO': 'ORIENTATIO', });
lyr_Btimentenprojet_3.set('fieldAliases', {'DATE1': 'DATE1', 'DESIGNATIO': 'DESIGNATIO', 'EN_VIGUEUR': 'EN_VIGUEUR', 'GENRE_TXT': 'GENRE_TXT', 'IDENTDN': 'IDENTDN', 'IDENTIFICA': 'IDENTIFICA', 'NOM': 'NOM', 'NUMERO': 'NUMERO', 'QUALITE_TX': 'QUALITE_TX', 'REGBL_EGID': 'REGBL_EGID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'VALIDITE_T': 'VALIDITE_T', });
lyr_Btimentshorssol_4.set('fieldAliases', {'DESIGNAT_C': 'DESIGNAT_C', 'DESIGNAT_T': 'DESIGNAT_T', 'GENRE': 'GENRE', 'GENRE_TXT': 'GENRE_TXT', 'ID': 'ID', 'IDENTDN': 'IDENTDN', 'NUMERO': 'NUMERO', 'QUALITE': 'QUALITE', 'QUALITE_TX': 'QUALITE_TX', 'REGBL_EGID': 'REGBL_EGID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Etiquettedesobjetsdivers_5.set('fieldAliases', {'GENRE': 'GENRE', 'GENRE_TXT': 'GENRE_TXT', 'ID': 'ID', 'LABEL_TEXT': 'LABEL_TEXT', 'NOM': 'NOM', 'ORIENTATIO': 'ORIENTATIO', });
lyr_Parcelles_1.set('fieldImages', {'EGRIS_EGRI': 'TextEdit', 'GENRE': 'TextEdit', 'GENRE_TXT': 'TextEdit', 'ID': 'TextEdit', 'IDENTDN': 'TextEdit', 'IDEX2000': 'TextEdit', 'INTEGRAL_C': 'TextEdit', 'INTEGRAL_T': 'TextEdit', 'NUMERO': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUPERF_RF': 'TextEdit', 'SUPERF_TOT': 'TextEdit', 'VALIDITE': 'TextEdit', 'VALIDITE_T': 'TextEdit', });
lyr_Etiquettesdesparcelles_2.set('fieldImages', {'ID': 'TextEdit', 'LABEL_TEXT': 'TextEdit', 'NUMERO': 'TextEdit', 'ORIENTATIO': 'TextEdit', });
lyr_Btimentenprojet_3.set('fieldImages', {'DATE1': '', 'DESIGNATIO': '', 'EN_VIGUEUR': '', 'GENRE_TXT': '', 'IDENTDN': '', 'IDENTIFICA': '', 'NOM': '', 'NUMERO': '', 'QUALITE_TX': '', 'REGBL_EGID': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', 'VALIDITE_T': '', });
lyr_Btimentshorssol_4.set('fieldImages', {'DESIGNAT_C': '', 'DESIGNAT_T': '', 'GENRE': '', 'GENRE_TXT': '', 'ID': '', 'IDENTDN': '', 'NUMERO': '', 'QUALITE': '', 'QUALITE_TX': '', 'REGBL_EGID': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Etiquettedesobjetsdivers_5.set('fieldImages', {'GENRE': 'TextEdit', 'GENRE_TXT': 'TextEdit', 'ID': 'TextEdit', 'LABEL_TEXT': 'TextEdit', 'NOM': 'TextEdit', 'ORIENTATIO': 'TextEdit', });
lyr_Parcelles_1.set('fieldLabels', {'EGRIS_EGRI': 'hidden field', 'GENRE': 'hidden field', 'GENRE_TXT': 'hidden field', 'ID': 'hidden field', 'IDENTDN': 'hidden field', 'IDEX2000': 'hidden field', 'INTEGRAL_C': 'hidden field', 'INTEGRAL_T': 'hidden field', 'NUMERO': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'SUPERFICIE': 'header label - always visible', 'SUPERF_RF': 'hidden field', 'SUPERF_TOT': 'hidden field', 'VALIDITE': 'hidden field', 'VALIDITE_T': 'hidden field', });
lyr_Etiquettesdesparcelles_2.set('fieldLabels', {'ID': 'hidden field', 'LABEL_TEXT': 'hidden field', 'NUMERO': 'header label - always visible', 'ORIENTATIO': 'hidden field', });
lyr_Btimentenprojet_3.set('fieldLabels', {'DATE1': 'header label - always visible', 'DESIGNATIO': 'header label - always visible', 'EN_VIGUEUR': 'header label - always visible', 'GENRE_TXT': 'hidden field', 'IDENTDN': 'hidden field', 'IDENTIFICA': 'hidden field', 'NOM': 'header label - always visible', 'NUMERO': 'hidden field', 'QUALITE_TX': 'hidden field', 'REGBL_EGID': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'VALIDITE_T': 'hidden field', });
lyr_Btimentshorssol_4.set('fieldLabels', {'DESIGNAT_C': 'header label - always visible', 'DESIGNAT_T': 'hidden field', 'GENRE': 'header label - always visible', 'GENRE_TXT': 'hidden field', 'ID': 'hidden field', 'IDENTDN': 'hidden field', 'NUMERO': 'hidden field', 'QUALITE': 'hidden field', 'QUALITE_TX': 'hidden field', 'REGBL_EGID': 'header label - always visible', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', });
lyr_Etiquettedesobjetsdivers_5.set('fieldLabels', {'GENRE': 'header label - always visible', 'GENRE_TXT': 'hidden field', 'ID': 'hidden field', 'LABEL_TEXT': 'hidden field', 'NOM': 'header label - always visible', 'ORIENTATIO': 'hidden field', });
lyr_Etiquettedesobjetsdivers_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});