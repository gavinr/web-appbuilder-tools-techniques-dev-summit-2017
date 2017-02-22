# Another slide

Example JavaScript snippet code
```js
    require([
      "esri/Map",
      "esri/views/SceneView",
      "dojo/domReady!"
    ], function(Map, SceneView) {

      var map = new Map({
        basemap: "streets"
      });

      var view = new SceneView({
        container: "viewDiv",
        map: map,
        scale: 50000000,
        center: [-101.17, 21.78]
      });

    });
```
