import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';


export default function dashboard({navigation}) {
    const onMeasureClick=()=>{
        navigation.navigate('Measurement')
      }
    const onExerciseClick=()=>{
        navigation.navigate('Exercise')
    }
    const onPlanClick=()=>{
        navigation.navigate('SetPlan')
    }
    const onHireClick=()=>{
        navigation.navigate('HireTrainer')
    }

    return (
       

        <ScrollView style={styles.main}>
            <View style={styles.title}>
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25,color:'white'}}> My Fitness Application</Text>
            </View>
            <View style={styles.home} >
                <TouchableOpacity onPress={onMeasureClick} style={styles.button}><Image style={styles.img} source={{uri:'https://img.icons8.com/dotty/2x/bmi.png'}}/><Text style={styles.btnText}>Measurement</Text></TouchableOpacity>
                <TouchableOpacity onPress={onExerciseClick}style={styles.button}><Image style={styles.img} source={{uri:'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-exercise-icon-for-your-project-png-image_1597814.jpg'}}/><Text style={styles.btnText}>Exercise</Text></TouchableOpacity>          
            </View>
            <View style={styles.home} >
                <TouchableOpacity onPress={onPlanClick}style={styles.button}><Image style={styles.img} source={{uri:'https://img.icons8.com/dotty/2x/bmi.png'}}/><Text style={styles.btnText}>Set Plan</Text></TouchableOpacity>
                <TouchableOpacity onPress={onHireClick}style={styles.button}><Image style={styles.img} source={{uri:'https://img.icons8.com/dotty/2x/bmi.png'}}/><Text style={styles.btnText}>Hire a trainer</Text></TouchableOpacity>          
            </View>
        

        </ScrollView>
        
        
    )
    
}
const styles = StyleSheet.create({
    main:{
        flex:1,
       backgroundColor:'#29636e'

    },
    img:{
        height:100,
        width:100,
        borderRadius:80,
    },
    title:{
        flex:1,
        margin:10

    },
    home:{
        flexDirection:'row',
        justifyContent:'space-evenly', 
    },
    button:{
        borderWidth:1,
        borderRadius:100,
        height: 150,
        justifyContent:'center',
        alignItems:'center',
        width:'40%',
        margin:15,
        backgroundColor:'white'
    },
    btnText:{
        fontWeight:'bold',
        fontSize:15
    }
   

})