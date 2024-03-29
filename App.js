// import 'react-native-gesture-handler';
import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ReduxStore from './src/redux/Store';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {COLORS} from './src/themes/COLORS';
import Noconnection from './src/components/Noconnection';
import useCheckConnection from './src/Hooks/useCheckConnection';
const App = () => {
  const isConnected = useCheckConnection();
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Provider store={ReduxStore}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <Toast />
      </Provider>
    </View>
  );
};

export default App;
