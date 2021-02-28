import React from 'react'
import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'



export default function exercise({navigation}) {
    const onPressBack=()=>{
        navigation.navigate('back')
    }
    const onPressChest=()=>{
        navigation.navigate('chest')
    }
    const onPressBiceps=()=>{
        navigation.navigate('biceps')
    }
    const onPressShoulder=()=>{
        navigation.navigate('shoulder')
    }
    const onPressLegs=()=>{
        navigation.navigate('legs')
    }
    const onPressTriceps=()=>{
        navigation.navigate('triceps')
    }
    const onPressAbs=()=>{
        navigation.navigate('abs')
    }
    
    return (
        <ScrollView style={styles.main}>
            <View style={styles.exe}>
            <TouchableOpacity onPress={onPressBack} style={{}}><Image style={styles.img}source={{uri:'https://www.muscleandfitness.com/wp-content/uploads/2014/09/back-pose.jpg?quality=86&strip=all'}}/><Text style={styles.workout}> BACK </Text></TouchableOpacity>
            
            </View>

            <View style={styles.exe}>
            <TouchableOpacity onPress={onPressChest} style={{}}><Image style={styles.img} source={{uri:'https://t4.ftcdn.net/jpg/01/55/60/55/360_F_155605563_1dCLA8nFPPc7DJkp7qkbfzjzKFxrqeKi.jpg'}}/><Text style={styles.workout}> CHEST </Text>
            </TouchableOpacity>
         

            </View>

            <View style={styles.exe}>
            <TouchableOpacity  onPress={onPressBiceps} style={{}}><Image style={styles.img} source={{uri:'https://wallpaperaccess.com/full/720234.jpg'}}/><Text style={styles.workout}> BICEPS </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.exe}>
            <TouchableOpacity   onPress={onPressLegs} style={{}}><Image style={styles.img} source={{uri:'https://barbend.com/wp-content/uploads/2019/04/Lower-Body-Exercises-for-Mass.jpg'}}/><Text style={styles.workout}> LEGS </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.exe}>
            <TouchableOpacity   onPress={onPressShoulder} style={{}}><Image style={styles.img} source={{uri:'https://image.freepik.com/free-photo/sexy-young-athlete-posing-black-background-studio-fitness-bodybuilding-black-white_180601-3070.jpg'}}/><Text style={styles.workout}> SHOULDER </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.exe}>
            <TouchableOpacity  onPress={onPressTriceps} style={{}}><Image style={styles.img} source={{uri:'https://manofmany.com/wp-content/uploads/2020/01/triceps-workout-logo.jpg'}}/><Text style={styles.workout}> TRICEPS </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.exe}>
            <TouchableOpacity   onPress={onPressAbs} style={{}}><Image style={styles.img} source={{uri:'https://t4.ftcdn.net/jpg/03/13/31/37/360_F_313313789_kDWWUGEpBiZau4uvhjXKasszScA01ORc.jpg'}}/><Text style={styles.workout}> ABS </Text>
            </TouchableOpacity>
            </View>

            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"black",
        
        
    },
    exe:{
       //flexDirection:'row',
        margin:2,
        borderColor:'white',
        borderWidth:1,
        borderRadius:30,
        paddingTop:5,
        paddingBottom:1,
        alignItems:'center',
        zIndex:5
        
        
    },
   /* exeOverlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        

    },*/
    workout:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:20
        
        
    },
   
    img:{
        height:120,
       paddingLeft:300,
       paddingRight:80,
       borderRadius:30,
        
        
    }
    
  
    
})

