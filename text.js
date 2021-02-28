import React from 'react'
import { View, Text,StyleSheet} from 'react-native'

export default function Customtext({type,children,style}) {
    return (
        <View>
            <Text style={{...styles[type],...style}}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
regular:{
    fontFamily:'Roboto-Regular'
},
bold:{
    fontFamily:'Roboto-Bold'

},
boldItalic:{
    fontFamily:'Roboto-BoldItalic'
}
}
 )
 Customtext.defaultProps={
     type:'regular',
 };
