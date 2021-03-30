
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function legs() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BARBELL DEADLIFT",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/deadlift.gif?crop=1xw:1xh;center,top&resize=480:*',
        desc:"1. Stand with your feet shoulder width apart so that your feet are under the bar. \n\n 2. Keeping ypur back straight bend at the waist alow some bend in your knees. \n\n 3. Grasp the par with a overhand grip approximately 16 inches apart. \n\n 4. Straighten your back as you hold the bar at arms length. \n\n 5. Bend over again lowering he bar to just above this floor."        
      },
        
    
      {
        exeName:"BARBELL FRONT SQUAT",
        url:'',
        desc:"1. The front sqaut works the same muscles as the rear sqaut withput placing thw weight of the bar on your shoulders. This exercise can be a good subsitute for people with back and neck injuries. \n\n 2. Place the barbell on your chest resting it across ypur front deltoids and holding it with your arms crossed securely. \n\n  3. Keep your head and back straight abs drawn in and toes pointing slightly outward. \n\n 4. Slowly squat down so your upper thigh are parallel to  the floor. \n\n 5. Slowly return to the strating position. ",
        
      },
      {
        exeName:"BARBELL FULL SQUAT",
        url:'',
        desc:"1. This is the exercise for eg strengthening  mainly the quadriceps. \n\n 2. Lifting a barbell off a weight rack position it on your shoulder. \n\n 3. Place your feet slightly wider apart with your knees and toes pointed slightly outwrd. \n\n 4. Drawing your abs in descend slowly by bending at the knees and hips as if you are sitting down. \n\n 5. Lower yourself as far as you can control without letting your body shift towards your toes. \n Pause in the downward position and slowly return upright to the starting position."
      },
      {
        exeName:"BARBELL ROMANIAN DEADLIFT",
        url:'',
        desc:"1. Place a barbell in front of your feet on the ground. \n\n 2. Grasp the barbell with a grip a bit wider than shoulder width apart. \n\n 3. Bend your knees slightly keeping your hips and back straight. \n\n 4. Lift the bar straight up concentrating on using your hips as you stand. \n\n 5. Stand with the bar resting against your thighs. \n\n 6. Lower the bar to the  floor with a slight brnd in oyur knnes flexing your hips back for stablility."
      },
      {
        exeName:"DUMBBELL SINGLE LEG SPLIT SQUAT",
        url:'',
        desc:"1. Sqaut down by flexing knee and hip front leg untill knee of rear leg is almost in contact with floor. \n\n 2. Return to original standing position by extending hip and knee of forward leg. \n\n 3.Repeat and continue with opposite leg."
      },
      {
        exeName:"DUMBBELL SET UP",
        url:'',
        desc:'1. Place a bench, box or step infront of you. \n\n 2. Grasp a barbell with a wide grip and place it across your shoulders. \n\n 3. With your left leg, step up on the bench, and follow by stepping up eith your right leg. \n\n 4. Step down with your left leg and then your right leg. \n\n 5. Repeat starting with your right leg'
      },
    
      {
        exeName:"SINGLE LEG SQUAT",
        url:'',
        desc:'1. Stand on one leg with your foot pointing straight ahead and the knee of the other leg slightly bent. You can have your arms extended for balance or kept at your sides. Roll your shoulder blades back and keep your back straight. Keep your weight centered over the ball of your foot, your upper body erect, and your head facing forward. \n\n 2. Raise the non-supporting foot from the floor slightly. \n\n 3. Lower to a squat position, keeping the knee of the supporting leg centered over the ball of the foot. Start with shallow squats and work your way closer to the ground. \n\n 4. Repeat ' 
      },    
     {        
       exeName:"SLED HACK SQUAT",
        url:'',
        desc:'1. Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided. \n\n 2. Position your legs in the platform using a shoulder width medium stance with the toes slightly pointed out. \n\n 3. Place your arms on the side handles of the machine and disengage the safety bars. \n\n 4. Now straighten your legs without locking the knees. This will be your starting position. \n\n 5. Begin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees. Inhale as you perform this portion of the movement. \n\n 6. Begin to raise the unit as you exhale by pushing the floor with mainly with the heel of your foot as you straighten the legs again and go back to the starting position. \n\n 7. Repeat. '
      },
      {
        exeName:"LEVER SEATED LEG PRESS",
        url:'',
        desc:'1. Sit on machine with back on padded support. Place feet on platform. \n\n 2. Grasp handles to sides. \n\n 3. Push platform away by extending knees and hips. \n\n 4. Return and repeat the process.'
      },
      {
        exeName:"DUMBBELL WALKING LUNGES",
        url:'',
        desc:'1. Start by either placing a barbell across your upper back or by grasping a dumbbell in each hand. \n\n 2. Stand with your feet about 8 inches apart, toes facing forward. \n\n 3. Take a lunge forward keeping your abs drawn in and your upper body straight. \n\n 4. Slowly lower one knee down as if kneeling while keeping your other knee bent at a 90 degreee angle, do not let your knee touch the ground. \n\n 5. Lower your body to just above the floor and hold for a moment before pushing off with the back foot. \n\n 6. Step through and repeay the exercise with the other leg.'
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