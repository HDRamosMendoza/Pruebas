define(['dojo/_base/declare', 'jimu/BaseWidget'], function (declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

        // Custom widget code goes here

        baseClass: 'widget-consulta-proyecto',
        // this property is set by the framework when widget is loaded.
        // name: 'Widget-ConsultaProyecto',
        // add additional properties here

        //methods to communication with app container:
        postCreate: function postCreate() {
            this.inherited(arguments);
            console.log('Widget-ConsultaProyecto::postCreate');
        }

        // startup: function() {
        //   this.inherited(arguments);
        //   console.log('Widget-ConsultaProyecto::startup');
        // },

        // onOpen: function(){
        //   console.log('Widget-ConsultaProyecto::onOpen');
        // },

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
