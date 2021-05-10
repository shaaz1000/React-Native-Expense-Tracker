import React from 'react';
import {Text,View,SafeAreaView,StatusBar,Image} from "react-native"
import {BoxComponent} from "../commonComponents/BoxComponent"
import AppImages from "../assets/images"
const HomeScreen = ({navigation}) => {
    return(
        <>
        <StatusBar backgroundColor="#b5e48c" barStyle="light-content"/> 
        <SafeAreaView style={{flex: 1,backgroundColor:"#b5e48c"}}>
        <View style={{backgroundColor:"#b5e48c",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <Text
                style={{
                    marginHorizontal:25,
                    padding:5,
                    color:"white",
                    fontSize:70,
                    fontFamily:"ReflisattaItalic-PKyom"
                }}
            >Hey There !</Text>
            <Text style={{marginTop:5,
                    marginHorizontal:25,
                    padding:5,
                    color:"#184e77",
                    fontSize:25,
                    fontFamily:"WastingerDisplayFreePersonal-MVydr"
                }}>Welcome to a new journey</Text>
            <Text style={{marginTop:5,
                    marginHorizontal:25,
                    padding:5,
                    color:"white",
                    backgroundColor:"#184e77",
                    margin:5,
                    textAlign:"center",
                    borderRadius:20,
                    fontSize:25,
                    fontFamily:"ReflisattaItalic-PKyom"
                }}>Get Started</Text>
        </View>
        <View style={{flex:1,backgroundColor:"white",borderTopLeftRadius:20,borderTopRightRadius:20}}>
            <View style={{flexDirection:"row",marginTop:20}}>
                <BoxComponent text="To do List" Source={AppImages.todo} Navigate={()=>navigation.navigate("To do")}/>
                <BoxComponent text="Goal" Source={AppImages.goal}/>
               
            </View>
            <View style={{flexDirection:"row",marginTop:20}}>
                <BoxComponent text="Business Idea" Source={AppImages.business}/>
                <BoxComponent text="Expenditure" Source={AppImages.business} Navigate={()=>navigation.navigate("Expense")}/>
                
            </View>
            <BoxComponent text="Demo" Source={AppImages.business} Navigate={()=>navigation.navigate("Demo")}/>
        </View>
        </SafeAreaView>
        </>
    )
}
export default HomeScreen;