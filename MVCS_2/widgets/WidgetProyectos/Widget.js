function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//import '../../libs/datatables-bulma/js/dataTables.min';

/*
  Perfil:           GIS Developer
  Autor:            Ing. Heber Daniel Ramos Mendoza
  Web Site:         https://hdramosmendoza.github.io/Perfil-Profesional/
  Social Networks:  HDRamosMendoza
  University:       Universidad de Ciencias y Humanidades
                    https://www.uch.edu.pe/

  Copyright:        Ministerio de Vivienda, Construcción y Saneamiento
  Date:             14/09/2020
                    Lima - Perú
*/
define(['esri/layers/FeatureLayer', 'esri/symbols/TextSymbol', 'esri/layers/LabelClass', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/renderers/SimpleRenderer', 'esri/tasks/query', 'esri/tasks/QueryTask', 'dojo/query', 'esri/Color', 'dojo/_base/declare', 'dojo/_base/lang', 'jimu/BaseWidget'], function (FeatureLayer, TextSymbol, LabelClass, SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer, Query, QueryTask, query, Color, declare, lang, BaseWidget) {
  return declare([BaseWidget], {
    baseClass: 'widget-proyectos',

    // FIELD Departamento
    departamento: {
      "OBJECTID": "objectid",
      "IDDEPARTAMENTO": "id_dpto",
      "NAME_DEPARTAMENTO": "nom_dep"
    },
    // FIELD Provincia
    provincia: {
      "OBJECTID": "objectid",
      "IDDEPARTAMENTO": "id_dpto",
      "NAME_DEPARTAMENTO": "nom_dep",
      "IDPROVINCIA": "id_prov",
      "NAME_PROVINCIA": "nom_prov"
    },
    // FIELD Distrito
    distrito: {
      "OBJECTID": "objectid",
      "IDDEPARTAMENTO": "id_dep",
      "NAME_DEPARTAMENTO": "nom_dep",
      "IDPROVINCIA": "id_prov",
      "NAME_PROVINCIA": "nom_prov",
      "IDDISTRITO": "id_dist",
      "NAME_DISTRITO": "nom_dist"
    },

    // ************** DEPARTAMENTO //
    // Query
    queryDepartamento: new Query(),
    // Query Task
    queryTaskDepartamento: new QueryTask("https://dportalgis.vivienda.gob.pe/dfdserver/rest/services/OGEI/limites_peru/MapServer/6"),
    // Feature Layer
    featureLayerDepartamento: new FeatureLayer("https://dportalgis.vivienda.gob.pe/dfdserver/rest/services/OGEI/limites_peru/MapServer/6", {
      id: "Departamento1", outFields: ["*"],
      mode: FeatureLayer.MODE_SELECTION,
      showLabels: true
    }),
    // ************** DEPARTAMENTO //

    // ************** PROVINCIA //
    // Query
    queryProvincia: new Query(),
    // Query Task
    queryTaskProvincia: new QueryTask("https://dportalgis.vivienda.gob.pe/dfdserver/rest/services/OGEI/limites_peru/MapServer/8"),
    // Feature Layer
    featureLayerProvincia: new FeatureLayer("https://dportalgis.vivienda.gob.pe/dfdserver/rest/services/OGEI/limites_peru/MapServer/8", {
      id: "Provincia1", outFields: ["OBJECTID"],
      mode: FeatureLayer.MODE_SELECTION,
      showLabels: true
    }),
    // ************** PROVINCIA //

    // ************** DISTRITO //
    queryDistrito: new Query(),
    // Query Task
    queryTaskDistrito: new QueryTask("https://dportalgis.vivienda.gob.pe/dfdserver/rest/services/OGEI/limites_peru/MapServer/7"),
    // Feature Layer
    featureLayerDistrito: new FeatureLayer("https://dportalgis.vivienda.gob.pe/dfdserver/rest/services/OGEI/limites_peru/MapServer/7", {
      id: "Distrito1", outFields: ["OBJECTID"],
      mode: FeatureLayer.MODE_SELECTION,
      showLabels: true
    }),
    // ************** DISTRITO //

    /* Configurar departamentos */
    _settingDepartamento: function _settingDepartamento() {
      this.queryDepartamento.orderByFields = ["nom_dep ASC"];
      this.queryDepartamento.returnGeometry = true;
      this.queryDepartamento.outFields = [this.departamento.OBJECTID, this.departamento.IDDEPARTAMENTO, this.departamento.NAME_DEPARTAMENTO];
      this.featureLayerDepartamento.setScaleRange(0, 0);
      this.featureLayerDepartamento.setRenderer(this._fillLineColor("solid", "solid", "#D10202", 1.5, [209, 2, 2, 0]));
      // Se adiciona al mapa
      //this is the very least of what should be set within the JSON  
      var json = {
        "labelExpressionInfo": { "value": "{nom_dep}" }
      };
      //create instance of LabelClass (note: multiple LabelClasses can be passed in as an array)
      var labelClass = new LabelClass(json);
      this.featureLayerDepartamento.setLabelingInfo([labelClass]);

      lang.setObject('_wabProperties.isTemporaryLayer', true, this.featureLayerDepartamento);
      // Se adiciona al mapa
      this.map.addLayer(this.featureLayerDepartamento);
    },

    /* Configurar provincias */
    _settingProvincia: function _settingProvincia() {
      this.queryProvincia.orderByFields = ["nom_prov ASC"];
      this.queryProvincia.returnGeometry = true;
      this.queryProvincia.outFields = [this.provincia.OBJECTID, this.provincia.IDDEPARTAMENTO, this.provincia.NAME_DEPARTAMENTO, this.provincia.IDPROVINCIA, this.provincia.NAME_PROVINCIA];
      this.featureLayerProvincia.setScaleRange(0, 0);
      this.featureLayerProvincia.setRenderer(this._fillLineColor("solid", "solid", "#FF0202", 1.5, [255, 2, 2, 0]));
      lang.setObject('_wabProperties.isTemporaryLayer', true, this.featureLayerProvincia);
      // Se adiciona al mapa
      this.map.addLayer(this.featureLayerProvincia);
    },

    /* Configurar provincias */
    _settingDistrito: function _settingDistrito() {
      this.queryDistrito.orderByFields = ["nom_dist ASC"];
      this.queryDistrito.returnGeometry = true;
      this.queryDistrito.outFields = [this.distrito.OBJECTID, this.distrito.IDDEPARTAMENTO, this.distrito.NAME_DEPARTAMENTO, this.distrito.IDPROVINCIA, this.distrito.NAME_PROVINCIA, this.distrito.IDDISTRITO, this.distrito.NAME_DISTRITO];
      this.featureLayerDistrito.setScaleRange(0, 0);
      this.featureLayerDistrito.setRenderer(this._fillLineColor("solid", "solid", "#FF7575", 1.5, [255, 117, 117, 0.1]));
      lang.setObject('_wabProperties.isTemporaryLayer', true, this.featureLayerDistrito);
      //Se adiciona al mapa
      this.map.addLayer(this.featureLayerDistrito);
    },

    /* Color de línea */
    _lineColor: function _lineColor(color) {
      if (color == null) {
        return color;
      } else {
        return color = new Color(color);
      }
    },

    /* Contornos de colores */
    _fillLineColor: function _fillLineColor(fill1, line1, line2, line3, color) {
      return new SimpleRenderer(new SimpleFillSymbol(fill1, new SimpleLineSymbol(line1, this._lineColor(line2), line3), this._lineColor(color)));
    },

    _clearNodes: function _clearNodes(item) {
      for (var i = 1; i < item.length; i = i + 2) {
        item[i].style["background-color"] = "#FFFFFF";
      }
    },

    /* Cambiar el tamaño del widget */
    _getPanel: function _getPanel(paramWidget, paramHeight) {
      try {
        var panel = this.getPanel();
        var pos = panel.position;
        pos.width = paramWidget;
        pos.height = paramHeight;
        panel.setPosition(pos);
      } catch (error) {
        console.log("_getPanel: " + error.name + " - " + error.message);
      }
    },

    /* Realiza un acercameinto al departamento */
    _zoomDepartamento: function _zoomDepartamento(objectId, booleanZoom) {
      // objectId. Es del departamento.
      // booleanZoom. Es del INPUT CHECKBOX.
      try {
        var _query = new Query();
        _query.objectIds = [objectId];
        // Zoom - Object GIS
        this.featureLayerDepartamento.selectFeatures(_query, FeatureLayer.SELECTION_NEW, function (features) {
          /* Valida si el zoom se activa o no */
          if (booleanZoom) {
            this.map.setExtent(features[0].geometry.getExtent().expand(1.6));
          }
        }.bind(this));
      } catch (error) {
        console.log("Error: _zoomDepartamento " + erro.name + " - " + error.message);
      }
    },

    _onClickDepartamento: function _onClickDepartamento() {
      try {
        thisValue = event.target;
        // Valida que el ID no este vacío
        if (thisValue.attributes["data-departamentoId"].value != "") {
          this.queryProvincia.where = this.provincia.IDDEPARTAMENTO + " = '" + thisValue.attributes["data-departamentoId"].value.trim() + "'";
          this.queryTaskProvincia.execute(this.queryProvincia, this._callProvincia.bind(this), this._errorProvincia.bind(this));
          // Limpiar selección
          this._clearNodes(thisValue.parentNode.childNodes);
          // Pinta la selección al DEPARTAMENTO
          thisValue.style["background-color"] = "#D6DDEB";
          // Acercamiento DEPARTAMENTO
          this._zoomDepartamento(thisValue.attributes["data-objectId"].value, this.ID_ZoomEspecifico.checked);
        }
      } catch (error) {
        console.log("Error: _onClickDepartamento " + error.name + " - " + error.message);
      }
    },

    _callDepartamento: function _callDepartamento(item) {
      try {
        var tagHtml = [];
        this.featureLayerDepartamento.clearSelection();
        if (item != null) {
          Window.itemFeaturesDepartamento = this.featuresLength = item.features;
          this.featuresLength = this.featuresLength.length;
          for (var i = 0; i < this.featuresLength; i++) {
            this.featureAttributes = item.features[i].attributes;
            tagHtml.push("\
              <li class=\"list-group-item\" \
                data-objectId=\"" + this.featureAttributes[this.departamento.OBJECTID] + " \"\
                data-departamentoId=\"" + this.featureAttributes[this.departamento.IDDEPARTAMENTO] + " \"\
                data-departamentoPolygon=\"" + i + "\" >\
                " + this.featureAttributes[this.departamento.NAME_DEPARTAMENTO] + "\
              </li>");
          }
          this.CboDepartamento.innerHTML = tagHtml.join("");
        } else {
          /* Se limpia la selección del departamento */
          this._clearNodes(this.CboDepartamento.childNodes);
        }
      } catch (error) {
        console.log("Error: _callDepartamento " + error.name + " - " + error.message);
      }
    },

    // Error - Select DEPARTAMENTAL
    _errorDepartamento: function _errorDepartamento(item) {
      try {
        var tagHtml = [];
        tagHtml.push("\
            <li class=\"list-group-item\" \
              data-objectId=\"\" \
              data-departamentoId=\"\"> \
              Error al cargar \
            </li>");
        this.featureLayerDepartamento.clearSelection();
        this.CboDepartamento.innerHTML = tagHtml.join("");
      } catch (error) {
        console.log("Error: _callDepartamento " + error.name + " - " + error.message);
      }
    },

    _onClickProvincia: function _onClickProvincia() {
      try {
        thisValue = event.target;
        if (thisValue.attributes["data-provinciaId"].value != "") {
          // Limpiar selección
          this._clearNodes(thisValue.parentNode.childNodes);
          // Pinta la selección
          thisValue.style["background-color"] = "#D6DDEB";
          this._zoomProvincia(thisValue.attributes["data-objectId"].value, this.ID_ZoomEspecifico.checked);
          // Load - Provincia
          this.queryDistrito.where = "" + this.distrito.IDDEPARTAMENTO + " = '" + thisValue.attributes["data-departamentoId"].value.trim() + "' AND " + this.distrito.IDPROVINCIA + " = '" + thisValue.attributes["data-provinciaId"].value.trim() + "'";

          this.queryTaskDistrito.execute(this.queryDistrito, this._callDistrito.bind(this), this._errorDistrito.bind(this));

          //this.itemGeometry = Window.itemFeaturesProvincia[thisValue.attributes["data-provinciaPolygon"].value].geometry;
        }
      } catch (error) {
        console.log("Error: _onClickProvincia " + error.name + " - " + error.message);
      }
    },
    // Load - Select PROVINCIAL
    _callProvincia: function _callProvincia(item) {
      try {
        var tagHtml = [];
        if (item != null) {
          Window.itemFeaturesProvincia = itemFeatures = item.features;
          featuresLength = itemFeatures.length;
          for (var i = 0; i < featuresLength; i++) {
            this.featureAttributes = item.features[i].attributes;
            tagHtml.push("\
              <li class=\"list-group-item\" \
                data-objectId=\"" + this.featureAttributes[this.provincia.OBJECTID] + " \"\
                data-departamentoId=\"" + this.featureAttributes[this.provincia.IDDEPARTAMENTO] + " \" \
                data-provinciaId=\"" + this.featureAttributes[this.provincia.IDPROVINCIA] + "\" \
                data-provinciaPolygon=\"" + i + "\" >\
                " + this.featureAttributes[this.provincia.NAME_PROVINCIA] + "\
              </li>");
          }
        } else {
          tagHtml.push("\
            <li class=\"list-group-item\" >\
              <p class=\"font-italic\">Seleccione Departamento</p> \
            </li>");
        }
        this._callDistrito(null);
        this.featureLayerProvincia.clearSelection();
        this.CboProvincia.innerHTML = tagHtml.join("");
      } catch (error) {
        console.log("Error: _callProvincia " + error.name + " - " + error.message);
      }
    },

    // Error - Select PROVINCIA
    _errorProvincia: function _errorProvincia(item) {
      try {
        var tagHtml = [];
        tagHtml.push("\
            <li class=\"list-group-item\" \
              data-objectId=\"\" \
              data-provinciaId=\"\"> \
              Error al cargar \
            </li>");
        this.featureLayerProvincia.clearSelection();
        this.CboProvincia.innerHTML = tagHtml.join("");
      } catch (error) {
        console.log("Error: _errorProvincia " + error.name + " - " + error.message);
      }
    },

    _zoomProvincia: function _zoomProvincia(objectId, booleanZoom) {
      try {
        var _query2 = new Query();
        _query2.objectIds = [objectId];
        // Zoom - Object GIS
        this.featureLayerProvincia.selectFeatures(_query2, FeatureLayer.SELECTION_NEW, function (features) {
          if (booleanZoom) {
            this.map.setExtent(features[0].geometry.getExtent().expand(1.6));
          }
        }.bind(this));
      } catch (error) {
        console.log("Error: _zoomProvincia " + error.name + " - " + error.message);
      }
    },

    _callDistrito: function _callDistrito(item) {
      try {
        var tagHtml = [];
        if (item != null) {
          Window.itemFeaturesDistrito = itemFeatures = item.features;
          featuresLength = itemFeatures.length;
          for (var i = 0; i < featuresLength; i++) {
            featureAttributes = item.features[i].attributes;
            tagHtml.push("\
              <li class=\"list-group-item\" \
                data-objectId=\" " + featureAttributes[this.distrito.OBJECTID] + " \" \
                data-distritoId=\" " + featureAttributes[this.distrito.IDDISTRITO] + " \" \
                data-distritoPolygon=\"" + i + "\" >\
                " + featureAttributes[this.distrito.NAME_DISTRITO] + "\
              </li>");
          }
        } else {
          tagHtml.push("\
            <li class=\"list-group-item\" >\
              <p class=\"font-italic\">Seleccione Provincia</p> \
            </li>");
        }
        this.featureLayerDistrito.clearSelection();
        this.CboDistrito.innerHTML = tagHtml.join("");
      } catch (error) {
        console.log("Error: _callDistrito " + error.message);
      }
    },

    // Error - Select PROVINCIA
    _errorDistrito: function _errorDistrito(item) {
      try {
        var tagHtml = [];
        tagHtml.push("\
          <li class=\"list-group-item\" \
            data-objectId=\"\" \
            data-provinciaId=\"\"> \
            Error al cargar \
          </li>");
        this.featureLayerDistrito.clearSelection();
        this.CboDistrito.innerHTML = tagHtml.join("");
      } catch (error) {
        console.log("Error: _errorDistrito " + error.name + " - " + error.message);
      }
    },

    _onClickDistrito: function _onClickDistrito() {
      try {
        thisValue = event.target;
        if (thisValue.attributes["data-distritoId"].value != "") {
          // Limpiar selección
          this._clearNodes(thisValue.parentNode.childNodes);
          // Pinta la selección
          thisValue.style["background-color"] = "#D6DDEB";
          this._zoomDistrito(thisValue.attributes["data-objectId"].value, this.ID_ZoomEspecifico.checked);
          this.itemGeometry = Window.itemFeaturesDistrito[thisValue.attributes["data-distritoPolygon"].value].geometry;
        }
      } catch (error) {
        console.log("Error: _onClickDistrito " + error.name + " - " + error.message);
      }
    },

    _zoomDistrito: function _zoomDistrito(objectId, booleanZoom) {
      try {
        var _query3 = new Query();
        _query3.objectIds = [objectId];
        // Zoom - Object GIS
        this.featureLayerDistrito.selectFeatures(_query3, FeatureLayer.SELECTION_NEW, function (features) {
          if (booleanZoom) {
            this.map.setExtent(features[0].geometry.getExtent().expand(1.6));
          }
        }.bind(this));
      } catch (error) {
        console.log("Error: _zoomDistrito " + error.name + " - " + error.message);
      }
    },

    _tagHtml: function _tagHtml(paramIterador, paramDepartamento, paramIDDepartamento, paramProvincia, paramIDProvincia, paramDistrito, paramIDDistrito) {
      var contentDepartamento = '',
          contentProvincia = '',
          contentDistrito = '';
      try {

        if (paramDepartamento.trim() != '') {
          contentDepartamento = "\
            <input type=\"checkbox\" id=\"1" + paramIterador + "\" value=\"" + paramIDDepartamento + "\" data-group=\"Departamento\">&nbsp;\
            <label for=\"1" + paramIterador + "\">\
              <i class=\"fa fa-map\"></i>&nbsp;" + paramDepartamento + "\
            </label>";
        }

        if (paramProvincia.trim() != '') {
          contentProvincia = "\
            <input type=\"checkbox\" id=\"2" + paramIterador + "\" value=\"" + paramIDProvincia + "\" data-group=\"Provincia\">&nbsp;\
            <label for=\"2" + paramIterador + "\">\
              <i class=\"fa fa-map\"></i>&nbsp;" + paramProvincia + "\
            </label>";
        }

        if (paramDistrito.trim() != '') {
          contentDistrito = "\
            <input type=\"checkbox\" id=\"3" + paramIterador + "\" value=\"" + paramIDDistrito + "\" data-group=\"Distrito\">&nbsp;\
            <label for=\"3" + paramIterador + "\">\
              <i class=\"fa fa-map\"></i>&nbsp; " + paramDistrito + "\
            </label>";
        }

        return "\
          <tr>\
            <td style=\"font-size:10px\">" + contentDepartamento + "\
            </td>\
            <td style=\"font-size:10px\">" + contentProvincia + "\
            </td>\
            <td style=\"font-size:10px\">" + contentDistrito + "\
            </td>\
          </tr>";
      } catch (error) {
        console.log("Error: _tagHtml " + error.name + " - " + error.message);
      }
    },

    _coincidencia: function _coincidencia(paramNumber) {
      var tagHtml = [];
      try {
        if (paramNumber != null) {
          this.ID_Coincidencia.innerHTML = paramNumber + parseInt(this.ID_Coincidencia.innerText);
        } else {
          this.ID_Coincidencia.innerHTML = "0";
        }
      } catch (error) {
        console.log("Error: _tableResult " + error.name + " - " + error.message);
      }
    },

    _tableResult: function _tableResult(paramNumber) {
      var tagHtml = [];
      try {
        if (paramNumber != null) {
          Window.resulta = Window.resulta + paramNumber;
          if (Window.resulta == 3) {
            tagHtml.push("<tr>\
                <td colspan=\"3\"  class=\"has-text-centered\"> No se tiene coincidencias </td>\
              </tr>");
            this.ID_GeneralLimite.innerHTML = tagHtml.join("");
          }
        } else {
          Window.resulta = 0;
        }
      } catch (error) {
        console.log("Error: _tableResult " + error.name + " - " + error.message);
      }
    },

    _callGeneralLimite: function _callGeneralLimite(paramWhere, paramDepartamento, paramProvincia) {
      try {
        paramLIKE = paramWhere.substring(paramWhere.indexOf("LIKE"), paramWhere.length);
        /* GENERAL PROVINCIA */
        this.queryProvincia.where = this.provincia.NAME_PROVINCIA + " " + paramLIKE;
        this.queryTaskProvincia.execute(this.queryProvincia, function (item) {

          /* PROVINCIA */
          var tagHtml = [];
          itemFeatures = item.features;
          featuresLength = itemFeatures.length;
          featuresLength == 0 ? this._tableResult(1) : '';

          for (var i = 0; i < featuresLength; i++) {
            featureAttributes = item.features[i].attributes;
            /* Valida si existe ID en la colección */
            booleanItem = paramProvincia.find(function (element) {
              if (element == featureAttributes[this.provincia.IDPROVINCIA]) {
                return true;
              }
              return false;
            }.bind(this));

            if (!booleanItem) {
              /* Suma a la coincidencia */
              this._coincidencia(1);
              tagHtml.push(this._tagHtml(i + "HD", featureAttributes[this.provincia.NAME_DEPARTAMENTO], featureAttributes[this.provincia.IDDEPARTAMENTO], featureAttributes[this.provincia.NAME_PROVINCIA], featureAttributes[this.provincia.IDPROVINCIA], '', ''));
            }
            /* Se adiciona los ID de departamentos */
            paramDepartamento.push(featureAttributes[this.provincia.IDDEPARTAMENTO]);
          }
          this.ID_GeneralLimite.innerHTML += tagHtml.join("");
          /* / PROVINCIA */

          /* DEPARTAMENTO */
          this.queryDepartamento.where = this.departamento.NAME_DEPARTAMENTO + " " + paramLIKE;
          this.queryTaskDepartamento.execute(this.queryDepartamento, function (item) {
            var tagHtml = [],

            //console.log(paramProvincia);
            itemFeatures = item.features;
            featuresLength = itemFeatures.length;
            featuresLength == 0 ? this._tableResult(1) : '';
            /* Suma a la coincidencia */

            for (var _i = 0; _i < featuresLength; _i++) {
              featureAttributes = item.features[_i].attributes;
              /* Valida si existe ID en la colección */

              booleanItem = paramDepartamento.find(function (element) {
                if (element == featureAttributes[this.departamento.IDDEPARTAMENTO]) {
                  return true;
                }
                return false;
              }.bind(this));

              if (!booleanItem) {
                this._coincidencia(1);
                tagHtml.push(this._tagHtml(_i + "RM", featureAttributes[this.departamento.NAME_DEPARTAMENTO], featureAttributes[this.departamento.IDDEPARTAMENTO], '', '', '', ''));
              }
            }
            this.ID_GeneralLimite.innerHTML += tagHtml.join("");
          }.bind(this));
          /* / DEPARTAMENTO */
        }.bind(this)
        /* GENERAL PROVINCIA */
        );
      } catch (error) {
        console.log("Error: _callGeneralLimite " + error.name + " - " + error.message);
      }
    },

    _callGeneralDistrito: function _callGeneralDistrito(item) {
      try {
        var tagHtml = [],
            departamento = [],
            provincia = [];
        /* Limpiando */
        this._coincidencia(null);

        if (item != null) {
          featuresLength = item.features.length;
          featuresLength == 0 ? this._tableResult(1) : '';

          /* Suma a la coincidencia */
          this._coincidencia(featuresLength);

          for (var i = 0; i < featuresLength; i++) {
            featureAttributes = item.features[i].attributes;
            /* ARRAY Departamentos */
            departamento.push(featureAttributes[this.distrito.IDDEPARTAMENTO]);
            /* ARRAY Provincia */
            provincia.push(featureAttributes[this.distrito.IDPROVINCIA]);

            tagHtml.push(this._tagHtml(i, featureAttributes[this.distrito.NAME_DEPARTAMENTO], featureAttributes[this.distrito.IDDEPARTAMENTO], featureAttributes[this.distrito.NAME_PROVINCIA], featureAttributes[this.distrito.IDPROVINCIA], featureAttributes[this.distrito.NAME_DISTRITO], featureAttributes[this.distrito.IDDISTRITO]));
          }
          this._callGeneralLimite(this.queryDistrito.where, departamento, provincia);

          this.ID_GeneralLimite.innerHTML += tagHtml.join("");
        } else {
          tagHtml.push("\
            <li class=\"list-group-item\" >\
              <p class=\"font-italic\">Seleccione Provincia</p> \
            </li>");
          this.ID_GeneralLimite.innerHTML = tagHtml.join("");
        }
      } catch (error) {
        console.log("Error: _callGeneralDistrito " + error.name + " - " + error.message);
      }
    },

    // Error - Select PROVINCIA
    _errorGeneralDistrito: function _errorGeneralDistrito(item) {
      try {
        console.log(item);
      } catch (error) {
        console.log("Error: _errorDistrito " + error.name + " - " + error.message);
      }
    },

    /*
        _onClickZoomGeneral: function() {
          try {
            console.log("dio click");
            console.log(event.target);
          } catch (error) {
            console.log("Error: _onClickZoomGeneral " + error.name + " - " + error.message);
          }
          console.log(" * * * * * * * ");
        },
        */

    _onClickBuscar: function _onClickBuscar(item) {
      var tagHtml = [];
      this._tableResult(null);
      if (item != null) {
        this.ID_GeneralLimite.innerHTML = tagHtml.join("");
        this.queryDistrito.where = "" + this.distrito.NAME_DISTRITO + " LIKE '%" + this.ID_LimitePolitico.value.toUpperCase().trim() + "%'";

        this.queryTaskDistrito.execute(this.queryDistrito, this._callGeneralDistrito.bind(this), this._errorGeneralDistrito.bind(this));
      } else {
        tagHtml.push("\
          <tr>\
            <td colspan=\"3\"  class=\"has-text-centered\"> No se tiene coincidencias </td>\
          </tr>");
        this.ID_GeneralLimite.innerHTML = tagHtml.join("");
      }
    },

    _onClickEliminar: function _onClickEliminar() {
      try {
        /* Eliminar texto */
        this.ID_LimitePolitico.value = "";
        /* Eliminar resultado */
        this._onClickBuscar(null);
        /* Limpiando */
        this._coincidencia(null);

        /* Limpia DEPARTAMENTO */
        this._callDepartamento(null);
        /* Limpia PROVINCIA */
        this._callProvincia(null);
        /* Limpia DISTRITO */
        this._callDistrito(null);
      } catch (error) {
        console.log("Error: _onClickEliminar " + error.name + " - " + error.message);
      }
    },

    _onClickLimpiar: function _onClickLimpiar() {
      try {
        /* Limpia búsqueda general */
        this._onClickEliminar();
        /* Limpia DEPARTAMENTO */
        this._callDepartamento(null);
        /* Limpia PROVINCIA */
        this._callProvincia(null);
        /* Limpia DISTRITO */
        this._callDistrito(null);
        /* Limpia el FOCUS */

        if (event.target.id) {
          document.getElementById(event.target.id).blur();
        }

        /* Limpiando coincidencia */
        this._coincidencia(null);
      } catch (error) {
        console.log("Error: _onClickLimpiar " + error.name + " - " + error.message);
      }
    },

    _onClickAnalizar: function _onClickAnalizar() {
      try {
        /* Limpia el FOCUS */
        document.getElementById(event.target.id).blur();
      } catch (error) {
        console.log("Error: _onClickLimpiar " + error.name + " - " + error.message);
      }
    },

    _defaultTableGeneral: function _defaultTableGeneral() {
      try {
        var checkboxDepartamento = query(".widget-proyectos table tbody tr td input");
        for (var i = 0; i < checkboxDepartamento.length; i++) {
          /* Default checkbox */
          checkboxDepartamento[i].checked = false;
        }
      } catch (error) {
        console.log("Error: _defaultTableGeneral " + error.name + " - " + error.message);
      }
    },

    _onClickTableGeneral: function _onClickTableGeneral() {
      query(".widget-proyectos table tbody").on("click", function (event) {
        var booleanZoom = this.ID_ZoomGeneral.checked;
        var target = event.target;

        /* Default checkbox */
        this._defaultTableGeneral();
        /* Limpia DEPARTAMENTO */
        this._callDepartamento(null);
        /* Limpia PROVINCIA */
        this._callProvincia(null);
        /* Limpia DISTRITO */
        this._callDistrito(null);

        if (target.nodeName == "INPUT") {
          var group = target.dataset.group;
          if (group == "Departamento") {

            /* Zoom Departamento */
            this.queryDepartamento.where = this.departamento.IDDEPARTAMENTO + " = '" + target.value + "'";
            this.queryTaskDepartamento.execute(this.queryDepartamento, function (item) {
              var featuresLength = item.features.length;
              for (var h = 0; h < featuresLength; h++) {
                featureAttributes = item.features[h].attributes;
                /* ZOOM Departamento */
                this._zoomDepartamento(featureAttributes[this.departamento.OBJECTID], booleanZoom);
              }
            }.bind(this));
            /* / Zoom Departamento */
          } else if (group == "Provincia") {

            /* Zoom Provincia */
            this.queryProvincia.where = this.provincia.IDPROVINCIA + " = '" + target.value + "'";
            this.queryTaskProvincia.execute(this.queryProvincia, function (item) {
              var featuresLength = item.features.length;
              for (var d = 0; d < featuresLength; d++) {
                featureAttributes = item.features[d].attributes;
                /* ZOOM Provincia */
                this._zoomProvincia(featureAttributes[this.provincia.OBJECTID], booleanZoom);
              }
            }.bind(this));
            /* / Zoom Provincia */
          } else if (group == "Distrito") {

            /* Zoom Distrito */
            this.queryDistrito.where = this.distrito.IDDISTRITO + " = '" + target.value + "'";
            this.queryTaskDistrito.execute(this.queryDistrito, function (item) {
              var featuresLength = item.features.length;
              for (var r = 0; r < featuresLength; r++) {
                featureAttributes = item.features[r].attributes;
                /* ZOOM Distrito */
                this._zoomDistrito(featureAttributes[this.distrito.OBJECTID], booleanZoom);
              }
            }.bind(this));
            /* / Zoom Distrito */
          }
          document.getElementById(target.id).checked = true;
        }
        //this.ID_ZoomEspecifico.checked
      }.bind(this));
    },

    _onLoadDepartamento: function _onLoadDepartamento() {
      this.queryDepartamento.where = "1=1";
      this.queryTaskDepartamento.execute(this.queryDepartamento, this._callDepartamento.bind(this), this._errorDepartamento.bind(this));
      // Null para que no cargue
      this._callProvincia(null);
    },

    _activeTabSearch: function _activeTabSearch(positionTab) {

      var tabs1 = document.querySelectorAll('.widget-proyectos .tabs li');
      var tabsContent1 = document.querySelectorAll('.widget-proyectos .tab-content');

      var deactvateAllTabs1 = function deactvateAllTabs1() {
        tabs1.forEach(function (tab) {
          tab.classList.remove('is-active');
        });
      };

      var hideTabsContent1 = function hideTabsContent1() {
        tabsContent1.forEach(function (tabContent) {
          tabContent.classList.remove('is-active');
        });
      };

      var activateTabsContent = function activateTabsContent(tab) {
        tabsContent1[getIndex1(tab)].classList.add('is-active');
      };

      var getIndex1 = function getIndex1(el) {
        return [].concat(_toConsumableArray(el.parentElement.children)).indexOf(el);
      };

      tabs1.forEach(function (currentValue, index, array) {
        currentValue.addEventListener('click', function () {
          deactvateAllTabs1();
          hideTabsContent1();
          /* Limpia la funcionalidad */
          if (index == 0) {
            this._onClickLimpiar();
          } else {
            this._onClickEliminar();
          }
          currentValue.classList.add('is-active');
          activateTabsContent(currentValue);
        }.bind(this));
      }.bind(this));

      tabs1[positionTab].click();
    },

    postCreate: function postCreate() {
      this.inherited(arguments);
      console.log('WidgetProyectos::postCreate');
      /* Cambiar el tamaño del widget */
      this._getPanel(365, 330);
      /* Configuracion departamento */
      this._settingDepartamento();
      /* Configuracion provincia */
      this._settingProvincia();
      /* Configuracion distrito */
      this._settingDistrito();
      /* Cargar los departamentos */
      this._onLoadDepartamento();
      /* Limpiar grilla de limite general */
      this._onClickBuscar(null);
    },

    startup: function startup() {
      this.inherited(arguments);
      console.log('WidgetProyectos::startup');
      /* Recorre la tabla de resultado*/
      this._onClickTableGeneral();
      /* Pestaña que se activa 
        - 0. Activa la pestaña de ESPECIFICO
        - 1. Activa la pestaña de GENERAL */
      this._activeTabSearch(0);
    }

    // onOpen: function(){
    //   console.log('WidgetProyectos::onOpen');
    // },

    // onClose: function(){
    //   console.log('WidgetProyectos::onClose');
    // },

    // onMinimize: function(){
    //   console.log('WidgetProyectos::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('WidgetProyectos::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('WidgetProyectos::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('WidgetProyectos::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('WidgetProyectos::onPositionChange');
    // },

    // resize: function(){
    //   console.log('WidgetProyectos::resize');
    // }

    //methods to communication between widgets:

  });
});

/*

let idWidget = this.appConfig.getConfigElementsByName("Widget-TableResult")[0].id;
this.openWidgetById(idWidget); 

*/
//# sourceMappingURL=Widget.js.map
