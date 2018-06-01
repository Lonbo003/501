var baseData = {
    '重庆时时彩': {
        '五星': [
            {
                subname: '五星直选',
                sublist: [
                    {
                        name: '复式',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            let t_Nlist = [];
                            for (let N of Nlist) {
                                t_Nlist.push(N.length);
                            }
                            result = t_Nlist.reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组合',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            let t_Nlist = [];
                            for (let N of Nlist) {
                                t_Nlist.push(N.length);
                            }
                            result = t_Nlist.reduce((a, b) => a * b) * 5;
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '五星组选',
                sublist: [
                    {
                        name: '组选120',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 0, 1,
                                    6, 21, 56, 126, 252];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选60',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 3) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84];
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += resultArr[t_Arr_2.length - 1];
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选30',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_2.length > 0 && Arr_1.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36];
                                for (let A2 of Arr_2) {
                                    let t_Arr_1 = Arr_1.filter(x => x != A2);
                                    result += resultArr[t_Arr_1.length - 1];
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选20',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36];
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += resultArr[t_Arr_2.length - 1];
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选10',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length >= 1 && Arr_2.length >= 1) {
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += t_Arr_2.length;
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选5',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 1) {
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += t_Arr_2.length;
                                }
                            }
                            return result;
                        }
                    }
                ],
            }
        ],
        '二星': [
            {
                subname: '后二直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length > 0) {
                                result = Arr_1.length * Arr_2.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 3, 6, 10, 15,
                                    21, 28, 36, 45, 55,
                                    64, 72, 79, 85, 90,
                                    94, 97, 99, 100];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [10, 28, 44, 58, 70,
                                    80, 88, 94, 98, 100];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                ],
            },
            {
                subname: '后二组选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                ],
            },
            {
                subname: '前二直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length > 0) {
                                result = Arr_1.length * Arr_2.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 3, 6, 10, 15,
                                    21, 28, 36, 45, 55,
                                    64, 72, 79, 85, 90,
                                    94, 97, 99, 100];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [10, 28, 44, 58, 70,
                                    80, 88, 94, 98, 100];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                ],
            },
            {
                subname: '前二组选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                ],
            },
        ],
        '定位胆': [
            {
                subname: '定位胆',
                sublist: [
                    {
                        name: '定位胆',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            let Arr_3 = Nlist[2];
                            let Arr_4 = Nlist[3];
                            let Arr_5 = Nlist[4];
                            result = Arr_1.length + Arr_2.length + Arr_3.length + Arr_4.length + Arr_5.length;
                            return result;
                        }
                    },
                ],
            }
        ],
        '不定位': [
            {
                subname: '三星不定位',
                sublist: [
                    {
                        name: '后三一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '中三一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '前三一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '后三二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '中三二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '前三二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                ],
            },
            {
                subname: '四星不定位',
                sublist: [
                    {
                        name: '前四一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '后四一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '前四二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '后四二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '前四三码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 3) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '后四三码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 3) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '五星不定位',
                sublist: [
                    {
                        name: '五星一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '五星二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '五星三码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 3) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '五星四码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 4) {
                                let resultArr = [0, 0, 0, 1, 5,
                                    15, 35, 70, 126, 210];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ],
            },
        ],
        '任选': [
            {
                subname: '任二',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            let t_Nlist = [];
                            for (let N of Nlist) {
                                if (N.length > 0) {
                                    t_Nlist.push(N.length);
                                }
                            }
                            if (t_Nlist.length >= 2) {
                                for (let a = 0; a < t_Nlist.length - 1; a++) {
                                    result += t_Nlist[a] * t_Nlist.slice(a + 1, t_Nlist.length).reduce((a, b) => a + b);
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选',
                        se: [0, 9],
                        line: 1,
                        WZlist: ['万位', '千位', '百位', '十位', '个位'],
                        func(Nlist, WZlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            let WZ = WZlist.length - 1;
                            if (Nlist.length >= 2 && WZlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];

                                result = (WZ * (WZ + 1) / 2) * resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },

                ],
            },
            {
                subname: '任三',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            let t_Nlist = [];
                            for (let N of Nlist) {
                                if (N.length > 0) {
                                    t_Nlist.push(N.length);
                                }
                            }
                            if (t_Nlist.length >= 3) {
                                result += (t_Nlist.slice(0, 3).reduce((a, b) => a * b));
                            }
                            if (t_Nlist.length >= 4) {
                                result += t_Nlist[3] *
                                    (t_Nlist[2] * (t_Nlist[1] + t_Nlist[0]) +
                                        t_Nlist[1] * t_Nlist[0]);
                            }
                            if (t_Nlist.length == 5) {
                                result += t_Nlist[4] *
                                    (t_Nlist[3] * (t_Nlist[2] + t_Nlist[1] + t_Nlist[0]) +
                                        t_Nlist[2] * (t_Nlist[1] + t_Nlist[0]) +
                                        t_Nlist[1] * t_Nlist[0]);
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        WZlist: ['万位', '千位', '百位', '十位', '个位'],
                        func(Nlist, WZlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2 && WZlist.length >= 3) {
                                let WZ = [0, 0, 2, 8, 20][WZlist.length - 1];
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];

                                result = resultArr[Nlist.length - 1] * WZ;
                            }
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        WZlist: ['万位', '千位', '百位', '十位', '个位'],
                        func(Nlist, WZlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 3 && WZlist.length >= 3) {
                                let WZ = [0, 0, 1, 4, 10][WZlist.length - 1];
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1] * WZ;
                            }
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '任四',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            let t_Nlist = [];
                            for (let N of Nlist) {
                                if (N.length > 0) {
                                    t_Nlist.push(N.length);
                                }
                            }
                            if (t_Nlist.length >= 4) {
                                result += t_Nlist.slice(0, 4).reduce((a, b) => a * b);
                            }
                            if (t_Nlist.length == 5) {
                                result += t_Nlist[4] * (
                                    t_Nlist.slice(0, 3).reduce((a, b) => a * b) +
                                    t_Nlist[3] * (t_Nlist[2] * (t_Nlist[1] + t_Nlist[0]) + t_Nlist[1] * t_Nlist[0]));
                            }

                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                ]
            }
        ],
        '趣味': [
            {
                subname: '特殊',
                sublist: [
                    {
                        name: '一帆风顺',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '好事成双',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '三星报喜',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '四季发财',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    }
                ],
            }
        ],
        '龙虎': [
            {
                subname: '龙虎',
                sublist: [
                    {
                        name: '万千',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '万百',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '万十',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '万个',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '千百',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '千十',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '千个',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '百十',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '百个',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '十个',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '大小单双': [
            {
                subname: '总和',
                sublist: [
                    {
                        name: '总和',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '定位',
                sublist: [
                    {
                        name: '万位',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '千位',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '百位',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '十位',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '个位',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '串关',
                sublist: [
                    {
                        name: '串关',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 5,
                        func(Nlist, Clist) {
                            let result = 0;
                            let t_Clist = [];
                            for (let C of Clist) {
                                if (C.length > 0) {
                                    t_Clist.push(C.length);
                                }
                            }
                            if (t_Clist.length > 0) {
                                result = t_Clist.reduce((a, b) => a * b);
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前後二/三',
                sublist: [
                    {
                        name: '前二',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 2,
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '後二',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 2,
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '前三',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 3,
                        func(Nlist, Clist) {
                            return Clist[0].length * Clist[1].length * Clist[2].length;
                        }
                    },
                    {
                        name: '後三',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 3,
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    }
                ]
            }
        ],
        '特殊号': [
            {
                subname: '特殊号',
                sublist: [
                    {
                        name: '前三',
                        se: [0, 0],
                        line: 0,
                        Clist: ['豹子', '顺子', '对子', '半顺', '杂六'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '中三',
                        se: [0, 0],
                        line: 0,
                        Clist: ['豹子', '顺子', '对子', '半顺', '杂六'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '后三',
                        se: [0, 0],
                        line: 0,
                        Clist: ['豹子', '顺子', '对子', '半顺', '杂六'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                ]
            }
        ],
        '斗牛': [
            {
                subname: '斗牛',
                sublist: [
                    {
                        name: '斗牛',
                        se: [0, 0],
                        line: 0,
                        Clist: ['牛牛', '牛九', '牛八', '牛七', '牛六', '牛五', '牛四', '牛三', '牛二', '牛一', '无牛'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '四星': [
            {
                subname: '后四直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组合',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = 4 * Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '后四组选',
                sublist: [
                    {
                        name: '组选24',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 1, 5,
                                    15, 35, 70, 126, 210];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选12',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10, 15, 21, 28, 36];
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += resultArr[t_Arr_2.length - 1];
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选6',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选4',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 1) {
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += t_Arr_2.length;
                                }
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前四直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组合',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = 4 * Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    }]
            },
            {
                subname: '前四组选',
                sublist: [
                    {
                        name: '组选24',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 1, 5,
                                    15, 35, 70, 126, 210];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选12',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10, 15, 21, 28, 36];
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += resultArr[t_Arr_2.length - 1];
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选6',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 2) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组选4',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length > 0 && Arr_2.length >= 1) {
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += t_Arr_2.length;
                                }
                            }
                            return result;
                        }
                    }
                ]
            }
        ],
        '三星': [
            {
                subname: '后三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result += Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 3, 6, 10, 15,
                                    21, 28, 36, 45, 55,
                                    63, 69, 73, 75, 75,
                                    73, 69, 63, 55, 45,
                                    36, 28, 21, 15, 10,
                                    6, 3, 1];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [10, 54, 96, 126, 144,
                                    150, 144, 126, 96, 54, 10];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '后三组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 2, 6, 12, 20, 30, 42, 56, 72, 90];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10, 20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 9],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '中三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 3, 6, 10, 15,
                                    21, 28, 36, 45, 55,
                                    63, 69, 73, 75, 75,
                                    73, 69, 63, 55, 45,
                                    36, 28, 21, 15, 10,
                                    6, 3, 1];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [10, 54, 96, 126, 144,
                                    150, 144, 126, 96, 54, 10];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '中三组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 2, 6, 12, 20, 30, 42, 56, 72, 90];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10, 20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 9],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '前三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 3, 6, 10, 15,
                                    21, 28, 36, 45, 55,
                                    63, 69, 73, 75, 75,
                                    73, 69, 63, 55, 45,
                                    36, 28, 21, 15, 10,
                                    6, 3, 1];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [10, 54, 96, 126, 144,
                                    150, 144, 126, 96, 54, 10];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    }
                ],
            },
            {
                subname: '前三组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 2, 6, 12, 20, 30, 42, 56, 72, 90];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10, 20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 9],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ],
            }
        ]
    },
    //'分分时时彩': {},
    //'新疆时时彩': {},
    //'天津时时彩': {},
    '北京PK拾': {
        '前一': [
            {
                subname: '前一',
                sublist: [
                    {
                        name: '前一',
                        se: [1, 10],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '前二': [
            {
                subname: '前二',
                sublist: [
                    {
                        name: '前二复式',
                        se: [1, 10],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            if (Arr_1.length >= 1 && Arr_2.length >= 1) {
                                for (let A1 of Arr_1) {
                                    let t_Arr_2 = Arr_2.filter(x => x != A1);
                                    result += t_Arr_2.length;
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '前二单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ],
            }
        ],
        '前三': [
            {
                subname: '前三',
                sublist: [
                    {
                        name: '前三复式',
                        se: [1, 10],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            let Arr_3 = Nlist[2];
                            for (let A1 of Arr_1) {
                                let t_Arr_2 = Arr_2.filter(x => x != A1);
                                for (let A2 of t_Arr_2) {
                                    let t_Arr_3 = Arr_3.filter(x => x != A1 && x != A2);
                                    result += t_Arr_3.length;
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '前三单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '定位胆': [
            {
                subname: '定位胆',
                sublist: [
                    {
                        name: '第1~5名',
                        se: [1, 10],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            for (let N of Nlist) {
                                result += N.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '第6~10名',
                        se: [1, 10],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            for (let N of Nlist) {
                                result += N.length;
                            }
                            return result;
                        }
                    }
                ]
            }
        ],
        '冠亚和': [
            {
                subname: '冠亚和',
                sublist: [
                    {
                        name: '和值',
                        se: [3, 19],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '龙虎': [
            {
                subname: '龙虎',
                sublist: [
                    {
                        name: '冠 军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '亚 军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '季 军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第四名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第五名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '冠亚军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '冠亚季军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '五行': [
            {
                subname: '五行',
                sublist: [
                    {
                        name: '冠 军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['金', '木', '水', '火', '土'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '亚 军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['金', '木', '水', '火', '土'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '季 军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['金', '木', '水', '火', '土'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '大小单双': [
            {
                subname: '大小单双',
                sublist: [
                    {
                        name: '冠军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '亚军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '季军',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第四名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第五名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第六名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第七名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第八名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第九名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '第十名',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    },
                    {
                        name: '冠亚季',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '冠亚和',
                sublist: [
                    {
                        name: '大小单双',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '冠亚季选一': [
            {
                subname: '冠亚季选一',
                sublist: [
                    {
                        name: '冠亚季',
                        se: [1, 10],
                        line: 0,
                        func(Nlist, Clist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
    },
    '山东11选5': {
        '三码': [
            {
                subname: '前三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [1, 11],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            let Arr_3 = Nlist[2];
                            for (let A1 of Arr_1) {
                                let t_Arr_2 = Arr_2.filter(x => x != A1);
                                for (let A2 of t_Arr_2) {
                                    let t_Arr_3 = Arr_3.filter(x => x != A1 && x != A2);
                                    result += t_Arr_3.length;
                                }
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前三组选',
                sublist: [
                    {
                        name: '复式',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120, 165
                                ]
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '二码': [
            {
                subname: '前二直选',
                sublist: [
                    {
                        name: '复式',
                        se: [1, 11],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            for (let A1 of Arr_1) {
                                let t_Arr_2 = Arr_2.filter(x => x != A1);
                                result += t_Arr_2.length;
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前二组选',
                sublist: [
                    {
                        name: '复式',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45, 55
                                ];
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '不定胆': [
            {
                subname: '不定胆',
                sublist: [
                    {
                        name: '前三位',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        }
                    }
                ]
            }
        ],
        '定位胆': [
            {
                subname: '定位胆',
                sublist: [
                    {
                        name: '定位胆',
                        se: [1, 11],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            for (let N of Nlist) {
                                result += N.length;
                            }
                            return result;
                        }
                    }
                ]
            }
        ],
        '任选': [
            {
                subname: '任选复式',
                sublist: [
                    {
                        name: '一中一',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 2, 3, 4, 5,
                                    6, 7, 8, 9, 10, 11
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '二中二',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45, 55
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '三中三',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120, 165
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '四中四',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 1, 5,
                                    15, 35, 70, 126, 210, 330
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '五中五',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 0, 1,
                                    6, 21, 56, 126, 252, 462
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '六中五',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 0, 0,
                                    1, 7, 28, 84, 210, 462
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '七中五',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 0, 0,
                                    0, 1, 8, 36, 120, 330
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '八中五',
                        se: [1, 11],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 0, 0, 0,
                                    0, 0, 1, 9, 45, 165
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '任选单式',
                sublist: [
                    {
                        name: '一中一',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '二中二',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '三中三',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '四中四',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '五中五',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '六中五',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '七中五',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '八中五',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ]
    },
    //'广东11选5': {},
    //'上海11选5': {},
    //'江西11选5': {},
    //'安徽11选5': {},
    '广西快3': {
        '二不同号': [
            {
                subname: '二不同号',
                sublist: [
                    {
                        name: '标准选号',
                        se: [1, 6],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 1, 3, 6, 10, 15];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '手动选号',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '胆拖选号',
                        se: [1, 6],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '二同号': [
            {
                subname: '二同号单选',
                sublist: [
                    {
                        name: '标准选号',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '手动选号',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '二同号复选',
                sublist: [
                    {
                        name: '二同号复选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 2, 3, 4, 5, 6];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ]
            }
        ],
        '三不同号': [
            {
                subname: '三不同号',
                sublist: [
                    {
                        name: '标准选号',
                        se: [1, 6],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10, 20];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '手动选号',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '三同号': [
            {
                subname: '三同号单选',
                sublist: [
                    {
                        name: '三同号单选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 2, 3, 4, 5, 6];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '三同号通选',
                sublist: [
                    {
                        name: '三同号通选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ]
            }
        ],
        '三连号': [
            {
                subname: '三连号通选',
                sublist: [
                    {
                        name: '三连号通选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    }
                ]
            }
        ],
        '和值': [
            {
                subname: '和值',
                sublist: [
                    {
                        name: '和值',
                        se: [3, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '大小单双',
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双', '大单', '大双', '小单', '小双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        }
                    }
                ]
            }
        ]
    },
    //'湖北快3': {},
    '福彩3D': {
        '三码': [
            {
                subname: '直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 3, 6, 10, 15,
                                    21, 28, 36, 45, 55,
                                    63, 69, 73, 75, 75,
                                    73, 69, 63, 55, 45,
                                    36, 28, 21, 15, 10,
                                    6, 3, 1];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length * (Nlist.length - 1);
                            }
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 3) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '二码': [
            {
                subname: '后二码直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '后二码组选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = (Nlist.length * (Nlist.length - 1)) / 2;
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前二码直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                                result = Nlist.map(x => resultArr[x]).reduce((a, b) => a + b);
                            }
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前二码组选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = (Nlist.length * (Nlist.length - 1)) / 2;
                            }
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '定位胆': [
            {
                subname: '定位胆',
                sublist: [
                    {
                        name: '定位胆',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a + b);
                            return result;
                        }
                    }
                ]
            }
        ],
        '不定胆': [
            {
                subname: '不定胆',
                sublist: [
                    {
                        name: '一码不定胆',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        }
                    }
                ]
            }
        ]
    },
    //'排列三': {},
    //'北京28': {},
    //'幸运28': {},
    '三分彩': {
        '五星': [
            {
                subname: '五星直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组合',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '五星组选',
                sublist: [
                    {
                        name: '组选120',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选60',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选30',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选20',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选10',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选5',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '二星': [
            {
                subname: '后二直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '后二组选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前二直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前二组选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '定位胆': [
            {
                subname: '定位胆',
                sublist: [
                    {
                        name: '定位胆',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '不定位': [
            {
                subname: '三星不定位',
                sublist: [
                    {
                        name: '后三一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '中三一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '前三一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '后三二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '中三二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '前三二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '四星不定位',
                sublist: [
                    {
                        name: '前四一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '后四一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '前四二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '后四二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '前四三码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '后四三码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                ]
            },
            {
                subname: '五星不定位',
                sublist: [
                    {
                        name: '五星一码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '五星二码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '五星三码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '五星四码',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '任选': [
            {
                subname: '任二',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '任三',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组三',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '任四',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '趣味': [
            {
                subname: '特殊',
                sublist: [
                    {
                        name: '一帆风顺',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '好事成双',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '三星报喜',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '四季发财',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '龙虎': [
            {
                subname: '龙虎',
                sublist: [
                    {
                        name: '万千',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '万百',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '万十',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '万个',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '千百',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '千十',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '千个',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '百十',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '百个',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '十个',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '大小单双': [
            {
                subname: '总和',
                sublist: [
                    {
                        name: '总和',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '定位',
                sublist: [
                    {
                        name: '万位',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '千位',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '百位',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '十位',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '个位',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '串关',
                sublist: [
                    {
                        name: '串关',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '特殊号': [
            {
                subname: '特殊号',
                sublist: [
                    {
                        name: '前三',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '中三',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '后三',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '斗牛': [
            {
                subname: '斗牛',
                sublist: [
                    {
                        name: '斗牛',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '四星': [
            {
                subname: '后四直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组合',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '后四组选',
                sublist: [
                    {
                        name: '组选24',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选12',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选6',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选4',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前四直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组合',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前四组选',
                sublist: [
                    {
                        name: '组选24',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选12',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选6',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组选4',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ],
        '三星': [
            {
                subname: '后三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '后三组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '中三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '中三组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前三直选',
                sublist: [
                    {
                        name: '复式',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选和值',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '直选跨度',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '和值尾数',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                subname: '前三组选',
                sublist: [
                    {
                        name: '组三',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '组六',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        name: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            }
        ]
    }
}