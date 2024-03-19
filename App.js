// import 'react-native-gesture-handler';
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ReduxStore from './src/redux/Store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Provider store={ReduxStore}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
      </Provider>
    </View>
  );
};

export default App;
