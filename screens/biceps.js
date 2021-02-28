
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function biceps() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"Barbell Standing Wide-grip Curl",
        url:'https://i.pinimg.com/originals/51/83/ee/5183ee528289737d4abf732f24630b1d.gif',
        
      },
      {
        exeName:"Dumbell Alternate Bisceps Curl",
        url:'https://shredzonefitness.files.wordpress.com/2019/04/bicep-curls.gif?w=364&h=204'
      },
      {
        exeName:"Dumbell Incline Hammaer Curl",
        url:'https://lh3.googleusercontent.com/proxy/OS1XlPoSaNmHLn45nTPswxcs0iQzrQ8Rsp4g8aRL97f2Ze5HxVvxiE9YmBWwp-cGUzh5GCMVB__KiHSJaN5F-s5A0csgbnt-yX0Lw_VnrnqIJdszTn7qlMwd863xs690BUGi0zjuMQ'
      },
      {
        exeName:"Dumbbell Incline Inner Biceps Curl",
        url:'https://3.bp.blogspot.com/--aJR7Z3F2QY/W03sp7lEfCI/AAAAAAAASx0/7BE57n127xA_Cb60KvkrVteIDTad5dgWQCLcBGAs/s1600/inclined%2Bdumbbell%2Bcurls.gif'
      },
      {
        exeName:"Dumbell Zottman Curl",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicep-curl.gif?resize=480:*'
      },
      {
        exeName:"EZ Barbell Curl",
        url:'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/ez-bar-curl.gif?resize=480:*'
      },
      {
        exeName:"Cabel Overhead Curl",
        url:'https://blogstudio.s3.amazonaws.com/uprise-nutrition/cc090cd4717082f391f4bfecc8285687.gif'
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