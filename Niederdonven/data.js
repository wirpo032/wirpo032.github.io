var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterieur",
      "name": "Exterieur",
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
        "yaw": 0.1996167463517473,
        "pitch": -0.10624195841097617,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 0.49445510457562136,
          "pitch": 0.09300778824279021,
          "rotation": 0,
          "target": "1-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entree",
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
        "yaw": 2.89227048566058,
        "pitch": 0.14830199226502216,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 0.4901139882996546,
          "pitch": 0.12596890337529132,
          "rotation": 0,
          "target": "0-exterieur"
        },
        {
          "yaw": 2.366378083070199,
          "pitch": 0.15700332187085664,
          "rotation": 0.7853981633974483,
          "target": "2-hall0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall0",
      "name": "Hall0",
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
        "yaw": -1.0414855645537173,
        "pitch": 0.14835507944629,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -0.13136952452366657,
          "pitch": 0.13381849778355992,
          "rotation": 0,
          "target": "1-entree"
        },
        {
          "yaw": -1.6045743212076733,
          "pitch": -0.23175268065508092,
          "rotation": 0,
          "target": "3-escaliers1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1867217296224197,
          "pitch": 0.07174959912759249,
          "title": "Garage",
          "text": ""
        },
        {
          "yaw": 2.786008731343739,
          "pitch": 0.05028216743609448,
          "title": "Buanderie",
          "text": ""
        },
        {
          "yaw": 3.044881408104504,
          "pitch": 0.07823285072718633,
          "title": "Cave",
          "text": ""
        },
        {
          "yaw": 3.0997712637052253,
          "pitch": 0.2976584245605043,
          "title": "WC",
          "text": ""
        }
      ]
    },
    {
      "id": "3-escaliers1",
      "name": "Escaliers1",
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
        "yaw": -1.806523259433753,
        "pitch": 0.16364714918528023,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -1.7303817666001056,
          "pitch": 0.6112857673656684,
          "rotation": 3.141592653589793,
          "target": "2-hall0"
        },
        {
          "yaw": -2.1153437368586943,
          "pitch": -0.20425308779637774,
          "rotation": 0,
          "target": "4-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall1",
      "name": "Hall1",
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
        "yaw": -2.742700626994081,
        "pitch": 0.3258382137812603,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -1.7561541245678,
          "pitch": 0.5455034552527156,
          "rotation": 3.141592653589793,
          "target": "3-escaliers1"
        },
        {
          "yaw": -1.7829101076505829,
          "pitch": -0.18293084616828104,
          "rotation": 0,
          "target": "11-escaliers2"
        },
        {
          "yaw": 3.065252992308631,
          "pitch": 0.25993933954497095,
          "rotation": 0,
          "target": "5-samcuisine"
        },
        {
          "yaw": -0.45964180874498695,
          "pitch": 0.22075854343659174,
          "rotation": 4.71238898038469,
          "target": "17-wc1"
        },
        {
          "yaw": -0.14434441300974754,
          "pitch": 0.2564872413642725,
          "rotation": 0,
          "target": "7-bureau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-samcuisine",
      "name": "Sam:Cuisine",
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
        "yaw": 1.7021122071750057,
        "pitch": 0.2349938321177163,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -0.5261869226848095,
          "pitch": 0.2648369203478591,
          "rotation": 0,
          "target": "16-terrasse"
        },
        {
          "yaw": -2.557495118276611,
          "pitch": 0.21506423602559366,
          "rotation": 0,
          "target": "6-living"
        },
        {
          "yaw": -2.988574054272,
          "pitch": 0.2986520926701566,
          "rotation": 0,
          "target": "4-hall1"
        },
        {
          "yaw": 3.09165808976811,
          "pitch": 0.021373876750622856,
          "rotation": 5.497787143782138,
          "target": "11-escaliers2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living",
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
        "yaw": -0.012997427470196499,
        "pitch": 0.3486273340854673,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -2.7891668797501143,
          "pitch": 0.17802690575338076,
          "rotation": 0,
          "target": "5-samcuisine"
        },
        {
          "yaw": -2.3828558008122354,
          "pitch": 0.25243281888699975,
          "rotation": 1.5707963267948966,
          "target": "4-hall1"
        },
        {
          "yaw": -1.0106084991109547,
          "pitch": 0.12963791504907007,
          "rotation": 0,
          "target": "7-bureau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bureau",
      "name": "Bureau",
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
        "yaw": -2.8067647802078177,
        "pitch": 0.24079349743293577,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -2.3628038951715116,
          "pitch": 0.15953494882269403,
          "rotation": 7.853981633974483,
          "target": "4-hall1"
        },
        {
          "yaw": -2.800394900064717,
          "pitch": 0.16691907939125628,
          "rotation": 0,
          "target": "6-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-chambre1",
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
        "yaw": 0.29117883383612053,
        "pitch": 0.5041495690861595,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 2.9005553190807793,
          "pitch": 0.32502178149857563,
          "rotation": 0,
          "target": "10-dressing"
        },
        {
          "yaw": -2.6311650684044263,
          "pitch": 0.2288223172423276,
          "rotation": 0,
          "target": "13-hall22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-chambre2",
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
        "yaw": 3.015779026564057,
        "pitch": 0.25454175821321456,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 0.79030540900267,
          "pitch": 0.4871038006125339,
          "rotation": 0,
          "target": "12-hall21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-dressing",
      "name": "Dressing",
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
        "yaw": 1.130232912579359,
        "pitch": 0.1152399183892463,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 2.7384544999022253,
          "pitch": 0.28709876064519335,
          "rotation": 0,
          "target": "8-chambre1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-escaliers2",
      "name": "Escaliers2",
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
        "yaw": -1.4835695307690884,
        "pitch": 0.06788950115467074,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -1.6803763474766953,
          "pitch": -0.12105761418097316,
          "rotation": 0,
          "target": "12-hall21"
        },
        {
          "yaw": -1.3291363179424671,
          "pitch": 0.6751756542908858,
          "rotation": 3.141592653589793,
          "target": "4-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-hall21",
      "name": "Hall2.1",
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
        "yaw": 0.42725730057507505,
        "pitch": 0.28169000035432745,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 1.2534371251764753,
          "pitch": 0.3756264115325987,
          "rotation": 0,
          "target": "9-chambre2"
        },
        {
          "yaw": -0.505401161326402,
          "pitch": 0.5589436270027157,
          "rotation": 0,
          "target": "15-sdd1"
        },
        {
          "yaw": 3.136872715318784,
          "pitch": 0.5483781260984557,
          "rotation": 0,
          "target": "13-hall22"
        },
        {
          "yaw": -1.7857602670794286,
          "pitch": 0.5247784321397582,
          "rotation": 3.141592653589793,
          "target": "11-escaliers2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-hall22",
      "name": "Hall2.2",
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
        "yaw": -2.5333361738601354,
        "pitch": 0.19087891687981795,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -1.5946172048412706,
          "pitch": 0.24697919835905147,
          "rotation": 0,
          "target": "18-wc2"
        },
        {
          "yaw": 2.783760872765715,
          "pitch": 0.21609443333002787,
          "rotation": 0,
          "target": "8-chambre1"
        },
        {
          "yaw": 0.09584490952815017,
          "pitch": 0.5985763892125426,
          "rotation": 0,
          "target": "12-hall21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-sdd",
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
        "yaw": -1.5700123286282448,
        "pitch": 0.44290305026791543,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -0.271339837143735,
          "pitch": 0.5730534739377866,
          "rotation": 0,
          "target": "15-sdd1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sdd1",
      "name": "Sdd1",
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
        "yaw": 0.7504312324486548,
        "pitch": 0.10477695904700113,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 1.5894899926851913,
          "pitch": 0.33573983984220845,
          "rotation": 0,
          "target": "14-sdd"
        },
        {
          "yaw": -1.7527790333985074,
          "pitch": 0.20410143173046968,
          "rotation": 0,
          "target": "12-hall21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-terrasse",
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
        "yaw": -3.078834037038341,
        "pitch": 0.2684341749542547,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -2.713489183562338,
          "pitch": 0.18201373458732206,
          "rotation": 0,
          "target": "5-samcuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-wc1",
      "name": "WC1",
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
        "yaw": 1.7418097450729482,
        "pitch": 0.17133263383865227,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -1.2721366283572664,
          "pitch": 0.19567875932901302,
          "rotation": 1.5707963267948966,
          "target": "4-hall1"
        },
        {
          "yaw": -2.1398489857408816,
          "pitch": 0.19246224643837095,
          "rotation": 4.71238898038469,
          "target": "7-bureau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-wc2",
      "name": "WC2",
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
        "yaw": 1.3808796641205703,
        "pitch": 0.4876328515984678,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -1.4019085898213106,
          "pitch": 0.28511704609636723,
          "rotation": 0,
          "target": "13-hall22"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Niederdonven",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
