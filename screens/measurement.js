import React,{Component} from 'react'
import {ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, Alert ,ToastAndroid} from 'react-native'



export default function measurement () {
   const [age,setAge] = React.useState('')
   const [height,setHeight] = React.useState('')
   const [weight,setWeight] = React.useState('')
   const [result,setResult] = React.useState('')
   const [weightType,setWeightType] = React.useState('')
   

   const onCalculate=()=>{
      if(age==''){
         alert('Please input age!!')
      }
      else if(height==''){
         alert('Please input height (cm)')
      }
      else if(weight==''){
         alert('Please input weight (kg)')
      }
      else{
        var bmi  = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      bmi = bmi.toFixed(2)
     // console.log(bmi);
      setResult(bmi);
      if(bmi<18.5){
         setWeightType('Under Weight')
      }
      else if(bmi>=18.5&&bmi<25){
         setWeightType('Normal Weight')
      }
      else if(bmi>=25&&bmi<30){
         setWeightType('Over Weight')
      }
      else if(bmi<=30){
         setWeightType('Obese')
      }
      else if(bmi>30){
         setWeightType('Mordibly Obese')
      }
      else{
         ToastAndroid.show(
            "Looks like you have entered wrong data.",
            ToastAndroid.SHORT
         )

      }
      
   }
}
  

   
      return (
         
         <ScrollView style = {styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <View style={styles.bmiCal}>
                
            <Text  style = {styles.label}>Age</Text>
            <TextInput style = {styles.input}
               keyboardType ='numeric'
               placeholder = "Age" 
               placeholderTextColor="gray"
               onChangeText={text => setAge(text)} 
              />

            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               keyboardType ='numeric'
               placeholder = "Height (Cm)" 
               placeholderTextColor="gray"
               onChangeText={text => setHeight(text)} 
              />

            <Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               keyboardType ='numeric'
               placeholder = "Weight (Kg)" 
               placeholderTextColor="gray"
               onChangeText={text => setWeight(text)} 
               />
            </View>
            <View style={styles.btn}>
            <TouchableOpacity onPress={onCalculate } style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
            <View style ={styles.result}>
               <Text style={styles.output}>Your BMI is {result}</Text>
               <Text style ={styles.resultText}>Type: {weightType}</Text>
            </View>
            </View>
            
</ScrollView>

      )
   
}


const styles = StyleSheet.create({
   container: {
      flex:1,
     backgroundColor:"#040408",
      
   },
   bmiCal:{
    backgroundColor:'transparent',
    margin:20,
    borderColor:'gray',
    borderWidth:2,
    borderRadius:30,
    paddingTop:10
    

   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderColor:'white',
      color:'white'
   

   },
   submitButton: {
    backgroundColor:'gray',
    height:50,
    color:"white",
    justifyContent:'center',
    //alignItems:'center',
    width:150,
    borderRadius:40,
    
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
     // fontWeight:"bold",
      fontSize: 18,
   },
  
   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
      color:"white"
   },
   btn:{
      alignItems:'center' 
   },
  

   label:{
      marginLeft: 15,
      color:'white'
   },
   output:{
      textAlign: "center",
      fontSize: 30,
      color:'#fff'
   },

   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: '#fff'
   }
})
