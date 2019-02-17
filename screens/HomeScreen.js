import React from "react";
import { View, Text, Button,StyleSheet, AsyncStorage } from "react-native";

class HomeScreen extends React.Component {
    constructor(){
        super()

        this.state ={
            bugun: new Date(),
            adSoyad:'',
            baslamaTarihi:'',
            askerlikTipi:'',
            ceza:'',
            izin:'',
        }
    }

    days_between(date1, date2) {
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24;
    
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
    
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);
    
        // Convert back to days and return
        return Math.round(difference_ms/ONE_DAY);
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
                },() =>  alert("Hosgeldiniz beyfendi"))
            }
                         
        } )
    }

    // https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
    render() {
        const tarih = Date.parse('2012-12-12')
        const yaz = tarih.toString()
        //const kalanGun= this.days_between();
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{backgroundColor:'white',borderColor:'black',borderWidth:1,width:200,height:200,borderRadius:100,alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize:100}}>{yaz}</Text>
          </View>
          <Text>Öncelikle Ayarlar Kısmından Bilgilerini Girmelisin.</Text>
          <Button
          title="Ayarlar"
          onPress={() => this.props.navigation.navigate('Ayarlar')}/>
        </View>
      );
    }
  }



const styles = StyleSheet.create({

  });

export default HomeScreen;
