
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function triceps() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"ALTERNATE HEEL TOUCHERS",       
        url:'https://i.pinimg.com/originals/61/7f/9f/617f9fd3a4f10919aba2729aa8664a0c.gif',
        desc:" "
        
      },
      {
        exeName:"BRIDGE (CROSS KNEE)",
        url:'https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif',
        desc:"",
        
      },
      {
        exeName:"CRUNCH (STRAIGHT LEG-UP)",
        url:'https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif',
        desc:""
      },
      {
        exeName:"DEAD BUG",
        url:'https://www.verywellfit.com/thmb/E2CW5yuuvpp5DoScGiP6bXJaQZE=/3000x2000/filters:fill(FFDB5D,1)/105-Dead-Bug-ExerciseGIF-407d0bbb6d8742be855b219e74c18bd0.gif',
        desc:""
      },
      {
        exeName:"ELBOW TO KNEE",
        url:'https://qph.fs.quoracdn.net/main-qimg-09939d197d78b0dca34122f11377525e',
        desc:""
      },
      {
        exeName:"JACK KNIFE SIT UP",
        url:'https://d24bnpykhxwj9p.cloudfront.net/s3file/s3fs-public/users1/2017-03/Wed/v%20up.gif',
        desc:''
      },
      {
        exeName:"BIRD DOG",
        url:'https://i0.wp.com/thumbs.gfycat.com/InsignificantPerkyInvisiblerail-size_restricted.gif?w=1155&h=840',
        desc:''
      },
    
      {
        exeName:"REAR DECLINE BRIDGE",
        url:'https://thumbs.gfycat.com/MajesticFlimsyDoctorfish-small.gif',
        desc:''
      },
      {
        exeName:"V CUP",
        url:'https://media1.popsugar-assets.com/files/thumbor/wclUn2vpiB8j1l9Sry5XL35SyLs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/05/906/n/1922729/4a427ce25102cba0_V-Ups.gif',
        desc:''
      }
    ]


   
    const renderItem = ({item}) => (
      <TouchableOpacity onPress={() => {setModalVisible(true); setSelectedExc(item)}}>
      <View style={styles.box}>
      <View style={styles.igBox}>
      <Image style={styles.img} source={{uri: item.url}}/>
      </View>
      
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
            <Text style ={styles.textPerform}>How to Perform</Text>
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
         backgroundColor:'black',
         
    },
    box:{
      flexDirection:'row',
      margin:3,
      borderColor:'#7D7D72',
      borderWidth:1,
      borderRadius:20,
     
    },
    modalView: {
         margin:20,
        backgroundColor: "#252521",
        borderRadius: 20,
        alignItems: "center",
        borderWidth:2,
       // borderColor:'white',
       padding:20,
       
      
      },
      textPerform:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        marginTop:5,
      },
      titleView:{
       width:'110%',
        backgroundColor: "transparent", 
       alignItems: "center",
        borderBottomWidth:1,
        borderColor:'white'
      
      },
      igBox:{
        borderWidth:1,
        borderColor:'#7D7D72',
        borderRadius:18

      },
      modalText: {
        marginBottom: 15,
        color:'white',
    
      },
    text:{
        fontSize:14,
        width:"60%",
        color:'white',
        // textAlign:'center',
        flexWrap:'wrap',
        paddingLeft:20,
        paddingTop:50     
    },
     img:{
         height:100,
         width:100,
         margin:8,
    
         
        
    },
    img1:{
      height:200,
      width:200,
      padding:15,
     
    }, 
    titleModalText:{
      color:'white', 
      fontWeight:'bold',
      marginBottom:5,
      justifyContent:'flex-start',
      flexWrap:'wrap'
    },
    warn:{
      color:'white',
      justifyContent:'flex-start',
      padding:10,
      
    },
    titleView1:{
      width:'110%',
      backgroundColor: "transparent",
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