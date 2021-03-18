import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function aboutUs() {
    return (
        <ScrollView style= {styles.main}>
            <View style={styles.head}>
            <Text style={styles.title}>My Fitness Application</Text>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'black'

    },
    title:{
    color:'white',
    textAlign:'center',
    fontSize:26,
    }

})