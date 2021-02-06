import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import AppContainer from './src/navigation/navigation';
import {PersistGate} from 'redux-persist/integration/react';


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
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <AppContainer/> 
         </PersistGate>
      </Provider>
    );
  }
  
}