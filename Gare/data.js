var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.8050697991084377,
        "pitch": 0.21724105583059838,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.7627726121251417,
          "pitch": 0.3646380875604027,
          "rotation": 0,
          "target": "1-sdb"
        },
        {
          "yaw": -1.5124543567883837,
          "pitch": 0.34535047373977434,
          "rotation": 0,
          "target": "3-chambre2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sdb",
      "name": "sdb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.3519588898140782,
        "pitch": 0.5992521392357659,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.0056261705678002,
          "pitch": 0.3268824215994286,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chambre1",
      "name": "Chambre1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.1786711350931327,
        "pitch": 0.1857491211472464,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.5929629640076417,
          "pitch": 0.21126218599982316,
          "rotation": 0,
          "target": "3-chambre2"
        },
        {
          "yaw": -0.855803759132165,
          "pitch": 0.3152934005683896,
          "rotation": 1.5707963267948966,
          "target": "0-hall"
        },
        {
          "yaw": -1.228483240486586,
          "pitch": 0.20104887822522954,
          "rotation": 0.7853981633974483,
          "target": "4-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chambre2",
      "name": "Chambre2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.9196542597047035,
        "pitch": 0.20471346371407684,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.666225375282659,
          "pitch": 0.18100154488348252,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": 1.2550479275993176,
          "pitch": 0.3175108643748157,
          "rotation": 0,
          "target": "2-chambre1"
        },
        {
          "yaw": -0.781582235635895,
          "pitch": 0.3300236688892184,
          "rotation": 0,
          "target": "4-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.8949419829551672,
        "pitch": 0.7452577783260566,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.7993456006210238,
          "pitch": 0.4824404985937978,
          "rotation": 0,
          "target": "3-chambre2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gare",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
