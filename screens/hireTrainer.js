
import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView,FlatList, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const DATA = [
  {
    id: '1',
    title: 'Harry',
    cost:"Rs:1540",
    image: 'https://i.pinimg.com/originals/dd/98/4e/dd984e803e114f5facb744b0ca8db6ba.jpg',
   

   
  },
  {
    id: '2',
    title: 'James',
    cost:"Rs:2404",
    image:'https://i.pinimg.com/originals/dd/98/4e/dd984e803e114f5facb744b0ca8db6ba.jpg',
   
    
  },
  {
    id: '3',
    title: 'Charlie',
    cost:"Rs:4545",
    image:'https://i.pinimg.com/originals/dd/98/4e/dd984e803e114f5facb744b0ca8db6ba.jpg',
  },
];




export default function hireTrainer({navigation}) {
  const Item = ({ title,  cost, image }) => (
    <ScrollView style={styles.item}> 
    <View style={styles.trainer}>
    <View>
      <Image style={styles.img} source={{uri:image}}/> 
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.all}>
      <Text style={styles.all}>{cost}</Text>
      </View>
      <View style={styles.btn}>
      <TouchableOpacity onPress={hireClick} style={{}}>
     <Text style={styles.hireBtn}>Hire</Text>
      </TouchableOpacity>
      </View>
      
      </View>
     
    </ScrollView>
  );
  
      const renderItem = ({ item }) => (
        <Item title={item.title} desc={item.desc} cost={item.cost} image={item.image}/>
      );
      const hireClick=()=>{
        navigation.navigate('payment')
      
      }
 
  
    return (
        <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'

    },
    item: {
      flexDirection:'row',
      margin:15,
      borderColor:'#455a64',
      borderWidth:1,
      borderRadius:20,
      backgroundColor:"black" 
    },
    title: {
      fontSize: 20,
      textAlign:'center',
      color:'white'
    },
    img:{
      height:100,
      width:100,
      borderRadius:20,
      borderWidth:1,
      borderColor:'#455a64',
    },
    trainer:{
      flexDirection:'row',
      alignItems:'center',
      alignContent:'space-around'
      
      
  
    },
    all:{
      color:'white',
      paddingLeft:30,
    
    }
    ,btn:{
     
      paddingLeft:55,
    },
    hireBtn:{
      borderWidth:1,
      borderColor:'white',
      backgroundColor:'transparent',
      height:50,
      color:"white",
      textAlign:'center',
      width:60,
      borderRadius:20,
      paddingTop:15
    }
  });