import React from "react";
import { View, Text,TextInput,Button,DatePickerAndroid } from "react-native";

class AyarlarScreen extends React.Component {
    constructor(){
        super()

        this.state={
            baslamaTarihi:new Date()
        }
    }
    

    datePick = async() => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              // Use `new Date()` for current date.
              // May 25 2020. Month 0 is January.
              date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              // Selected year, month (0-11), day
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Doğru Hesaplama İçin Bilgilerinizi Girin</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
            placeholder="Ad Soyad"
            autoCapitalize='words'/>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
            placeholder="Başlama Tarihi"
            onFocus={this.datePick}
            value={this.state.baslamaTarihi.toDateString()}/>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
            placeholder="Askerlik Tipi"/>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
            placeholder="Ceza"/>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:200,margin:30}}
            placeholder="İzin"/>
            <Button
          title="Kaydet"
          onPress={() => this.props.navigation.navigate('Giris')}/>
            
        </View>
      );
    }
  }

export default AyarlarScreen;