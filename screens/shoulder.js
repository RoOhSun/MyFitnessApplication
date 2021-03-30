
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function shoulder() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BARBELL SEATED OVERHEAD PRESS",
        url:'',
        desc:"1. Sitting on a bemch with a barbell rack grasp the barbell with a grasp 3 to 4 inches wider than your shoulders. \n\n 2. Lift the bar off the rack and lower it to just at the height of your shoulders. \n\n 3. While maintaining good posture straighten your arms and raise the bar up above your head. \n\n 4. Pause for a moment and then in a controlled movement lower the bar to the strating position."
        
      },
      {
        exeName:"CABLE ONE ARM LATERAL RAISE",
        url:'',
        desc:"1. Stand sideways in front of a low cable pulley, holding the stirrup in the hand farthest from the machine. \n\n 2. Place your free hand on your hip for support and bend forward a little at the hips. \n\n 3. Keeping your elbow slightly bent, exhale as you raise the stirrup away from the pulley until your elbow is shoulder height. \n\n 4. Hold for a count of two. 5.Inhale as you lower the stirrup to the starting position in a controlled manner. 6. Repeat.",
        
      },
      {
        exeName:"CABLE STANDING CROSS-OVER HIGH REVERSE FLY",
        url:'',
        desc:"1. Stand between a cable crossover machine with your feet shoulder width apart and set the cable pulley so the handles are close to parallel to your shoulders. \n\n 2. Reach across your body with one arm to grab the cable crossover machine handle on the opposite side, then repeat with the other arm so you’re holding both handles. \n\n 3. With a slight lean back to keep your chest upright, lock down your upper torso and pull your arms to the sides to form a “T” with your body while squeezing your shoulder blades together. At this point your arms should be parallel to the floor.\n\n 4. After a slight pause, under control, slowly reverse the movement back to the starting position. \n\n 5. Repeat."
      },
      {
        exeName:"SETAED DUMBBELL BENCH PRESS",
        url:'',
        desc:"1. Keep your back flat against the pad throughout the duration of the exercise.\n\n 2. Don’t allow the head to jut forward excessively. \n\n 3. Drive the bicep to the ear and exhale as you press. \n\n 4.If you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion. \n\n 5. Keeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\n\n 6. If you can’t lock out the elbows overhead than it may indicate a lack of shoulder mobility due to poor scapular upward rotation."
      },
      {
        exeName:"DUMBBELL FRONT RAISE ",
        url:'',
        desc:"1. Stand with feet about shoulder-width apart. Keep the back straight and feet planted flat on the floor. Your arms holding weights should hang down.\n\n 2. Hold the dumbbells across the thighs horizontally, palms facing back toward the thighs. Ensure that you have a firm grip.\n\n 3.Brace the abdominal muscles. \n\n 4.Lift the weights upward, inhaling, with arms out in front and palms facing down. Keep a slight bend in the elbows to reduce the stress on the joints. Pause when the arms are approximately horizontal to the floor and feel the contraction in the shoulders. \n\n 5.Return the dumbbells to the starting position at the thighs with a slow and controlled motion while exhaling. \n\n 6.Repeat the exercise for the number of sets and repetitions. "
      },
      {
        exeName:"DUMBBELL LATERAL RAISE",
        url:'',
        desc:'1. Grasp a dumbbell in each hand, palms facing inward towards your body and the dumbells at your sides. \n\n 2. Standing with your feet shoulder with apart, draw your abs in and bend your knees slightly. \n\n 3. While keeping your torso still, raise your arms up to the sides keeping your arms straight with a slight bend in the elbows. \n\n 4. Raise your arms up untill in the linw with your shoulders, your palms should face the floor. \n\n 5. Hold the position for a moment then in a controlled movement lower your arms to the starting position. \n\n 6. Repeat. '
      },
      {
        exeName:"LEVER SEATED REVERSE FLY",
        url:'',
        desc:'1. SIt on the pec deck fly machine with your stomach against the pad. \n\n 2. Grasp the pec deck handles ensuring your upper arms are parallel to the floor. \n\n 3. Push the handles back together as you contract your back and squeeze your shoulder blades. \n\n 4. Hold this contraction for 1 second. \n\n 5. Repeat.'
      },
     
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
        renderItem={renderItem}        />
            
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