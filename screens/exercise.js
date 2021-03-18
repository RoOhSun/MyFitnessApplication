import React from 'react'
import {useDispatch} from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet ,Image,TouchableOpacity, Alert,ToastAndroid} from 'react-native'




export default function exercise({navigation}) {

    const dispatch = useDispatch()

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
    const onPressLogout=()=>{
        Alert.alert(
            'Logout',
        "Are you sure you want to log out!!",
        [
            {
            text:'Cancel',
            onPress:()=> console.log('Cancel'),
            style:'cancel',
        },
        {
            text: 'Ok',
            onPress: async ()=>{
                try{
                await AsyncStorage.removeItem('user',()=>{
                    dispatch({type: 'SET_LOGIN_STATUS', payload: false});
                    ToastAndroid.show(
                        "Log out Successfully",
                        ToastAndroid.SHORT,
                     );
                    })
                }
                    catch (e) {
                            console.log('Error')
                    }
                },
            },
        ],
        )
    }



        
    

    const HeadTitle=()=>{
        return(
          <View style={{
            paddingTop:10,
            height:50,
            backgroundColor:'black',
            flexDirection:'row',
            justifyContent: 'space-between'
          }}>
              <Text style={{color:'white', fontSize:25, fontWeight:'bold', paddingLeft:25}}>My Fitness</Text>
              <TouchableOpacity onPress={onPressLogout} style={{paddingRight:20}}><Image style={{height:30, width:30}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEiOE5jqv_WtAe_GB6YAS35gIwRKrHkqIcg&usqp=CAU'}}/>
                   </TouchableOpacity>
            </View>
        )
    }
    
    return (
        <ScrollView style={styles.main}>
            <HeadTitle/>
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
        margin:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:30,
        paddingTop:5,
        paddingBottom:1,
        alignItems:'center',
        zIndex:5
        
        
    },
 
    workout:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:20
        
        
    },
   
    img:{
       height:130,
       //width:350,
       paddingLeft:300,
      paddingRight:80,
       borderRadius:30,
        
        
    }
    
  
    
})

