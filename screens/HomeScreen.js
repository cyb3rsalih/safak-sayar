import React from "react";
import { View, Text, Button,StyleSheet, AsyncStorage } from "react-native";

class HomeScreen extends React.Component {
    constructor(){
        super()

        this.state ={
            bugun: new Date(),
            adSoyad:'',
            baslamaTarihi:'',
            baslamaTarihiHesap:0,
            askerlikTipi:'',
            ceza:'',
            izin:'',
            terhis:0,
        }
    }

   hesapla = () => {
    b = new Date()
    bugun = b.getTime()
    eklenecek = 0;
    ceza = this.state.ceza*86400*1000
    izin = this.state.izin*86400*1000
    baslamaTarihiHesap = this.state.baslamaTarihiHesap

    if(this.state.askerlikTipi == '12'){
        eklenecek = 31556926000;
        ekizin = 24*86400*1000;
    }
    else if(this.state.askerlikTipi == '6'){
        eklenecek = 15552000000;
        ekizin = 12*86400*1000;
    }    
    else
        eklenecek = 1814400000;
        
    t = baslamaTarihiHesap+eklenecek+ceza-(ekizin - izin)
    terhis = parseInt(t/(86400*1000))
    this.setState({terhis})
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
                    baslamaTarihiHesap:resultObj.baslamaTarihiHesap,
                    askerlikTipi:resultObj.askerlikTipi,
                    ceza:resultObj.ceza,
                    izin:resultObj.izin,
                },() => this.hesapla)
            }
                         
        })
        
    }

    // https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
    render() {
        
        //const kalanGun= this.days_between();
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{backgroundColor:'white',borderColor:'black',borderWidth:1,width:200,height:200,borderRadius:100,alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize:100}}>{this.state.terhis}</Text>
          </View>
          <Text>Öncelikle Ayarlar Kısmından Bilgilerini Girmelisin.</Text>
          <Button
          title="Ayarlar"
          onPress={() => this.props.navigation.navigate('Ayarlar')}/>
          <Button
          title="AT"
          onPress={this.hesapla}/>
        </View>
      );
    }s
  }



const styles = StyleSheet.create({

  });

export default HomeScreen;
