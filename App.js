import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/screens/SignUpScreen';
import LogIn from './src/screens/LogInScreen';
import ContactsScreen from './src/screens/ContactsScreen';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      phone:""
    }
    
  }
  render(){
    return (
      <View style={styles.container}>
         <ContactsScreen/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:80,
    marginHorizontal:20
  },
});
