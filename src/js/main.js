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
        subDetail() {
            if (this.ready) {
                return this.baseData[this.select.cz].data[this.select.type].data[this.select.subtype];
            }
            else {
                return {};
            }
        },
        ready() {
            return (this.czlist.length > 0 && this.typelist.length > 0);
        },
        selectIndexs() {
            return [this.select.cz, this.select.type, this.select.subtype];
        },
        selectNames() {
            return [
                this.baseData[this.select.cz].cnName,
                this.baseData[this.select.cz].data[this.select.type].cnName,
                this.baseData[this.select.cz].data[this.select.type].data[this.select.subtype].cnName];
        }
    },
    created() {
        this.init();
    },
    mounted() {
    },
    methods: {
        init() {
            for (let i of this.baseData) {
                this.czlist.push(i.cnName);
            }
            this.selectMode('cz', 0);
        },
        selectMode(atb, val) {
            if (atb == 'cz') {
                if (typeof (val) == 'string') val = this.baseData.findIndex(x => new RegExp(`${x.enName}$`).test(val));
                this.select.cz = val;
                this.typelist = [];
                for (let i of this.baseData[this.select.cz].data) {
                    if (i.cnName != '') this.typelist.push(i.cnName);
                }
                this.selectMode('type', 0);
            }
            else if (atb == 'type') {
                this.select.type = val;
                this.selectMode('subtype', 0);
            }
            else if (atb == 'subtype') {
                this.select.subtype = val;
                this.buildList();
            }
        },
        buildList() {
            //數字
            this.Numlist = [];
            this.sd_Numlist = [];
            this.totalBet = 0;
            let se = this.subDetail.se;
            if (this.subDetail.line > 0) {
                for (let a = 0; a < this.subDetail.line; a++) {
                    let list = [];
                    if (typeof (se[0]) == 'number' && typeof (se[1]) == 'number') {
                        for (let b = se[0]; b <= se[1]; b++) {
                            list.push(b);
                        }
                    }
                    else if (typeof (se[0]) == 'string' && typeof (se[1]) == 'string') {
                        for (let b = parseInt(se[0]); b <= parseInt(se[1]); b++) {
                            list.push(`${b.toString().length == 1 ? '0' : ''}${b.toString()}`);
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
                for (let a = 0; a < this.subDetail.Cline; a++) {
                    this.Clist.push(DeepClone(this.subDetail.Clist));
                    this.sd_Clist.push([]);
                }
            }
        },
        //select
        selectNum(num, idx, update) {
            if (this.sd_Numlist[idx].indexOf(num) > -1) {
                this.sd_Numlist[idx].splice(this.sd_Numlist[idx].indexOf(num), 1);
            }
            else {
                this.sd_Numlist[idx].push(num);
            }
            this.sd_Numlist[idx].sort((a, b) => a - b);

            if (update) {
                this.sp_totalBet();
            }
        },
        selectWZ(wz) {
            if (this.sd_WZlist.indexOf(wz) > -1) {
                this.sd_WZlist.splice(this.sd_WZlist.indexOf(wz), 1);
            }
            else {
                this.sd_WZlist.push(wz);
            }
            this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_WZlist);
        },
        selectC(c, idx) {
            if (this.sd_Clist[idx].indexOf(c) > -1) {
                this.sd_Clist[idx].splice(this.sd_Clist[idx].indexOf(c), 1);
            }
            else {
                this.sd_Clist[idx].push(c);
            }
            this.sp_totalBet();
        },
        //sp
        sp_totalBet() {
            if (this.subDetail.hasOwnProperty('WZlist')) {
                this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_WZlist);
            }
            else if (this.subDetail.hasOwnProperty('Clist')) {
                this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_Clist);
            }
            else {
                this.totalBet = this.subDetail.func(this.sd_Numlist);
            }
        },
        sp_Numlist(type, idx) {
            let SE = this.subDetail.se;
            if (idx > -1) {
                if (type == 'all') {
                    for (let a = SE[0]; a <= SE[1]; a++) {
                        if (this.sd_Numlist[idx].indexOf(a) == -1) {
                            this.sd_Numlist[idx].push(a);
                        }
                    }
                    this.sd_Numlist[idx].sort((a, b) => a - b);
                    this.sp_totalBet();
                }
                else if (type == 'clear') {
                    this.sd_Numlist[idx].splice(0, this.sd_Numlist[idx].length);
                    this.sp_totalBet();
                }
                else if (type == 'da' || type == 'sio' || type == 'den' || type == 'dab') {
                    this.sp_Numlist('clear', idx);
                    let mmd = Math.ceil((SE[1] + SE[0]) / 2);
                    let result = {
                        'da': this.Numlist[idx].filter(x => x >= mmd),
                        'sio': this.Numlist[idx].filter(x => x < mmd),
                        'den': this.Numlist[idx].filter(x => x % 2 == 1),
                        'dab': this.Numlist[idx].filter(x => x % 2 == 0)
                    }
                    for (let a = SE[0]; a <= SE[1]; a++) {
                        if (result[type].indexOf(a) > -1) {
                            this.selectNum(a, idx, a == result[type][result[type].length - 1]);
                        }
                    }
                }
            }
            else {
                for (let a = 0; a < this.subDetail.line; a++) {
                    this.sp_Numlist(type, a);
                }
            }
        },
        sp_WZlist(type, idx) {
            if (type == 'clear') {
                this.sd_WZlist.splice(0, this.sd_WZlist.length);
                this.sp_totalBet();
            }
        },
        sp_Clist(type, idx) {
            if (idx > -1) {
                if (type == 'clear') {
                    this.sd_Clist[idx].splice(0, this.sd_Clist[idx].length);
                    this.sp_totalBet();
                }
            }
            else {
                for (let a = 0; a < this.subDetail.Cline; a++) {
                    this.sp_Clist(type, a);
                }
            }
        },
        sp_Betlist(type, idx, auto) {
            if (type == 'add') {
                if (this.totalBet > 0) {
                    let r_data = [];
                    [this.sd_WZlist, this.sd_Clist, this.sd_Numlist.map(x => x.length > 0 ? x : '_')].forEach((item) => {
                        if (item.length > 0) {
                            item.forEach((item2) => {
                                r_data.push(item2.toString());
                            })
                        }
                    })
                    this.sd_Betlist.push({
                        name: [this.baseData[this.select.cz].cnName, this.subDetail.cnName].join('_'),
                        data: r_data.join('|'),
                        zhu: this.totalBet
                    });
                    this.sp_Numlist('clear', -1);
                    this.sp_Clist('clear', -1);
                    this.sp_WZlist('clear');
                }
                else {
                    alert('下注');
                }
            }
            else if (type == 'clear') {
                if (idx > -1) {
                    this.sd_Betlist.splice(idx, 1);
                }
                else {
                    this.sd_Betlist.splice(0, this.sd_Betlist.length);
                }
            }
            else if (type == 'fate') {
                let times = idx;
                if (times == 1) {
                    let data = this.subDetail.func_fate();
                    if (data.sd_Numlist.length > 0) {
                        this.sp_Numlist('clear', -1);
                        for (let a in data.sd_Numlist) {
                            let N = data.sd_Numlist[a];
                            if (N.length > 0) {
                                for (let b in N) {
                                    this.selectNum(this.Numlist[a][N[b]], a, true);
                                }
                            }
                        }
                    }
                    if (data.sd_WZlist.length > 0) {
                        this.sp_WZlist('clear');
                        for (let a in data.sd_WZlist) {
                            this.selectWZ(this.WZlist[data.sd_WZlist[a]], a, a == data.sd_WZlist.length - 1);
                        }
                    }
                    if (data.sd_Clist.length > 0) {
                        this.sp_Clist('clear', -1);
                        for (let a in data.sd_Clist) {
                            let C = data.sd_Clist[a];
                            if (C.length > 0) {
                                for (let b in C) {
                                    this.selectC(this.Clist[a][C[b]], a, a == data.sd_Clist.length - 1);
                                }
                            }
                        }
                    }
                    if (auto)
                        this.sp_Betlist('add');
                }
                else {
                    for (let i = 0; i < times; i++) {
                        let data = this.subDetail.func_fate();
                        for (let _sd in data) {
                            if (data[_sd].length > 0) {
                                if (Array.isArray(data[_sd][0])) data[_sd] = data[_sd].map(a => a.map(b => this[_sd.replace('sd_', '')][0][b]));
                                else data[_sd] = data[_sd].map(a => this[_sd.replace('sd_', '')][a]);
                            }
                        }

                        let r_data = [];
                        [data.sd_WZlist, data.sd_Clist, data.sd_Numlist.map(x => x.length > 0 ? x : '_')].forEach((item) => {
                            if (item.length > 0) item.forEach((item2) => { r_data.push(item2.toString()); })
                        })
                        let r_totalBet = 0;
                        if (this.subDetail.hasOwnProperty('WZlist')) r_totalBet = this.subDetail.func(data.sd_Numlist, data.sd_WZlist);
                        else if (this.subDetail.hasOwnProperty('Clist')) r_totalBet = this.subDetail.func(data.sd_Numlist, data.sd_Clist);
                        else r_totalBet = this.subDetail.func(data.sd_Numlist);

                        this.sd_Betlist.push({
                            name: [this.baseData[this.select.cz].cnName, this.subDetail.cnName].join('_'),
                            data: r_data.join('|'),
                            zhu: r_totalBet
                        });
                    }
                }
            }
        }
    }
})