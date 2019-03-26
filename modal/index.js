// components/modal/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        height: {
            type: String,
            value: '0%'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        closeFn(){
            this.setData({
                show: false
            })
        },
        catchClose(){
            return;
        }
    }
})
