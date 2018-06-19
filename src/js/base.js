var baseData = [
    {
        cnName: '时时彩',
        enName: 'tat',
        data: [
            {
                cnName: '五星',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 5,
                        sl: '',
                        zj: '',
                        func(Nlist) {
                            let result = 0;
                            let t_Nlist = [];
                            for (let N of Nlist) {
                                t_Nlist.push(N.length);
                            }
                            result = t_Nlist.reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//直选组合
                        enName: '',
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
                            result = t_Nlist.reduce((a, b) => a * b) * 5;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '组选120',
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 5, false);
                        }
                    },
                    {
                        cnName: '组选60',
                        enName: '',
                        title: {
                            N: ['二重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, [1, 3], false);
                        }
                    },
                    {
                        cnName: '组选30',
                        enName: '',
                        title: {
                            N: ['二重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, [2, 1], false);
                        }
                    },
                    {
                        cnName: '组选20',
                        enName: '',
                        title: {
                            N: ['三重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, [1, 2], false);
                        }
                    },
                    {
                        cnName: '组选10',
                        enName: '',
                        title: {
                            N: ['三重号', '二重号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '组选5',
                        enName: '',
                        title: {
                            N: ['四重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '',//二星
                enName: '',
                data: [
                    {
                        cnName: '',//后二直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//后二直选直选跨度
                        enName: '',
                        title: {
                            N: ['十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//后二直选和值尾数
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//后二组选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//前二直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//前二直选直选跨度
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前二直选和值尾数
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前二组选单式
                        enName: '',
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
                cnName: '定位胆',
                enName: '',
                data: [
                    {
                        cnName: '定位胆',
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, '1_1', true);
                        }
                    }
                ]
            },
            {
                cnName: '不定胆',
                enName: '',
                data: [
                    {
                        cnName: '后三一码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '中三一码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '前三一码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '后三二码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//三星不定胆中三二码
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '前三二码',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//四星不定胆前四一码
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '后四一码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//四星不定胆前四二码
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '后四二码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//四星不定胆前四三码
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '',//四星不定胆后四三码
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '',//五星不定胆五星一码
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '五星二码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '五星三码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '',//五星不定胆五星四码
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 4, false);
                        }
                    }
                ]
            },
            {
                cnName: '任选',
                enName: '',
                data: [
                    {
                        cnName: '任二复式',
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, '2_1', true);
                        }
                    },
                    {
                        cnName: '',//任二单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//任二单式组选
                        enName: '',
                        title: {
                            WZ: ['位置'],
                            N: ['号码']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '任三复式',
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, "3_1", true);
                        }
                    },
                    {
                        cnName: '',//任三单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//任三组三
                        enName: '',
                        title: {
                            WZ: ['位置'],
                            N: ['号码']
                        },
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
                        },
                        func_fate() {
                            let result = new fateObj();
                            result.sd_WZlist = sp_fate(this, 3, false).sd_WZlist;
                            result.sd_Numlist = sp_fate(this, 2, false).sd_Numlist;
                            return result;
                        }
                    },
                    {
                        cnName: '',//任三组三组六
                        enName: '',
                        title: {
                            WZ: ['位置'],
                            N: ['号码']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '',//任三组三混合组选
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '任四复式',
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, '4_1', true);
                        }
                    },
                    {
                        cnName: '',//任四单式
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
                cnName: '趣味',
                enName: '',
                data: [
                    {
                        cnName: '一帆风顺',
                        enName: '',
                        title: {
                            N: ['选号']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//趣味好事成双
                        enName: '',
                        title: {
                            N: ['选号']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//趣味三星报喜
                        enName: '',
                        title: {
                            N: ['选号']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//趣味四季发财
                        enName: '',
                        title: {
                            N: ['选号']
                        },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '',//龙虎
                enName: '',
                data: [
                    {
                        cnName: '万千',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '万百',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '万十',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '万个',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '千百',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '千十',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '千个',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '百十',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '百个',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '十个',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎', '和'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '大小单双',
                enName: '',
                data: [
                    {
                        cnName: '前二大小单双',
                        enName: '',
                        title: { C: ['万位', '千位'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 2,
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//大小单双总和
                        enName: '',
                        title: {
                            C: ['总和']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双万位
                        enName: '',
                        title: {
                            C: ['万位']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双千位
                        enName: '',
                        title: {
                            C: ['千位']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双百位
                        enName: '',
                        title: {
                            C: ['百位']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双十位
                        enName: '',
                        title: {
                            C: ['十位']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双个位
                        enName: '',
                        title: {
                            C: ['个位']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双串关
                        enName: '',
                        title: {
                            C: ['万位', '千位', '百位', '十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, '1_1', false);
                        }
                    },
                    {
                        cnName: '后二大小单双',
                        enName: '',
                        title: { C: ['十位', '个位'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 2,
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '前三大小单双',
                        enName: '',
                        title: { C: ['万位', '千位', '百位'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 3,
                        func(Nlist, Clist) {
                            return Clist[0].length * Clist[1].length * Clist[2].length;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '后三大小单双',
                        se: [0, 0],
                        title: { C: ['百位', '十位', '个位'] },
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 3,
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    }
                ]
            },
            {
                cnName: '',//特殊号
                enName: '',
                data: [
                    {
                        cnName: '前三',
                        enName: '',
                        title: {
                            C: ['前三']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['豹子', '顺子', '对子', '半顺', '杂六'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '中三',
                        enName: '',
                        title: {
                            C: ['中三']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['豹子', '顺子', '对子', '半顺', '杂六'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '后三',
                        enName: '',
                        title: {
                            C: ['后三']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['豹子', '顺子', '对子', '半顺', '杂六'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '',//斗牛
                enName: '',
                data: [
                    {
                        cnName: '斗牛',
                        enName: '',
                        title: {
                            C: ['斗牛']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['牛牛', '牛九', '牛八', '牛七', '牛六', '牛五', '牛四', '牛三', '牛二', '牛一', '无牛'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '四星',
                enName: '',
                data: [
                    {
                        cnName: '后四直选',//ps:后四直选复式
                        enName: '',
                        title: {
                            N: ['千位', '百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//后四直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//后四直选组合
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = 4 * Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '组选24',
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 4, false);
                        }
                    },
                    {
                        cnName: '组选12',
                        enName: '',
                        title: {
                            N: ['二重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, [1, 2], false);
                        }
                    },
                    {
                        cnName: '组选6',
                        enName: '',
                        title: {
                            N: ['二重号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '组选4',
                        enName: '',
                        title: {
                            N: ['三重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '前四直选',//ps:前四直选复式
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位']
                        },
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//前四直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//前四直选组合
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位', '十位']
                        },
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            result = 4 * Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//前四组选组选24
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 4, false);
                        }
                    },
                    {
                        cnName: '',//前四组选组选12
                        enName: '',
                        title: {
                            N: ['二重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, [1, 2], false);
                        }
                    },
                    {
                        cnName: '',//前四组选组选6
                        enName: '',
                        title: {
                            N: ['二重号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//前四组选组选4
                        enName: '',
                        title: {
                            N: ['三重号', '单　号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '',//三星
                enName: '',
                data: [
                    {
                        cnName: '',//后三直选单式
                        enName: '',
                        se: [0],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//后三直选直选和值
                        enName: '',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//后三组选混合组选
                        enName: '',
                        se: [0, 9],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//中三直选单式
                        enName: '',
                        se: [0],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//中三直选直选和值
                        enName: '',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//中三直选直选跨度
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//中三直选和值尾数
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//中三组选混合组选
                        enName: '',
                        se: [0, 9],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//前三直选单式
                        enName: '',
                        se: [0],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//前三直选直选和值
                        enName: '',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前三直选直选跨度
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前三直选和值尾数
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前三组选混合组选
                        enName: '',
                        se: [0, 9],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                cnName: '前三',
                enName: '',
                data: [
                    {
                        cnName: '组三',
                        enName: '',
                        title: {
                            N: ['组三']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '组六',
                        enName: '',
                        title: {
                            N: ['组六']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['万位', '千位', '百位']
                        },
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    }
                ]
            },
            {
                cnName: '前二',
                enName: '',
                data: [
                    {
                        cnName: '组选复式',
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['万位', '千位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        title: { N: ['选号'] },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '中三',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['千位', '百位', '十位']
                        },
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '组三',
                        title: {
                            N: ['组三']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '组六',
                        title: {
                            N: ['组六']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    }
                ]
            },
            {
                cnName: '后三',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            result += Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '直选跨度',
                        enName: '',
                        title: {
                            N: ['选号']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '和值尾数',
                        enName: '',
                        title: { N: ['选号'] },
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '组三',
                        enName: '',
                        title: {
                            N: ['组三']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '组六',
                        enName: '',
                        title: {
                            N: ['组六']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    }
                ]
            },
            {
                cnName: '后二',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['十位', '个位']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '组选复式',
                        enName: '',
                        title: {
                            N: ['组选']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '和值',
                        title: {
                            N: ['和值']
                        },
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            }
        ]
    },
    {
        cnName: '北京PK10',
        enName: 'pk10',
        data: [
            {
                cnName: '前一',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['第一位']
                        },
                        se: ['01', '10'],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '前二',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['第一位', '第二位']
                        },
                        se: ['01', '10'],
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前二直选单式
                        enName: '',
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
                cnName: '前三',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['第一位', '第二位', '第三位']
                        },
                        se: ['01', '10'],
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//前三直选复式单式
                        enName: '',
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
                cnName: '定位胆',
                enName: '',
                data: [
                    {
                        cnName: '定位胆',
                        enName: '',
                        title: {
                            N: ['第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名']
                        },
                        se: ['01', '10'],
                        line: 10,
                        func(Nlist) {
                            let result = 0;
                            for (let N of Nlist) {
                                result += N.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, '1_1', false);
                        }
                    }
                ]
            },
            {
                cnName: '',//冠亚和
                enName: '',
                data: [
                    {
                        cnName: '和值',
                        enName: '',
                        se: [3, 19],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '龙虎',
                enName: '',
                data: [
                    {
                        cnName: '冠军',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '亚军',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '季军',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第四名',
                        enName: '',
                        title: { C: ['龙虎'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第五名',
                        enName: '',
                        title: {
                            C: ['龙虎']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '冠亚',
                        enName: '',
                        title: { C: ['龙虎'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '冠亚季',
                        enName: '',
                        title: { C: ['龙虎'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['龙', '虎'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '',//五行
                enName: '',
                data: [
                    {
                        cnName: '冠 军',
                        enName: '',
                        title: {
                            C: ['五行']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['金', '木', '水', '火', '土'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '亚 军',
                        enName: '',
                        title: {
                            C: ['五行']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['金', '木', '水', '火', '土'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '季 军',
                        enName: '',
                        title: {
                            C: ['五行']
                        },
                        se: [0, 0],
                        line: 0,
                        Clist: ['金', '木', '水', '火', '土'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '大小单双',
                enName: '',
                data: [
                    {
                        cnName: '冠军',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '亚军',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '季军',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第四名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第五名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第六名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第七名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第八名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第九名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '第十名',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '冠亚季',
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//大小单双
                        enName: '',
                        title: { C: ['选择'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Clist = Clist[0];
                            result = Clist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '冠亚季',
                enName: '',
                data: [
                    {
                        cnName: '冠亚季',
                        enName: '',
                        title: { C: ['冠亚季'] },
                        se: [1, 10],
                        line: 1,
                        func(Nlist, Clist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
        ]
    },
    {
        cnName: '11选5',
        enName: '11x5',
        data: [
            {
                cnName: '前三',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: { N: ['第一位', '第二位', '第三位'] },
                        se: ['01', '11'],
                        line: 3,
                        sl:'投注方案：01 02 03  开奖号码：01 02 03** （前三顺序一致），即中前三直选。',
                        zj:'从01-11中各选择3个不重复的号码组成一注，所选号码与当期5个开奖号码中的前3个号码相同，且顺序一致，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选复式',
                        enName: '',
                        title: { N: ['选号'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：01 02 03   开奖号码：03 01 02** （前三顺序不限），即中前三组选。',
                        zj:'从01-11中各选择3个不重复号码组成一注，所选号码与当期顺5个开奖号码中的前3个号码相同，且顺序不限，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120, 165]
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '',//组选单式
                        enName: '',
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
                cnName: '前二',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: { N: ['第一位', '第二位'] },
                        se: ['01', '11'],
                        line: 2,
                        sl:'投注方案：06 08 开奖号码：06 08*** ，即中前二直选。',
                        zj:'从01-11中选择2个不重复号码组成一注，所选号码与当期5个号码中的前2个号码相同，且顺序一致，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            let Arr_1 = Nlist[0];
                            let Arr_2 = Nlist[1];
                            for (let A1 of Arr_1) {
                                let t_Arr_2 = Arr_2.filter(x => x != A1);
                                result += t_Arr_2.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '',//直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选复式',
                        enName: '',
                        title: { N: ['选号'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：06 08  开奖号码：08 06*** （前二顺序不限），即中前二组选。',
                        zj:'从01-11个号码中选择2个或多个号码，所选号码与当期5个开奖号码中的前2个号码相同，顺序不限，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//组选单式
                        enName: '',
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
                cnName: '不定胆',
                enName: '',
                data: [
                    {
                        cnName: '前三不定胆',
                        enName: '',
                        title: { N: ['选号'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：08    开奖号码：*08*** 、 08**** （顺序不限），即中不定位。',
                        zj:'从11个号码中选择1个或多个号码，每注由1个号码组成，只要当期开奖号码中的第一位、第二位、第三位包含所选号码，顺序不限，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            result = Nlist.length;
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    }
                ]
            },
            {
                cnName: '定位胆',
                enName: '',
                data: [
                    {
                        cnName: '定位胆',
                        enName: '',
                        title: { N: ['第一位', '第二位', '第三位', '第四位', '第五位'] },
                        se: ['01', '11'],
                        line: 5,
                        sl:'投注方案：第一位 08  开奖号码：08**** 即中定位胆。',
                        zj:'从第一位至第五位中任意1个位置或多个位置上选择1个或1个以上号码，投注号码与相同位置上的开奖号码对位一致，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            for (let N of Nlist) {
                                result += N.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, '1_1', false);
                        }
                    }
                ]
            },
            {
                cnName: '任选复式',
                enName: '',
                data: [
                    {
                        cnName: '一中一',
                        enName: '',
                        title: { N: ['一中一'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：03  开奖号码：08 05 07 03 06 即中任选一中一。',
                        zj:'从11个号码中选择1个或多个号码，每注由1个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '二中二',
                        enName: '',
                        title: { N: ['二中二'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：06 08  开奖号码：06 05 07 08 01 即中任选二中二。',
                        zj:'从01-11中任意选择2个或2个以上号码，每注由2个号码组成，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '三中三',
                        enName: '',
                        title: { N: ['三中三'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：06 07 08   开奖号码：06 05 07 03 08 即中任选三中三。',
                        zj:'从11个号码中选择3个或3个以上号码，每注由3个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '四中四',
                        enName: '',
                        title: { N: ['四中四'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案： 05 06 07 08   开奖号码：08 05 07 06 01 即中任选四中四。',
                        zj:'从11个号码中选择4个或4个以上号码，每注由4个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 4, false);
                        }
                    },
                    {
                        cnName: '五中五',
                        enName: '',
                        title: { N: ['五中五'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：01 02 03 04 05 开奖号码：02 05 04 03 01 即中任选五中五。',
                        zj:'从11个号码中选择5个或5个以上号码，每注由5个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 5, false);
                        }
                    },
                    {
                        cnName: '六中五',
                        enName: '',
                        title: { N: ['六中五'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：01 02 03 04 05 06   开奖号码：02 05 04 03 01 即中任选六中五。',
                        zj:'从11个号码中选择6个或6个以上号码，每注由6个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 6, false);
                        }
                    },
                    {
                        cnName: '七中五',
                        enName: '',
                        title: { N: ['七中五'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：01 02 03 04 05 06 07  开奖号码：02 05 07 03 01 即中任选七中五。',
                        zj:'从11个号码中选择7个或7个以上号码，每注由7个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 7, false);
                        }
                    },
                    {
                        cnName: '八中五',
                        enName: '',
                        title: { N: ['八中五'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案：01 02 03 04 05 06 07 08开奖号码：02 05 07 03 01 即中任选八中五。',
                        zj:'从11个号码中选择8个或8个以上号码，每注由8个号码组成，只要当期的5个开奖号码中包含所选号码，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 8, false);
                        }
                    }
                ]
            },
            {
                cnName: '',//任选单式
                enName: '',
                data: [
                    {
                        cnName: '一中一',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '二中二',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '三中三',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '四中四',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '五中五',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '六中五',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '七中五',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '八中五',
                        enName: '',
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
                cnName: '前一',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: { N: ['第一位'] },
                        se: ['01', '11'],
                        line: 1,
                        sl:'投注方案:05  开奖号码：05**** ，即中前一直选。',
                        zj:'所选号码与开奖号码第一位号码相同，即为中奖。',
                        func(Nlist) {
                            let result = Nlist[0].length;
                            return result;
                        }
                    }
                ]
            },
            {
                cnName: '趣味',
                enName: '',
                data: [
                    {
                        cnName: '猜中位',
                        enName: '',
                        title: { N: ['猜中位'] },
                        se: ['03', '09'],
                        line: 1,
                        sl:'投注方案：08， 开奖号码:按大小顺序排列后为04 05 08 09 11，中间数08，即中趣味_猜中位',
                        zj:'从3-9中选择一个号码进行购买，所选开奖号码与5个开奖号码按照大小顺序排列后的第三个号码相同，即为中奖',
                        func(Nlist) {
                            let result = Nlist[0].length;
                            return result;
                        }
                    }
                ]
            },
        ]
    },
    {
        cnName: '低频彩',
        enName: 'dpc',
        data: [
            {
                cnName: '三码',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 3,
                        sl:'投注方案：789 开奖号码：789 即中直选复式。',
                        zj:'从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        title: { N: ['选号'] },
                        se: [0, 27],
                        line: 1,
                        sl:'投注方案：1  开奖号码：001 010 100 即中三码直选和值。',
                        zj:'所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '组三',
                        enName: '',
                        title: {
                            N: ['组三']
                        },
                        se: [0, 9],
                        line: 1,
                        sl:'投注方案：58 开奖号码：585 858等（顺序不限）即中组选三。',
                        zj:'从0-9中选择2个数字组成两注，所选号码与开奖号码的百、十、个位相同且有1个号码重复，顺序不限，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length * (Nlist.length - 1);
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '组六',
                        enName: '',
                        title: {
                            N: ['组六']
                        },
                        se: [0, 9],
                        line: 1,
                        sl:'投注方案：258  开奖号码：852或582（顺序不限），即中组选六',
                        zj:'从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百、十、个位相同，顺序不限，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length >= 3) {
                                let resultArr = [0, 0, 1, 4, 10,
                                    20, 35, 56, 84, 120];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 3, false);
                        }
                    },
                    {
                        cnName: '',//混合组选
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        },
                    }
                ]
            },
            {
                cnName: '后二',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['十位', '个位']
                        },
                        se: [0, 9],
                        line: 2,
                        sl:'投注方案：5 8 开奖号码：后二位5 8，即中后二复式。',
                        zj:'从十位、个位中至少各选1个号码组成一注，所选号码与开奖号码的后二位相同，且顺序一致，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//直选和值
                        enName: '',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '组选复式',
                        enName: '',
                        title: {
                            N: ['组选']
                        },
                        se: [0, 9],
                        line: 1,
                        sl:'投注方案：5 8  开奖号码：后二位5 8或8 5（顺序不限），即中后二组选。',
                        zj:'从0-9中选2个号码组成一注，所选号码的十位、个位与开奖号码相同，（不含对子）顺序不限，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = (Nlist.length * (Nlist.length - 1)) / 2;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//组选单式
                        enName: '',
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
                cnName: '前二',
                enName: '',
                data: [
                    {
                        cnName: '直选复式',
                        enName: '',
                        title: {
                            N: ['百位', '十位']
                        },
                        se: [0, 9],
                        line: 2,
                        sl:'投注方案：5 8 开奖号码：前二位5 8 即中前二复式。',
                        zj:'从百位、十位中选择一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a * b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, true);
                        }
                    },
                    {
                        cnName: '',//直选单式
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '',//直选和值
                        enName: '',
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
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '组选复式',
                        enName: '',
                        title: {
                            N: ['组选']
                        },
                        se: [0, 9],
                        line: 1,
                        sl:'投注方案：5 8  开奖号码：前二位5 8或8 5（顺序不限），即中前二组选',
                        zj:'从0-9中选2个号码组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = (Nlist.length * (Nlist.length - 1)) / 2;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    },
                    {
                        cnName: '',//组选单式
                        enName: '',
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
                cnName: '定位胆',
                enName: '',
                data: [
                    {
                        cnName: '定位胆',
                        enName: '',
                        title: {
                            N: ['百位', '十位', '个位']
                        },
                        se: [0, 9],
                        line: 3,
                        sl:'投注方案：（百）1  开奖号码：百位1，即中定位胆百位。',
                        zj:'从百位、十位、个位任意位置上至少选择1个号码组成一注，所选号码与相同位置',
                        func(Nlist) {
                            let result = 0;
                            result = Nlist.map(x => x.length).reduce((a, b) => a + b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, "1_1", false);
                        }
                    }
                ]
            },
            {
                cnName: '不定胆',
                enName: '',
                data: [
                    {
                        cnName: '一码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        sl:'投注方案：1  开奖号码：至少出现1个1，即中一码不定位。',
                        zj:'从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 0) {
                                result = Nlist.length;
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 1, false);
                        }
                    },
                    {
                        cnName: '二码',
                        enName: '',
                        title: {
                            N: ['不定胆']
                        },
                        se: [0, 9],
                        line: 1,
                        sl:'投注方案：1 2  开奖号码：至少出现1和2各1个，即中二码不定位。',
                        zj:'从0-9中任意选择2个或2个以上号码，每注由2个不同的号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。',
                        func(Nlist) {
                            let result = 0;
                            Nlist = Nlist[0];
                            if (Nlist.length > 1) {
                                let resultArr = [
                                    0, 1, 3, 6, 10,
                                    15, 21, 28, 36, 45
                                ];
                                result = resultArr[Nlist.length - 1];
                            }
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, 2, false);
                        }
                    }
                ]
            },
            {
                cnName: '大小单双',
                enName: '',
                data: [
                    {
                        cnName: '前二大小单双',
                        enName: '',
                        title: { C: ['百位', '十位'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 2,
                        sl:'投注方案：大单 开奖号码：百位（大）十位（单），即中后二大小单双。',
                        zj:'对百位和十位的形态进行购买（形态：大（56789）小（01234）单（13579）双（02468）），所选号码的位置、形态与开奖号码后二位的位置、形态相同，即为中奖。',
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a + b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, '1_1', false);
                        }
                    },
                    {
                        cnName: '后二大小单双',
                        enName: '',
                        title: { C: ['十位', '个位'] },
                        se: [0, 0],
                        line: 0,
                        Clist: ['大', '小', '单', '双'],
                        Cline: 2,
                        sl:'投注方案：大单 开奖号码：十位（大）个位（单），即中后二大小单双。',
                        zj:'对十位和个位的形态进行购买（形态：大（56789）小（01234）单（13579）双（02468）），所选号码的位置、形态与开奖号码后二位的位置、形态相同，即为中奖。',
                        func(Nlist, Clist) {
                            let result = 0;
                            result = Clist.map(x => x.length).reduce((a, b) => a + b);
                            return result;
                        },
                        func_fate() {
                            return sp_fate(this, '1_1', false);
                        }
                    }
                ]
            },
        ]
    },
    {
        cnName: '',//快3
        enName: '',
        data: [
            {
                cnName: '二不同号',
                enName: '',
                data: [
                    {
                        cnName: '标准选号',
                        enName: '',
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
                        cnName: '手动选号',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '胆拖选号',
                        enName: '',
                        se: [1, 6],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    }
                ]
            },
            {
                cnName: '二同号',
                enName: '',
                data: [
                    {
                        cnName: '标准选号',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '手动选号',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '二同号复选',
                        enName: '',
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
                cnName: '三不同号',
                enName: '',
                data: [
                    {
                        cnName: '标准选号',
                        enName: '',
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
                        cnName: '手动选号',
                        enName: '',
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
                cnName: '三同号',
                enName: '',
                data: [
                    {
                        cnName: '三同号单选',
                        enName: '',
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
                    },
                    {
                        cnName: '三同号通选',
                        enName: '',
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
            },
            {
                cnName: '三连号',
                enName: '',
                data: [
                    {
                        cnName: '三连号通选',
                        enName: '',
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
            },
            {
                cnName: '和值',
                enName: '',
                data: [
                    {
                        cnName: '和值',
                        enName: '',
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
                        cnName: '大小单双',
                        enName: '',
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
            },
        ]
    },
    {
        cnName: '',//三分彩
        enName: '',
        data: [
            {
                cnName: '五星',
                enName: '',
                data: [
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组合',
                        enName: '',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选120',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选60',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选30',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选20',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选10',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选5',
                        enName: '',
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
                cnName: '二星',
                enName: '',
                data: [
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选跨度',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '和值尾数',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        se: [0, 18],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选跨度',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '和值尾数',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
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
                cnName: '定位胆',
                enName: '',
                data: [
                    {
                        cnName: '定位胆',
                        enName: '',
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
                cnName: '不定位',
                enName: '',
                data: [
                    {
                        cnName: '后三一码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '中三一码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '前三一码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '后三二码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '中三二码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '前三二码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '前四一码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '后四一码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '前四二码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '后四二码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '前四三码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '后四三码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '五星一码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '五星二码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '五星三码',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '五星四码',
                        enName: '',
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
                cnName: '任选',
                enName: '',
                data: [
                    {
                        cnName: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组三',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组六',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '混合组选',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        se: [0, 9],
                        line: 5,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
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
                cnName: '趣味',
                enName: '',
                data: [
                    {
                        cnName: '一帆风顺',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '好事成双',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '三星报喜',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '四季发财',
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
                cnName: '龙虎',
                enName: '',
                data: [
                    {
                        cnName: '万千',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '万百',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '万十',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '万个',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '千百',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '千十',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '千个',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '百十',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '百个',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '十个',
                        enName: '',
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
                cnName: '大小单双',
                enName: '',
                data: [
                    {
                        cnName: '总和',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '万位',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '千位',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '百位',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '十位',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '个位',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '串关',
                        enName: '',
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
                cnName: '特殊号',
                enName: '',
                data: [
                    {
                        cnName: '前三',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '中三',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '后三',
                        enName: '',
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
                cnName: '斗牛',
                enName: '',
                data: [
                    {
                        cnName: '斗牛',
                        enName: '',
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
                cnName: '四星',
                enName: '',
                data: [
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组合',
                        enName: '',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选24',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选12',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选6',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选4',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组合',
                        enName: '',
                        se: [0, 9],
                        line: 4,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选24',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选12',
                        enName: '',
                        se: [0, 9],
                        line: 2,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选6',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组选4',
                        enName: '',
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
                cnName: '三星',
                enName: '',
                data: [
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选跨度',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '和值尾数',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组三',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组六',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '混合组选',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选跨度',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '和值尾数',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组三',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组六',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '混合组选',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '复式',
                        enName: '',
                        se: [0, 9],
                        line: 3,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '单式',
                        enName: '',
                        se: [0, 0],
                        line: 0,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选和值',
                        enName: '',
                        se: [0, 27],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '直选跨度',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '和值尾数',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组三',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '组六',
                        enName: '',
                        se: [0, 9],
                        line: 1,
                        func(Nlist) {
                            let result = 0;
                            return result;
                        }
                    },
                    {
                        cnName: '混合组选',
                        enName: '',
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
];

function sp_baseData(type, _e) {
    if (type == 'hide') {
        for (let i = _e.length - 1; i >= 0; i--) {
            if (_e[i].cnName == '') { _e.splice(i, 1); }
            else
                if (_e[i].hasOwnProperty('data')) { sp_baseData('hide', _e[i].data); }
        }
    }
}

sp_baseData('hide', baseData);

function fateObj() {
    //index
    return {
        sd_Numlist: [],
        sd_WZlist: [],
        sd_Clist: []
    }
}
//Math.floor(Math.random() * (max - min + 1) + min);
function MRD(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function sp_fate(_this, _rule, rp) {
    let result = new fateObj();
    if (_this.line > 0) {
        if (typeof (_rule) === "string") {
            let rule = _rule.split('_');
            let lineArr = new Array(_this.line).fill(0).map((v, i) => i);
            let t_lineArr = [];
            let min = 0;
            while (t_lineArr.length < rule[0]) {
                let max = lineArr.length - 1;
                t_lineArr.push(lineArr.splice(MRD(max, min), 1)[0]);
            }

            let Arr = new Array(_this.se[1] - _this.se[0] + 1).fill(0).map((v, i) => i);
            for (let a = 0; a < _this.line; a++) {
                if (rp) {//重複=>刷新
                    Arr = new Array(_this.se[1] - _this.se[0] + 1).fill(0).map((v, i) => i);
                }
                let sd_N = [];
                if (t_lineArr.indexOf(a) > -1) {
                    for (let b = 0; b < rule[1]; b++) {
                        let max = Arr.length - 1;
                        sd_N.push(Arr.splice(MRD(max, min), 1)[0]);
                    }
                }
                result.sd_Numlist.push(sd_N);
            }
        }
        else {
            let rule = Array.isArray(_rule) ? _rule : new Array(_this.line).fill(_rule);
            let min = 0;
            let Arr = new Array(_this.se[1] - _this.se[0] + 1).fill(0).map((v, i) => i);
            for (let a = 0; a < _this.line; a++) {
                if (rp) {//重複=>刷新
                    Arr = new Array(_this.se[1] - _this.se[0] + 1).fill(0).map((v, i) => i);
                }
                let sd_item = [];
                for (let b = 0; b < rule[a]; b++) {
                    let max = Arr.length - 1;
                    sd_item.push(Arr.splice(MRD(max, min), 1)[0]);
                }
                result.sd_Numlist.push(sd_item);
            }
        }
    }
    if (_this.hasOwnProperty('WZlist')) {
        if (_this.WZlist.length > 0) {
            if (Number.isInteger(_rule)) {
                let min = 0;
                let rule = _rule;
                let Arr = new Array(_this.WZlist.length).fill(0).map((v, i) => i);
                for (let a = 0; a < rule; a++) {
                    let max = Arr.length - 1;
                    result.sd_WZlist.push(Arr.splice(MRD(max, min), 1)[0]);
                }
            }
        }
    }
    if (_this.hasOwnProperty('Cline')) {
        if (_this.Cline > 0) {
            if (typeof (_rule) === "string") {
                let rule = _rule.split('_');
                let lineArr = new Array(_this.Cline).fill(0).map((v, i) => i);
                let t_lineArr = [];
                let min = 0;
                while (t_lineArr.length < rule[0]) {
                    let max = lineArr.length - 1;
                    t_lineArr.push(lineArr.splice(MRD(max, min), 1)[0]);
                }

                let Arr = new Array(_this.Clist.length).fill(0).map((v, i) => i);
                for (let a = 0; a < _this.Cline; a++) {
                    if (rp) {//重複=>刷新
                        Arr = new Array(_this.Clist.length).fill(0).map((v, i) => i);
                    }
                    let sd_item = [];
                    if (t_lineArr.indexOf(a) > -1) {
                        for (let b = 0; b < rule[1]; b++) {
                            let max = Arr.length - 1;
                            sd_item.push(Arr.splice(MRD(max, min), 1)[0]);
                        }
                    }
                    result.sd_Clist.push(sd_item);
                }
            }
            else {
                let rule = Array.isArray(_rule) ? _rule : new Array(_this.Cline).fill(_rule);
                let min = 0;
                let Arr = new Array(_this.Clist.length).fill(0).map((v, i) => i);
                for (let a = 0; a < _this.Cline; a++) {
                    if (rp) {//重複=>刷新
                        Arr = new Array(_this.Clist.length).fill(0).map((v, i) => i);
                    }
                    let sd_item = [];
                    for (let b = 0; b < rule[a]; b++) {
                        let max = Arr.length - 1;
                        sd_item.push(Arr.splice(MRD(max, min), 1)[0]);
                    }
                    result.sd_Clist.push(sd_item);
                }
            }
        }
    }
    return result;
}