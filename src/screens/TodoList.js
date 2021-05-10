import React,{useState,useEffect} from "react"
import {Text,View,StatusBar,SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,ScrollView } from "react-native"
import {IconButton} from "react-native-paper"
import AppImages from "../assets/images"
import moment from "moment";
const TodoList = ({navigation}) => {
    const [isPressed,setisPressed] = useState(false)
    const [isDateEnabled,setisDateEnabled] = useState(false)
    const [ButtonPress,setButtonPress] = useState("")
    const [PriorityButton,setPriorityButton] = useState("")
    const PresentDay = moment().format('Do MMM ddd')
    const SecondDay = moment().add(1,'days').format('Do MMM ddd')
    const ThirdDay = moment().add(2,'days').format('Do MMM ddd')
    const FourthDay = moment().add(3,'days').format('Do MMM ddd')
    const FifthDay = moment().add(4,'days').format('Do MMM ddd')
    const SixthDay = moment().add(5,'days').format('Do MMM ddd')
    const [endDatePress,setendDatePress] = useState("")
    const date = [
        {
            id:1,
            newDate:PresentDay
        },
        {
            id:2,
            newDate:SecondDay
        },
        {
            id:3,
            newDate:ThirdDay
        },
        {
            id:4,
            newDate:FourthDay
        },
        {
            id:5,
            newDate:FifthDay
        },
        {
            id:6,
            newDate:SixthDay
        }
    ]
    const Priority = [
        {
            id:1,
            priority:5
        },
        {
            id:2,
            priority:4
        },
        {
            id:3,
            priority:3
        },
        {
            id:4,
            priority:2
        },
        {
            id:5,
            priority:1
        }
    ]
    return(
        <>
        
        {
            !isPressed ?
            <>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
        <View style={{alignSelf:"flex-end"}}>
        <View style={{flexDirection:"row"}}>
        <Text style={[styles.textStyle,{fontSize:18,color:"#ff6000"}]}>
            Hello 
        </Text>
        <Image source={AppImages.avatar} style={{height:60,width:60,borderRadius:30,marginHorizontal:5}}/>
        </View>
        </View>
        <Text style={[styles.textStyle,{textAlign:"left",fontSize:25,marginLeft:10}]}>
            Whats New Today?
        </Text>
        <View style={{backgroundColor:"#2d232e",borderTopLeftRadius:30,borderTopRightRadius:30}}>
            <View style={{flexDirection:"row",width:"100%"}}>
                <View style={{width:"50%",margin:5}}>
            <Text style={[styles.textStyle,{color:"white",textAlign:"left",margin:5}]}>Planning to add something</Text>
                </View>
                <View style={{width:"40%",margin:5}}>
                    <TouchableOpacity
                        onPress={()=>setisPressed(true)}
                    >
                    <Text
                        style={[styles.textStyle,{color:"white",borderRadius:10,padding:10,backgroundColor:"#ff6000"}]}
                    >+ Add Task</Text>
                    </TouchableOpacity>
                </View>
            </View>
        <View style={{backgroundColor:"white",borderTopLeftRadius:30,borderTopRightRadius:30}}>
            <Text style={styles.textStyle}>hi</Text>
            <Text style={styles.textStyle}>hi</Text>
            <Text style={styles.textStyle}>hi</Text>
            <Text style={styles.textStyle}>hi</Text>
        </View>
        </View>
        
        </SafeAreaView>
        </>
        :
        <>
        <StatusBar backgroundColor="#2d232e" barStyle="light-content"/>
        <SafeAreaView style={{flex: 1,backgroundColor:"#2d232e"}}>
        
        <IconButton
                color="white"
                icon="keyboard-backspace"
                size={30}
                onPress={()=>{
                    setisPressed(false)
                    setisDateEnabled(false)
                    setendDatePress("")
                }}
            />
        <View style={{alignSelf:"flex-end",position:"absolute"}}>
            <View style={{flexDirection:"row"}}>
            <Text style={[styles.textStyle,{fontSize:18,color:"white",justifyContent:"flex-end"}]}>
                Hello 
            </Text>
            <Image source={AppImages.avatar} 
                style={{height:60,width:60,borderRadius:30,marginHorizontal:5,alignSelf:"flex-end"}}
            />
            </View>
        </View>
        <Text style={[styles.textStyle,{color:"white",fontSize:25,textAlign:"left",marginLeft:10}]}>Create New Task</Text>
            <TextInput
                placeholder="Task Name"
                placeholderTextColor="white"
                textAlign="left"
                style={{
                    backgroundColor:"#474448",
                    marginHorizontal:20,
                    borderRadius:10,
                    marginTop:30,
                    fontFamily:"WastingerDisplayFreePersonal-MVydr",
                    fontSize:16,
                    paddingLeft:20,
                    color : "white"
                }}

            />
           <View  style={{
                    backgroundColor:"#474448",
                    marginHorizontal:20,
                    borderRadius:10,
                    marginTop:15,
                    paddingLeft:20
                }}>
            <IconButton
                color="#ff6000"
                icon="calendar-month"
                size={30}
                onPress={()=>setisDateEnabled(true)}
                style={{alignSelf:"flex-end"}}
            />
            
            </View>
            {
                isDateEnabled===true ?
                <>
                <View style={{flexDirection:"row"}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    {
                        date.map(e=>{
                            console.log(e)
                            return(
                                <View key={e.id} style={{margin:5,marginTop:15}}>
                                    <TouchableOpacity
                                    onPress={()=>setButtonPress(e.id)}
                        style={{
                            backgroundColor:ButtonPress===e.id?"#ff6000":"white",
                            borderRadius:10,
                            height:70,
                            width:100
                        }}
                    >
                                <Text
                                    style={[styles.textStyle,{color:ButtonPress===e.id?"white":"black"}]}
                                >{e.newDate} </Text>
                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                </View>  
                
                </>
                :
                null
            }
           
            <View style={{flex: 1,backgroundColor:"white",borderTopLeftRadius:15,borderTopRightRadius:15,marginTop:30
        }}>
 <ScrollView showsVerticalScrollIndicator={false}>
            <Text 
                style={[styles.textStyle,{textAlign:"left",marginHorizontal:20}]}
            >Description</Text>
            <TextInput
                placeholder="Add Description"
                style={{
                    backgroundColor:"#eaf2e9",
                    marginHorizontal:20,
                    borderRadius:10,
                    marginTop:10,
                    fontFamily:"WastingerDisplayFreePersonal-MVydr",
                    fontSize:16,
                    paddingLeft:20,
                    marginBottom:10
                }}
                multiline={true}
            />
            <Text 
                style={[styles.textStyle,{textAlign:"left",marginHorizontal:20}]}
            >Choose Priority
            </Text>
            <View style={{flexDirection:"row"}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {
                    Priority.map(e=>{
                        return(
                            <View key={e.id}>
                                <TouchableOpacity
                                    onPress={()=>setPriorityButton(e.id)}
                                    style={{
                                        height:50,
                                        width:50,
                                        borderRadius:25,
                                        backgroundColor:PriorityButton === e.id ? "#ff6d00" : "#474448",
                                        margin:5,
                                        marginHorizontal:20
                                    }}
                                >
                                    <Text style={[styles.textStyle,{color:"white"}]}>{e.priority}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                
                </ScrollView>
            </View>
                <Text 
                    style={[styles.textStyle,{textAlign:"left",marginHorizontal:20}]}
                >Set End Date</Text>
                <View style={{flexDirection:"row"}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {
                            date.map(e=>{
                                return(
                                    <View key={e.id}>
                                    <TouchableOpacity
                                        onPress={()=>setendDatePress(e.id)}
                                        style={{
                                            height:70,
                                            width:100,
                                            borderRadius:10,
                                            backgroundColor:endDatePress===e.id?"#E73D3B":"#474448",
                                            margin:5,
                                            marginHorizontal:20
                                        }}
                                    >
                                        <Text style={[styles.textStyle,{color:"white"}]}>{e.newDate}</Text>
                                    </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {
                    endDatePress != ""?
                    <TouchableOpacity
                        style={{marginHorizontal:20,marginVertical:10,marginTop:15,backgroundColor:"#F58A86",borderRadius:20}}
                    >
                        <Text style={[styles.textStyle,{color:"white",padding:10}]}>Add To Do</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </ScrollView>
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

export default TodoList;