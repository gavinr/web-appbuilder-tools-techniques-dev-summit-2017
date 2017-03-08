require([
    'src/SubWidget',

    'dojo/dom-construct',
	'dojo/query',
	'esri/map'
], function (
    WidgetUnderTest,

	domConstruct,
	query,
	Map
) {
	
	console.debug(domConstruct);
    describe('SubWidget/SubWidget', function () {
		
		console.debug("MAP", Map);
        var widget,map;
        var destroy = function (widget) {
            widget.destroyRecursive();
            widget = null;
        };

        beforeEach(function () {
            map = new Map(domConstruct.create('div', null, document.body));
            widget = new WidgetUnderTest({map:map}, domConstruct.create('div', null, document.body));
        });

        afterEach(function () {
            if (widget) {
                destroy(widget);
            }

            if (map){
                map.destroy();
                query(".map").forEach(function(node){
                    node.parentNode.removeChild(node);
                });
            }
        });

        describe('Sanity', function () {
            it('should create a Sub Widget', function () {
                expect(widget).toEqual(jasmine.any(WidgetUnderTest));
            });
        });

        describe('Zoom into map', function() {

            it("should set map level to 3", function(){
                spyOn(widget.map,'setLevel');
                
                widget.zoomIntoMap();

                expect(widget.map.setLevel).toHaveBeenCalled();
				expect(widget.map.setLevel.calls.argsFor(0)).toEqual([3]);
            });
        });
    });
});
