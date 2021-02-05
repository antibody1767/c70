
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchScreen from "./screens/searchS"
import TransactionScreen from "./screens/transactionS"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"


export default class App extends Component {
render(){
  return(
    <AppContainer/>
  )
}
}
const TabNavigator = createBottomTabNavigator({
  TransactionScreen: {
    screen: TransactionScreen
  },
  SearchScreen:{
    screen : SearchScreen
  }
},{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if (routeName ==="TransactionScreen"){
        return(<Image style = {{width:40, height:40}} source={require("./assets/book.png")}/>)
      }else if (routeName=== "SearchScreen"){
        return(<Image style = {{width:40, height:40}} source={require("./assets/searchingbook.png")}/>)
      }
    }
  })
})
var AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
