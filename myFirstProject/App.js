import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style= {{fontSize:20, fontWeight:"bold"}}>News </Text>
      <View style={stil.still}>
      <Image source={require('./images/images.jpg')} />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor nisi in tempor porta. </Text>
    
      </View>
      <View style={stil.still}>
      <Image source={require('./images/images(1).jpg')} style={{resizeMode: 'stretch', width: "auto",height: 150,}}/>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor nisi in tempor porta. </Text>
      
      </View>
      <View style={stil.still}>
      <Image source={require('./images/images(2).jpg')} style={{resizeMode: 'stretch', width: "auto",height: 150,}} />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor nisi in tempor porta. </Text>
      
      </View>
    
     
    </SafeAreaView>
  );
};

export default App;

const stil = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",

  },
  still:{
    borderColor: "black",
    borderRadius: 15,
    margin:5,
    padding:5,
    flex:1,
    borderWidth: 3,
    
  }
});

