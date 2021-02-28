import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'

export default function setPlan() {
    return (
        <ScrollView style={styles.main}>
            <View style={styles.create}>
                <TouchableOpacity>
                <Image style={styles.img} source={{uri:'https://cdn1.iconfinder.com/data/icons/feather-2/24/plus-circle-256.png'}}/>
                <Text>Add task</Text>
                </TouchableOpacity>
            
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        //backgroundColor:'black',
    },
    create:{
        
        
    }, 
    img:{
    height:50,
    width:50,
   

}
   
    
});
