var APP_DATA = {
  "scenes": [
    {
      "id": "0-buro",
      "name": "Buro",
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
        "yaw": -0.9450861166163698,
        "pitch": 0.31101118845869813,
        "fov": 1.3761865064848395
      },
      "linkHotspots": [
        {
          "yaw": -3.063448226191859,
          "pitch": 0.2101531977383182,
          "rotation": 0,
          "target": "1-open1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-open1",
      "name": "Open1",
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
        "yaw": -0.950210388141425,
        "pitch": 0.2784901969191793,
        "fov": 1.3765300046597577
      },
      "linkHotspots": [
        {
          "yaw": -1.4499033624229654,
          "pitch": 0.1844462174206143,
          "rotation": 0,
          "target": "0-buro"
        },
        {
          "yaw": 3.090020747735,
          "pitch": 0.4044188644047342,
          "rotation": 0,
          "target": "2-open2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-open2",
      "name": "Open2",
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
        "yaw": 1.9775424127242385,
        "pitch": 0.10339887297570449,
        "fov": 1.3765300046597577
      },
      "linkHotspots": [
        {
          "yaw": -1.5174513296716245,
          "pitch": 0.3168258956125882,
          "rotation": 0,
          "target": "1-open1"
        },
        {
          "yaw": 1.900770989117932,
          "pitch": 0.2694691534253515,
          "rotation": 0,
          "target": "3-open3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-open3",
      "name": "Open3",
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
        "yaw": 0.9927725185513161,
        "pitch": 0.13657699925925648,
        "fov": 1.3765300046597577
      },
      "linkHotspots": [
        {
          "yaw": -2.11164830545642,
          "pitch": 0.32774562599153434,
          "rotation": 0,
          "target": "2-open2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Beggen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
