
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles";


function Contact() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Contato</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default Contact