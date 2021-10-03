import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../components/PassoStack";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
    screenOptions={{headerShown: true}}>
        <Stack.Screen 
        name="TelaA" 
        options={{title:'Opção A',}}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
        name="TelaB"         
        options={{title:'Opção B',}}>
            {props => (
                <PassoStack {...props} avancar="TelaC" avancarParams={{numero: parseInt(Math.random()*100)}} voltar>
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
        name="TelaC"         
        options={{title:'Opção C',}}>
            {props => (
                <PassoStack {...props} avancar="TelaC" 
                    avancarParams={{numero: parseInt(Math.random()*100)}} voltar>
                    <TelaC {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)