import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'


export default function App(){
    const [peso, setPeso] = useState('') 
    const [altura, setAltura] = useState('')

function handleSubmit(){  //quando clicar no botão, irá exibir uma tela, foi criado abaixo "onPress={handleSubmit}"
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if(imc < 18.6){
        alert('Você está abaixo do peso! ' + imc.toFixed(2)) //toFixed(2) é para pegar somente duas casas decimais
    }else if(imc >= 18.6 && imc < 24.9){
        alert('Peso ideal!' + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
        alert('Levemente acima do peso!' + imc.toFixed(2))
    }
}

 return(
<View style={styles.container}>
    <Text style={styles.title}>Calcule seu IMC</Text>


<TextInput
style={styles.input}
value={peso}
onChangeText={ (peso) => setPeso(peso) }
placeholder="Peso (kg)"
keyboardType="numeric" //Para abrir automaticamente teclado número
/>

<TextInput
style={styles.input}
value={altura}
onChangeText={ (altura) => setAltura(altura) }
placeholder="Altura (cm)"
keyboardType="numeric" //Para abrir automaticamente teclado número
/>


<TouchableOpacity 
style={styles.button}
onPress={handleSubmit} //para chamar algo quando clicar no botão (é uma função)

>
    
    <Text style={styles.buttontext}>Calcular</Text>
</TouchableOpacity>


</View>
 )
}

const styles = StyleSheet.create({
 container:{
     flex:1,
     backgroundColor: '#4A6AAA'
 },
    title:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 60,
        color: '#fff'
 },
   input:{
       backgroundColor: '#fff',
       margin: 15,
       padding: 5,
       fontSize: 15
   },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 20,
       borderTopRightRadius: 20,
       borderBottomLeftRadius: 20,
       borderBottomRightRadius: 20,
        
    },
     buttontext:{
         fontSize: 15
     }

 
})

// Desenvolvido através do curso @programadorviking