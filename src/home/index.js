import { useEffect, useState } from "react";
import axios from "axios";
import { Text, View, Button } from "react-native";
import styles from "./styles";

function HomeScreen({ navigation }) {
  const [persons, setPersons] = useState([]);

  console.log(persons);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      setPersons(response.data.results);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Escolha um personagem:
     
        {persons.map((item, index) => {
          return (
                <Text key={index.name} style={{color: item.eye_color}} >Nome: {item.name} </Text>
                );
            })}
         
      </Text>
      <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
    </View>
  );
}

export default HomeScreen;
