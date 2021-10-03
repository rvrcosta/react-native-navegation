import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => { 
    const numero = props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0
    return (
        <View style={{flex:1}}>            
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <Button title='Abrir' onPress={()=>{
                        props.navigation.openDrawer()
                        setTimeout(()=>{
                            props.navigation.closeDrawer()
                            setInterval(()=>{
                                props.navigation.toggleDrawer()
                            },1000)
                        },3000)
                    }} />
                
            </View>
            <View style={{flex:1}}>
                <TextoCentral corFundo={'#33fa72'} CorTexto={'#000'}>Tela D = {numero}</TextoCentral>
            </View>
        </View>
    )
}