'use strict';

function DeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

var app = new Vue({
    el: '#app',
    data: {
        baseData: baseData,
        totalBet: 0,
        select: {
            cz: 0,
            type: 0,
            subtype: 0
        },
        //for html
        czlist: [],
        typelist: [],
        Numlist: [],
        WZlist: [],
        Clist: [],
        //for selected
        sd_Numlist: [],
        sd_WZlist: [],
        sd_Clist: [],
        sd_Betlist: [],
        //
        addBetlist: false
    },
    computed: {
        subDetail: function subDetail() {
            if (this.ready) {
                return this.baseData[this.select.cz].data[this.select.type].data[this.select.subtype];
            } else {
                return {};
            }
        },
        ready: function ready() {
            return this.czlist.length > 0 && this.typelist.length > 0;
        },
        selectIndexs: function selectIndexs() {
            return [this.select.cz, this.select.type, this.select.subtype];
        },
        selectNames: function selectNames() {
            return [this.baseData[this.select.cz].cnName, this.baseData[this.select.cz].data[this.select.type].cnName, this.baseData[this.select.cz].data[this.select.type].data[this.select.subtype].cnName];
        }
    },
    created: function created() {
        this.init();
    },
    mounted: function mounted() {},
    methods: {
        init: function init() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.baseData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    this.czlist.push(i.cnName);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.selectMode('cz', 0);
        },
        selectMode: function selectMode(atb, val) {
            if (atb == 'cz') {
                if (typeof val == 'string') val = this.baseData.findIndex(function (x) {
                    return new RegExp(x.enName + '$').test(val);
                });
                this.select.cz = val;
                this.typelist = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.baseData[this.select.cz].data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var i = _step2.value;

                        if (i.cnName != '') this.typelist.push(i.cnName);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                            _iterator2['return']();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                this.selectMode('type', 0);
            } else if (atb == 'type') {
                this.select.type = val;
                this.selectMode('subtype', 0);
            } else if (atb == 'subtype') {
                this.select.subtype = val;
                this.buildList();
            }
        },
        buildList: function buildList() {
            //數字
            this.Numlist = [];
            this.sd_Numlist = [];
            this.totalBet = 0;
            var se = this.subDetail.se;
            if (this.subDetail.line > 0) {
                for (var a = 0; a < this.subDetail.line; a++) {
                    var list = [];
                    if (typeof se[0] == 'number' && typeof se[1] == 'number') {
                        for (var b = se[0]; b <= se[1]; b++) {
                            list.push(b);
                        }
                    } else if (typeof se[0] == 'string' && typeof se[1] == 'string') {
                        for (var b = parseInt(se[0]); b <= parseInt(se[1]); b++) {
                            list.push('' + (b.toString().length == 1 ? '0' : '') + b.toString());
                        }
                    }

                    this.Numlist.push(list);
                    this.sd_Numlist.push([]);
                }
            }
            //位置
            this.WZlist = [];
            this.sd_WZlist = [];
            if (this.subDetail.hasOwnProperty('WZlist')) {
                this.WZlist = DeepClone(this.subDetail.WZlist);
            }
            //中文
            this.Clist = [];
            this.sd_Clist = [];
            if (this.subDetail.hasOwnProperty('Clist')) {
                for (var a = 0; a < this.subDetail.Cline; a++) {
                    this.Clist.push(DeepClone(this.subDetail.Clist));
                    this.sd_Clist.push([]);
                }
            }
        },
        //select
        selectNum: function selectNum(num, idx, update) {
            if (this.sd_Numlist[idx].indexOf(num) > -1) {
                this.sd_Numlist[idx].splice(this.sd_Numlist[idx].indexOf(num), 1);
            } else {
                this.sd_Numlist[idx].push(num);
            }
            this.sd_Numlist[idx].sort(function (a, b) {
                return a - b;
            });

            if (update) {
                this.sp_totalBet();
            }
        },
        selectWZ: function selectWZ(wz) {
            if (this.sd_WZlist.indexOf(wz) > -1) {
                this.sd_WZlist.splice(this.sd_WZlist.indexOf(wz), 1);
            } else {
                this.sd_WZlist.push(wz);
            }
            this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_WZlist);
        },
        selectC: function selectC(c, idx) {
            if (this.sd_Clist[idx].indexOf(c) > -1) {
                this.sd_Clist[idx].splice(this.sd_Clist[idx].indexOf(c), 1);
            } else {
                this.sd_Clist[idx].push(c);
            }
            this.sp_totalBet();
        },
        //sp
        sp_totalBet: function sp_totalBet() {
            if (this.subDetail.hasOwnProperty('WZlist')) {
                this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_WZlist);
            } else if (this.subDetail.hasOwnProperty('Clist')) {
                this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_Clist);
            } else {
                this.totalBet = this.subDetail.func(this.sd_Numlist);
            }
        },
        sp_Numlist: function sp_Numlist(type, idx) {
            var _this = this;

            if (idx > -1) {
                if (type == 'all') {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = this.Numlist[idx][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var a = _step3.value;

                            if (this.sd_Numlist[idx].indexOf(a) == -1) {
                                this.sd_Numlist[idx].push(a);
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                                _iterator3['return']();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    this.sd_Numlist[idx].sort(function (a, b) {
                        return a - b;
                    });
                    this.sp_totalBet();
                } else if (type == 'clear') {
                    this.sd_Numlist[idx].splice(0, this.sd_Numlist[idx].length);
                    this.sp_totalBet();
                } else if (['da', 'sio', 'den', 'dab'].includes(type)) {
                    var _iteratorNormalCompletion4;

                    var _didIteratorError4;

                    var _iteratorError4;

                    var _iterator4, _step4;

                    (function () {
                        _this.sp_Numlist('clear', idx);
                        var mmd = Math.ceil(_this.Numlist[idx].length / 2) - 1;
                        var result = type == 'da' && _this.Numlist[idx].filter(function (x, i) {
                            return i > mmd;
                        }) || type == 'sio' && _this.Numlist[idx].filter(function (x, i) {
                            return i <= mmd;
                        }) || type == 'den' && _this.Numlist[idx].filter(function (x) {
                            return x * 1 % 2 == 1;
                        }) || type == 'dab' && _this.Numlist[idx].filter(function (x) {
                            return x * 1 % 2 == 0;
                        });
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;

                        try {
                            for (_iterator4 = _this.Numlist[idx][Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var a = _step4.value;

                                if (result.indexOf(a) > -1) {
                                    _this.selectNum(a, idx, a == result[result.length - 1]);
                                }
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                                    _iterator4['return']();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    })();
                }
            } else {
                for (var a = 0; a < this.subDetail.line; a++) {
                    this.sp_Numlist(type, a);
                }
            }
        },
        sp_WZlist: function sp_WZlist(type, idx) {
            if (type == 'clear') {
                this.sd_WZlist.splice(0, this.sd_WZlist.length);
                this.sp_totalBet();
            }
        },
        sp_Clist: function sp_Clist(type, idx) {
            if (idx > -1) {
                if (type == 'clear') {
                    this.sd_Clist[idx].splice(0, this.sd_Clist[idx].length);
                    this.sp_totalBet();
                }
            } else {
                for (var a = 0; a < this.subDetail.Cline; a++) {
                    this.sp_Clist(type, a);
                }
            }
        },
        sp_Betlist: function sp_Betlist(type, idx, auto) {
            var _this2 = this;

            if (type == 'add') {
                if (this.totalBet > 0) {
                    (function () {
                        var r_data = [];
                        [_this2.sd_WZlist, _this2.sd_Clist, _this2.sd_Numlist.map(function (x) {
                            return x.length > 0 ? x : '_';
                        })].forEach(function (item) {
                            if (item.length > 0) {
                                item.forEach(function (item2) {
                                    r_data.push(item2.toString());
                                });
                            }
                        });
                        _this2.sd_Betlist.push({
                            name: [_this2.baseData[_this2.select.cz].cnName, _this2.subDetail.cnName].join('_'),
                            data: r_data.join('|'),
                            zhu: _this2.totalBet
                        });
                        _this2.sp_Numlist('clear', -1);
                        _this2.sp_Clist('clear', -1);
                        _this2.sp_WZlist('clear');
                    })();
                } else {
                    alert('下注');
                }
            } else if (type == 'clear') {
                if (idx > -1) {
                    this.sd_Betlist.splice(idx, 1);
                } else {
                    this.sd_Betlist.splice(0, this.sd_Betlist.length);
                }
            } else if (type == 'fate') {
                var times = idx;
                if (times == 1) {
                    var data = this.subDetail.func_fate();
                    if (data.sd_Numlist.length > 0) {
                        this.sp_Numlist('clear', -1);
                        for (var a in data.sd_Numlist) {
                            var N = data.sd_Numlist[a];
                            if (N.length > 0) {
                                for (var b in N) {
                                    this.selectNum(this.Numlist[a][N[b]], a, true);
                                }
                            }
                        }
                    }
                    if (data.sd_WZlist.length > 0) {
                        this.sp_WZlist('clear');
                        for (var a in data.sd_WZlist) {
                            this.selectWZ(this.WZlist[data.sd_WZlist[a]], a, a == data.sd_WZlist.length - 1);
                        }
                    }
                    if (data.sd_Clist.length > 0) {
                        this.sp_Clist('clear', -1);
                        for (var a in data.sd_Clist) {
                            var C = data.sd_Clist[a];
                            if (C.length > 0) {
                                for (var b in C) {
                                    this.selectC(this.Clist[a][C[b]], a, a == data.sd_Clist.length - 1);
                                }
                            }
                        }
                    }
                    if (auto) this.sp_Betlist('add');
                } else {
                    var _loop = function (i) {
                        var data = _this2.subDetail.func_fate();

                        var _loop2 = function (_sd) {
                            if (data[_sd].length > 0) {
                                if (Array.isArray(data[_sd][0])) data[_sd] = data[_sd].map(function (a) {
                                    return a.map(function (b) {
                                        return _this2[_sd.replace('sd_', '')][0][b];
                                    });
                                });else data[_sd] = data[_sd].map(function (a) {
                                    return _this2[_sd.replace('sd_', '')][a];
                                });
                            }
                        };

                        for (var _sd in data) {
                            _loop2(_sd);
                        }

                        var r_data = [];
                        [data.sd_WZlist, data.sd_Clist, data.sd_Numlist.map(function (x) {
                            return x.length > 0 ? x : '_';
                        })].forEach(function (item) {
                            if (item.length > 0) item.forEach(function (item2) {
                                r_data.push(item2.toString());
                            });
                        });
                        var r_totalBet = 0;
                        if (_this2.subDetail.hasOwnProperty('WZlist')) r_totalBet = _this2.subDetail.func(data.sd_Numlist, data.sd_WZlist);else if (_this2.subDetail.hasOwnProperty('Clist')) r_totalBet = _this2.subDetail.func(data.sd_Numlist, data.sd_Clist);else r_totalBet = _this2.subDetail.func(data.sd_Numlist);

                        _this2.sd_Betlist.push({
                            name: [_this2.baseData[_this2.select.cz].cnName, _this2.subDetail.cnName].join('_'),
                            data: r_data.join('|'),
                            zhu: r_totalBet
                        });
                    };

                    for (var i = 0; i < times; i++) {
                        _loop(i);
                    }
                }
            }
        }
    }
});

