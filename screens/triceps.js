
import React, {useState} from "react";
import { View, Text,StyleSheet,Image,Modal,Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function triceps() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedExc,setSelectedExc] = useState({});

    const data = [
      {
        exeName:"BARBELL CLOSE GRIP BENCH PRESS",
        url:'https://gifimage.net/wp-content/uploads/2017/09/bench-press-gif-2.gif',
        desc:'',
      },
      {
        exeName:"BARBELL LYING TRICEPS EXTENSION",
        url:'',
        desc:"",
        
      },
      {
        exeName:"CABLE PUSHDOWN",
        url:'',
        desc:""
      },
      {
        exeName:"DIAMOND PUSH UP",
        url:'',
        desc:""
      },
      {
        exeName:"LEVER OVERHAND TRICEPS DIP",
        url:'',
        desc:""
      },
      {
        exeName:"WEIGHTED BENCH DIP",
        url:'',
        desc:''
      },
      {
        exeName:"WEIGHTED TRICEPS DIPS",
        url:'',
        desc:""
      },
      {
        exeName:"DUMBBELL SEATED TRICEPS EXTENSION",
        url:'',
        desc:''
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