
    var map;
    var layer_0;
    var layer_1;
    function initialize() {
      map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(31.294682680880936, -60.8203125),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      layer_0 = new google.maps.FusionTablesLayer({
        query: {
          select: "col8",
          from: "1NZ72RIzIRD1sJ2k04l04cWYEU-EdF9z631lOnOj8"
        },
        map: map,
        styleId: 2,
        templateId: 2
      });
      layer_1 = new google.maps.FusionTablesLayer({
        query: {
          select: "col4>>1",
          from: "1bjbpT2TsvEjHdBREImbCEfBJ_jtJ8ylxyfUi7g2M"
        },
        map: map,
        styleId: 2,
        templateId: 2
      });
    }
    function changeMap_0() {
      var whereClause;
      var searchString = document.getElementById('search-string_0').value.replace(/'/g, "\\'");
      if (searchString != '--Select--') {
        whereClause = "'Country' = '" + searchString + "'";
      }
      layer_0.setOptions({
        query: {
          select: "col8",
          from: "1NZ72RIzIRD1sJ2k04l04cWYEU-EdF9z631lOnOj8",
          where: whereClause
        }
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);