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
        "yaw": 2.460324257259529,
        "pitch": 0.1706632213754773,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": -3.0731728972052306,
          "pitch": 0.22659017566686934,
          "rotation": 0,
          "target": "1-kummer1"
        },
        {
          "yaw": -2.843167900004108,
          "pitch": 0.2625596761365312,
          "rotation": 1.5707963267948966,
          "target": "2-sdb1"
        },
        {
          "yaw": 2.04536772485179,
          "pitch": 0.17025346562840937,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": 0.3263230117071245,
          "pitch": 0.05905709844418894,
          "rotation": 0,
          "target": "6-entree2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0580957573196752,
          "pitch": 0,
          "title": "Possibilité d'ouvrir le mur pour fusionner les 2 appartements<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-kummer1",
      "name": "Kummer1",
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
        "yaw": -0.5561530877739997,
        "pitch": 0.28506272766781215,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": 1.4647957624815184,
          "pitch": 0.18437517358081656,
          "rotation": 0,
          "target": "0-entree"
        },
        {
          "yaw": 1.2574000842210342,
          "pitch": 0.27514807485882287,
          "rotation": 4.71238898038469,
          "target": "2-sdb1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sdb1",
      "name": "Sdb1",
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
        "yaw": -1.410000893285785,
        "pitch": 0.5418977664237481,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": 2.324114900728258,
          "pitch": 0.3278611487473917,
          "rotation": 4.71238898038469,
          "target": "0-entree"
        },
        {
          "yaw": 2.9222921553139773,
          "pitch": 0.2967106281893006,
          "rotation": 1.5707963267948966,
          "target": "1-kummer1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "Living",
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
        "yaw": 1.9897258869157355,
        "pitch": 0.23163244742668,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": -2.430174989307062,
          "pitch": 0.20843859354793537,
          "rotation": 0,
          "target": "0-entree"
        },
        {
          "yaw": 1.5961878911166067,
          "pitch": 0.3069470493678992,
          "rotation": 0,
          "target": "4-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terrasse",
      "name": "Terrasse",
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
        "yaw": -1.508546586290839,
        "pitch": 0.4756422640333149,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": 2.304449882240137,
          "pitch": 0.1219654790911946,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-balcon2",
      "name": "Balcon2",
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
        "yaw": -1.5950651976923087,
        "pitch": 0.042803101775451324,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": 1.3746383089646912,
          "pitch": 0.22195923046957589,
          "rotation": 0,
          "target": "8-living2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entree2",
      "name": "Entree2",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.806611119478065,
          "pitch": 0.23522898507418333,
          "rotation": 4.71238898038469,
          "target": "0-entree"
        },
        {
          "yaw": 1.63052023147283,
          "pitch": 0.2506021223130155,
          "rotation": 0,
          "target": "9-sdb2"
        },
        {
          "yaw": 1.0020638257518897,
          "pitch": 0.322257627544575,
          "rotation": 4.71238898038469,
          "target": "8-living2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.128497657529584,
          "pitch": 0.02743684220719622,
          "title": "Possibilité d'ouvrir le mur pour fusionner les 2 appartements<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "7-kummer2",
      "name": "Kummer2",
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
        "yaw": -0.04627950103564871,
        "pitch": 0.26262508887688263,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": 0.4054196884496264,
          "pitch": 0.2453380359480395,
          "rotation": 0,
          "target": "8-living2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living2",
      "name": "Living2",
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
        "yaw": -0.016362461737443823,
        "pitch": 0.19387287274763487,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": 0.3742750836791302,
          "pitch": 0.2634707867463941,
          "rotation": 0,
          "target": "7-kummer2"
        },
        {
          "yaw": 1.5622236467705095,
          "pitch": 0.19251752744484385,
          "rotation": 0,
          "target": "5-balcon2"
        },
        {
          "yaw": -1.0303149277568053,
          "pitch": 0.1631465501767586,
          "rotation": 1.5707963267948966,
          "target": "6-entree2"
        },
        {
          "yaw": -1.153673695060796,
          "pitch": 0.2804012737069037,
          "rotation": 4.71238898038469,
          "target": "9-sdb2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sdb2",
      "name": "Sdb2",
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
        "yaw": -0.8721858505390667,
        "pitch": 0.2601446132449592,
        "fov": 1.374734915846873
      },
      "linkHotspots": [
        {
          "yaw": -0.03125888099666341,
          "pitch": 0.28424555668405205,
          "rotation": 0,
          "target": "6-entree2"
        },
        {
          "yaw": 0.13878694150716697,
          "pitch": 0.34332370274553625,
          "rotation": 7.853981633974483,
          "target": "8-living2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Helmdange",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
