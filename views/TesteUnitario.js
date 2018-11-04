import React, {Component} from "react";
import {View, Text} from "react-native";

export default class TesteUnitario extends Component{

    somar(x,y){
        return x + y;
    }

    render(){
        return(
            <View>
                <Text>Teste Unitário</Text>
            </View>
        )
    }
}