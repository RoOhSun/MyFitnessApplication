import React from 'react'
import { View, Text, StyleSheet,TextInput,ScrollView, TouchableOpacity  } from 'react-native'
 

export default function signup({navigation}) {
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [confirmPassword,setConfirmPassword] = React.useState('')

    const onPressSignup=()=>{
        if (name==='') {
            alert('Please input full name')
        }
       
        else if (email==='') {
            alert('Please input your Email')
        }
        else if (username==='') {
            alert('Please input username')
        }
       else if (password==='') {
            alert('Please input password')
        }
        else if (confirmPassword==='') {
          alert('Please confirm password')
      }
      else {
            alert('Register Successful');
            navigation.navigate('login')
        }     
    }
    const onPressCancel=()=>{
      navigation.navigate('login')
    }

    const Button = ({title,onPress}) => {
        return (
          <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.btnText}>{title}</Text>
          </TouchableOpacity>
        )
    }
    

    return (
        <ScrollView style={styles.main}>
          <Text style={styles.header}>Register an Account!!!</Text>
           < View style={styles.register}>
            <Text style={styles.textLabel}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
             onChangeText={text => setName(text)} 
            />   
            
            <Text style={styles.textLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Eg:example@abc.com"
              onChangeText={text => setEmail(text)}
            />   
         
            <Text style={styles.textLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={text => setUsername(text)} 
            />   
          
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="********"
              onChangeText={text => setPassword(text)}
            />   
          
          
            <Text style={styles.textLabel}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="********"
              onChangeText={text => setConfirmPassword(text)}
            />   
          </View>
          <View style={styles.btnView}>
          <Button title='Register'  onPress={onPressSignup}/>
          <Button title='Cancel'   onPress={onPressCancel}/>
          </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#e6e6e6",
        

    },
    header:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:26,
      padding:25,
    }
    , textLabel:{
        letterSpacing:1.05,
        paddingLeft:10
        
      },
      register:{
        margin:20,
        borderColor:'#455a64',
        borderWidth:1,
        borderRadius:30,
        paddingTop:25, 
        paddingBottom:25,
      },
      textInput:{
         height: 50,
          borderColor: 'gray',
           borderWidth: 1,
         margin:10,
      },
      btn:{
        backgroundColor:'grey',
        height:50,
        width:150,
        color:"white",
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        borderRadius:40,
      
    
      },
      btnText:{
        color:'black',
        fontWeight:'bold',
        textTransform:'uppercase',
        
      },
      btnView:{
        flexDirection:'row',
        justifyContent:'space-around'
        
      }

});
