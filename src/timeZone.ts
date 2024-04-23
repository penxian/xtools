type TimeZone = {
  timeZoneID: string;
  timeZoneDesc: string;
  timeZoneName: string;
  timeZone: string;
  dayLightSaving: boolean;
};

const TimeZoneList: TimeZone[] = [
  {
    "timeZoneID": "75",
    "timeZoneDesc": "(GMT) 协调世界时",
    "timeZoneName": "UTC",
    "timeZone": "GMT",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "25",
    "timeZoneDesc": "(GMT+00:00) 卡萨布兰卡, 蒙罗维亚",
    "timeZoneName": "Africa/Casablanca",
    "timeZone": "GMT+00:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "26",
    "timeZoneDesc": "(GMT+00:00) 都柏林, 爱丁堡, 里斯本, 伦敦",
    "timeZoneName": "Europe/London",
    "timeZone": "GMT+00:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "27",
    "timeZoneDesc": "(GMT+01:00) 阿姆斯特丹, 柏林, 伯尔尼, 罗马, 斯德哥尔摩, 维也纳",
    "timeZoneName": "Europe/Berlin",
    "timeZone": "GMT+01:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "28",
    "timeZoneDesc": "(GMT+01:00) 贝尔格莱德, 布拉迪斯拉发, 布达佩斯, 卢布尔雅那, 布拉格",
    "timeZoneName": "Europe/Budapest",
    "timeZone": "GMT+01:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "29",
    "timeZoneDesc": "(GMT+01:00) 布鲁塞尔, 哥本哈根, 马德里, 巴黎",
    "timeZoneName": "Europe/Paris",
    "timeZone": "GMT+01:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "30",
    "timeZoneDesc": "(GMT+01:00) 萨拉热窝, 斯科普里, 华沙, 萨格勒布",
    "timeZoneName": "Europe/Warsaw",
    "timeZone": "GMT+01:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "31",
    "timeZoneDesc": "(GMT+01:00) 中非西部",
    "timeZoneName": "Africa/Lagos",
    "timeZone": "GMT+01:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "32",
    "timeZoneDesc": "(GMT+02:00) 雅典, 维尔纽斯",
    "timeZoneName": "Europe/Istanbul",
    "timeZone": "GMT+02:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "33",
    "timeZoneDesc": "(GMT+02:00) 布加勒斯特",
    "timeZoneName": "Europe/Bucharest",
    "timeZone": "GMT+02:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "34",
    "timeZoneDesc": "(GMT+02:00) 开罗",
    "timeZoneName": "Africa/Cairo",
    "timeZone": "GMT+02:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "35",
    "timeZoneDesc": "(GMT+02:00) 哈拉雷, 比勒陀利亚",
    "timeZoneName": "Africa/Johannesburg",
    "timeZone": "GMT+02:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "36",
    "timeZoneDesc": "(GMT+02:00) 赫尔辛基, 里加, 塔林",
    "timeZoneName": "Europe/Kiev",
    "timeZone": "GMT+02:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "37",
    "timeZoneDesc": "(GMT+02:00) 耶路撒冷",
    "timeZoneName": "Asia/Jerusalem",
    "timeZone": "GMT+02:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "38",
    "timeZoneDesc": "(GMT+03:00) 巴格达, 明斯克",
    "timeZoneName": "Asia/Baghdad",
    "timeZone": "GMT+03:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "39",
    "timeZoneDesc": "(GMT+03:00) 科威特, 利雅得",
    "timeZoneName": "Asia/Riyadh",
    "timeZone": "GMT+03:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "40",
    "timeZoneDesc": "(GMT+03:00) 莫斯科, 圣彼得堡",
    "timeZoneName": "Europe/Moscow",
    "timeZone": "GMT+03:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "41",
    "timeZoneDesc": "(GMT+03:00) 内罗毕, 伊斯坦布尔",
    "timeZoneName": "Africa/Nairobi",
    "timeZone": "GMT+03:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "42",
    "timeZoneDesc": "(GMT+03:30) 德黑兰",
    "timeZoneName": "Asia/Tehran",
    "timeZone": "GMT+03:30",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "43",
    "timeZoneDesc": "(GMT+04:00) 阿布达比, 马斯喀特, 伏尔加格勒",
    "timeZoneName": "Asia/Dubai",
    "timeZone": "GMT+04:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "76",
    "timeZoneDesc": "(GMT+04:00) 巴库",
    "timeZoneName": "Asia/Baku",
    "timeZone": "GMT+04:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "44",
    "timeZoneDesc": "(GMT+04:00) 第比利斯, 埃里温",
    "timeZoneName": "Asia/Tbilisi",
    "timeZone": "GMT+04:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "45",
    "timeZoneDesc": "(GMT+04:30) 喀布尔",
    "timeZoneName": "Asia/Kabul",
    "timeZone": "GMT+04:30",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "46",
    "timeZoneDesc": "(GMT+05:00) 叶卡捷琳堡",
    "timeZoneName": "Asia/Yekaterinburg",
    "timeZone": "GMT+05:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "47",
    "timeZoneDesc": "(GMT+05:00) 伊斯兰堡, 卡拉奇, 塔什干",
    "timeZoneName": "Asia/Karachi",
    "timeZone": "GMT+05:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "48",
    "timeZoneDesc": "(GMT+05:30) 加尔各答, 钦奈, 孟买, 新德里",
    "timeZoneName": "Asia/Kolkata",
    "timeZone": "GMT+05:30",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "52",
    "timeZoneDesc": "(GMT+05:30) 斯里加亚渥登普拉",
    "timeZoneName": "Asia/Colombo",
    "timeZone": "GMT+05:30",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "49",
    "timeZoneDesc": "(GMT+05:45) 加德满都",
    "timeZoneName": "Asia/Kathmandu",
    "timeZone": "GMT+05:45",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "50",
    "timeZoneDesc": "(GMT+06:00) 阿拉木图",
    "timeZoneName": "Asia/Almaty",
    "timeZone": "GMT+06:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "51",
    "timeZoneDesc": "(GMT+06:00) 阿斯塔纳, 达卡",
    "timeZoneName": "Asia/Dhaka",
    "timeZone": "GMT+06:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "53",
    "timeZoneDesc": "(GMT+06:30) 仰光",
    "timeZoneName": "Asia/Yangon",
    "timeZone": "GMT+06:30",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "54",
    "timeZoneDesc": "(GMT+07:00) 曼谷, 河内, 雅加达",
    "timeZoneName": "Asia/Bangkok",
    "timeZone": "GMT+07:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "55",
    "timeZoneDesc": "(GMT+07:00) 新西伯利亚, 克拉斯诺亚尔斯克",
    "timeZoneName": "Asia/Novosibirsk",
    "timeZone": "GMT+07:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "56",
    "timeZoneDesc": "(GMT+08:00) 北京, 重庆, 香港特别行政区, 乌鲁木齐, 台北",
    "timeZoneName": "Asia/Shanghai",
    "timeZone": "GMT+08:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "74",
    "timeZoneDesc": "(GMT+08:00) 伊尔库茨克",
    "timeZoneName": "Asia/Irkutsk",
    "timeZone": "GMT+08:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "58",
    "timeZoneDesc": "(GMT+08:00) 吉隆坡, 新加坡",
    "timeZoneName": "Asia/Singapore",
    "timeZone": "GMT+08:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "59",
    "timeZoneDesc": "(GMT+08:00) 珀斯",
    "timeZoneName": "Australia/Perth",
    "timeZone": "GMT+08:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "57",
    "timeZoneDesc": "(GMT+08:00) 乌兰巴托",
    "timeZoneName": "Asia/Ulaanbaatar",
    "timeZone": "GMT+08:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "60",
    "timeZoneDesc": "(GMT+09:00) 大阪, 札幌, 东京",
    "timeZoneName": "Asia/Tokyo",
    "timeZone": "GMT+09:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "61",
    "timeZoneDesc": "(GMT+09:00) 首尔",
    "timeZoneName": "Asia/Seoul",
    "timeZone": "GMT+09:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "62",
    "timeZoneDesc": "(GMT+09:00) 雅库茨克",
    "timeZoneName": "Asia/Yakutsk",
    "timeZone": "GMT+09:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "63",
    "timeZoneDesc": "(GMT+09:30) 阿德莱德",
    "timeZoneName": "Australia/Adelaide",
    "timeZone": "GMT+09:30",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "64",
    "timeZoneDesc": "(GMT+09:30) 达尔文",
    "timeZoneName": "Australia/Darwin",
    "timeZone": "GMT+09:30",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "65",
    "timeZoneDesc": "(GMT+10:00) 布里斯班",
    "timeZoneName": "Australia/Brisbane",
    "timeZone": "GMT+10:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "66",
    "timeZoneDesc": "(GMT+10:00) 堪培拉, 墨尔本, 悉尼",
    "timeZoneName": "Australia/Sydney",
    "timeZone": "GMT+10:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "67",
    "timeZoneDesc": "(GMT+10:00) 关岛, 莫尔兹比港",
    "timeZoneName": "Pacific/Port_Moresby",
    "timeZone": "GMT+10:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "68",
    "timeZoneDesc": "(GMT+10:00) 霍巴特",
    "timeZoneName": "Australia/Hobart",
    "timeZone": "GMT+10:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "69",
    "timeZoneDesc": "(GMT+10:00) 符拉迪沃斯托克",
    "timeZoneName": "Asia/Vladivostok",
    "timeZone": "GMT+10:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "70",
    "timeZoneDesc": "(GMT+11:00) 马加丹, 所罗门群岛, 新喀里多尼亚",
    "timeZoneName": "Asia/Magadan",
    "timeZone": "GMT+11:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "71",
    "timeZoneDesc": "(GMT+12:00) 奥克兰, 惠灵顿",
    "timeZoneName": "Pacific/Auckland",
    "timeZone": "GMT+12:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "72",
    "timeZoneDesc": "(GMT+12:00) 斐济",
    "timeZoneName": "Pacific/Fiji",
    "timeZone": "GMT+12:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "77",
    "timeZoneDesc": "(GMT+12:00) 堪察加彼得罗巴甫洛夫斯克, 马绍尔群岛",
    "timeZoneName": "Asia/Kamchatka",
    "timeZone": "GMT+12:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "73",
    "timeZoneDesc": "(GMT+13:00) 努库阿洛法",
    "timeZoneName": "Pacific/Tongatapu",
    "timeZone": "GMT+13:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "23",
    "timeZoneDesc": "(GMT-01:00) 亚速尔群岛",
    "timeZoneName": "Atlantic/Azores",
    "timeZone": "GMT-01:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "24",
    "timeZoneDesc": "(GMT-01:00) 佛得角群岛",
    "timeZoneName": "Atlantic/Cape_Verde",
    "timeZone": "GMT-01:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "22",
    "timeZoneDesc": "(GMT-02:00) 协调世界时-02",
    "timeZoneName": "Etc/GMT+2",
    "timeZone": "GMT-02:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "19",
    "timeZoneDesc": "(GMT-03:00) 巴西利亚",
    "timeZoneName": "America/Sao_Paulo",
    "timeZone": "GMT-03:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "20",
    "timeZoneDesc": "(GMT-03:00) 布宜诺斯艾利斯",
    "timeZoneName": "America/Argentina/Buenos_Aires",
    "timeZone": "GMT-03:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "21",
    "timeZoneDesc": "(GMT-03:00) 格陵兰",
    "timeZoneName": "America/Godthab",
    "timeZone": "GMT-03:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "18",
    "timeZoneDesc": "(GMT-03:30) 纽芬兰",
    "timeZoneName": "America/St_Johns",
    "timeZone": "GMT-03:30",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "15",
    "timeZoneDesc": "(GMT-04:00) 大西洋时间（加拿大）",
    "timeZoneName": "America/Halifax",
    "timeZone": "GMT-04:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "16",
    "timeZoneDesc": "(GMT-04:00) 加拉加斯, 拉巴斯",
    "timeZoneName": "America/Caracas",
    "timeZone": "GMT-04:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "17",
    "timeZoneDesc": "(GMT-04:00) 圣地亚哥",
    "timeZoneName": "America/Santiago",
    "timeZone": "GMT-04:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "12",
    "timeZoneDesc": "(GMT-05:00) 波哥大, 利马, 基多",
    "timeZoneName": "America/Bogota",
    "timeZone": "GMT-05:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "13",
    "timeZoneDesc": "(GMT-05:00) 东部时间（美国和加拿大）",
    "timeZoneName": "America/New_York",
    "timeZone": "GMT-05:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "14",
    "timeZoneDesc": "(GMT-05:00) 印地安那州（东部）",
    "timeZoneName": "America/Indiana/Indianapolis",
    "timeZone": "GMT-05:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "8",
    "timeZoneDesc": "(GMT-06:00) 中美洲",
    "timeZoneName": "America/Guatemala",
    "timeZone": "GMT-06:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "9",
    "timeZoneDesc": "(GMT-06:00) 中部标准时间（美国和加拿大）",
    "timeZoneName": "America/Chicago",
    "timeZone": "GMT-06:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "10",
    "timeZoneDesc": "(GMT-06:00) 墨西哥城",
    "timeZoneName": "America/Mexico_City",
    "timeZone": "GMT-06:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "11",
    "timeZoneDesc": "(GMT-06:00) 萨斯喀彻温",
    "timeZoneName": "America/Regina",
    "timeZone": "GMT-06:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "6",
    "timeZoneDesc": "(GMT-07:00) 亚利桑那",
    "timeZoneName": "America/Phoenix",
    "timeZone": "GMT-07:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "7",
    "timeZoneDesc": "(GMT-07:00) 山地时间（美国和加拿大）",
    "timeZoneName": "America/Denver",
    "timeZone": "GMT-07:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "5",
    "timeZoneDesc": "(GMT-08:00) 太平洋时间（美国和加拿大）",
    "timeZoneName": "America/Los_Angeles",
    "timeZone": "GMT-08:00",
    "dayLightSaving": true
  },
  {
    "timeZoneID": "4",
    "timeZoneDesc": "(GMT-09:00) 阿拉斯加",
    "timeZoneName": "America/Anchorage",
    "timeZone": "GMT-09:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "3",
    "timeZoneDesc": "(GMT-10:00) 夏威夷",
    "timeZoneName": "Pacific/Honolulu",
    "timeZone": "GMT-10:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "2",
    "timeZoneDesc": "(GMT-11:00) 中途岛, 萨摩亚群岛",
    "timeZoneName": "Etc/GMT+11",
    "timeZone": "GMT-11:00",
    "dayLightSaving": false
  },
  {
    "timeZoneID": "1",
    "timeZoneDesc": "(GMT-12:00) 埃尼威托克, 夸贾林",
    "timeZoneName": "Etc/GMT+12",
    "timeZone": "GMT-12:00",
    "dayLightSaving": false
  }
]

export default TimeZoneList