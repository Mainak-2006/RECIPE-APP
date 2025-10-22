import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.text}>Recipe App</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginTop:5,
        flex:1,   
    },
    text:{
        color:"blue",
        fontSize:25,
        fontWeight:"bold"
    }
})
