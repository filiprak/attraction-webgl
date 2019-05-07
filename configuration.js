var config = {
  "particles": [
    { "src": "assets/bubble.obj", "count": 20, "scale": 0.9, "color": "#fe808b", "bounding": "capsule" },
    { "src": "assets/bubble.obj", "count": 20, "scale": 1.25, "color": "#fe808b", "bounding": "capsule" },
    //{ "src": "assets/cone.obj", "count": 12, "scale": 1.0, "color": "#ff808b", "bounding": "capsule" },
    //{ "src": "assets/cone.obj", "count": 12, "scale": 1.0, "color": "#ff808b", "bounding": "capsule" },
  ],
  "lights": {
    "light1": {
      "position": {"x":10, "y":30, "z":-10},
      "color": "#c01e1e",
      "intensity": 1.0
    },
    "light2": {
      "position": {"x":-10, "y":-10, "z":-10},
      "color": "#ebc13a",
      "intensity": 1.0
    },
    "ambient": {
      "position": {"x":1, "y":1, "z":1},
      "color": "#d98dcc",
      "intensity": 1.0
    }
  }
};