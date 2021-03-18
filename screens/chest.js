
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function chest() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"Barbell Bench Press",
        url:'https://www.verywellfit.com/thmb/fTfRsAdOrOz2L9MLdcURHGDswR8=/2667x2000/smart/filters:no_upscale()/29-3498606-Bench-Press-GIF-b26faabc528b48a8b3a145797ddfa0e3.gif',
        desc:""
        
      },
      {
        exeName:"Barbell Incline Bench Press",
        url:'https://3vnqw32fta3x1ysij926ljs3-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/InclineBenchPress.gif',
        desc:""
      },
      {
        exeName:"Cable Incline Fly",
        url:'https://i.pinimg.com/originals/a8/07/fd/a807fdd4b08025c08ad6fe93c653a55e.gif',
        desc:""
      },
      {
        exeName:"Chest Dip",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-single-arm-row.gif?resize=480:*',
        desc:""
      },
      {
        exeName:"DumbBell Bench Press",
        url:'https://qph.fs.quoracdn.net/main-qimg-b97754ec6cad9ccee1eabd049640fc27',
        desc:""
      },
      {
        exeName:"DumbBell Fly",
        url:'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/18-TRX-Inverted-Row.gif',
        desc:""
      },
      {
        exeName:"DumbBell Pullover",
        url:'https://www.verywellfit.com/thmb/t7Ff1WQoIkbnaCJjD4QwvPIIgjI=/2667x2000/smart/filters:no_upscale()/95--Dumbbell-PulloverGIF-0a01af6ebf634a7aba793eecf824a383.gif',
        desc:""
      },
      {
        exeName:"Lever Pec Deck Fly",
        url:'https://workouts4fitness.files.wordpress.com/2017/05/pec-deck-machine1.gif?w=338',
        desc:""
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
    color:'white',
    textAlign:'center',
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