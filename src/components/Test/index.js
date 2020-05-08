/**
 * 
 */
import Taro, { Component } from '@tarojs/taro'
import { View  } from '@tarojs/components'

class JoinTo extends Component {
    
    state = {
       
    }
    componentWillMount() {
      this.getName()
    }
    getName=()=>{
        console.log('jack')
    }
  
    render() { 
       
        return (
            <View className='join-to'>
               test
            </View>
        )
    }
}

export default JoinTo
