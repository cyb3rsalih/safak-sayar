
import { createStackNavigator, createAppContainer } from "react-navigation";


import HomeScreen from './screens/HomeScreen'
import AyarlarScreen from './screens/AyarlarScreen'

const AppNavigator = createStackNavigator({
  
  Ayarlar:{
    screen: AyarlarScreen
  },
  Giris: {
    screen: HomeScreen
  },
  
});

export default createAppContainer(AppNavigator);