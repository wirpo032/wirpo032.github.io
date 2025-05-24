var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking",
      "name": "Parking",
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
        "yaw": -1.8493014733944637,
        "pitch": -0.2637531534233428,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.4904699979307772,
          "pitch": 0.021371089888130967,
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
        "yaw": -1.9969879342165342,
        "pitch": 0.2152413013665182,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 1.682882318580849,
          "pitch": 0.29148536773412026,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": -2.7103319007676454,
          "pitch": 0.1699261104254468,
          "rotation": 0,
          "target": "2-entree_principale"
        },
        {
          "yaw": -1.4595788536881642,
          "pitch": 0.30101497943093847,
          "rotation": 0,
          "target": "16-entree_receptioun"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entree_principale",
      "name": "Entree_Principale",
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
        "yaw": 2.76167299169086,
        "pitch": 0.28036160001898125,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 0.5645662347729612,
          "pitch": 0.2731713330965473,
          "rotation": 0,
          "target": "1-entree"
        },
        {
          "yaw": 2.044851124341892,
          "pitch": 0.20370399378118265,
          "rotation": 0,
          "target": "3-buro1"
        },
        {
          "yaw": -3.0558026707717953,
          "pitch": 0.22458140935192716,
          "rotation": 0,
          "target": "4-buro2"
        },
        {
          "yaw": -2.1517355648949437,
          "pitch": 0.1745248958532386,
          "rotation": 0,
          "target": "5-buro3"
        },
        {
          "yaw": -0.8128399715158654,
          "pitch": -0.38505203263246024,
          "rotation": 5.497787143782138,
          "target": "14-traap1"
        },
        {
          "yaw": -1.1719041128338752,
          "pitch": 0.26090954105896813,
          "rotation": 0,
          "target": "15-hall_kichen"
        },
        {
          "yaw": -1.0146967256429988,
          "pitch": 0.1526494738172488,
          "rotation": 1.5707963267948966,
          "target": "21-wc_rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-buro1",
      "name": "Buro1",
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
        "yaw": 2.2052962319469973,
        "pitch": 0.18090319492282703,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.77167755972539,
          "pitch": 0.22919141376089414,
          "rotation": 0,
          "target": "2-entree_principale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-buro2",
      "name": "Buro2",
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
        "yaw": -2.0410299494063597,
        "pitch": 0.15947266938049864,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 1.7860298208449148,
          "pitch": 0.1284462946719671,
          "rotation": 0,
          "target": "5-buro3"
        },
        {
          "yaw": 2.69751502789164,
          "pitch": 0.18687836099938337,
          "rotation": 0,
          "target": "2-entree_principale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-buro3",
      "name": "Buro3",
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
        "yaw": -2.3955130003576155,
        "pitch": 0.06038168137131095,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.4953572630108205,
          "pitch": 0.18510659132483553,
          "rotation": 0,
          "target": "2-entree_principale"
        },
        {
          "yaw": -1.4764173733390358,
          "pitch": 0.10918167514358146,
          "rotation": 0,
          "target": "4-buro2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-buro4",
      "name": "Buro4",
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
        "yaw": 1.9409977894181303,
        "pitch": 0.1913169762644209,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.5861869126477295,
          "pitch": 0.30784322585849644,
          "rotation": 0,
          "target": "13-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-buro5",
      "name": "Buro5",
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
        "yaw": 2.0166734091403278,
        "pitch": 0.11180822463978757,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -0.6501561052700353,
          "pitch": 0.1383697105545707,
          "rotation": 0,
          "target": "13-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-buro6",
      "name": "Buro6",
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
        "yaw": 2.0686448345924173,
        "pitch": 0.10659775784218084,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.2945978364215556,
          "pitch": 0.18230649542172017,
          "rotation": 0,
          "target": "13-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-buro7",
      "name": "Buro7",
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
        "yaw": 2.2498919609961217,
        "pitch": 0.21740898670871545,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.5300439321711536,
          "pitch": 0.16629862794957795,
          "rotation": 0,
          "target": "11-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-buro8",
      "name": "Buro8",
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
        "yaw": -0.9336839277519395,
        "pitch": 0.16403325412645486,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.8302732332605167,
          "pitch": 0.17424560973011793,
          "rotation": 0,
          "target": "11-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hall2",
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
        "yaw": 1.9322810717640948,
        "pitch": 0.13701680403852023,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 1.1672582882173224,
          "pitch": 0.1540707742188765,
          "rotation": 0,
          "target": "9-buro7"
        },
        {
          "yaw": 2.6502280997395076,
          "pitch": 0.15615514580251677,
          "rotation": 0,
          "target": "10-buro8"
        },
        {
          "yaw": -2.155685748638721,
          "pitch": 0.49985022828729697,
          "rotation": 2.356194490192345,
          "target": "23-traap2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-wc1",
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
        "yaw": 1.755934551268604,
        "pitch": 0.7156563891738639,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.424531152309573,
          "pitch": 0.3997348960766054,
          "rotation": 0,
          "target": "13-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-hall1",
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
        "yaw": 2.1136648789317043,
        "pitch": 0.26080643798679404,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 1.3935180244526375,
          "pitch": 0.1357876743390598,
          "rotation": 0,
          "target": "6-buro4"
        },
        {
          "yaw": 2.4683341558068017,
          "pitch": 0.12685605061932392,
          "rotation": 0,
          "target": "7-buro5"
        },
        {
          "yaw": -2.842966869439387,
          "pitch": 0.16931355107458756,
          "rotation": 0,
          "target": "8-buro6"
        },
        {
          "yaw": -0.09336679220441724,
          "pitch": 0.15950183260849116,
          "rotation": 1.5707963267948966,
          "target": "12-wc1"
        },
        {
          "yaw": -1.3254540121994722,
          "pitch": -0.25772323436707545,
          "rotation": 5.497787143782138,
          "target": "23-traap2"
        },
        {
          "yaw": -1.6263709616130697,
          "pitch": 0.5452644670220259,
          "rotation": 2.356194490192345,
          "target": "14-traap1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-traap1",
      "name": "Traap1",
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
        "yaw": 1.7307848415610376,
        "pitch": 0.05778852060034012,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 1.5649239138109925,
          "pitch": 0.5076316927842868,
          "rotation": 3.141592653589793,
          "target": "2-entree_principale"
        },
        {
          "yaw": 1.8878435014709272,
          "pitch": -0.21267431063767006,
          "rotation": 0,
          "target": "13-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-hall_kichen",
      "name": "Hall_Kichen",
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
        "yaw": -1.7529751003978458,
        "pitch": 0.2201165296905252,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.3680739158336497,
          "pitch": 0.08939523499953239,
          "rotation": 0,
          "target": "2-entree_principale"
        },
        {
          "yaw": -1.1574822255752704,
          "pitch": 0.2669266414042273,
          "rotation": 0,
          "target": "22-kichen"
        },
        {
          "yaw": -2.570605588834308,
          "pitch": 0.27309524577477085,
          "rotation": 4.71238898038469,
          "target": "21-wc_rdc"
        },
        {
          "yaw": 1.9429760538404839,
          "pitch": 0.13208280935633354,
          "rotation": 0,
          "target": "17-receptioun"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-entree_receptioun",
      "name": "Entree_Receptioun",
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
        "yaw": -1.6778978499029158,
        "pitch": 0.007304798444067728,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.6869231879080981,
          "pitch": 0.07336026304171384,
          "rotation": 0,
          "target": "17-receptioun"
        },
        {
          "yaw": 1.549435870058602,
          "pitch": 0.5138788777693435,
          "rotation": 0,
          "target": "1-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-receptioun",
      "name": "Receptioun",
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
        "yaw": -1.9521675503676992,
        "pitch": 0.23482626264020112,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.8457380090669524,
          "pitch": 0.179751469467071,
          "rotation": 0,
          "target": "18-wc_konferenz"
        },
        {
          "yaw": -2.294037093410882,
          "pitch": 0.19037295189346182,
          "rotation": 0,
          "target": "19-konferenz"
        },
        {
          "yaw": 2.9024473599782628,
          "pitch": 0.22858415917599118,
          "rotation": 0,
          "target": "15-hall_kichen"
        },
        {
          "yaw": 1.664269432684077,
          "pitch": 0.2684957595571653,
          "rotation": 0,
          "target": "16-entree_receptioun"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-wc_konferenz",
      "name": "WC_Konferenz",
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
        "yaw": 1.2279637951531566,
        "pitch": 0.7505328979833976,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.438208139315975,
          "pitch": 0.23385581760275898,
          "rotation": 4.71238898038469,
          "target": "17-receptioun"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-konferenz",
      "name": "Konferenz",
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
        "yaw": 2.5161810743625193,
        "pitch": 0.12311467432248513,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.2833498115240225,
          "pitch": 0.12606721421671807,
          "rotation": 0,
          "target": "20-server"
        },
        {
          "yaw": -1.2422997178481552,
          "pitch": 0.045431293259291294,
          "rotation": 0,
          "target": "17-receptioun"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-server",
      "name": "Server",
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
        "yaw": 0.9721616155521406,
        "pitch": 0.17907021486595376,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.7660667086757442,
          "pitch": 0.16608088192571024,
          "rotation": 0,
          "target": "19-konferenz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-wc_rdc",
      "name": "WC_RDC",
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
        "yaw": -2.24815029840223,
        "pitch": 0.5900889929625528,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -2.8027994600115242,
          "pitch": 0.25298736415294165,
          "rotation": 7.853981633974483,
          "target": "15-hall_kichen"
        },
        {
          "yaw": 2.9764211179233735,
          "pitch": 0.11419998112161345,
          "rotation": 10.995574287564278,
          "target": "2-entree_principale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-kichen",
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
        "yaw": 1.8076777173076053,
        "pitch": 0.18755404767732742,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": -1.4295920591356879,
          "pitch": 0.1602913085431048,
          "rotation": 0,
          "target": "15-hall_kichen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-traap2",
      "name": "Traap2",
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
        "yaw": 1.6944238154778262,
        "pitch": 0.028529536116852938,
        "fov": 1.3818994056604788
      },
      "linkHotspots": [
        {
          "yaw": 1.8190569177909701,
          "pitch": -0.2588790029451218,
          "rotation": 0,
          "target": "11-hall2"
        },
        {
          "yaw": 1.5810387763498515,
          "pitch": 0.5885077103027072,
          "rotation": 3.141592653589793,
          "target": "13-hall1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Boulevard",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
