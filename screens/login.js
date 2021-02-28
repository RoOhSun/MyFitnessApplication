import  React from 'react';
import {  View, StyleSheet,TextInput,TouchableOpacity,ScrollView,Image } from 'react-native';
import Text from '../text'
import {useSelector,useDispatch} from 'react-redux'
import { setUser } from '../src/store/actions/user.action';
import AsyncStorage from '@react-native-async-storage/async-storage';



const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}


const Login=({navigation})=> {

  const [username,setUsername]  = React.useState('')
  const [password,setPassword] = React.useState('')


  const state = useSelector(state => state.login)
  const dispatch = useDispatch()

  console.log(state)

 const onLogin = () => {
   if(username === '') {
     alert('Username cannot be empty')
     return ;
   }

   if(password === '') {
         alert('Password cannot be empty') 
         return ;
   }

   dispatch(setUser(username))
  
  //  storeData('user', username);
  navigation.navigate('dashboard' )
 }

 const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
    <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
  }

  const signupClick=()=>{
    navigation.navigate('signup')
  }



  return (
    <ScrollView style={styles.container}>
      <View style={styles.tip}>
      <Text style={styles.tip1}>Welcome To  MyFitness Application</Text>
      <Image style={styles.img} source={{uri:'https://www.nicepng.com/png/detail/177-1771194_workout-png.png'}}/>
      </View>
      
     
      <View style={styles.form}>
          <View style={styles.formInputWrapper}>
            <Text style={styles.text}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Username"
              onChangeText={text => setUsername(text)} 
            />   
          </View>

            <View style={styles.formInputWrapper}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
            />   
          </View>

          <Button title="Login" style={styles.loginBtn} color="black" onPress={onLogin}/>
            <Text style={styles.signup}>Dont have any account? <TouchableOpacity onPress={signupClick} style={{}}><Text >Sign up</Text></TouchableOpacity></Text>
        </View>
  </ScrollView>
  );
 
}



export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#e6e6e6",
    paddingHorizontal: 10,
    paddingTop:50,
    
  },
  tip:{
    alignItems:'center'

  },
  tip1:{
    fontWeight:'bold',
    fontSize:22
    

  }
  ,
  img:{
    
    height:300,
    width:300,
    borderRadius:120,
    alignSelf:'center',
    resizeMode:'center'
  },
  form:{
    backgroundColor:'transparent',
    margin:20,
    borderColor:'#455a64',
    borderWidth:1,
    borderRadius:30,
    paddingTop:10

    
  },
  text:{
    paddingTop:5,
    paddingLeft:5,
    letterSpacing:1.05,
    textTransform:'uppercase',
    color:'black'
    

  },
  formInputWrapper:{
    marginVertical:10
  },
  textInput:{
     height: 40,
      borderColor: 'black',
      borderWidth: 1,
     padding:5,
     margin:10,
     
  },
  btn:{
    backgroundColor:'green',
    height:50,
    color:"white",
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    borderRadius:40,

  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',

  },
  signup:{
    textAlign:'center',
    marginTop:15
  },
  
 
});
