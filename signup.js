import React from 'react'
import { View, Text, StyleSheet,TextInput,ScrollView, TouchableOpacity  } from 'react-native'
 

export default function signup({navigation}) {
    const [name,setName] = React.useState('')
    const [address,setAddress] = React.useState('')
    const [contact,setPhoneNum] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [confirmPassword,setConfirmPassword] = React.useState('')

    const onPressSignup=()=>{
        if (name==='') {
            alert('Please input full name')
        }
        else if (address==='') {
            alert('Please input address')
        }
        else if (contact==='') {
            alert('Please input your Phone Number')
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

    const Button = ({title,onPress}) => {
        return (
          <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.btnText}>{title}</Text>
          </TouchableOpacity>
        )
    }
    

    return (
        <ScrollView style={styles.main}>
           < View style={styles.register}>
            <Text style={styles.textLabel}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
             onChangeText={text => setName(text)} 
            />   
          </View>

            <View style={styles.register}>
            <Text style={styles.textLabel}>Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Eg:Malepatan"
              onChangeText={text => setAddress(text)}
            />   
          </View>

          < View style={styles.register}>
            <Text style={styles.textLabel}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Eg:9806757117"
             onChangeText={text => setPhoneNum(text)} 
            />   
          </View>

            <View style={styles.register}>
            <Text style={styles.textLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Eg:example@abc.com"
              onChangeText={text => setEmail(text)}
            />   
          </View>

          < View style={styles.register}>
            <Text style={styles.textLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={text => setUsername(text)} 
            />   
          </View>

            <View style={styles.register}>
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="********"
              onChangeText={text => setPassword(text)}
            />   
          </View>
          <View style={styles.register}>
            <Text style={styles.textLabel}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="********"
              onChangeText={text => setConfirmPassword(text)}
            />   

          <Button title='Register'  color='black' onPress={onPressSignup}/>
          </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,

    }
    , textLabel:{
        letterSpacing:1.05,
        textTransform:'uppercase',
        paddingLeft:10
        
      },
      register:{
        marginVertical:8
      },
      textInput:{
         height: 50,
          borderColor: 'gray',
           borderWidth: 1,
         margin:10,
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
      }

});
