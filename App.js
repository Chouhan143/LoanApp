// import 'react-native-gesture-handler';
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
