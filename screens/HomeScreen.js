import React from "react";
import { View, Text, Button,StyleSheet } from "react-native";

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{backgroundColor:'white',borderColor:'black',borderWidth:1,width:200,height:200,borderRadius:100,alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize:100}}>X</Text>
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
