var APP_DATA = {
  "scenes": [
    {
      "id": "0-entree",
      "name": "Entree",
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
        "yaw": -0.47923402604461707,
        "pitch": 0.14873473252274394,
        "fov": 1.383683927455237
      },
      "linkHotspots": [
        {
          "yaw": -0.2212237843135476,
          "pitch": 0.16767383840697647,
          "rotation": 0,
          "target": "2-vie1"
        },
        {
          "yaw": -3.1115942123917826,
          "pitch": 0.2055182186024389,
          "rotation": 0,
          "target": "1-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wc",
      "name": "WC",
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
        "yaw": -0.42564384500481545,
        "pitch": 0.778748193207198,
        "fov": 1.383683927455237
      },
      "linkHotspots": [
        {
          "yaw": 0.0428497457260022,
          "pitch": 0.6609340515685744,
          "rotation": 0,
          "target": "0-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vie1",
      "name": "Vie1",
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
        "yaw": 1.5433554757965542,
        "pitch": 0.22349885579586015,
        "fov": 1.383683927455237
      },
      "linkHotspots": [
        {
          "yaw": 0.9058358325954199,
          "pitch": 0.15368310835891918,
          "rotation": 0,
          "target": "3-vie2"
        },
        {
          "yaw": -0.8452737980359775,
          "pitch": 0.15854531818800233,
          "rotation": 0,
          "target": "0-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vie2",
      "name": "Vie2",
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
        "yaw": 0.40018904933219623,
        "pitch": 0.14779286218593235,
        "fov": 1.383683927455237
      },
      "linkHotspots": [
        {
          "yaw": 0.9927132059888493,
          "pitch": 0.34490073927288023,
          "rotation": 0,
          "target": "2-vie1"
        },
        {
          "yaw": 2.2466230024861833,
          "pitch": 0.24686482116206676,
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
        "yaw": -0.025014616278408397,
        "pitch": 0.19536527155397643,
        "fov": 1.383683927455237
      },
      "linkHotspots": [
        {
          "yaw": 2.053680506202234,
          "pitch": 0.34131295666925077,
          "rotation": 0,
          "target": "3-vie2"
        },
        {
          "yaw": -1.5433365951073057,
          "pitch": 0.20413865912728646,
          "rotation": 0,
          "target": "5-sdd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sdd",
      "name": "Sdd",
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
        "yaw": 0.16544266867862767,
        "pitch": 0.030134677185960967,
        "fov": 1.383683927455237
      },
      "linkHotspots": [
        {
          "yaw": 1.6673807770815472,
          "pitch": 0.20520877516366376,
          "rotation": 0,
          "target": "4-cuisine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gare_Studio2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
