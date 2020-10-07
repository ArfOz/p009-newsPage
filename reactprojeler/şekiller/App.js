import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={stil.container}
      ><View style={{backgroundColor:"blue", flex:1}}></View>
      <View style={{backgroundColor:"yellow", flex:1}}></View>
      </View>
      <View style={{backgroundColor:"red", flex:1}}></View>
      <View style={{backgroundColor:"green", flex:1}}></View>
      <View style={{backgroundColor:"brown", flex:1}}></View>
    
     
    </SafeAreaView>
  );
};

export default App;

const stil = StyleSheet.create({
  container: {
    flex:3,
    flexDirection: "row",

  },
});

