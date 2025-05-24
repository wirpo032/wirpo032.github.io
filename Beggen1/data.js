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
        "yaw": 1.5522507966917445,
        "pitch": -0.08970973307107144,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.075141397679026,
          "pitch": 0.18112925747055186,
          "rotation": 0,
          "target": "1-baussen2"
        },
        {
          "yaw": 1.7502027566186982,
          "pitch": -0.08361126740562952,
          "rotation": 0,
          "target": "11-balcon"
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
        "yaw": 1.2205812545328953,
        "pitch": -0.07443615315496821,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.12766463826850405,
          "pitch": 0.21115765371287942,
          "rotation": 0,
          "target": "0-baussen1"
        },
        {
          "yaw": 1.7293012061540551,
          "pitch": -0.012807668310824027,
          "rotation": 0,
          "target": "2-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entree",
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
        "yaw": 0.9268409095658523,
        "pitch": 0.14034366870665238,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.0009056046217335023,
          "pitch": 0.09825694025628451,
          "rotation": 0,
          "target": "1-baussen2"
        },
        {
          "yaw": 1.7326565937263236,
          "pitch": 0.13493864226152397,
          "rotation": 0,
          "target": "3-hall_wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall_wc",
      "name": "Hall_WC",
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
        "yaw": -1.878890622651964,
        "pitch": 0.1712752882039883,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.779305629614015,
          "pitch": 0.15894830804792193,
          "rotation": 0,
          "target": "2-entree"
        },
        {
          "yaw": 2.569044210233894,
          "pitch": 0.3776757198460441,
          "rotation": 0,
          "target": "4-chambre1"
        },
        {
          "yaw": -2.575350348520317,
          "pitch": 0.4028714091074761,
          "rotation": 0,
          "target": "5-chambre2"
        },
        {
          "yaw": -1.5912554324890564,
          "pitch": 0.30248668785026034,
          "rotation": 0,
          "target": "7-hall_debarras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-chambre1",
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
        "yaw": -1.2925395077845732,
        "pitch": 0.16226277522200405,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.366712553750908,
          "pitch": 0.40138862336353753,
          "rotation": 0,
          "target": "3-hall_wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre2",
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
        "yaw": -1.3553224743196317,
        "pitch": 0.20556527283540404,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.9666109287472668,
          "pitch": 0.3769811989048293,
          "rotation": 0,
          "target": "3-hall_wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sdb",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.882549082384255,
          "pitch": 0.34200993417048053,
          "rotation": 0.7853981633974483,
          "target": "7-hall_debarras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall_debarras",
      "name": "Hall_Debarras",
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
        "yaw": -0.3755810686536911,
        "pitch": 0.34091962196020376,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.9459709128576312,
          "pitch": 0.2812754959662307,
          "rotation": 0,
          "target": "3-hall_wc"
        },
        {
          "yaw": 1.4508631576875244,
          "pitch": 0.3147130149821198,
          "rotation": 5.497787143782138,
          "target": "6-sdb"
        },
        {
          "yaw": 0.38347158544145543,
          "pitch": 0.3406968250717384,
          "rotation": 0,
          "target": "8-debarras"
        },
        {
          "yaw": -1.0960625780701676,
          "pitch": 0.39814998322413686,
          "rotation": 0,
          "target": "9-kichen"
        },
        {
          "yaw": -2.3628798412804297,
          "pitch": 0.4019639597095157,
          "rotation": 0,
          "target": "10-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-debarras",
      "name": "Debarras",
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
        "yaw": -1.512914317049976,
        "pitch": -0.20369012149456722,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.4991358985466237,
          "pitch": 0.9363806517681432,
          "rotation": 0,
          "target": "7-hall_debarras"
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
        "yaw": 0,
        "pitch": 0.22332377859715535,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.596433312817486,
          "pitch": 0.4204835155799529,
          "rotation": 0,
          "target": "7-hall_debarras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-living",
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
        "yaw": -0.017453292519958197,
        "pitch": 0.16935386543618236,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.7068874757121542,
          "pitch": 0.1357950293918826,
          "rotation": 0.7853981633974483,
          "target": "11-balcon"
        },
        {
          "yaw": -0.8878682264349873,
          "pitch": 0.3234210539844451,
          "rotation": 6.283185307179586,
          "target": "7-hall_debarras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcon",
      "name": "Balcon",
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
        "yaw": -0.6925921227279783,
        "pitch": 0.1381203289556865,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.8929514621284937,
          "pitch": 0.26828810186049346,
          "rotation": 6.283185307179586,
          "target": "10-living"
        },
        {
          "yaw": -1.0573564849219057,
          "pitch": 0.4190825321369047,
          "rotation": 0,
          "target": "0-baussen1"
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
