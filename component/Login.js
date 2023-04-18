import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import React from 'react';
export default function Login() {
    const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('../assets/LoginPage.png')} style={{width: '100%', height: '100%', marginTop:70}}>
      <Text style={styles.loginTitle}>Login</Text>
      <View  style={styles.inputBox}>
            <TextInput
            style={styles.input}
            label="Email"
            secureTextEntry
            right={<TextInput.Icon icon="email" />}
            />
            <TextInput
            style={styles.input}
            label="password"
            secureTextEntry
            right={<TextInput.Icon icon="lock" />}
            />
      </View>
      <View style={styles.pw}>
        <Text>forgot password?</Text>
      </View>
      <View style={styles.btn}>
      <Button icon="login" mode="contained" buttonColor='#fff' textColor='#000' style={styles.btnstyle} onPress={() => console.log('Pressed')}>
    Login
  </Button>
      </View>
      <View style={styles.OR}>
      <Text numberOfLines={1}>               
    _______________
</Text>
<Text>               
     OR 
</Text>
<Text numberOfLines={1}>               
    _______________
</Text>
      </View>
      <View style={styles.btn2}>
      <Button icon="google" mode="contained" buttonColor='#fff' textColor='#000' style={styles.btnstyle2} onPress={() => console.log('Pressed')}>
    Login with google
  </Button>
      </View>
      <View style={styles.new}>
        <Text>New User? Click here</Text>
      </View>
  </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle:{
    fontSize:50,
    color:'#fff',
    position:'relative',
    top:'10%',
    left:'10%',
    fontWeight:700,

  },
  input:{
    backgroundColor:"#fff",
    marginTop:'5%'
  },
  inputBox:{
    position: "relative",
    top: "20%",
    width:"80%",
    left:"10%",
  },
  pw:{
    
    position:'relative',
    top:"23%",
    left:"60%"
  },
  btn:{
    position:'relative',
    top:"25%",
  },
  btn2:{
    position:'relative',
    top:"35%",
  },
  btnstyle:{
    width:100,
    marginLeft:"auto",
    marginRight:"auto",
  },
  btnstyle2:{
    width:200,
    marginLeft:"auto",
    marginRight:"auto",
  },
  OR:{
    display:'flex',
    flexDirection:'row',
    position:'relative',
    top:"60%",
    marginRight:"auto",
    marginLeft:"auto",
  },
  new:{
    position:'relative',
    top:"50%",
    marginRight:"auto",
    marginLeft:"auto",
  }
});

