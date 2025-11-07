// 商店營運數據 - 8月至10月委外與中和數據
const storeData = [
  {
    storeName: "高雄市府店",
    august: { outsource: { count: 2, amount: 1730 }, zhonghe: { count: 14, amount: 6412 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 13, amount: 5846 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 14, amount: 15213 } }
  },
  {
    storeName: "高雄自強店",
    august: { outsource: { count: 3, amount: 501 }, zhonghe: { count: 11, amount: 11587 } },
    september: { outsource: { count: 3, amount: 430 }, zhonghe: { count: 3, amount: 2025 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 2842 } }
  },
  {
    storeName: "高雄博愛店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 4, amount: 1473 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 5, amount: 1911 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 6, amount: 7349 } }
  },
  {
    storeName: "中山民生店",
    august: { outsource: { count: 3, amount: 394 }, zhonghe: { count: 16, amount: 12174 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 10, amount: 7709 } },
    october: { outsource: { count: 9, amount: 2187 }, zhonghe: { count: 10, amount: 6180 } }
  },
  {
    storeName: "臺師大店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 12, amount: 9709 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 3, amount: 3056 } },
    october: { outsource: { count: 4, amount: 1062 }, zhonghe: { count: 8, amount: 11774 } }
  },
  {
    storeName: "中山八德店",
    august: { outsource: { count: 1, amount: 1273 }, zhonghe: { count: 11, amount: 23227 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 20, amount: 23440 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 12, amount: 17033 } }
  },
  {
    storeName: "永和中正店",
    august: { outsource: { count: 2, amount: 1176 }, zhonghe: { count: 15, amount: 27154 } },
    september: { outsource: { count: 4, amount: 1453 }, zhonghe: { count: 6, amount: 8930 } },
    october: { outsource: { count: 7, amount: 2361 }, zhonghe: { count: 9, amount: 11736 } }
  },
  {
    storeName: "南軟園區店",
    august: { outsource: { count: 1, amount: 110 }, zhonghe: { count: 2, amount: 2712 } },
    september: { outsource: { count: 1, amount: 110 }, zhonghe: { count: 8, amount: 6330 } },
    october: { outsource: { count: 2, amount: 770 }, zhonghe: { count: 12, amount: 9399 } }
  },
  {
    storeName: "臺灣大學店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 5887 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 4, amount: 3033 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 5, amount: 5052 } }
  },
  {
    storeName: "中和中山店",
    august: { outsource: { count: 1, amount: 75 }, zhonghe: { count: 8, amount: 4978 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 3, amount: 3105 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 9, amount: 2998 } }
  },
  {
    storeName: "桃園中原店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 11, amount: 6860 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 14, amount: 12787 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 8, amount: 4764 } }
  },
  {
    storeName: "桃園市府店",
    august: { outsource: { count: 4, amount: 2472 }, zhonghe: { count: 16, amount: 26416 } },
    september: { outsource: { count: 1, amount: 752 }, zhonghe: { count: 16, amount: 13502 } },
    october: { outsource: { count: 1, amount: 257 }, zhonghe: { count: 19, amount: 15952 } }
  },
  {
    storeName: "淡水真理店",
    august: { outsource: { count: 19, amount: 4840 }, zhonghe: { count: null, amount: null } },
    september: { outsource: { count: 4, amount: 861 }, zhonghe: { count: null, amount: null } },
    october: { outsource: { count: 5, amount: 2075 }, zhonghe: { count: null, amount: null } }
  },
  {
    storeName: "松山吉祥店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 8, amount: 17591 } },
    september: { outsource: { count: 1, amount: 159 }, zhonghe: { count: 13, amount: 16085 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 17, amount: 17206 } }
  },
  {
    storeName: "信義松信店",
    august: { outsource: { count: 2, amount: 4175 }, zhonghe: { count: 25, amount: 22644 } },
    september: { outsource: { count: 1, amount: 215 }, zhonghe: { count: 21, amount: 9598 } },
    october: { outsource: { count: 12, amount: 6732 }, zhonghe: { count: 13, amount: 6395 } }
  },
  {
    storeName: "內湖內科店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 26, amount: 24080 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 17, amount: 48139 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 15, amount: 11308 } }
  },
  {
    storeName: "大安復興店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 20, amount: 17672 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 13, amount: 23705 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 15, amount: 13214 } }
  },
  {
    storeName: "汐止遠雄店",
    august: { outsource: { count: 1, amount: 416 }, zhonghe: { count: 22, amount: 13847 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 27, amount: 14421 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 3309 } }
  },
  {
    storeName: "中山民權店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 6, amount: 4693 } },
    september: { outsource: { count: 4, amount: 920 }, zhonghe: { count: 13, amount: 18235 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 9, amount: 8800 } }
  },
  {
    storeName: "桃園藝文店",
    august: { outsource: { count: 1, amount: 155 }, zhonghe: { count: 10, amount: 9687 } },
    september: { outsource: { count: 1, amount: 125 }, zhonghe: { count: 9, amount: 3124 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 9, amount: 7909 } }
  },
  {
    storeName: "中和遠東店",
    august: { outsource: { count: 1, amount: 70 }, zhonghe: { count: 4, amount: 2184 } },
    september: { outsource: { count: 2, amount: 253 }, zhonghe: { count: 14, amount: 6558 } },
    october: { outsource: { count: 1, amount: 70 }, zhonghe: { count: 7, amount: 8307 } }
  },
  {
    storeName: "內湖西湖店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 6, amount: 4620 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 9, amount: 3766 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 5, amount: 2206 } }
  },
  {
    storeName: "中山松江店",
    august: { outsource: { count: 1, amount: 141 }, zhonghe: { count: 7, amount: 5005 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 6, amount: 1628 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 8, amount: 10660 } }
  },
  {
    storeName: "大同民權店",
    august: { outsource: { count: 3, amount: 18200 }, zhonghe: { count: 8, amount: 5924 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 8, amount: 4842 } },
    october: { outsource: { count: 11, amount: 4672 }, zhonghe: { count: 5, amount: 1266 } }
  },
  {
    storeName: "中正中華店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 5272 } },
    september: { outsource: { count: 1, amount: 201 }, zhonghe: { count: 4, amount: 2526 } },
    october: { outsource: { count: 5, amount: 1582 }, zhonghe: { count: 4, amount: 3168 } }
  },
  {
    storeName: "桃園中壢店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 11, amount: 8702 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 10, amount: 11722 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 3072 } }
  },
  {
    storeName: "大安延吉店",
    august: { outsource: { count: 1, amount: 4750 }, zhonghe: { count: 7, amount: 2271 } },
    september: { outsource: { count: 1, amount: 528 }, zhonghe: { count: 5, amount: 4090 } },
    october: { outsource: { count: 1, amount: 147 }, zhonghe: { count: 8, amount: 10251 } }
  },
  {
    storeName: "台一公館店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 28, amount: 22666 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 27, amount: 14718 } },
    october: { outsource: { count: 1, amount: 298 }, zhonghe: { count: 24, amount: 13343 } }
  },
  {
    storeName: "輔大店-全",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 11, amount: 10558 } },
    september: { outsource: { count: 4, amount: 2880 }, zhonghe: { count: 10, amount: 10078 } },
    october: { outsource: { count: 1, amount: 85 }, zhonghe: { count: 8, amount: 5947 } }
  },
  {
    storeName: "陽明店-全",
    august: { outsource: { count: 4, amount: 1384 }, zhonghe: { count: 11, amount: 9059 } },
    september: { outsource: { count: 2, amount: 1539 }, zhonghe: { count: 6, amount: 5917 } },
    october: { outsource: { count: 2, amount: 1017 }, zhonghe: { count: 11, amount: 10680 } }
  },
  {
    storeName: "輔大店-E",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 1, amount: 1388 } },
    september: { outsource: { count: 1, amount: 1331 }, zhonghe: { count: 2, amount: 1660 } },
    october: { outsource: { count: 1, amount: 615 }, zhonghe: { count: 1, amount: 271 } }
  },
  {
    storeName: "敦北店-全",
    august: { outsource: { count: 5, amount: 750 }, zhonghe: { count: 5, amount: 3095 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 5, amount: 3012 } },
    october: { outsource: { count: 2, amount: 19574 }, zhonghe: { count: 3, amount: 835 } }
  },
  {
    storeName: "台一信義店",
    august: { outsource: { count: 6, amount: 1032 }, zhonghe: { count: 9, amount: 7771 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 12, amount: 6586 } },
    october: { outsource: { count: 4, amount: 2951 }, zhonghe: { count: 6, amount: 4197 } }
  },
  {
    storeName: "南京東店-全",
    august: { outsource: { count: 2, amount: 482 }, zhonghe: { count: 7, amount: 4055 } },
    september: { outsource: { count: 1, amount: 2610 }, zhonghe: { count: 5, amount: 3487 } },
    october: { outsource: { count: 6, amount: 7004 }, zhonghe: { count: 4, amount: 5808 } }
  },
  {
    storeName: "台中河南店-全",
    august: { outsource: { count: 3, amount: 417 }, zhonghe: { count: 3, amount: 1827 } },
    september: { outsource: { count: 3, amount: 406 }, zhonghe: { count: 8, amount: 7178 } },
    october: { outsource: { count: 11, amount: 6563 }, zhonghe: { count: 5, amount: 7803 } }
  },
  {
    storeName: "小巨蛋店-全",
    august: { outsource: { count: 17, amount: 33501 }, zhonghe: { count: 5, amount: 1920 } },
    september: { outsource: { count: 2, amount: 1280 }, zhonghe: { count: 2, amount: 1212 } },
    october: { outsource: { count: 1, amount: 842 }, zhonghe: { count: 8, amount: 4659 } }
  },
  {
    storeName: "台中西屯店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 8, amount: 4847 } },
    september: { outsource: { count: 2, amount: 288 }, zhonghe: { count: 1, amount: 278 } },
    october: { outsource: { count: 3, amount: 780 }, zhonghe: { count: 2, amount: 2129 } }
  },
  {
    storeName: "台中中醫店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 19, amount: 12579 } },
    september: { outsource: { count: 4, amount: 3161 }, zhonghe: { count: 15, amount: 16590 } },
    october: { outsource: { count: 3, amount: 459 }, zhonghe: { count: 17, amount: 6523 } }
  },
  {
    storeName: "台中大墩店",
    august: { outsource: { count: 4, amount: 2280 }, zhonghe: { count: 11, amount: 4824 } },
    september: { outsource: { count: 8, amount: 3212 }, zhonghe: { count: 11, amount: 10129 } },
    october: { outsource: { count: 12, amount: 4759 }, zhonghe: { count: 8, amount: 5759 } }
  },
  {
    storeName: "台中美村店",
    august: { outsource: { count: 2, amount: 220 }, zhonghe: { count: 12, amount: 6317 } },
    september: { outsource: { count: 4, amount: 1556 }, zhonghe: { count: 14, amount: 7466 } },
    october: { outsource: { count: 1, amount: 1850 }, zhonghe: { count: 13, amount: 9409 } }
  },
  {
    storeName: "台中朝富店",
    august: { outsource: { count: 2, amount: 510 }, zhonghe: { count: 8, amount: 8604 } },
    september: { outsource: { count: 3, amount: 6120 }, zhonghe: { count: 4, amount: 4090 } },
    october: { outsource: { count: 2, amount: 307 }, zhonghe: { count: 12, amount: 9338 } }
  },
  {
    storeName: "台南站前店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 5773 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 10293 } },
    october: { outsource: { count: 4, amount: 1170 }, zhonghe: { count: 8, amount: 9517 } }
  },
  {
    storeName: "台南南紡店",
    august: { outsource: { count: null, amount: null }, zhonghe: { count: 6, amount: 7558 } },
    september: { outsource: { count: null, amount: null }, zhonghe: { count: 5, amount: 1827 } },
    october: { outsource: { count: null, amount: null }, zhonghe: { count: 7, amount: 4673 } }
  },
  {
    storeName: "台北中正店",
    august: { outsource: { count: 0, amount: 0 }, zhonghe: { count: 14, amount: 16484 } },
    september: { outsource: { count: 3, amount: 365 }, zhonghe: { count: 9, amount: 6084 } },
    october: { outsource: { count: 0, amount: 0 }, zhonghe: { count: 24, amount: 9700 } }
  }
];

// 數據已定義為全域變數 storeData，可直接使用