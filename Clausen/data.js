var APP_DATA = {
  "scenes": [
    {
      "id": "0-baussen1",
      "name": "Baussen1",
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
        "yaw": 1.024165805702232,
        "pitch": -0.3060042668198726,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.35180626486949684,
          "pitch": 0.1864291714084949,
          "rotation": 0,
          "target": "1-baussen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-baussen2",
      "name": "Baussen2",
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
        "yaw": 1.7665395460315283,
        "pitch": 0.023403971172157867,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.1143351045872576,
          "pitch": 0.2753514947564071,
          "rotation": 0,
          "target": "0-baussen1"
        },
        {
          "yaw": 1.3302346084037833,
          "pitch": 0.12835823268053126,
          "rotation": 0,
          "target": "3-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gaart",
      "name": "Gaart",
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
        "yaw": -2.102321858002428,
        "pitch": -0.1186723507822478,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.776501821836229,
          "pitch": 0.03982276022574993,
          "rotation": 0,
          "target": "3-entree"
        },
        {
          "yaw": -2.602866410830611,
          "pitch": -0.03219688582208313,
          "rotation": 0,
          "target": "10-terrasse1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entree",
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
        "yaw": -2.0104162614402803,
        "pitch": 0.08337364872249609,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.5320707521647279,
          "pitch": 0.10564889176446357,
          "rotation": 0,
          "target": "4-hall0"
        },
        {
          "yaw": -2.8425794964790647,
          "pitch": 0.1028406660464114,
          "rotation": 0,
          "target": "2-gaart"
        },
        {
          "yaw": 0.2579341383790279,
          "pitch": 0.14590860993117083,
          "rotation": 0,
          "target": "1-baussen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall0",
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
        "yaw": 3.0255044378061573,
        "pitch": 0.21622365661563947,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.5405234667498213,
          "pitch": 0.3417867115342901,
          "rotation": 0,
          "target": "5-bureau"
        },
        {
          "yaw": -2.411023440000898,
          "pitch": 0.2869828690049978,
          "rotation": 0,
          "target": "7-livingr"
        },
        {
          "yaw": 2.7890593123011485,
          "pitch": 0.3294882529820029,
          "rotation": 0,
          "target": "6-livingl"
        },
        {
          "yaw": 1.88611895468111,
          "pitch": 0.434507989295005,
          "rotation": 0,
          "target": "8-wc1"
        },
        {
          "yaw": 1.394396695650622,
          "pitch": -0.00044373078906900787,
          "rotation": 5.497787143782138,
          "target": "11-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bureau",
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
        "yaw": 2.3791426880339017,
        "pitch": 0.20640315667866282,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.8139995437303824,
          "pitch": 0.37278347208780893,
          "rotation": 0,
          "target": "4-hall0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-livingl",
      "name": "LivingL",
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
        "yaw": -1.6152702351318347,
        "pitch": 0.06826012673485238,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.7543746559662878,
          "pitch": 0.36363585161984346,
          "rotation": 0,
          "target": "10-terrasse1"
        },
        {
          "yaw": 2.570035180422839,
          "pitch": 0.35417489608152053,
          "rotation": 0,
          "target": "4-hall0"
        },
        {
          "yaw": 1.500382069677098,
          "pitch": 0.2585284589541299,
          "rotation": 0,
          "target": "7-livingr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-livingr",
      "name": "LivingR",
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
        "yaw": 1.636989775508539,
        "pitch": 0.12357847149631951,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.573584531833081,
          "pitch": 0.28475567703008053,
          "rotation": 0,
          "target": "6-livingl"
        },
        {
          "yaw": -2.37959911897927,
          "pitch": 0.32919953734328544,
          "rotation": 0,
          "target": "4-hall0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wc1",
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
        "yaw": -3.1269302290601715,
        "pitch": 0.2528311239198757,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.419469886350452,
          "pitch": 0.5011231211547003,
          "rotation": 0,
          "target": "9-kichen"
        },
        {
          "yaw": 0.8602838122504188,
          "pitch": 0.45884536061831227,
          "rotation": 0,
          "target": "4-hall0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kichen",
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
        "yaw": 1.3748878523200077,
        "pitch": 0.1505509417141937,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.461419698158066,
          "pitch": 0.40734773523720236,
          "rotation": 0,
          "target": "10-terrasse1"
        },
        {
          "yaw": -0.961619572738913,
          "pitch": 0.507800608823187,
          "rotation": 0,
          "target": "8-wc1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-terrasse1",
      "name": "Terrasse1",
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
        "yaw": 0.24568865624227954,
        "pitch": 0.20471346371407506,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.8117241830781285,
          "pitch": 0.1905675738193402,
          "rotation": 0,
          "target": "2-gaart"
        },
        {
          "yaw": -0.5705806816034382,
          "pitch": 0.3390375720649885,
          "rotation": 0,
          "target": "9-kichen"
        },
        {
          "yaw": -2.0464864150431588,
          "pitch": 0.44358094824664995,
          "rotation": 0,
          "target": "6-livingl"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hall1",
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
        "yaw": -0.7891333155941922,
        "pitch": 0.22603073348925307,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.6263866310381818,
          "pitch": 0.23325247819416717,
          "rotation": 0,
          "target": "12-sdb"
        },
        {
          "yaw": -0.6059942567990078,
          "pitch": 0.2901051042087559,
          "rotation": 0,
          "target": "13-chambre1"
        },
        {
          "yaw": 0.6434852105624671,
          "pitch": 0.2884427210046816,
          "rotation": 0,
          "target": "15-chambre2"
        },
        {
          "yaw": 1.642062828462734,
          "pitch": 0.3513649472156253,
          "rotation": 0,
          "target": "16-chambre3"
        },
        {
          "yaw": -2.480192728970696,
          "pitch": -0.20912554474226752,
          "rotation": 5.497787143782138,
          "target": "17-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sdb",
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
        "yaw": 0.9639587714861015,
        "pitch": 0.16748985994273902,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.6377337216045049,
          "pitch": 0.4747375173288262,
          "rotation": 0,
          "target": "11-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-chambre1",
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
        "yaw": -1.5185519835375931,
        "pitch": 0.2016619963861146,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.9788979204835222,
          "pitch": 0.5124102414038738,
          "rotation": 0,
          "target": "14-terrasse2"
        },
        {
          "yaw": 2.739373379092762,
          "pitch": 0.3901631961180474,
          "rotation": 0,
          "target": "11-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-terrasse2",
      "name": "Terrasse2",
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
        "yaw": 2.429432167502437,
        "pitch": 0.012848222517858332,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.5470700977184926,
          "pitch": 0.21021807232316192,
          "rotation": 0,
          "target": "13-chambre1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-chambre2",
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
        "yaw": -1.3705106413037917,
        "pitch": 0.18694907223475,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.6164447886876339,
          "pitch": 0.3183473250627351,
          "rotation": 0,
          "target": "11-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-chambre3",
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
        "yaw": -1.166860531318644,
        "pitch": 0.21239928299403665,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.0451582425374024,
          "pitch": 0.3807370413375466,
          "rotation": 0,
          "target": "11-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-hall2",
      "name": "Hall2",
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
        "yaw": 2.972090804291689,
        "pitch": 0.2848141983140984,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.2270727386241553,
          "pitch": 0.2825137376244946,
          "rotation": 0,
          "target": "18-wc2"
        },
        {
          "yaw": 2.26951031269847,
          "pitch": 0.3387489919921851,
          "rotation": 0,
          "target": "19-chambre4"
        },
        {
          "yaw": -2.64755231367125,
          "pitch": 0.3085221799297919,
          "rotation": 0,
          "target": "20-chambre5"
        },
        {
          "yaw": -1.730619700145148,
          "pitch": 0.41662194609378744,
          "rotation": 0,
          "target": "21-sdd"
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
        "yaw": -1.2953544025169315,
        "pitch": 0.47890695507312486,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.1132477101413727,
          "pitch": 0.45585448727904954,
          "rotation": 0,
          "target": "17-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-chambre4",
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
        "yaw": -2.415995715755603,
        "pitch": 0.3388940009774686,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.827994595571478,
          "pitch": 0.26640388397288994,
          "rotation": 0,
          "target": "17-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-chambre5",
      "name": "Chambre5",
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
        "yaw": -1.63316438607945,
        "pitch": 0.16887048063403043,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.652825904222011,
          "pitch": 0.24015773712193855,
          "rotation": 0,
          "target": "17-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-sdd",
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
        "yaw": 3.0657111879801358,
        "pitch": 0.37300094743419443,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.4379382760823098,
          "pitch": 0.4636815717530851,
          "rotation": 0,
          "target": "17-hall2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Clausen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
