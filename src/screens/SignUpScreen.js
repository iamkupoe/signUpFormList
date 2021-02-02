import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';


export default class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      username:"",
      email:"",
      password:"",
      password2:""

    
    }
  }
  render(){
    
    return (
      <View>
    
    <View>
      <Text style={styles.signupText} >Sign up</Text>
      </View>
       
    <View style={styles.inputContainer}>
      <TextInput style={styles.input}
      placeholder="Username"
      autoCapitalize="none"
      autoCorrect={false}
      value={this.state.username}
      onChangeText={(username)=>{
        this.setState({username})
      }}
      />

      <TextInput style={styles.input}
      placeholder="Email"
      autoCapitalize="none"
      autoCorrect={false}
      value={this.state.email}
      onChangeText={(email)=>{
        this.setState({email})
      }}
      />

      <TextInput style={styles.input}
      placeholder="Password"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={(password)=>{
        this.setState({password})
      }}
      />

      <TextInput style={styles.input}
      placeholder="Password again"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      value={this.state.password2}
      onChangeText={(password2)=>{
        this.setState({password2})
      }}
      />
    
    </View>
        
    <View>
        <TouchableOpacity style={styles.opacity}>
           <Text style={styles.opacityText}>Signup</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.accountContainer}>
      <Text style={styles.accountText}>Already have an account?</Text>
      <TouchableOpacity>
         <Text style={styles.signUp}>Log in</Text>
      </TouchableOpacity>
      
    </View>
    
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical:20,
    marginHorizontal:50,
    
  },
  signupText: {
    fontSize:40,
    color:"#5669cc",
    marginTop:80,
    marginHorizontal:50
  },

  inputContainer:{
    marginHorizontal:50,
    marginVertical:20
  },
  
  input: {
    borderBottomWidth:2,
    borderColor:"#5669cc",
    marginTop:40,
    fontSize:20,
   
    
  },
  forgotPassword:{
    color:"#5fcaed",
    alignSelf:"flex-end",
    paddingTop:8
  },
  opacity: {
    backgroundColor:"#5669cc",
    width: 200,
    height:40,
    alignSelf:"center",
    borderRadius:10,
    marginVertical:40
  },
  opacityText: {
    color:"white",
    fontSize:25,
    alignSelf:"center",
    paddingVertical:2

  },
  accountContainer:{
   flexDirection:"row",
   alignSelf:"center",
  },
  accountText:{
    fontSize:18,
  },
  signUp:{
    fontSize:18,
    color:"#5669cc",
    marginLeft:5
  }
});
