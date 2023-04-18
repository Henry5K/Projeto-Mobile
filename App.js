import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import PaginaPrincipal from "./Paginas/Principal";
import RegistrarScreen from "./Paginas/Registro";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        options={{ headerShown: false }}
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Principal"
          component={PaginaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Registrar" component={RegistrarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Principal", { username: generateRandomUsername() });
  };

  const generateRandomUsername = () => {
    const usernames = [
      "ShadowHunter",
      "StormBlaze",
      "NightStalker",
      "MysticPhoenix",
      "DarkReaper",
    ];
    const randomIndex = Math.floor(Math.random() * usernames.length);
    return usernames[randomIndex];
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>MobileFIT</Text>
        <Text style={styles.subtitle}>Deixe sua saúde corporal em dia</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.secondaryButton, styles.outlineButton]}
          onPress={() => navigation.navigate("Registrar")}
        >
          <MaterialIcons
            name="person-add"
            size={24}
            color="#5cb85c"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText, styles.outlineButtonText]}>
            Registrar-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryButton, styles.greenButton]}
          onPress={handleLogin}
        >
          <MaterialIcons
            name="login"
            size={24}
            color="#fff"
            style={[styles.buttonIcon, styles.greenButtonText]}
          />
          <Text style={[styles.buttonText, styles.greenButtonText]}>
            Login rápido
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "sky",
    paddingHorizontal: 20,
  },

  titleContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  titleBold: {
    fontWeight: "bold",
    fontSize: 64,
  },

  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },

  buttonContainer: {
    marginBottom: 40,
  },

  secondaryButton: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#5cb85c",
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },

  buttonIcon: {
    marginRight: 10,
  },

  outlineButtonText: {
    color: "#5cb85c",
  },

  greenButton: {
    backgroundColor: "#5cb85c",
    borderColor: "#5cb85c",
  },

  greenButtonText: {
    color: "#fff",
  },
});