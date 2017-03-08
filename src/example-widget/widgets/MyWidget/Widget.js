define(['dojo/_base/declare', 'jimu/BaseWidget', './sub-widget/SubWidget'],
function(declare, BaseWidget, SubWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'my-widget',
	subWidget: null,
    // this property is set by the framework when widget is loaded.
     name: 'MyWidget',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('MyWidget::postCreate');
	  
	  this.subWidget = new SubWidget({map:this.map});
	  this.subWidget.placeAt(this.widgetHolder);
    },

     startup: function() {
       this.inherited(arguments);
	   
	   this.subWidget.startup();
       console.log('MyWidget::startup');
     },

    // onOpen: function(){
    //   console.log('MyWidget::onOpen');
    // },

     onClose: function(){
       console.log('MyWidget::onClose');
	
			this.subWidget.zoomIntoMap();
     },

    // onMinimize: function(){
    //   console.log('MyWidget::onMinimize');
    // }

    // onMaximize: function(){
    //   console.log('MyWidget::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('MyWidget::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('MyWidget::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('MyWidget::onPositionChange');
    // },

    // resize: function(){
    //   console.log('MyWidget::resize');
    // }

    //methods to communication between widgets:

  });

});
