import React from "react"
import {Text,View,Dimensions, Image,TouchableOpacity} from "react-native"

const {width} = Dimensions.get("window")
export const BoxComponent = ({text,Source,Navigate}) => {
    return(
        <>
        <TouchableOpacity onPress={Navigate}>
        <View style={{width:width/2.1,backgroundColor:"#34a0a4",height:90,padding:5,borderRadius:20,margin:5}}>
            <View style={{flexDirection:"row",width}}>
            
                <Image 
                    source={Source} 
                    style={{height:50,width:50,margin:5,borderRadius:10}}
                />
            
            <Text style={{
                
                textAlign:"center",
                textAlignVertical:"center",
                fontSize:18,
                fontWeight:"bold",
                color:"white"
            }}>{text}</Text>
            </View>
            
        </View>
        </TouchableOpacity>
        </>
    )
}