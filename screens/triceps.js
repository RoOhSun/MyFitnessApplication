
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function triceps() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BARBELL CLOSE GRIP BENCH PRESS",
        url:'',
        desc:" "
        
      },
      {
        exeName:"BARBELL LYING  TRICEPS EXTENSION",
        url:'',
        desc:"",
        
      },
      {
        exeName:"CABLE PUSHDOWN",
        url:'',
        desc:""
      },
      {
        exeName:"DIAMOND PUSH UP",
        url:'',
        desc:""
      },
      {
        exeName:"",
        url:'',
        desc:""
      },
      {
        exeName:"",
        url:'',
        desc:''
      },
      {
        exeName:"",
        url:''
      }
    ]


    const renderItem = ({item}) => (
            <TouchableOpacity onPress={() => {setModalVisible(true); setSelectedExc(item)}}>
      <View style={styles.box}>
      <Image style={styles.img} source={{uri: item.url}}/>
      <Text style={styles.text}>{item.exeName}</Text>
      </View>
      </TouchableOpacity>
    )
    
    return (
        <ScrollView style={styles.main}>
        <FlatList
        data={data}
        renderItem={renderItem}
        />
            
        <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{}}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
        
          <View style={styles.modalView}>
          <View style={styles.titleView}>
          <Text style={styles.titleModalText}> {selectedExc.exeName}</Text>
           </View>

           <View style ={styles.imgbox}>
          <Image style={styles.img1} source={{uri: selectedExc.url}}/>
          </View>

          <View style={styles.titleView1}>
            <Text style={styles.warn}> {selectedExc.desc} </Text>
           
          </View>
          </View>
         
         </Modal>

           

           
        

           

         

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
         backgroundColor:'black'
    },
    box:{
      flexDirection:'row',
      margin:3,
      borderColor:'white',
      borderWidth:1,
     
    },
    modalView: {
       margin:20,
        backgroundColor: "#082759",
        borderRadius: 20,
        alignItems: "center",
        borderWidth:2,
        borderColor:'blue',
       padding:20,
      
      },
      titleView:{
       width:'110%',
        backgroundColor: "#082759",
        
       alignItems: "center",
        borderBottomWidth:1,
        
        borderColor:'white'
      
      },
      modalText: {
        marginBottom: 15,
        color:'white'
      },
    text:{
        fontSize:16,
        color:'white',
        paddingLeft:10,
        paddingTop:40     
    },
     img:{
         height:100,
         width:100,
        
    },
    img1:{
      height:200,
      width:200,
      padding:15,
      borderRadius:40,
      borderWidth:2,
      borderColor:'white'
    }, 
    titleModalText:{
      color:'white', 
      fontWeight:'bold',
    },
    warn:{
      color:'white'
    },
    titleView1:{
      width:'110%',
      backgroundColor: "#082759",
      borderTopWidth:1,
      borderColor:'white',
      borderBottomWidth:1,
      //borderColor:'#0c277d'

    },
    imgbox:{
      padding:10,
    }
   
       
}
)