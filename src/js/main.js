import baseData from './base.js';

function DeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

var app = new Vue({
    el: '#app',
    data: {
        baseData: baseData,
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
        totalBet: 0,
        select: {
            cz: '',
            type: '',
            subtype: [0, 0]
        }
    },
    computed: {
        subDetail() {
            if (this.ready) {
                return this.baseData[this.select.cz][this.select.type][this.select.subtype[0]].sublist[this.select.subtype[1]];
            }
            else {
                return {};
            }
        },
        ready() {
            return (this.select.cz != '' && this.select.type != '');
        }
    },
    created() {
        this.init();
    },
    mounted() {
    },
    methods: {
        init() {
            for (let i in this.baseData) {
                this.czlist.push(i);
            }
            this.selectMode('cz', this.czlist[0]);
        },
        selectMode(atb, val) {
            if (atb == 'cz') {
                this.select.cz = val;
                this.typelist = [];
                for (let i in this.baseData[this.select.cz]) {
                    this.typelist.push(i);
                }
                this.selectMode('type', this.typelist[0]);
            }
            else if (atb == 'type') {
                this.select.type = val;
                this.selectMode('subtype', [0, 0]);
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
            if (this.subDetail.line > 0) {
                for (let a = 0; a < this.subDetail.line; a++) {
                    let list = [];
                    for (let b = this.subDetail.se[0]; b <= this.subDetail.se[1]; b++) {
                        list.push(b);
                    }
                    this.Numlist.push(list);
                    this.sd_Numlist.push([]);
                }
            }
            //位置
            this.WZlist = [];
            this.sd_WZlist = [];
            if (typeof (this.subDetail.WZlist) != 'undefined') {
                this.WZlist = DeepClone(this.subDetail.WZlist);
            }
            //中文
            this.Clist = [];
            this.sd_Clist = [];
            if (typeof (this.subDetail.Clist) != 'undefined') {
                for (let a = 0; a < this.subDetail.Cline; a++) {
                    this.Clist.push(DeepClone(this.subDetail.Clist));
                    this.sd_Clist.push([]);
                }
            }
        },
        selectNum(num, idx, update) {
            if (this.sd_Numlist[idx].indexOf(num) > -1) {
                this.sd_Numlist[idx].splice(this.sd_Numlist[idx].indexOf(num), 1);
            }
            else {
                this.sd_Numlist[idx].push(num);
            }
            this.sd_Numlist[idx].sort((a, b) => a - b);

            if (update) {
                if (typeof (this.subDetail.WZlist) != 'undefined') {
                    this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_WZlist);
                }
                else {
                    this.totalBet = this.subDetail.func(this.sd_Numlist);
                }
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
            this.totalBet = this.subDetail.func(this.sd_Numlist, this.sd_Clist);
        },
        sp_Numlist(type, idx) {
            let SE = this.subDetail.se;
            if (type == 'all') {
                for (let a = SE[0]; a <= SE[1]; a++) {
                    if (this.sd_Numlist[idx].indexOf(a) == -1) {
                        this.selectNum(a, idx, true);
                    }
                }
            }
            else if (type == 'clear') {
                for (let a = SE[0]; a <= SE[1]; a++) {
                    if (this.sd_Numlist[idx].indexOf(a) > -1) {
                        this.selectNum(a, idx, a == SE[1]);
                    }
                }
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
    }
})