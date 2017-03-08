define([
  'dojo/text!./templates/SubWidget.html',

  'dojo/_base/declare',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin'
], function(
  template,

  declare,

  _WidgetBase,
  _TemplatedMixin
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    // description:
    //    Yo Dawg, I heard you liked widgets, so I put a widget in your widget and  threw them in a web app builder.

    templateString: template,
    baseClass: 'sub-widget',

    // Properties to be sent into constructor

    postCreate: function() {
      // summary:
      //    Overrides method of same name in dijit._Widget.
      // tags:
      //    private
      console.log('example-widget\widgets\MyWidget\sub-widget.SubWidget::postCreate', arguments);

      this.setupConnections();

      this.inherited(arguments);
    },
    setupConnections: function() {
      // summary:
      //    wire events, and such
      //
      console.log('example-widget\widgets\MyWidget\sub-widget.SubWidget::setupConnections', arguments);

    },
	zoomIntoMap: function(){
		//ZOOM!
		this.map.setLevel(3);	
	}
  });
});