
import React, {useState} from "react";

import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function back() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BAR BELL BENT OVER ROW",
        url:'https://i.pinimg.com/originals/51/83/ee/5183ee528289737d4abf732f24630b1d.gif',
        desc:"1. Place a barbell on the floor in the front of you with the resided weights attached.\n \n 2. With your knees bent and back straight grasp the bar with a wide overhand grip.\n \n 3. Keep your upper body(Chest) steady and your arms perpendicular to your chest.\n \n 4. Pull the bar as far up to your chest as you can.\n \n 5. Hold for a moment than lower the bar in a controlled manner.\n \n 6. Repeat "
        
      },
      {
        exeName:"CABLE SEATED HIGH ROW(V bar)",
        url:'https://musclewiki.com/media/uploads/NeutralGripPulldown-Side-021316.gif',
        desc:"1. Sitting upright with your abs drawn in grasp a Pull Down bar with adn underhand grip shoulder width apart. \n \n 2. Pull the bar down till the bar reaches your upper chest keeping your elbows close to your body. \n \n 3. Slowly return the bar to the starting position. \n \n 4. Repeat",
        
      },
      {
        exeName:"CABLE SEATED WIDE GRIP ROW",
        url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/seatedcablerow-1509373251.gif',
        desc:"1. Sit upright on the bench and plant your feet on the foot pads, knees bent. \n \n 2. Extend your arm and hold the handle, Move your shoulders back and down Brace your core. \n\n 3. Exhale. Bend your elbow to pull the handle, keep moving youe elbows tucked in and your back neutral. \n \n 4. Repeat"
      },
      {
        exeName:"DUMBBELL ONE ARM BENT OVER`",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-single-arm-row.gif?resize=480:*',
        desc:"1. Place your right foot on the floor, rest your left knee and hand on a flat bench.\n \n 2. Lean forward  so your body's weight is supported by your left arm and knee. \n \n 3.Keeping your back flat,reach down and pick up the dumbell with your right hand. \n \n 4. Raise your right arm as close to your chest as possible, while bending and bringing your elbow back as far as you can. \n \n  5. Pause at the top for moment and then lower the dumbell in a controlled manner to the starting position. \n \n 6. Repeat"
      },
      {
        exeName:"LEVER T BAR(Plate loaded)",
        url:'https://qph.fs.quoracdn.net/main-qimg-b97754ec6cad9ccee1eabd049640fc27',
        desc:""
      },
      {
        exeName:"SUSPENDED ROW",
        url:'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/18-TRX-Inverted-Row.gif',
        desc:"1. Pull body up so side of the chest make contact with handles while keeping body and legs straight. \n\n 2. Return until arms are extended straight and shoulders are stretched forward. \n\n 3.Repeat"
      },
      {
        exeName:"SMITH NARROW ROW",
        url:'https://thumbs.gfycat.com/DismalAstonishingIcterinewarbler-small.gif',
        desc:"1.Set up for the smith machine bent over row by lowering the bar on the smith all the way and adding the weight you want to use. \n\n 2.Stand facing the bar and grip the bar with an overhand grip, with your hands wider than shoulder width apart. \n\n 3.Stand straight up to take the weight off the machine.\n\n 4. Straighten your back, bend at the knees slightly, and slowly let the weight down until it's just below your knees. This is the start position. \n\n 5. Keeping your body fixed, pull the weight up until it almost hits your body. \n\n 6.Pause, and then slowly lower the bar back to the starting position. \n\n 7. Repeat"
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