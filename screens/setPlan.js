import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import addPlan from './addPlan';

export default function setPlan({navigation}) {

    const AddBtn = ({onPress}) => {
        return(
            <TouchableOpacity onPress={onPress} style={styles.addBtn}>
                <Image style={styles.img} source={{uri:'https://icons-for-free.com/iconfiles/png/512/add+board+new+plus+icon-1320186882821780394.png'}}/>
            </TouchableOpacity>
        )
    }

    const onAdd= () =>{
        navigation.navigate('addPlan');
    }
    return (
        <View style={styles.main}>
        
            <View style ={{flex:1,flexDirection:'column-reverse',alignItems:'flex-end', paddingBottom:10,}}>
            <View style={styles.flat}>
                <AddBtn onPress={onAdd}/>
            </View>
            </View>
            </View>

      
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
         backgroundColor:'black'
    },
    flat:{
        width:100,
        height:100, 
        // backgroundColor:'#fff',
        // borderRadius:50,
       },
    addBtn:{
     width:100,
     height:100,   
     borderRadius:50,
    //  backgroundColor:'#fff',
    //  borderWidth:1,
    //  borderColor:'red',
    
    },
    img:{
    height:125,
    width:125,
}
   
    
});
