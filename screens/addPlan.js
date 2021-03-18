import React from 'react'
import { View, Text,TouchableOpacity, ToastAndroid } from 'react-native'
import setPlan from './setPlan'

export default function addPlan({navigation}) {
    const onAdd=()=>{
        navigation.navigate('setPlan')
        ToastAndroid.show(
            "Your Plan has been added!!.",
            ToastAndroid.SHORT
         )
    }

    const AddBtn = ({title,onPress}) =>{
        return(
            <TouchableOpacity onPress={onPress}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <AddBtn title='Add' onPress={onAdd}/>
        </View>
    )
}
