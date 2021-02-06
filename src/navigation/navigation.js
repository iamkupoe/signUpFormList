import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SignUp from '../screens/SignUpScreen';
import LogIn from '../screens/LogInScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/authActions';


const Stack = createStackNavigator()

function AppContainer({auth, logout}) {

    return (
     
      <NavigationContainer>
       
          {
            auth.login ?
            //show contacts
          <Stack.Navigator>
            <Stack.Screen name="Contacts" options={{
              headerRight:()=>(
                <TouchableOpacity onPress={logout}>
                   <Text style={{color:'red', fontSize:20, marginRight: 25}}>Logout</Text>
                </TouchableOpacity>
              )
            }} component={ContactsScreen}/>
            </Stack.Navigator>

          :

          //show login & register
          <Stack.Navigator>
           <Stack.Screen options={{header: ()=> null }} name="Login" component={LogIn}/>

           <Stack.Screen options={{header: ()=> null }} name="Signup" component={SignUp}/>

           </Stack.Navigator>
      
          }

        </NavigationContainer>
        
    );

  
}

const mapStateToProps = (state) => {
  return {
     auth:state
  }
}

export default connect(mapStateToProps, {logout}) (AppContainer);