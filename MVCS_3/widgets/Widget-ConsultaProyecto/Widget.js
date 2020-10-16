function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

define(['dojo/query', 'dijit/_WidgetsInTemplateMixin', 'dijit/_TemplatedMixin', 'esri/tasks/query', 'dojo/_base/lang', 'jimu/LayerInfos/LayerInfos', 'dojo/_base/declare', 'jimu/dijit/Message', 'jimu/BaseWidget'], function (query, _WidgetsInTemplateMixin, _TemplatedMixin, Query, lang, LayerInfos, declare, Message, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget, _WidgetsInTemplateMixin], {
        // Custom widget code goes here
        baseClass: 'widget-consulta-proyecto',
        layersMap: null,
        feature_class: null,
        projectFilter: null,
        // this property is set by the framework when widget is loaded.
        // name: 'Widget-ConsultaProyecto',
        // add additional properties here
        counterFeature: 0,
        counterTotal: 0,
        counterItem: 0,
        counterResults: 0,
        stateExtent: [],
        layerExtent: null,
        listLayers: null,
        idGroupLayer: null,
        booleanField: true,
        listName: null,
        colorRowSelected: null,

        _loadNoneGeneralLimite: function _loadNoneGeneralLimite() {
            try {
                this.LoadGeneral.style.display = "none";
                this.ID_General.style.display = "block";
            } catch (error) {
                console.error('Error: _loadNoneGeneralLimite ' + error.name + ' - ' + error.message);
            }
        },
        /* Contador de funciones asincronas en ejecución */
        _counterFunction: function _counterFunction(paramNumber) {
            try {
                if (paramNumber != null) {
                    this.counterItem = this.counterItem + paramNumber;
                    if (this.counterItem == this.counterTotal) {
                        /* Acercamiento por centro del extent */
                        if (this.layerExtent != null) {
                            if (this.counterResults == 1) {
                                //this.map.centerAndZoom(this.layerExtent.getCenter(),15);
                                this.ID_ListProject.childNodes[0].click();
                                //console.log(this.ID_ListProject.childNodes);
                            } else {
                                this.map.setExtent(this.layerExtent.expand(2), true);
                            }
                        } else {
                            this.ID_LoadProyecto.style.display = "none";
                        }
                        /* Se reinicia el COUNTER y se limpia el EXTENT */
                        this._counterFunction(null);
                    }
                } else {
                    this.counterResults = 0;
                    this.counterItem = 0;
                    this.counterTotal = 0;
                    this.layerExtent = null;
                }
            } catch (error) {
                console.error('Error: _counterFunction ' + error.name + ' - ' + error.message);
            }
        },
        /* Cambiar el tamaño del widget */
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
        /* Activación de las casillas de verificación */
        _onClickCheckbox: function _onClickCheckbox() {
            var thisValue = "";
            try {
                thisValue = event.target;
                var checkboxes = document.getElementsByName('check');
                checkboxes.forEach(function (item) {
                    if (item !== thisValue) item.checked = false;
                });
                if (thisValue.id == "PROYECTONOMBRE_ID") {
                    this.ID_ProyectoFiltro.setAttribute('placeholder', 'Ingrese NOMBRE del proyecto');
                    this.projectFilter = true;
                } else {
                    this.ID_ProyectoFiltro.setAttribute('placeholder', 'Ingrese c\xF3digo SNIP del proyecto');
                    this.projectFilter = false;
                }
                this.ID_ProyectoFiltro.focus();
            } catch (error) {
                console.error('_onClickCheckbox: ' + error.name + ' - ' + error.message);
            }
        },
        /* Buscar proyectos */
        _searchProyectos: function _searchProyectos(paramNameProject, paramProjectFilter) {
            var _this = this;

            var listNameJSON = {},
                query = null,
                layerMap = "",
                attObjectId = null,
                featureAttributes = void 0;
            var featuresLength = null,
                feature = null,
                field = null,
                li = null,
                div = null;
            try {
                for (var k in this.listName) {
                    listNameJSON[this.listName[k]] = this.listName[k];
                }
                /* Visualiza las lista de capas. console.log(this.map.getLayersVisibleAtScale()); */
                query = new Query();
                layerMap = this.layersMap;
                //this.listLayers = this.layersMap;
                var featureLayerDecretoVisor = this.map.getLayer(this.idGroupLayer);
                if (paramProjectFilter) {
                    query.where = 'UPPER(nomproyct) like \'%' + paramNameProject.toUpperCase() + '%\'';
                } else {
                    query.where = 'codsnip = ' + paramNameProject + ' OR codunico = ' + paramNameProject;
                }

                var _loop = function _loop() {
                    var idLayer = _this.idGroupLayer + '_' + itemLayer;
                    _this.feature_class = layerMap.getLayerInfoById(_this.idGroupLayer + '_' + itemLayer);
                    // Oculta capa
                    _this.feature_class.hide();
                    _this.counterFeature = 0;
                    // Valida si existe la función extent en consecuencia existe el objeto geográfico.
                    if (typeof _this.feature_class.layerObject.queryExtent === 'function') {
                        // Cuenta el resultado
                        _this.feature_class.layerObject.queryCount(query, function (queryResults) {
                            this.counterResults = this.counterResults + queryResults;
                            this.counterFeature = this.counterFeature + queryResults;
                            this.ID_ProyectoCounter.innerHTML = this.counterFeature;
                        }.bind(_this), function (error) {
                            console.error(error);
                        });
                        _this.counterTotal++;
                    }
                    // Valida si existe la función extent en consecuencia existe el objeto geográfico.
                    if (typeof _this.feature_class.layerObject.queryExtent === 'function') {
                        // Se oculta sus datos del mapa layerMap.getLayerInfoById(`${this.idGroupLayer}_${itemLayer}`).setFilter("1=2");
                        // Consulta de caracteristicas
                        _this.feature_class.layerObject.queryFeatures(query, function (results) {
                            featuresLength = results.features.length;
                            if (featuresLength >= 1) {
                                feature = results.features;
                                if (this.booleanField) {
                                    field = results.fields;
                                    for (var H = 0; H < field.length; H++) {
                                        if (field[H].name in listNameJSON) {
                                            //(field[H].name) field[H].alias);
                                            listNameJSON[field[H].name] = field[H].alias;
                                            window.listFiledJSON = listNameJSON;
                                        }
                                    }
                                    this.booleanField = false;
                                }

                                for (var D = 0; D < featuresLength; D++) {
                                    var fragment = document.createDocumentFragment();
                                    featureAttributes = feature[D].attributes;
                                    li = document.createElement('li');
                                    attObjectId = document.createAttribute("data-objectid");
                                    attObjectId.value = feature[D].attributes.objectid;
                                    attLayerId = document.createAttribute("data-layerid");
                                    attLayerId.value = idLayer;
                                    li.setAttributeNode(attObjectId);
                                    li.setAttributeNode(attLayerId);
                                    li.className = "list-group-item";
                                    for (var name in this.listName) {
                                        div = document.createElement('div');
                                        div.className = 'field-' + name;
                                        div.innerHTML = '<strong style="text-transform: uppercase;">' + window.listFiledJSON[this.listName[name]] + ': </strong> ' + featureAttributes[this.listName[name]] + '<br>';
                                        li.appendChild(div);
                                    }
                                    fragment.appendChild(li);
                                    this.ID_ListProject.appendChild(fragment);
                                }
                                layerMap.getLayerInfoById(results.features[0]._layer.id).setFilter(query.where);
                                layerMap.getLayerInfoById(results.features[0]._layer.id).show();
                                /* Se agreda al resultado */
                                this.ID_LoadProyecto.style.display = "none";
                            }
                        }.bind(_this));
                        // Consulta de contador
                        _this.feature_class.layerObject.queryExtent(query, function (queryResults) {
                            if (queryResults.count >= 1) {
                                if (this.layerExtent == null) {
                                    this.layerExtent = queryResults.extent;
                                } else {
                                    this.layerExtent.union(queryResults.extent);
                                }
                            }
                            this._counterFunction(1);
                        }.bind(_this));
                    }
                };

                for (itemLayer in featureLayerDecretoVisor.layerInfos) {
                    _loop();
                }
                /*
                this.feature_class = this.layersMap.getLayerInfoById('proyectos_decreto_visor_7498_3');
                query = new Query();
                query.where = "codsnip = 2453194";
                  this.feature_class.setFilter(query.where);
                  //this.feature_class.layerObject.queryCount(query,function(queryResults) {
                //console.log(queryResults);
                //}, function(error) {
                //    console.log(error);
                //});
                
                
                // this.feature_class.layerObject.queryFeatures(query, function(results) {});
                this.feature_class.layerObject.queryExtent(query, function(queryResults) {
                    console.log(queryResults);
                    //this.map.setExtent(queryResults.extent.expand(2),true);
                    //this.map.centerAndZoom(queryResults.extent.getCenter(),12);
                }.bind(this));
                */

                /*
                console.log(this.map.getLayersVisibleAtScale());
                let layerDefinitions = [];
                layerDefinitions[3] = "codsnip = 2453194";
                console.log(layerDefinitions);
                  let featureLayerDecretoVisor = this.map.getLayer('proyectos_decreto_visor_7498');
                featureLayerDecretoVisor.setLayerDefinitions(layerDefinitions);
                  console.log(featureLayerDecretoVisor);
                let soyapi = featureLayerDecretoVisor.layerInfos[3];
                  console.log(soyapi);*/
                /*
                let query = new Query();
                query.where = featureLayerDecretoVisor.layerDefinitions[3];
                //query.where = layerDefinitions;
                //query.where = "codsnip = 2453194";
                featureLayerDecretoVisor.queryCount(query,function(queryResults) {
                    console.log(queryResults);
                }, function(error) {
                    console.log(error);
                });
                */
            } catch (error) {
                console.error('_searchProyectos ' + error.name + ' - ' + error.message);
            }
        },

        _isNumeric: function _isNumeric(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },


        _onClickProyectoBuscar: function _onClickProyectoBuscar() {
            var countCheckbox = 0,
                proyectoFiltro = "";
            try {
                proyectoFiltro = this.ID_ProyectoFiltro.value.trim();
                // Se valida que el CHECKBOX este seleccionado
                var checkboxes = document.getElementsByName('check');
                checkboxes.forEach(function (item) {
                    if (!item.checked) {
                        countCheckbox = countCheckbox + 1;
                    }
                });
                // Se valida si selecciono la casilla de verificación
                if (countCheckbox == 2) {
                    new Message({
                        titleLabel: '<strong>                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;                        COMPLETAR CASILLA</strong>',
                        message: '<i class="fa fa-terminal" aria-hidden="true"></i>&nbsp;                        C\xF3digo <strong>SNIP</strong> o <strong>NOMBRE</strong> del PROYECTO.'
                    });
                    countCheckbox = 0;
                    return;
                }
                // Se valida que el campo no este vacío.
                if (proyectoFiltro == "") {
                    new Message({
                        titleLabel: '<strong>                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;                        COMPLETAR CAMPO</strong>',
                        message: '<i class="fa fa-terminal" aria-hidden="true"></i>&nbsp;                        ' + this.ID_ProyectoFiltro.getAttribute("placeholder") + '.'
                    });
                    return;
                }
                // Verifica si es númerico
                if (!this.projectFilter) {
                    // Tener en cuenta que el campo en la GDB es númerico. No se puede bandar vacío
                    proyectoFiltro = this._isNumeric(proyectoFiltro) ? proyectoFiltro : 0;
                }
                // Muestra la segunda pestaña
                this._activeTabSearch(1);
                this.ID_LoadProyecto.style.display = "block";
                // Limpia la lista de resultado
                this.ID_ListProject.innerHTML = "";
                // Proceso de búsqueda de proyectos
                // projectFilter: true -> Buscar por nombre.
                // projectFilter: false -> Buscar por snip.
                this._searchProyectos(proyectoFiltro, this.projectFilter);
            } catch (error) {
                console.error('Error: _onClickProyectoBuscar ' + error.name + ' - ' + error.message);
            }
        },

        _onClickProyectoLimpiar: function _onClickProyectoLimpiar() {
            try {
                this.ID_ProyectoFiltro.value = "";
                this.ID_ListProject.innerHTML = "";
                this.ID_ProyectoCounter.innerHTML = 0;
                this.ID_ProyectoFiltro.focus();
                /* Extensión por defecto del mapa */
                this.map.setExtent(this.map._initialExtent);
                /* Limpiando capas */
                var featureLayerDecretoVisor = this.map.getLayer(this.idGroupLayer);
                for (itemLayer in featureLayerDecretoVisor.layerInfos) {
                    this.feature_class = this.layersMap.getLayerInfoById(this.idGroupLayer + '_' + itemLayer);
                    this.feature_class.show();
                    // Valida si existe la función extent en consecuencia existe el objeto geográfico.
                    if (typeof this.feature_class.layerObject.queryExtent === 'function') {
                        // Se filtra    
                        this.layersMap.getLayerInfoById(this.idGroupLayer + '_' + itemLayer).setFilter("1=1");
                    }
                }
            } catch (error) {
                console.error('Error: _onClickProyectoLimpiar ' + error.name + ' - ' + error.message);
            }
        },
        _clearNodes: function _clearNodes(item) {
            try {
                item = item.parentNode.childNodes;
                for (var i = 0; i < item.length; i++) {
                    if (item[i].nodeName == "LI") {
                        item[i].style["background-color"] = "#FFFFFF";
                    }
                }
            } catch (error) {
                console.log('Error: _clearNodes ' + error.name + ' - ' + error.message);
            }
        },
        // Muestra el popup
        _queryResultsFeatures: function _queryResultsFeatures(objectid, layerid, target) {
            var queryProject = null;
            try {
                target.style["background-color"] = this.colorRowSelected;
                queryProject = new Query();
                queryProject.where = 'objectid = ' + objectid;
                this.layersMap.getLayerInfoById(layerid).layerObject.queryFeatures(queryProject, function (results) {
                    featuresLength = results.features.length;
                    if (featuresLength >= 1) {
                        this.map.infoWindow.setFeatures(results.features);
                        this.map.infoWindow.show(results.features[0].geometry);
                        this.map.centerAndZoom(results.features[0].geometry, 16);
                    }
                }.bind(this));
            } catch (error) {
                console.error('Error: _queryResultsFeatures ' + error.name + ' - ' + error.message);
            }
        },

        // Seleccionar la fila de resultado
        _onclickRowSelected: function _onclickRowSelected() {
            try {
                query(".widget-consulta-proyecto .tab-content .list-group").on("click", function (e) {
                    var target = event.target;
                    // Tag LI
                    if (target.nodeName == "LI") {
                        this._clearNodes(target);
                        this._queryResultsFeatures(target.dataset.objectid, target.dataset.layerid, target);
                    }
                    // Tag DIV
                    if (target.nodeName == "DIV") {
                        this._clearNodes(target.parentNode);
                        this._queryResultsFeatures(target.parentNode.dataset.objectid, target.parentNode.dataset.layerid, target.parentNode);
                    }
                    // Tag STRONG
                    if (target.nodeName == "STRONG") {
                        this._clearNodes(target.parentNode.parentNode);
                        this._queryResultsFeatures(target.parentNode.parentNode.dataset.objectid, target.parentNode.parentNode.dataset.layerid, target.parentNode.parentNode);
                    }
                }.bind(this));
            } catch (error) {
                console.error('Error: _onclickRowSelected ' + error.name + ' - ' + error.message);
            }
        },

        // Lista de capas
        _getAllLayers: function _getAllLayers() {
            try {
                LayerInfos.getInstance(this.map, this.map.itemInfo).then(lang.hitch(this, function (layerInfosObj) {
                    this.layersMap = layerInfosObj;
                }));
            } catch (error) {
                console.error('Error: _getAllLayers ' + error.name + ' - ' + error.message);
            }
        },


        _activeTabSearch: function _activeTabSearch(positionTab) {
            try {
                var tabs4 = document.querySelectorAll('.widget-consulta-proyecto .tabs .tab');
                var tabsContent4 = document.querySelectorAll('.widget-consulta-proyecto .tab-content');

                var deactvateAllTabs = function deactvateAllTabs() {
                    tabs4.forEach(function (tab) {
                        tab.classList.remove('jimu-state-selected');
                    });
                };

                var hideTabsContent = function hideTabsContent() {
                    tabsContent4.forEach(function (tabContent) {
                        tabContent.classList.remove('jimu-state-selected');
                    });
                };

                var activateTabsContent = function activateTabsContent(tab) {
                    tabsContent4[getIndex(tab)].classList.add('jimu-state-selected');
                };

                var getIndex = function getIndex(el) {
                    return [].concat(_toConsumableArray(el.parentElement.children)).indexOf(el);
                };

                tabs4.forEach(function (currentValue, index, array) {
                    currentValue.addEventListener('click', function () {
                        deactvateAllTabs();
                        hideTabsContent();
                        /* Limpia la funcionalidad */
                        currentValue.classList.add('jimu-state-selected');
                        activateTabsContent(currentValue);
                        this._onFocus();
                    }.bind(this));
                }.bind(this));

                tabs4[positionTab].click();
                //if(positionTab){ this._onFocus(); }
            } catch (error) {
                console.log("Error: _activeTabSearch " + error.name + " - " + error.message);
            }
        },
        //methods to communication with app container:
        postCreate: function postCreate() {
            this.inherited(arguments);
            /* Cambiar el tamaño del widget */
            this.colorRowSelected = this.config.colorRowSelected;
            this.idGroupLayer = this.config.idGroupLayer;
            this.listName = this.config.listNameField;
            this.ID_ProyectoCounter.innerHTML = this.counterFeature;
            this.ID_LoadProyecto.style.display = "none";
            this._getPanel(300, 450);
            this._getAllLayers();
            console.log('Widget-ConsultaProyecto::postCreate');
        },

        startup: function startup() {
            this.booleanField = true;
            this.inherited(arguments);
            console.log('Widget-ConsultaProyecto::startup');
            this.ID_ProyectoFiltro.focus();
            this._onclickRowSelected();
            /* PRUEBA DE PINTAR SEGÚN LA COINCIDENCIA DEL TEXTO
            let p = 'The quick brown Daniel Ramos fox jumps over the lazy dog. If the dog reacted, was it really Daniel Ramos lazy?';
            console.log(p);
            const regex = /Daniel Ramos/gi;
            //p = p.replace(regex, 'ferret');
            p = p.replace(regex, 'PAPI JUANCHO');
            console.log(p);
            // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
            p = p.replace('dog', 'monkey');
            console.log(p);
            */

            /* Pestaña que se activa: 0 FILTRO || 1. RESULTADO */
            this._activeTabSearch(0);
        }

        //onOpen: function(){
        //console.log('Widget-ConsultaProyecto::onOpen');
        //this.ID_ProyectoFiltro.focus();
        //},

        // onClose: function(){
        //   console.log('Widget-ConsultaProyecto::onClose');
        // },

        // onMinimize: function(){
        //   console.log('Widget-ConsultaProyecto::onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('Widget-ConsultaProyecto::onMaximize');
        // },

        // onSignIn: function(credential){
        //   console.log('Widget-ConsultaProyecto::onSignIn', credential);
        // },

        // onSignOut: function(){
        //   console.log('Widget-ConsultaProyecto::onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('Widget-ConsultaProyecto::onPositionChange');
        // },

        // resize: function(){
        //   console.log('Widget-ConsultaProyecto::resize');
        // }

        //methods to communication between widgets:

    });
});
//# sourceMappingURL=Widget.js.map
