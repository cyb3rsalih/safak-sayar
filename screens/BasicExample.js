import React from 'react';
import { Text ,View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

class BasicExample extends React.Component{
    constructor(){
        super()

        this.state={
            askerlikTipi:''
        }
    }

    render(){
        return(
            <View style={{flexDirection: 'row'}}>
                <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                <MenuTrigger style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}} text={`Askerlik Tipi ${this.state.askerlikTipi}`}/>
                <MenuOptions>
                    <MenuOption onSelect={() => this.setState({askerlikTipi:': 12 Ay'})} value={1} text='12 Ay' />
                    <MenuOption onSelect={() => this.setState({askerlikTipi:': 6 Ay'})} value={2} text='6 Ay'/>
                    <MenuOption onSelect={() => this.setState({askerlikTipi:': Bedelli'})}value={2} text='Bedelli'/>
                </MenuOptions>
                </Menu>
            </View>
        )
    }
}


export default BasicExample;