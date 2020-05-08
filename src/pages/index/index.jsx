import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.scss'
import {storageSetFn,storageGetFn} from '@/utils/index'
export default class Index extends Component {
  state = {
    listData: []
  }

  componentWillMount () {
    this.setDataFn()
   }

  componentDidShow () { }
  async getData() {
    this.setState({
      listData: [1,2,3]
    })
  }
  setDataFn=()=>{
    storageSetFn({key: 'jack',value: {name: 'pack'}})
  }


  goRouter=()=> {
    Taro.navigateTo({
      url: '/pages/test1/index'
    })
  }
  getStorageData=()=>{
    console.log( storageGetFn('back')==='')
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.getStorageData}>Hello world，你好啊!</Text>
        <Button onClick={this.goRouter}>点击</Button>
      </View>
    )
  }
}
