import  React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,ScrollView,Image } from 'react-native';


const Login=({navigation})=> {

  const [username,setUsername]  = React.useState('')
  const [password,setPassword] = React.useState('')


 const onLogin = () => {
   if(username === '') {
     alert('Username cannot be empty')
     return ;
   }

   if(password === '') {
         alert('Password cannot be empty') 
         return ;
   }
  // alert('Successful login')
  navigation.navigate('dashboard',//{ name:username} 
  )
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
      <View>
      <Image style={styles.img} source={{uri:'https://www.kindpng.com/picc/m/75-754395_transparent-login-icons-png-business-user-png-download.png'}}/>
      </View>
     
      <View style={styles.form}>
          <View style={styles.formInputWrapper}>
            <Text style={styles.textLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Username"
              onChangeText={text => setUsername(text)} 
            />   
          </View>

            <View style={styles.formInputWrapper}>
            <Text style={styles.textLabel}>Password</Text>
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop:25,
    paddingBottom:10
  },
 
  form:{
    marginBottom:10
  },
  textLabel:{
    letterSpacing:1.05,
    textTransform:'uppercase'
  },
  formInputWrapper:{
    marginVertical:10
  },
  textInput:{
     height: 40, borderColor: 'gray', borderWidth: 1,
     padding:5,margin:10
  },
  btn:{
    backgroundColor:'black',
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
    textTransform:'uppercase'
  },
  signup:{
    textAlign:'center',
    marginTop:15
  },
  img:{
    height:100,
    width:100,
    borderRadius:80,
    alignSelf:'center',
  },
 
});
