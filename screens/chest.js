
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
        
      },
      {
        exeName:"Barbell Incline Bench Press",
        url:'https://3vnqw32fta3x1ysij926ljs3-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/InclineBenchPress.gif'
      },
      {
        exeName:"Cable Incline Fly",
        url:'https://i.pinimg.com/originals/a8/07/fd/a807fdd4b08025c08ad6fe93c653a55e.gif'
      },
      {
        exeName:"Chest Dip",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-single-arm-row.gif?resize=480:*'
      },
      {
        exeName:"DumbBell Bench Press",
        url:'https://qph.fs.quoracdn.net/main-qimg-b97754ec6cad9ccee1eabd049640fc27'
      },
      {
        exeName:"DumbBell Fly",
        url:'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/18-TRX-Inverted-Row.gif'
      },
      {
        exeName:"DumbBell Pullover",
        url:'https://thumbs.gfycat.com/DismalAstonishingIcterinewarbler-small.gif'
      },
      {
        exeName:"Lever Pec Deck Fly",
        url:'https://thumbs.gfycat.com/DismalAstonishingIcterinewarbler-small.gif'
      },
      {
        exeName:"Machine Inner Chest Press",
        url:'https://thumbs.gfycat.com/DismalAstonishingIcterinewarbler-small.gif'
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