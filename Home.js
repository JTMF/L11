import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    listStyle: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 12,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 16,
    },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
      fetch("https://7a08e18ccad84c968f6ccdc6967e9511.api.mockbin.io/")
          .then((response) => {
              return response.json()
          })
          .then((myJson) => {
              setMyData(myJson);
          })
  }, [])

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.email}</Text>
        <Text style={styles.text}>{item.phone}</Text>
    </View>
    );
  };

   return (
    <View style={styles.container}>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
