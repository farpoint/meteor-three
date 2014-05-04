Package.describe({
  summary: "Three.js - A JavaScript 3D library"
});

Package.on_use(function (api) {
  api.add_files("lib/three.js", "client");
    api.add_files('lib/OBJMTLLoader.js', 'client');
    api.add_files('lib/MTLLoader.js', 'client');
    api.add_files('lib/OBJLoader.js', 'client');
  api.export('THREE', 'client');
});
