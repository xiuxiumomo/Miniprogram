// components/p_time/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    

    /**
     * 组件的初始数据
     */
    data: {
        multiArray: [],
        multiIndex: [0, 0, 0, 0],
        showDate: '',//展示的时间
    },
    attached(){
        this.initData();
    },

    /**
     * 组件的方法列表
     */
    methods: {
        subLast(str){
            let _str = str.substr(0,str.length-1);
            return _str;
        },
        changeFn(e) {
            let that = this;
            let item = e.detail;
            this.setData({
                multiIndex: item.value
            })
            this.initShowDay();
            let multiArray = this.data.multiArray;
            let multiIndex = this.data.multiIndex;
            let str = that.subLast(multiArray[0][multiIndex[0]]) + '-' + that.subLast(multiArray[1][multiIndex[1]]) + '-' + that.subLast(multiArray[2][multiIndex[2]]) + '-' + that.subLast(multiArray[3][multiIndex[3]]);
            this.triggerEvent('sureFn', { time: str})

        },
        cloumChnageFn(e) {
            let that = this;
            let item = e.detail;
            let value = item.value;
            let is_year = this.is_year();
            if (item.column == 0) {
                //2月特殊月value==1  闰月29
                if (value == 1 && is_year) {
                    let day = that.setDay(29);
                    that.setData({
                        ['multiArray[1]']: day
                    })
                } else {
                    let day = that.setDay(28);
                    that.setData({
                        ['multiArray[1]']: day
                    })
                }
                //每月只有30天  4 6 9 11
                if (value == 3 || value == 5 || value == 8 || value == 10) {
                    let day = that.setDay(30);
                    that.setData({
                        ['multiArray[1]']: day
                    })
                }else{
                    let day = that.setDay(31);
                    that.setData({
                        ['multiArray[1]']: day
                    })
                }
            }

        },

        initData() {
            let that = this;
            let Month = ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'];
            let day = [];
            for (let i = 1; i <= 31; i++) {
                let item_1 = that.filterNum(i) + '日';
                day.push(item_1);
            }
            let hour = [];
            for (let i = 0; i < 23; i++) {
                let item_2 = that.filterNum(i) + '时';
                hour.push(item_2);
            }
            let min = [];
            for (let i = 0; i < 59; i++) {
                let item_3 = that.filterNum(i) + '分';
                min.push(item_3)
            }
            let date = new Date();
            let _month = that.filterNum(date.getMonth() + 1) + '月';
            let _mIndex = Month.indexOf(_month);
            let _day = date.getDate() + '日';
            let _dIndex = day.indexOf(_day);

            this.setData({
                ['multiArray[0]']: Month,
                ['multiArray[1]']: day,
                ['multiArray[2]']: hour,
                ['multiArray[3]']: min,
                ['multiIndex[0]']: _mIndex,
                ['multiIndex[1]']: _dIndex,

            })
            that.initShowDay();

        },
        //补0
        filterNum(num) {
            return num < 10 ? ('0' + num) : num;
        },
        //是否是闰年
        is_year() {
            let year = new Date().getFullYear();
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        },
        //设置日
        setDay(day) {
            let that = this;
            let arr = [];
            for (let i = 1; i <= day; i++) {
                let item_1 = that.filterNum(i) + '日';
                arr.push(item_1);
            }
            return arr;
        },
        initShowDay() {
            let multiArray = this.data.multiArray;
            let multiIndex = this.data.multiIndex;
            let str = multiArray[0][multiIndex[0]] + multiArray[1][multiIndex[1]] + "  " + multiArray[2][multiIndex[2]] + ":" + multiArray[3][multiIndex[3]];
            this.setData({
                showDate: str
            })
        },
    }
})
