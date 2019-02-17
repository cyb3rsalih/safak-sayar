import React from "react";
import {ScrollView, View, Text,TextInput,Button,DatePickerAndroid,AsyncStorage } from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
  import Moment from 'react-moment';
  class AyarlarScreen extends React.Component {
    constructor(){
        super()

        this.state={
            bugun: new Date(),
            adSoyad:'',
            baslamaTarihi:'',
            baslamaTarihiHesap:0,
            askerlikTipi:'',
            ceza:'',
            izin:'',
        }
    }

    kaydet = () => {
     AsyncStorage.setItem('BILGILER', JSON.stringify(this.state), 
     () =>{ alert("Bilgiler Kaydedildi!");this.props.navigation.navigate('Giris')})
    }
     

    componentDidMount(){
        AsyncStorage.getItem('BILGILER', (err, result) => {
            if(err !== null)
                alert(err)
            else{
                resultObj = JSON.parse(result)
                this.setState({
                    adSoyad:resultObj.adSoyad,
                    baslamaTarihi:resultObj.baslamaTarihi,
                    askerlikTipi:resultObj.askerlikTipi,
                    ceza:resultObj.ceza,
                    izin:resultObj.izin,
                })
            }
                         
        } )
    }

    datePick = async() => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              // Use `new Date()` for current date.
              // May 25 2020. Month 0 is January.
              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
            baslamaTarihi = new Date(year,month,day)
            //today = new Date()
            this.setState({baslamaTarihi:baslamaTarihi.toDateString(),baslamaTarihiHesap:baslamaTarihi.getTime()},() => alert(this.state.baslamaTarihiHesap))
            // TİME DİFFF alert(parseInt((today.getTime() - selectedDate.getTime())/86400000).toString())
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Doğru Hesaplama İçin Bilgilerinizi Girin</Text>
          <ScrollView>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
                placeholder="Ad Soyad"
                value={this.state.adSoyad}
                onChangeText={(adSoyad) => this.setState({adSoyad})}
                autoCapitalize='words'/>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
                placeholder="Başlama Tarihi"
                onFocus={this.datePick}
                value={this.state.baslamaTarihi.toString()}
                onChangeText={(baslamaTarihi) => this.setState({baslamaTarihi})}/>
                <View style={{flexDirection: 'row'}}>
                    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                    <MenuTrigger style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}} text={`Askerlik Tipi ${this.state.askerlikTipi}`}/>
                    <MenuOptions>
                        <MenuOption onSelect={() => this.setState({askerlikTipi:'12'})} value={1} text='12 Ay' />
                        <MenuOption onSelect={() => this.setState({askerlikTipi:'6'})} value={2} text='6 Ay'/>
                        <MenuOption onSelect={() => this.setState({askerlikTipi:'Bedelli'})}value={2} text='Bedelli'/>
                    </MenuOptions>
                    </Menu>
                </View>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
                placeholder="Ceza"
                value={this.state.ceza}
                onChangeText={(ceza) => this.setState({ceza})}
                keyboardType='numeric'/>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
                placeholder="İzin"
                value={this.state.izin}
                onChangeText={(izin) => this.setState({izin})}
                keyboardType='numeric'/>
                <Button
            title="Kaydet"
            onPress={this.kaydet}/>
          </ScrollView>
        </View>
      );
    }
  }

export default AyarlarScreen;