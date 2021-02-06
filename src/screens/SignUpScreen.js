import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import {createEmailAccount, registerError} from '../redux/actions/authActions';


class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      username:"",
      email:"",
      password:"",
      confirm:""

    
    }
  }

  handleUpdateText=(name,value)=>{
     this.setState({
       [name]:value
     })
  }

  handleOnSubmit=()=>{
    if (this.state.password!==this.state.confirm){
        this.props.registerError("Passwords do not match")
        return;
    }
    this.props.createEmailAccount(this.state.email, this.state.password)
  }
  render(){
    
    const {auth} = this.props
    return (
      <View>
    
    <View>
      <Text style={styles.signupText} >Sign up</Text>
      </View>
       
    <View style={styles.inputContainer}>

      { auth.error.register &&
        <Text style={{color:'red'}}>{auth.error.register}</Text>}
      
      <TextInput style={styles.input}
      placeholder="Username"
      autoCapitalize="none"
      autoCorrect={false}
      value={this.state.username}
      onChangeText={(text)=>{(this.handleUpdateText('username',text))}}/>
      

      <TextInput style={styles.input}
      placeholder="Email"
      autoCapitalize="none"
      autoCorrect={false}
      value={this.state.email}
      onChangeText={(text)=>{(this.handleUpdateText('email',text))}}/>
      

      <TextInput style={styles.input}
      placeholder="Password"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={(text)=>{(this.handleUpdateText('password',text))}}/>

      <TextInput style={styles.input}
      placeholder="Confirm"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      value={this.state.confirm}
      onChangeText={(text)=>{(this.handleUpdateText('confirm',text))}}/>
    
    </View>
        
    <View>
        <TouchableOpacity onPress={this.handleOnSubmit} style={styles.opacity}>
           <Text style={styles.opacityText}>Sign up</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.accountContainer}>
      <Text style={styles.accountText}>Already have an account?</Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
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

const mapStateToProps = (state) => {
  return {
     auth:state
  }
}

export default connect(mapStateToProps,{createEmailAccount, registerError}) (SignUp);
