define(['dojo/_base/declare', 'jimu/BaseWidget'], function (declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'widget-wms',
    // this property is set by the framework when widget is loaded.
    // name: 'Widget-WMS',
    // add additional properties here
    _getPanel: function _getPanel(paramWidget, paramHeight) {
      var panel = null,
          pos = null;
      try {
        // paramWidget, paramHeight
        panel = this.getPanel();
        pos = panel.position;
        panel.domNode.childNodes[1].childNodes[0].style.padding = "0px";
        pos.width = paramWidget;
        pos.height = paramHeight;
        panel.setPosition(pos);
      } catch (error) {
        console.error('_getPanel: ' + error.name + ' - ' + error.message);
      }
    },
    //methods to communication with app container:
    postCreate: function postCreate() {
      this.inherited(arguments);
      console.log('Widget-WMS::postCreate');
    },

    startup: function startup() {
      this.inherited(arguments);
      console.log('Widget-WMS::startup');
      this._getPanel(300, 450);

      var htmlWMSINGEMMET = [];
      var jsonWMSINGEMMET = {
        "0": {
          "geoservicio": "Geología",
          "descripcion": "Descripción de geología",
          "enlace": "https://geocatminapp.ingemmet.gob.pe/arcgis/services/SERV_GEOLOGIA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "1": {
          "geoservicio": "Geoquímica",
          "descripcion": "Descripción de geoquímica",
          "enlace": "https://geocatminapp.ingemmet.gob.pe/arcgis/services/SERV_GEOQUIMICA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "2": {
          "geoservicio": "Geomorfología",
          "descripcion": "Descripción geomorfología",
          "enlace": "http://geocatminapp.ingemmet.gob.pe:6080/arcgis/services/SERV_GEOQUIMICA/MapServer/WMSServer"
        }
      };
      for (var j = 0; j <= 2; j++) {
        htmlWMSINGEMMET.push('\n            <div class="acd_card">\n              <div class="acd_name">\n                <h3 class="content_title">' + jsonWMSINGEMMET[j].geoservicio + '</h3>\n                <div class="content_info">' + jsonWMSINGEMMET[j].descripcion + '</div>\n              </div>\n              <div class="acd_clone">\n                <span class="fa fa-external-link"> \n                  <a href="' + jsonWMSINGEMMET[j].enlace + '" target="_blank" >url</a>\n                </span>\n              </div>\n            </div>\n            ');
      }
      document.getElementById("INGEMMET").innerHTML = htmlWMSINGEMMET.join("");

      var htmlWMSIGN = [];
      var jsonWMSIGN = {
        "0": {
          "geoservicio": "Limites Políticos",
          "descripcion": "Descripción de Limites Políticos",
          "enlace": "https://geocatminapp.ingemmet.gob.pe/arcgis/services/SERV_GEOLOGIA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "1": {
          "geoservicio": "Empalmes 10000",
          "descripcion": "Descripción de Empalmes 10000",
          "enlace": "https://geocatminapp.ingemmet.gob.pe/arcgis/services/SERV_GEOQUIMICA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "2": {
          "geoservicio": "Fisiografía",
          "descripcion": "Descripción Fisiografía",
          "enlace": "http://geocatminapp.ingemmet.gob.pe:6080/arcgis/services/SERV_GEOQUIMICA/MapServer/WMSServer"
        }
      };
      for (var _j = 0; _j <= 2; _j++) {
        htmlWMSIGN.push('\n            <div class="acd_card">\n              <div class="acd_name">\n                <h3 class="content_title">' + jsonWMSIGN[_j].geoservicio + '</h3>\n                <div class="content_info">' + jsonWMSIGN[_j].descripcion + '</div>\n              </div>\n              <div class="acd_clone">\n                <span class="fa fa-external-link"> \n                  <a href="' + jsonWMSIGN[_j].enlace + '" target="_blank" >url</a>\n                </span>\n              </div>\n            </div>\n            ');
      }
      document.getElementById("IGN").innerHTML = htmlWMSIGN.join("");

      var htmlWMS = [];
      var jsonWMS = {
        "0": {
          "geoservicio": "Unidades Hidrográficas",
          "descripcion": "Delimitación del ámbito de la cuenca",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_UNIDADES_HIDROGRAFICAS/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "1": {
          "geoservicio": "Unidades Hidrográficas menores",
          "descripcion": "Delimitación del ámbito de la cuencas menores",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_UNIDADES_HIDROGRAFICAS_MENORES/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "2": {
          "geoservicio": "Autoridades Administrativas del Agua",
          "descripcion": "Delimitación de las Autoridades Administrativas del Agua",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_AUTORIDAD_ADMINISTRATIVA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "3": {
          "geoservicio": "Administraciones Locales del Agua",
          "descripcion": "Delimitación de las Autoridades Administrativas del Agua",
          "enlace": "	http://geo.ana.gob.pe/arcgis/services/SERV_ADMINISTRACION_LOCAL/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "4": {
          "geoservicio": "Inventario Nacional de Glaciares",
          "descripcion": "Evaluación nacional del estado de los glaciares.",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_INVENTARIO_GLACIARES/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "5": {
          "geoservicio": "Inventario Nacional de Lagunas Glaciares",
          "descripcion": "Evaluación nacional del estado de las lagunas de origen glaciar",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_INVENTARIO_LAGUNAS/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "6": {
          "geoservicio": "Clasificación de Cuerpos de Agua Marino-Costero",
          "descripcion": "Identificación de los cuerpos de agua marino costeros",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_CLASIFICACION_MARINA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "7": {
          "geoservicio": "Poblaciones vulnerables",
          "descripcion": "Identificar poblaciones vulnerables ante la activación de quebradas en época de lluvias extremas",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_POBLACION_VULNERABLE/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "8": {
          "geoservicio": "Modelamiento Hidráulico",
          "descripcion": "Modelamiento de inundación en los ríos Tumbes, Chira, Piura, La Leche y Reque",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_MODELAMIENTO_HIDRAULICO/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "9": {
          "geoservicio": "Inventario Nacional de Presas",
          "descripcion": "Evaluación del estado de los principales presas a nivel nacional",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_INVENTARIO_PRESA/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "10": {
          "geoservicio": "Fajas Marginales",
          "descripcion": "Ubicación de los hitos de faja marginal aprobadas a nivel nacional",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_FAJAS_MARGINALES/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "11": {
          "geoservicio": "Poblaciones Vulnerables por Activación de Quebrada",
          "descripcion": "El estudio se realizó en 24 departamentos del Perú, que abarcaron 14 Autoridades Administrativas del Agua",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_POBLACIONES_VULNERABLES/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "12": {
          "geoservicio": "Consejos de Recursos Hídricos de Cuenca",
          "descripcion": "Delimitación de los ámbitos de los Consejos de Recursos Hídricos de Cuenca",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_FAJAS_MARGINALES/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "13": {
          "geoservicio": "Estaciones Automáticas Pluviométricas",
          "descripcion": "Estaciones automáticas pluviométricas instaladas para el monitoreo de precipitaciones cercanas a poblaciones vulnerables a eventos hidroclimáticos extremos",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_ESTACIONES_PLUVIOMETRICAS/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "14": {
          "geoservicio": "Barreras Dinámicas",
          "descripcion": "22 mallas metálicas instaladas en 9 quebradas en el distrito de Lurigancho",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_BARRERAS_DINAMICAS/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "15": {
          "geoservicio": "Vertimientos de Aguas Residuales Tratadas",
          "descripcion": "Los Vertimientos de aguas residuales tratadas son autorizados por la Dirección de Gestión de Calidad de Recursos Hídricos (DGCRH)",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_VERTIMIENTOS_AUTORIZADOS/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        },
        "16": {
          "geoservicio": "Puntos Críticos 2016",
          "descripcion": "El documento identifica la ubicación geográfica de zonas de riesgo a inundación y erosión de los principales ríos del país",
          "enlace": "http://geo.ana.gob.pe/arcgis/services/SERV_PUNTOS_CRITICOS/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        }
      };
      for (var i = 0; i <= 16; i++) {
        htmlWMS.push('\n            <div class="acd_card">\n              <div class="acd_name">\n                <h3 class="content_title">' + jsonWMS[i].geoservicio + '</h3>\n                <div class="content_info">' + jsonWMS[i].descripcion + '</div>\n              </div>\n              <div class="acd_clone">\n                <span class="fa fa-external-link">\n                  <a href="' + jsonWMS[i].enlace + '}" target="_blank" >url</a>\n                </span>\n              </div>\n            </div>\n            ');
      }

      document.getElementById("ANA").innerHTML = htmlWMS.join("");
    }

    // onOpen: function(){
    //   console.log('Widget-WMS::onOpen');
    // },

    // onClose: function(){
    //   console.log('Widget-WMS::onClose');
    // },

    // onMinimize: function(){
    //   console.log('Widget-WMS::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('Widget-WMS::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('Widget-WMS::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('Widget-WMS::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('Widget-WMS::onPositionChange');
    // },

    // resize: function(){
    //   console.log('Widget-WMS::resize');
    // }

    //methods to communication between widgets:

  });
});
//# sourceMappingURL=Widget.js.map
