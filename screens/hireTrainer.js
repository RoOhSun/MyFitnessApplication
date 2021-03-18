
import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView,FlatList, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const DATA = [
  {
    id: '1',
    title: 'Harry',
    cost:"Rs:1540",
    image: 'https://i.pinimg.com/originals/dd/98/4e/dd984e803e114f5facb744b0ca8db6ba.jpg',
    address:'ABC'
   

   
  },
  {
    id: '2',
    title: 'James',
    cost:"Rs:2404",
    image:'https://i.pinimg.com/originals/dd/98/4e/dd984e803e114f5facb744b0ca8db6ba.jpg',
    address:'ABC'
   
    
  },
  {
    id: '3',
    title: 'Charlie',
    cost:"Rs:4545",
    image:'https://i.pinimg.com/originals/dd/98/4e/dd984e803e114f5facb744b0ca8db6ba.jpg',
    address:'ABC'
  },
];




export default function hireTrainer({navigation}) {
  const Item = ({ title,  cost, image,address }) => (
    <ScrollView style={styles.item}> 
    <View style={styles.trainer}>
    <View>
      <Image style={styles.img} source={{uri:image}}/> 
      </View>
      <View style={styles.all}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.all}>{cost}</Text>
      <Text style={styles.all}>{address}</Text>
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
        <Item title={item.title} desc={item.desc} cost={item.cost} image={item.image} address={item.address}/>
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
      color:'white',
      paddingLeft:30,
      fontSize:20
    },
    img:{
      height:100,
      width:100,
      borderRadius:20,
      borderWidth:1,
      borderColor:'white',
    },
    trainer:{
      flexDirection:'row',
      alignItems:'center',
      alignContent:'space-around',
      margin:10,
      
      
  
    },
    all:{
      color:'white',
      paddingLeft:30,
      fontSize:20,
      // flexWrap:'wrap', width:"35%",

      
    
    }
    ,btn:{
      borderRadius:20,
      marginLeft:40,
      backgroundColor:'white'
    },
    hireBtn:{
      //borderWidth:1,
      
      backgroundColor:'transparent',
      height:50,
      color:"black",
      textAlign:'center',
      fontWeight:'bold',
      width:60,
      borderRadius:20,
      paddingTop:15,
      
    }
  });