import React from 'react';
import { View , FlatList, Text, StyleSheet} from 'react-native';
import Contact from '../components/Contact';


export default function ContactsScreen() {
  const contacts = [
    {name:"Abiodun", number:"+234 802 388 6351"},
    {name:"Aboagye", number:"+233 243 008 011"},
    {name:"Adjoa", number:"+233 570 104 181"},
    {name:"Joyce", number:"+233 266 408 181"},
    {name:"Chris", number:"+233 206 748 262"},
    {name:"Erica", number:"+1 952-221-7785"},
    {name:"Birdman", number:"+233 506 448 294"},
    {name:"Kwame Asare Bediako", number:"+233 200 503 535"},
  ]
  return (
    <View>
      <FlatList 
        data={contacts}
        renderItem={({item})=>{
          return <Contact name={item.name} phone={item.number}/>
        }}
        keyExtractor={(item)=>item.number}
     />
     
    </View>
  );
}


 