import React,{useState} from 'react';
import {Text,View,StatusBar,SafeAreaView,StyleSheet,Image, TextInput, Dimensions,TouchableOpacity,ScrollView, FlatList} from "react-native"
import AppImages from "../assets/images"
import {Button} from "react-native-paper"
const ExpenseTracker = ({navigation}) => {
    const {width} = Dimensions.get("window")
    const [AddAmount,setAddAmount] = useState(false)
    const Data = [
        {
            id:1,
            text:"hello"
        },
        {
            id:2,
            text:"hello"
        },
        {
            id:3,
            text:"hello"
        },
        {
            id:4,
            text:"hello"
        },
        {
            id:5,
            text:"hello"
        },
        {
            id:6,
            text:"hello"
        },
        {
            id:7,
            text:"Bhai"
        },
        {
            id:8,
            text:"Bhai"
        },
        {
            id:9,
            text:"Bhai"
        },
]
    return(
        <>
        {
            AddAmount===false?
            <>
            <StatusBar backgroundColor="#ddffbc" barStyle="dark-content"/>
            
            <SafeAreaView style={{flex: 1,backgroundColor:"#feffde"}}>
            
               <View style={{height:"23%",backgroundColor:"#ddffbc",borderBottomLeftRadius:60,borderBottomRightRadius:60}}>
                   <Text style={[styles.textStyle,{fontSize:25,color:"#206a5d"}]}>Monthly Income</Text>
                   <View style={{
                       marginTop:40,
          
                alignSelf:"center",height:160,width:160,borderRadius:80,backgroundColor:"#91c788"}}>
                        <Text style={[styles.textStyle,{
                            color:"white",
                            fontFamily:"serif",
                            fontWeight:"bold",
                            fontSize:25,
                            marginTop:"15%"
                            }]}>40000</Text>
                   </View>
               </View>
               
               
               <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                   <View style={{
                       width:150,
                       height:150,
                       backgroundColor:"#ddffbc",
                       alignSelf:"center",
                       margin:15,
                       borderTopLeftRadius:5,
                       borderTopRightRadius:40,
                       borderBottomLeftRadius:40,
                       borderBottomRightRadius:5,
                       marginTop:"10%"
                       }}>
                           <Text style={[styles.textStyle,{
                               marginTop:20,
                               marginHorizontal:10
                           }]}>Income Spend</Text>
                   </View>
                   <View style={{
                       width:150,
                       height:150,
                       backgroundColor:"#ffd3b4",
                       alignSelf:"center",
                       margin:15,
                       borderTopLeftRadius:40,
                       borderTopRightRadius:5,
                       borderBottomLeftRadius:5,
                       borderBottomRightRadius:40,
                       marginTop:"10%"
                       }}>
                           <Text
                            style={[styles.textStyle,{
                                marginTop:20,
                               marginHorizontal:10
                            }]}
                           >Income Saved</Text>
                       </View>
               </View>
         
               <View style={{flex:1,
                //marginTop:"3%",
                borderTopLeftRadius:40,
                borderTopRightRadius:40,
                backgroundColor:"#52734d"
                }}>
                    <Text style={[styles.textStyle,{margin:5,
                    padding:5,
                        color:"white"
                    }]}>Detail Description of Expenditure</Text>
                    <FlatList
                        data={Data}
                        renderItem={({item})=>{
                            return(
                                <View 
                                style={{
                                    margin:10,
                                    borderRadius:20,
                                    height:100,
                                    width:400,
                                    backgroundColor:"#feffde"
                                    }}>
                                    <Text>{item.text}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={({id})=>id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                <TouchableOpacity
                    style={{
                        backgroundColor:"#f8f5f1",
                        height:50,
                        marginHorizontal:20,
                        width:"90%",
                        margin:10,
                        borderRadius:20,
                    }}
                >
                        <Text
                            style={[styles.textStyle,{padding:10}]}
                        >Add Payment</Text>
                </TouchableOpacity>
               </View>
               
            </SafeAreaView>
           
            </>
            :
            <>
            <StatusBar backgroundColor="#2d232e" barStyle="light-content"/>
        <SafeAreaView style={{flex: 1,backgroundColor:"#2d232e"}}>
        <View style={{alignSelf:"flex-end"}}>
            <View style={{flexDirection:"row"}}>
            <Text style={[styles.textStyle,{fontSize:18,color:"white",justifyContent:"flex-end"}]}>
                Hello 
            </Text>
            <Image source={AppImages.avatar} 
                style={{height:60,width:60,borderRadius:30,marginHorizontal:5,alignSelf:"flex-end"}}
            />
            </View>
        </View>
            <Text style={[styles.textStyle,{color:"white",marginLeft:23}]}>My Wallet</Text>
            <View style={{backgroundColor:"#FBF0EE",marginTop:15,marginHorizontal:20,borderRadius:20}}>
                <Text style={styles.textStyle}>₹ 40000</Text>
            </View>
        <View style={{flex:1,backgroundColor:"white",marginTop:30,borderTopRightRadius:20,borderTopLeftRadius:20}}>
            <Text style={[styles.textStyle,{fontSize:27}]}>Add Expense</Text>
            <Text style={[styles.textStyle,{
                
                textAlign:"left",
                marginHorizontal:20,
                marginVertical:5,
                color:"#1e6091"
                }]}>Add Category</Text>
            <TextInput
                placeholder="Category"
                placeholderTextColor="white"
                style={{
                    height:50,
                    backgroundColor:"#99d98c",
                    borderRadius:20,
                    marginHorizontal:20,
                    padding:5,
                    paddingLeft:10,
                    fontFamily:"WastingerDisplayFreePersonal",
                    fontSize:16,
                    color:"white"
                }}
            />
            <Text style={[styles.textStyle,{
                
                textAlign:"left",
                marginHorizontal:20,
                marginVertical:5,
                color:"#1e6091"
                }]}>Add Expense
            </Text>
            <TextInput
                keyboardType="name-phone-pad"
                placeholder="Expense"
                placeholderTextColor="white"
                style={{
                    height:50,
                    backgroundColor:"#99d98c",
                    borderRadius:20,
                    marginHorizontal:20,
                    padding:5,
                    paddingLeft:10,
                    fontFamily:"WastingerDisplayFreePersonal",
                    fontSize:16,
                    color:"white"
                }}
            />
            <Text style={[styles.textStyle,{
                
                textAlign:"left",
                marginHorizontal:20,
                marginVertical:5,
                color:"#1e6091"
                }]}>Add Description
            </Text>
            <TextInput
                
                placeholder="Description on where spend"
                placeholderTextColor="white"
                style={{
                    height:50,
                    backgroundColor:"#99d98c",
                    borderRadius:20,
                    marginHorizontal:20,
                    padding:5,
                    paddingLeft:10,
                    fontFamily:"WastingerDisplayFreePersonal",
                    fontSize:16,
                    color:"white"
                }}
            />
            <TouchableOpacity style={{alignSelf:"center",marginTop:30,backgroundColor:"#2a9d8f",borderRadius:10}}>
                <Text style={[styles.textStyle,{padding:10,color:"white"}]}>Add Amount</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        </>
        }
        
        </>
    )
}

const styles = StyleSheet.create({
    textStyle:{marginTop:5,
        textAlign: 'center',
        padding:5,
        color:"black",
        fontSize:20,
        fontFamily:"WastingerDisplayFreePersonal-MVydr"
    }
})

export default ExpenseTracker