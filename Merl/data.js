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
        "yaw": 1.3612147030999466,
        "pitch": -0.29798393358732866,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 1.5627155177091234,
          "pitch": 0.06389523408563136,
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
        "yaw": 2.9006987671371824,
        "pitch": 0.3026039153259106,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 3.0982835962918047,
          "pitch": -0.22472907999156888,
          "rotation": 0,
          "target": "2-hall-1"
        },
        {
          "yaw": -0.5566746492338535,
          "pitch": 0.2101762543578154,
          "rotation": 0,
          "target": "0-exterieur"
        },
        {
          "yaw": 2.466053402714712,
          "pitch": 0.25938230472735313,
          "rotation": 0,
          "target": "16-jardin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4761547173256124,
          "pitch": 0.09921668956713425,
          "title": "Cave, Garage, Jardin<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-hall-1",
      "name": "Hall +1",
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
        "yaw": -2.6579718210800536,
        "pitch": 0.2665386326549779,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -1.7053147274670941,
          "pitch": 0.16451451040481402,
          "rotation": 12.566370614359176,
          "target": "7-cuisine"
        },
        {
          "yaw": -2.4459012127221076,
          "pitch": 0.1364169435168332,
          "rotation": 0,
          "target": "4-sam"
        },
        {
          "yaw": 2.724258036112973,
          "pitch": 0.16186919575586245,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": 1.684826194848121,
          "pitch": 0.1659956938772975,
          "rotation": 0,
          "target": "9-hall11"
        },
        {
          "yaw": 1.3387976105006079,
          "pitch": 0.10980174430464373,
          "rotation": 5.497787143782138,
          "target": "14-hall2"
        },
        {
          "yaw": -0.7263263054662517,
          "pitch": 0.6596446321101617,
          "rotation": 14.922565104551524,
          "target": "1-entree"
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
        "yaw": -0.21865883365952854,
        "pitch": 0.33488487219984364,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -0.9154444384386125,
          "pitch": 0.13422116827557318,
          "rotation": 0,
          "target": "2-hall-1"
        },
        {
          "yaw": -2.0898041580968822,
          "pitch": 0.16020813199987494,
          "rotation": 0,
          "target": "4-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sam",
      "name": "Sam",
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
        "yaw": 1.5713818920942284,
        "pitch": 0.2582240848812525,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 3.0111541563206288,
          "pitch": 0.1172596250205622,
          "rotation": 0,
          "target": "2-hall-1"
        },
        {
          "yaw": 1.6072018835694966,
          "pitch": 0.10971614153310938,
          "rotation": 0,
          "target": "6-terrasse2"
        },
        {
          "yaw": -2.2034185149077103,
          "pitch": 0.13117835154152857,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wc",
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
        "yaw": -0.5954954596542841,
        "pitch": 1.0418834651311144,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -3.1264407165671706,
          "pitch": 0.48433510678758296,
          "rotation": 0,
          "target": "9-hall11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-terrasse2",
      "name": "Terrasse+2",
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
        "yaw": -1.1919328219212115,
        "pitch": 0.2713555268663832,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 1.0103228650120695,
          "pitch": 0.13972371586432075,
          "rotation": 0,
          "target": "11-chambre2"
        },
        {
          "yaw": -1.0363832816054153,
          "pitch": 0.6334309642315716,
          "rotation": 3.141592653589793,
          "target": "16-jardin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cuisine",
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
        "yaw": 0.6299998223863135,
        "pitch": 0.2593469311021295,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -2.805347649574518,
          "pitch": 0.09399730003548612,
          "rotation": 0,
          "target": "2-hall-1"
        },
        {
          "yaw": -2.5973284557563954,
          "pitch": 0.08573855195915847,
          "rotation": 1.5707963267948966,
          "target": "4-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-terrasse1",
      "name": "Terrasse+1",
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
        "yaw": 1.7498951885593952,
        "pitch": 0.34312537486506045,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -2.1689320780430847,
          "pitch": 0.13868144745961075,
          "rotation": 0,
          "target": "4-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hall11",
      "name": "Hall+1.1",
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
        "yaw": -0.006434373621269529,
        "pitch": 0.2467572742524986,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 0.7868272048574632,
          "pitch": 0.21344844484033487,
          "rotation": 0,
          "target": "5-wc"
        },
        {
          "yaw": -1.5169273615253385,
          "pitch": 0.3509390897529272,
          "rotation": 0,
          "target": "2-hall-1"
        },
        {
          "yaw": -1.0208294763001327,
          "pitch": -0.08809069855823282,
          "rotation": 0,
          "target": "14-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-chambre1",
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
        "yaw": 1.6073901502947585,
        "pitch": 0.2292869519055749,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 2.382290860795364,
          "pitch": 0.156114005483607,
          "rotation": 0,
          "target": "14-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-chambre2",
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
        "yaw": 2.736466036856272,
        "pitch": 0.31601187613097537,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -2.811700874862474,
          "pitch": 0.18535640018079746,
          "rotation": 0,
          "target": "6-terrasse2"
        },
        {
          "yaw": -0.6232166703069346,
          "pitch": 0.19734057872587663,
          "rotation": 0,
          "target": "14-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-chambre3",
      "name": "Chambre3",
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
        "yaw": -1.0988457908402154,
        "pitch": 0.26561376096870504,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 2.0189450524522705,
          "pitch": 0.1917612567074336,
          "rotation": 0,
          "target": "14-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-chambre4",
      "name": "Chambre4",
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
        "yaw": -0.11489037881833397,
        "pitch": 0.46833523480576034,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 2.9747125268048062,
          "pitch": 0.241039178339836,
          "rotation": 0,
          "target": "15-hall3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-hall2",
      "name": "Hall+2",
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
        "yaw": 1.8889055640230392,
        "pitch": 0.2636633848791696,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 2.797251649856788,
          "pitch": 0.09584698082310972,
          "rotation": 0,
          "target": "10-chambre1"
        },
        {
          "yaw": 2.3478429016367937,
          "pitch": 0.15312714203097677,
          "rotation": 0,
          "target": "11-chambre2"
        },
        {
          "yaw": 1.2208865543685228,
          "pitch": 0.17882083238523094,
          "rotation": 0,
          "target": "12-chambre3"
        },
        {
          "yaw": -0.0703953096829224,
          "pitch": 0.20282763309392848,
          "rotation": 0,
          "target": "17-sdb2"
        },
        {
          "yaw": -0.5398713174762548,
          "pitch": 0.0808802957653576,
          "rotation": 5.497787143782138,
          "target": "15-hall3"
        },
        {
          "yaw": -2.5069093984215467,
          "pitch": 0.5742178794860813,
          "rotation": 2.356194490192345,
          "target": "2-hall-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-hall3",
      "name": "Hall+3",
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
        "yaw": 0.9155498343127526,
        "pitch": 0.16277240576171792,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 1.5563566747389377,
          "pitch": 0.13593599152673264,
          "rotation": 0,
          "target": "18-sdb3"
        },
        {
          "yaw": 2.0609921574031933,
          "pitch": 0.3522287075637891,
          "rotation": 8.63937979737193,
          "target": "14-hall2"
        },
        {
          "yaw": 0.446271131724842,
          "pitch": 0.20694577852556506,
          "rotation": 0,
          "target": "13-chambre4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-jardin",
      "name": "Jardin",
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
        "yaw": 1.3970736263448202,
        "pitch": 0.5265188550037081,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": -1.710245099620506,
          "pitch": -0.7425379462635071,
          "rotation": 0,
          "target": "8-terrasse1"
        },
        {
          "yaw": -1.3818027378838131,
          "pitch": 0.1874830150631528,
          "rotation": 0,
          "target": "1-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-sdb2",
      "name": "Sdb+2",
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
        "yaw": -1.6037918152589086,
        "pitch": 0.21966946561816414,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 2.6446097621282547,
          "pitch": 0.1769106109576768,
          "rotation": 0,
          "target": "14-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sdb3",
      "name": "Sdb+3",
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
        "yaw": -1.8026744756491304,
        "pitch": 0.4582635093260805,
        "fov": 1.4880974396248658
      },
      "linkHotspots": [
        {
          "yaw": 0.5748067314678202,
          "pitch": 0.17910046245548017,
          "rotation": 0,
          "target": "15-hall3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Merl",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
