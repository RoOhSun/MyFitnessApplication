
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function biceps() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BARBELL STANDING WIDE-GRIP CURL",
        url:'https://i.pinimg.com/originals/51/83/ee/5183ee528289737d4abf732f24630b1d.gif',
        desc:"1. Start off standing with your feet shoulder width apart, your knees slightly bent and your abs drawn in. \n\n 2. Grap a barbell with an underhand grio as wide as your comfortably can and extend your arms fully against your thighs. \n\n 3. Keeping your elbows straight, raise the bar towards your chest till your forearms touch your chest, squeezing your bicep muscle. \n\n 4. Pause for moment and then return to the starting position. \n\n 5. Repeat"
        
      },
      {
        exeName:"DUMBBELL ALTERNATE BISCEPS CURL",
        url:'https://shredzonefitness.files.wordpress.com/2019/04/bicep-curls.gif?w=364&h=204',
        desc:"1. Stand with your feet shoulder width apart, your knees slightly bent and your abs drawn in. \n\n 2. Grasp a dumbbell in each hand so your palms are facing up. \n\n 3. Extend your arms so they are at the sides of your body. \n\n 4. Keeping your elbows locked lift your left arm to your chest so that your forearm touches your bicep. \n\n 5. Lower your arm and repeat with your right arm. \n\n Note: Do not swing your body as your perform this exercise."
      },
      {
        exeName:"DUMBBELL INCLINE HAMMER CURL",
        url:'https://qph.fs.quoracdn.net/main-qimg-ff4a05d30c7719edc6456e996bad640f',
        desc:"1. Seated on an incline bench and learning back with your head rested, hold a dumbbell in each hand. \n\n 2. Beginning with your arms at your sides and palms facing inwards, flex your elbow and raise the dumbbells to your shoulder. \n\n 3. Lower to the original position. \n\n 4. Repeat. "
      },
      {
        exeName:"DUMBBELL INCLINE INNER BISCEPS CURL",
        url:'https://3.bp.blogspot.com/--aJR7Z3F2QY/W03sp7lEfCI/AAAAAAAASx0/7BE57n127xA_Cb60KvkrVteIDTad5dgWQCLcBGAs/s1600/inclined%2Bdumbbell%2Bcurls.gif',
        desc:"1. Sit on an inclined bench with a dumbbell in each hand, holding them at arm’s length. Try keeping your elbows close to your torso and rotate the palms of your hands until they are facing forward. This is your starting position. \n\n 2.Keep your upper arm stationary and curl the weights forward while contracting the biceps as you breathe out. Make sure that only the forearms are moving. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second. \n\n 3. Slowly begin to bring the dumbbells back to starting position as you breathe in. \n\n 4. Repeat. "
      },
      {
        exeName:"DUMBBELL ZOTTMAN CURL",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicep-curl.gif?resize=480:*',
        desc:"1. Keeping your back straight, contract your biceps to curl the dumbbells upwards. \n\n 2. Squeeze your biceps hard at the top and twist your hands so that your palms face downwards. \n\n 3. Slowly lower the dumbbells to the starting position and twist your hands so thatb your palms are facing forward again. \n\n 4. Repeat this motion."
      },
      {
        exeName:"EZ BARBELL CURL",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/ez-bar-curl.gif?resize=480:*',
        desc:"Stand with your feet shoulder width apart at your knnes slightly bent. \n\n 2. Grasp the barbell with palms up. \n\n 3. Lower your elbows still, raise the bar up to your chest so that your forearms touch your biceps. \n\n Note: Lean up against a wall or post to keep yourself from swaying."
      },
      {
        exeName:"CABEL OVERHEAD CURL",
        url:'https://blogstudio.s3.amazonaws.com/uprise-nutrition/cc090cd4717082f391f4bfecc8285687.gif',
        desc:"1. Using cable this exercise isolates and defines the bisceps muscle. \n\n 2. Attach a stirrup handle to each side of a high pulley on a cable machine. \n\n 3. Grasp the handle with palms facing up and stand with your feet shoulder width apart. \n\n 4. Extend your arms fully to each side. \n\n 5. Keeping your elbow steady, curl your wrists towards the side of your head. \n\n 6. Contract your biceps and pause for a moment. \n\n 7.Return to the starting position and Repeat."
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