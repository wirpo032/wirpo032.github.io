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
        "yaw": 1.4521278124774462,
        "pitch": 0.26168166344240085,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": 0.9370574661631075,
          "pitch": 0.20774106261396774,
          "rotation": 5.497787143782138,
          "target": "1-sdb"
        },
        {
          "yaw": 1.525062822689045,
          "pitch": 0.17722058357396797,
          "rotation": 0,
          "target": "2-cuisine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2183517506803883,
          "pitch": 0.18063145501806588,
          "title": "Entrée",
          "text": "Nouvelle porte"
        }
      ]
    },
    {
      "id": "1-sdb",
      "name": "Sdb",
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
        "yaw": -0.5745042121148103,
        "pitch": 0.47540312455929623,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": 1.7702229391102104,
          "pitch": 0.3466625378411816,
          "rotation": 0,
          "target": "0-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cuisine",
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
        "yaw": -0.14070500045122536,
        "pitch": 0.164682065886268,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": 1.9803238865253903,
          "pitch": 0.3681286205159324,
          "rotation": 0.7853981633974483,
          "target": "0-entree"
        },
        {
          "yaw": 1.4053015019681947,
          "pitch": 0.34872235148046826,
          "rotation": 4.71238898038469,
          "target": "4-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc",
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
        "yaw": 1.8512514696967983,
        "pitch": 0.623764031150337,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": -1.054060732093527,
          "pitch": 0.3881905300206263,
          "rotation": 7.853981633974483,
          "target": "4-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salon",
      "name": "Salon",
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
        "yaw": 2.8900444590996344,
        "pitch": 0.4113220998428275,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": -2.0533991107997753,
          "pitch": 0.26229661219885436,
          "rotation": 5.497787143782138,
          "target": "3-wc"
        },
        {
          "yaw": -1.3489477890868322,
          "pitch": 0.05632525186573467,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -1.7659690554303928,
          "pitch": 0.13046784111351606,
          "rotation": 5.497787143782138,
          "target": "0-entree"
        },
        {
          "yaw": -0.6621914178457615,
          "pitch": -0.20524490194416423,
          "rotation": 5.497787143782138,
          "target": "5-chambre1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre1",
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
        "yaw": 0.41815179995699125,
        "pitch": 0.6592741035310397,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": -0.6324232843865065,
          "pitch": 0.3929313831741936,
          "rotation": 0,
          "target": "6-chambre2"
        },
        {
          "yaw": -2.665328626787561,
          "pitch": 0.6937859724541866,
          "rotation": 7.853981633974483,
          "target": "4-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chambre2",
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
        "yaw": -1.7195857341184109,
        "pitch": 0.45713991044820546,
        "fov": 1.3783224472489535
      },
      "linkHotspots": [
        {
          "yaw": -2.505265020152903,
          "pitch": 0.47479048527130097,
          "rotation": 0,
          "target": "5-chambre1"
        },
        {
          "yaw": -2.0650962703484854,
          "pitch": 0.4045735767961176,
          "rotation": 2.356194490192345,
          "target": "4-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gasperich",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
