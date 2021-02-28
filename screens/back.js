
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
        desc:"1. Place a barbell on the floor in the front of you with the resided weights attached. \n \n 2. With your knees bent and back straight grasp the bar with a wide overhand grip. \n \n 3. Keep your upper body(Chest) steady and your arms perpendicular to your chest. \n \n 4. Pull the bar as far up to your chest as you can. \n \n 5. Hold for a moment than lower the bar in a controlled manner \n \n 6. Repeat "
        
      },
      {
        exeName:"Cable Seated High Row(V bar)",
        url:'https://musclewiki.com/media/uploads/NeutralGripPulldown-Side-021316.gif',
        desc:"1. Sitting upright with your abs drawn in grasp a Pull Down bar with adn underhand grip shoulder width apart. \n \n 2. Pull the bar down till the bar reaches your upper chest keeping your elbows close to your body. \n \n 3. Slowly return the bar to the starting position. \n \n 4. Repeat",
        
      },
      {
        exeName:"Cable Seated Wide grip Row",
        url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/seatedcablerow-1509373251.gif',
        desc:""
      },
      {
        exeName:"Dumbbell One Arm Bent Over Row",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-single-arm-row.gif?resize=480:*',
        desc:"1. Place your right foot on the floor, rest"
      },
      {
        exeName:"Lever T bar Row(plate loaded)",
        url:'https://qph.fs.quoracdn.net/main-qimg-b97754ec6cad9ccee1eabd049640fc27',
        desc:""
      },
      {
        exeName:"Suspended Row",
        url:'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/18-TRX-Inverted-Row.gif'
      },
      {
        exeName:"Smith Narrow Row",
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