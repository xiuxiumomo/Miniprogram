import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Template extends Component {
  // onload阶段
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }
  //onShow 阶段
  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '测试页面1'
  }

  render () {
    return (
      <View className='index'>
         测试页面
      </View>
    )
  }
}
