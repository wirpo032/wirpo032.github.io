var APP_DATA = {
  "scenes": [
    {
      "id": "0-terrasse_eck",
      "name": "Terrasse_Eck",
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
        "yaw": 0.11423973285781486,
        "pitch": 0.13804721017894117,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": 0.6596962374889586,
          "pitch": 0.11415857085032144,
          "rotation": 0,
          "target": "2-terrasse_vir"
        },
        {
          "yaw": -0.8150898336729835,
          "pitch": 0.12610592112903163,
          "rotation": 0,
          "target": "1-terrasse_sait"
        },
        {
          "yaw": 0.30993956788326216,
          "pitch": 0.1184456953735129,
          "rotation": 10.995574287564278,
          "target": "3-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3396701007707215,
          "pitch": 0.5956048727900409,
          "title": "Boulangerie Fischer<br>",
          "text": "<br>"
        },
        {
          "yaw": -1.4865915408381056,
          "pitch": 0.36998313802783045,
          "title": "Alima<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-terrasse_sait",
      "name": "Terrasse_Sait",
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
        "yaw": 2.2667066994537306,
        "pitch": 0.38923379114367584,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": 1.6859635477796857,
          "pitch": 0.2090092832352859,
          "rotation": 0,
          "target": "0-terrasse_eck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terrasse_vir",
      "name": "Terrasse_Vir",
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
        "yaw": -1.8055819479415511,
        "pitch": 0.14597099648647038,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": -2.504223569017938,
          "pitch": 0.09994995889554659,
          "rotation": 0,
          "target": "0-terrasse_eck"
        },
        {
          "yaw": -0.9395224103440363,
          "pitch": 0.3403162927193968,
          "rotation": 0,
          "target": "7-kummer"
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
        "yaw": 0.05616786865509127,
        "pitch": 0.16459475059796524,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": -2.5378272621088893,
          "pitch": 0.20722829458000547,
          "rotation": 0,
          "target": "6-hall_kummer"
        },
        {
          "yaw": -0.34667625257927526,
          "pitch": 0.1128824418514327,
          "rotation": 0,
          "target": "0-terrasse_eck"
        },
        {
          "yaw": 3.0950852880088595,
          "pitch": 0.23717310462301988,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall",
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
        "yaw": -2.4020914975084473,
        "pitch": 0.34459755618904886,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": 2.997091784494449,
          "pitch": 0.2056505351722926,
          "rotation": 0,
          "target": "5-kichen"
        },
        {
          "yaw": 1.3163618211527428,
          "pitch": 0.361226562289664,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -0.5569721696197405,
          "pitch": 0.26975403675228193,
          "rotation": 0,
          "target": "9-terrasse_hannen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kichen",
      "name": "Kichen",
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
        "yaw": 0.7647976379883517,
        "pitch": 0.2014438857576799,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": 2.1612442672023935,
          "pitch": 0.28028389547688093,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hall_kummer",
      "name": "Hall_Kummer",
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
        "yaw": -1.4137835910067622,
        "pitch": 0.15998099779886665,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": -1.4137835910067622,
          "pitch": 0.15998099779886665,
          "rotation": 0,
          "target": "7-kummer"
        },
        {
          "yaw": 2.7281943915450224,
          "pitch": 0.3000274226673305,
          "rotation": 0,
          "target": "8-wc"
        },
        {
          "yaw": 1.5296363145495802,
          "pitch": 0.36561178607149003,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0725002633540619,
          "pitch": 0.3159008741262106,
          "title": "Salle de douche rénovée<br>",
          "text": "Douche italienne<br>"
        }
      ]
    },
    {
      "id": "7-kummer",
      "name": "Kummer",
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
        "yaw": 2.156145139812925,
        "pitch": 0.24383010845089892,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": 3.0789959656963983,
          "pitch": 0.24927881145555553,
          "rotation": 0,
          "target": "6-hall_kummer"
        },
        {
          "yaw": 1.3786998841488458,
          "pitch": 0.286765760373374,
          "rotation": 0,
          "target": "2-terrasse_vir"
        },
        {
          "yaw": -2.4549896934680966,
          "pitch": 0.22659975955028067,
          "rotation": 1.5707963267948966,
          "target": "9-terrasse_hannen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wc",
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
        "yaw": -1.7615420625665799,
        "pitch": 0.8871705325485717,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": 0.8648015424996629,
          "pitch": 0.8965271125681529,
          "rotation": 0,
          "target": "6-hall_kummer"
        },
        {
          "yaw": 1.7556815921980933,
          "pitch": 0.532848227443516,
          "rotation": 7.0685834705770345,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-terrasse_hannen",
      "name": "Terrasse_Hannen",
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
        "yaw": 0.9963260359416637,
        "pitch": 0.17771842378092018,
        "fov": 1.3512698073284823
      },
      "linkHotspots": [
        {
          "yaw": -1.7191980211702553,
          "pitch": 0.27474292554672,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": -2.696476624371588,
          "pitch": 0.3077774718939388,
          "rotation": 0,
          "target": "7-kummer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Charles VI",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
