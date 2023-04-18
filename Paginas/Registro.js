import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Global from '../global';

export default function Registro() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (username.length < 3 || username.length > 10) {
      Alert.alert("⚠ Erro!", "Adicione um username entre 3 e 10 caracteres!");
      return;
    }

    if (password.length < 10 || password.length > 20) {
      Alert.alert("⚠ Erro!", "Adicione uma senha entre 10 e 20 caracteres!");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("⚠ Erro!", "Adicione um email válido!");
      return;
    }

    Global.user = username;
    navigation.navigate("Principal", { username: username });
    Alert.alert("Sucesso!", "Registrado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar-se</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="person"
          size={24}
          color="green"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={24}
          color="green"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="lock"
          size={24}
          color="green"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 120,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    color: "black",
    alignSelf: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "darkgreen",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
    backgroundColor: "#f7f7f7",
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  button: {
    backgroundColor: "green",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});