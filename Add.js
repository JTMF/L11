import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
});

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.label}>Username:</Text>
      <TextInput onChangeText={(text)=>setName(text)}/>
      <Text style={styles.label}>Email:</Text>
      <TextInput onChangeText={(text)=>setEmail(text)}/>
      <Text style={styles.label}>Phone:</Text>
      <TextInput onChangeText={(text)=>setPhone(text)}/>
      <Button title='Submit'
      onPress={()=>{
          if (!name || !email || !phone) {
              Alert.alert("Error", "Missing fields");
              return;
          }
          let mydata = JSON.parse(route.params.datastr);
          let item = {name: name, email: email, phone: phone};
          mydata.push(item);
          fetch("https://7a08e18ccad84c968f6ccdc6967e9511.api.mockbin.io/", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": "7a08e18ccad84c968f6ccdc6967e9511",
              },
              body: JSON.stringify(mydata)
          })
              .then((response) => navigation.navigate("Home"));
      }}
      />
    </View>
  );
};

export default Add;
