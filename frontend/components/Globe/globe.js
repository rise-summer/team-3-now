module.exports = function() { return `

<!DOCTYPE HTML>
<html>
  <head>
    <script src="http://www.webglearth.com/v2/api.js"></script>
    <script>
      var earth;
      function initialize() {
        earth = new WE.map('earth_div');
       

        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

        var marker = WE.marker([-14.6898812,-49.689971]).addTo(earth);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();
        
        earth.setView([-14.6898812,-49.689971], 2);

        // // Start a simple rotation animation
        // var before = null;
        // requestAnimationFrame(function animate(now) {
        //     var c = earth.getPosition();
        //     var elapsed = before? now - before: 0;
        //     before = now;
        //     earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
        //     requestAnimationFrame(animate);
        // });
      }
    </script>
    <style>
      html, body{padding: 0; margin: 0;}
      #earth_div{ top: 0; right: 0; bottom: 1; left: 0; position: absolute !important;}
    </style>   
    <title>WebGL Earth API v2: Animation</title>
  </head>
  <body onload="initialize()">
    <div id="earth_div"></div>
  </body>
</html>
`};
