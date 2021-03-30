
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function chest() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BARBELL BENCH PRESS",
        url:'https://www.verywellfit.com/thmb/fTfRsAdOrOz2L9MLdcURHGDswR8=/2667x2000/smart/filters:no_upscale()/29-3498606-Bench-Press-GIF-b26faabc528b48a8b3a145797ddfa0e3.gif',
        desc:"1.Lie on a flat bench with your feet flat on the floor keep your back flat on the bench.\n\n 2. Grasp the bar a little wider than shoulder width apart. \n\n 3. Raise the barbell above your body and move it over the middle of your chest this is your starting position. \n\n 4. Lower the bar down so it just touches your chest. \n\n 5. Raise the bar till your arms are fully extended and your elbows are locked. \n\n 6.Return to starting position."
        
      },
      {
        exeName:"BARBELL INCLINE BENCH PRESS",
        url:'https://www.gymguider.com/wp-content/uploads/2017/10/incline-barbell-bench-press.gif',
        desc:"1. Lie flat on an inclined bench set at 45 degree angle with your feet shoulder width apart. \n\n 2. Grasp the bar a little wider than shoulder width apart. \n\n 3.Raise the barbell above your body and move it over the middle of your chest this is your starting position. \n\n 4. Lower the bar down so it just touches your chest. \n\n 5. Raise the bar straight up till your arms are fully extended and your elbows are locked \n\n 6. Return to starting position."
      },
      {
        exeName:"CABLE INCLINE FLY",
        url:'https://i.pinimg.com/originals/a8/07/fd/a807fdd4b08025c08ad6fe93c653a55e.gif',
        desc:"1.Place an incline bench set at 45 degree angle between two cable tower. \n\n 2. Grasp a pulley in each hand with your palms facing up. \n\n 3. With a slight bend in your elbows squeeze your chest and pull the cable in an arc so they meet together in the middle of your chest \n\n 4. Hold for a moment and then slowly lower your hands back to starting position at along the same arc."
      },
      {
        exeName:"CHEST DIP",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-single-arm-row.gif?resize=480:*',
        desc:"1. Grab the parallel bars and jump up, straighten your arms. \n\n 2. Lower your body by bending your arms leaning forward. \n\n 3. Dip down until your shoulders are below your elbows. \n\n 4. Lift your body up by straightening your arms. \n\n 5.Lock your elbow at the top."
        
      },
      {
        exeName:"DUMBBELL BENCH PRESS",
        url:'https://qph.fs.quoracdn.net/main-qimg-b61eb74e21990c16b1201be635004a51',
        desc:"1. This is an exercise for chest,triceps and shoulder strengthening. \n\n 2. Grasp the dumbbell in each hand and lie on a flat bench with your feet firmly on the ground. \n\n 3. Extend your armsup over your chest with your palms facing forwards. \n\n 4.Press the dumbbells up over your chest till your arm are fully extended this is your starting position. \n\n 5. Bend your elbow to a 90 degree angle so your upper arms are parallel with the floor. \n\n 6. Slowly lower the dumbbell as low as comfortable along your chest. \n\n 7. With a controlled motion return bac to your starting position. \n\n 8. Repeat"
      },
      {
        exeName:"DUMBBELL FLY",
        url:'https://thumbs.gfycat.com/HarmoniousRichHorse-size_restricted.gif',
        desc:"1. Lie on a flat bench with a dumbbell in each hand and your feet firmly on the ground. \n\n 2. Lift the dumbbell over your chest extending your arms fully with a slight bend in your elbows, this is your starting position. \n\n 3. Keeping a slight bemd in your elbows, lower thhe dumbbells to the floor in an aurc like moiton. \n\n 4. Slowly return the dumbbells over your chest to the starting position in a controllerf motion. \n\n 5. Repeat"
      },
      {
        exeName:"DUMBBELL PULLOVER",
        url:'https://www.verywellfit.com/thmb/t7Ff1WQoIkbnaCJjD4QwvPIIgjI=/2667x2000/smart/filters:no_upscale()/95--Dumbbell-PulloverGIF-0a01af6ebf634a7aba793eecf824a383.gif',
        desc:"1. Holding a medium-to-heavy dumbbell, lay with your back flat on a bench or stability ball. \n\n 2. With your feet planted on the ground and your core engaged. extend your arms to the sky, cuping the dumbbell with both hands above your chest. \n\n 3. Keeping your low back pressed into the bench or stability ball, slowly lower your arms overhead until your biceps reach your ears. \n\n 4. Slowly bring your arms back to above your chest. \n\n 5. Repeat."
      },
      {
        exeName:"LEVER PEC DECK FLY",
        url:'https://workouts4fitness.files.wordpress.com/2017/05/pec-deck-machine1.gif?w=338',
        desc:"1. Adjust the machine so you are sitting at chest heights with the pads. \n\n 2. Sit on the machine with your back flat. \n\n 3. Place your forearms on the pads together slowly as you squeeze your chest. \n\n 4. Using your forearms, push the pads together slowly as you squeeze your chest. \n\n 5. Return your arms to the stretched out starting position in a contri=olled machine. \n\n 6. Repeat."
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