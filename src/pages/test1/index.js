import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Test1 extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '测试页面1'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world，你好啊!222</Text>
        <AtButton type="primary">按钮</AtButton>
      </View>
    )
  }
}
