import React, { useState } from "react";
import { View, Text, Image, Alert, StyleSheet, FlatList, TouchableOpacity, ScrollView, } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    id: "1",
    title: "Alongamento",
    description: "Exercício que visa aumentar a flexibilidade e prevenir lesões musculares. 2 sets por músculo.",
    fullDescription: "Escolha o músculo ou grupo muscular que deseja alongar. Mantenha a posição de alongamento por cerca de 15 a 30 segundos. Evite fazer movimentos bruscos e respire fundo enquanto mantém a posição.",
    image: require("../Imagens/alongamento.jpg"),
    calorias: 100,
    tempo: 10,
  },
  {
    id: "2",
    title: "Peito - Flexão nível 1",
    description: "Fortalece o peitoral, ombros e tríceps. 5 sets até a falha.",
    fullDescription: "Comece em posição de prancha, com as mãos ligeiramente mais largas que a largura dos ombros e com os joelhos no chão. Mantenha as costas retas e abaixe o corpo, dobrando os cotovelos, até que o peito quase toque o chão. Empurre o corpo para cima, voltando à posição inicial. Descanso entre sets de 30s a 1min.",
    image: require("../Imagens/flexao-1.jpg"),
    calorias: 70,
    tempo: 10,
  },

  {
    id: "3",
    title: "Peito - Flexão nível 2",
    description: "Fortalece o peitoral, ombros e tríceps. 5 sets até a falha.",
    fullDescription: "Comece em posição de prancha, com as mãos ligeiramente mais largas que a largura dos ombros. Mantenha as costas retas e abaixe o corpo, dobrando os cotovelos, até que o peito quase toque o chão. Empurre o corpo para cima, voltando à posição inicial. Descanso entre sets de 30s a 1min.",
    image: require("../Imagens/flexao-3.jpg"),
    calorias: 90,
    tempo: 10,
  },
  {
    id: "4",
    title: "Peito - Flexão nível 3",
    description: "Fortalece o peitoral, ombros e tríceps. 5 sets até a falha.",
    fullDescription: "Comece em posição inclinada em direção ao solo, com as mãos ligeiramente mais largas que a largura dos ombros. Mantenha as costas retas e abaixe o corpo, dobrando os cotovelos, até que o peito quase toque o chão. Empurre o corpo para cima, voltando à posição inicial. Descanso entre sets de 30s a 1min.",
    image: require("../Imagens/flexao-3.jpg"),
    calorias: 130,
    tempo: 10,
  },
  {
    id: "5",
    title: "Pernas - Agachamento nível 1",
    description: "Melhora a força das pernas e glúteos. 4 sets de 20 repetições.",
    fullDescription: " Fique em pé com os pés na largura dos ombros e mantenha as costas retas. Abaixe o quadril como se fosse sentar em uma cadeira, dobrando os joelhos. Mantenha os joelhos alinhados com os dedos dos pés. Levante o corpo de volta à posição inicial. Amplitude reduzida. Descanso entre séries de 40s.",
    image: require("../Imagens/agachamento.jpg"),
    calorias: 60,
    tempo: 6,
  },
  {
    id: "6",
    title: "Pernas - Agachamento nível 2",
    description: "Melhora a força das pernas e glúteos. 4 sets de 20 repetições.",
    fullDescription: " Fique em pé com os pés na largura dos ombros e mantenha as costas retas. Abaixe o quadril como se fosse tocar o glúteo no chão, dobrando os joelhos. Mantenha os joelhos alinhados com os dedos dos pés. Levante o corpo de volta à posição inicial. Amplitude elevada. Descanso entre séries de 40s.",
    image: require("../Imagens/agachamento-reto.jpg"),
    calorias: 70,
    tempo: 6,
  },   
  {
    id: "7",
    title: "Pernas - Agachamento sumô",
    description: "Uma variação do agachamento que enfatiza mais os músculos internos da coxa. 4 sets de 20 repetições.",
    fullDescription: "Posicione os pés um pouco mais largos que a largura dos ombros, com os dedos dos pés apontando para fora. Mantenha as costas retas e desça o quadril, dobrando os joelhos. Levante o corpo de volta à posição inicial. Descanso entre séries de 40s.",
    image: require("../Imagens/agachamento-sumo.jpg"),
    calorias: 60,
    tempo: 6,
  },
  {
    id: "8",
    title: "Braço - Tríceps nível 1",
    description: "Um exercício de força que visa fortalecer os músculos do tríceps, localizados na parte de trás do braço. 4 sets de 12 repetições.",
    fullDescription: "Sente-se em um banco ou cadeira, com as mãos apoiadas ao lado do corpo, com os dedos apontando para a frente. Mantenha os joelhos dobrados e os pés apoiados no chão. Desça o corpo dobrando os cotovelos, mantendo as costas próximas ao banco. Levante o corpo de volta à posição inicial. Amplitude reduzida. Descanso entre séries de 40s.",
    image: require("../Imagens/triceps-1.jpg"),
    calorias: 60,
    tempo: 6,
  },
  {
    id: "9",
    title: "Braço - Tríceps nível 2",
    description: "um exercício de força que visa fortalecer os músculos do tríceps, localizados na parte de trás do braço. 4 sets de 12 repetições.",
    fullDescription: "Sente-se em um banco ou cadeira, com as mãos apoiadas ao lado do corpo, com os dedos apontando para a frente. Mantenha os joelhos dobrados e os pés apoiados no chão. Desça o corpo dobrando os cotovelos, mantendo as costas próximas ao banco. Levante o corpo de volta à posição inicial. Amplitude elevada com acréscimo de peso. Descanso entre séries de 40s.",
    image: require("../Imagens/triceps-2.jpg"),
    calorias: 60,
    tempo: 6,
  },
  {
    id: "10",
    title: "Braço - Bíceps Curl",
    description: "Um exercício de força que visa fortalecer os músculos do bíceps, localizados na parte da frente do braço. 4 sets de 12 repetições.",
    fullDescription: "Segure um haltere em cada mão, com as palmas voltadas para cima. Mantenha os cotovelos próximos ao corpo e levante os halteres até os ombros. Abaixe os halteres de volta à posição inicial. Descanso entre séries de 40s.",
    image: require("../Imagens/biceps-curl.jpg"),
    calorias: 60,
    tempo: 6,
  },
  {
    id: "11",
    title: "Braço - Bíceps martelo",
    description: "um exercício de força que visa fortalecer os músculos do bíceps, localizados na parte da frente do braço. 4 sets de 12 repetições.",
    fullDescription: "Segure um haltere em cada mão, com as palmas voltadas para o torso. Mantenha os cotovelos próximos ao corpo e levante os halteres até os ombros. Abaixe os halteres de volta à posição inicial. Descanso entre séries de 40s.",
    image: require("../Imagens/biceps-martelo.jpg"),
    calorias: 60,
    tempo: 6,
  },     
  {
    id: "12",
    title: "Costas - Barra ",
    description: "um exercício de força que visa fortalecer os músculos das costas. 5 sets até a falha.",
    fullDescription: "Segure a barra com as mãos voltadas para fora e as mãos afastadas em uma posição um pouco mais ampla que a largura dos ombros. Mantenha os braços retos e levante o corpo até que o queixo esteja acima da barra. Pause brevemente e, em seguida, abaixe o corpo de volta à posição inicial. Descanso entre séries de 40s.",
    image: require("../Imagens/costas-barra.jpg"),
    calorias: 50,
    tempo: 5,
  },
  {
    id: "13",
    title: "Costas - Remada ",
    description: "um exercício de força que visa fortalecer os músculos das costas. 5 sets de 15 repetições.",
    fullDescription: "Pegue um haltere em cada mão e segure em posição neutra (palmas voltadas uma para a outra) e incline o tronco para a frente até que fique paralelo ao chão. Mantenha as costas retas e os braços estendidos para baixo, com os halteres próximos ao corpo. Puxe os halteres em direção ao peito, mantendo os cotovelos próximos ao corpo. Pause brevemente e, em seguida, abaixe os halteres de volta à posição inicial. Descanso entre séries de 1min.",
    image: require("../Imagens/costas-remada.jpg"),
    calorias: 70,
    tempo: 10,
  },
  {
    id: "14",
    title: "Abdominal - Básico ",
    description: "Um exercício que trabalha principalmente os músculos abdominais superiores. 5 sets até a falha. ",
    fullDescription: "Deite-se de costas no chão, com os joelhos dobrados e os pés apoiados no chão. Coloque as mãos atrás da cabeça ou cruzadas sobre o peito. Levante os ombros do chão, mantendo o pescoço e a cabeça alinhados com a coluna vertebral. Contraindo os músculos abdominais, levante o tronco em direção aos joelhos. Pause brevemente e, em seguida, abaixe o tronco de volta à posição inicial. Descanso entre séries de 40s.",
    image: require("../Imagens/abdomen-basico.jpg"),
    calorias: 80,
    tempo: 8,
  },
  {
    id: "15",
    title: "Abdominal - Prancha",
    description: "Um exercício que trabalha todo o núcleo, incluindo os músculos abdominais, lombares e glúteos. 5 sets de 1min.",
    fullDescription: "Deite-se de bruços no chão, com as pernas estendidas e os cotovelos dobrados em um ângulo de 90 graus, com os antebraços apoiados no chão. Levante o corpo do chão, mantendo o corpo em linha reta da cabeça aos pés. Mantenha os músculos abdominais contraídos e respire normalmente. Mantenha essa posição por um período de tempo determinado ou até a fadiga muscular. Descanso entre séries de 40s.",
    image: require("../Imagens/abdomen-prancha.jpg"),
    calorias: 60,
    tempo: 8,
  }, 
 {
    id: "16",
    title: "Abdominal - Bicicleta",
    description: "Um exercício que trabalha os músculos abdominais superiores e inferiores. 5 sets até a falha.",
    fullDescription: "Deite-se de costas no chão, com as pernas estendidas. Coloque as mãos atrás da cabeça ou cruzadas sobre o peito. Levante as pernas do chão e dobre os joelhos em um ângulo de 90 graus. Simultaneamente, levante os ombros do chão e traga o cotovelo esquerdo em direção ao joelho direito, enquanto estende a perna esquerda. Em seguida, traga o cotovelo direito em direção ao joelho esquerdo, enquanto estende a perna direita. Continue alternando os lados em um movimento de pedalada. Descanso entre séries de 40s.",
    image: require("../Imagens/abdomen-bicicleta.jpg"),
    calorias: 100,
    tempo: 8,
  }, 
];

function Principal({ route }) {
  const { username } = route.params;
  const [treinos, setTreinos] = useState(DATA);
  const [totalCalorias, setTotalCalorias] = useState(0);
  const [totalTempo, setTotalTempo] = useState(0);

  const handleFinalizado = (id, calorias, tempo) => {
    const newTreinos = treinos.map((treino) =>
      treino.id === id ? { ...treino, finalizado: true } : treino
    );
    setTreinos(newTreinos);
    setTotalCalorias(Number(totalCalorias) + calorias);
    setTotalTempo(totalTempo + tempo);
    if (newTreinos.filter((treino) => !treino.finalizado).length === 0) {
      setTreinos([
        {
          id: "0",
          title: "Parabéns!",
          description:
            "Todos os exercícios de hoje foram realizados com sucesso!",
          fullDescription: "",
          image: require("../Imagens/abdomen-basico.jpg"),
          calorias: 0,
          tempo: 0,
          finalizado: true,
        },
      ]);
    }
    Alert.alert(
      "Sucesso!",
      "Exercício finalizado com sucesso, parabéns! Continue se esforçando."
    );
  };

  const renderTreino = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.fullDescription}>{item.fullDescription}</Text>
        {item.finalizado && (
          <View style={[styles.finalizado, styles.disabledButton]}>
            <Text style={styles.finalizadoText}>Finalizado</Text>
          </View>
        )}
        {!item.finalizado && (
          <TouchableOpacity
            onPress={() => handleFinalizado(item.id, item.calorias, item.tempo)}
            style={[
              styles.button,
              styles.outlineButton,
              { backgroundColor: "green" },
              item.disabled ? styles.disabledButton : null,
            ]}
            disabled={item.disabled}
          >
            <Text style={styles.buttonText}>
              {item.disabled ? "Finalizado" : "Finalizar"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Seus Treinos de Hoje!</Text>
        <Text style={styles.headersubtxt}>
          Olá {username}, aqui estão seus treinos para hoje
        </Text>
        <FlatList
          data={treinos}
          renderItem={renderTreino}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.resumo}>
          <Text style={styles.resumoTitle}>Resumo do Treino</Text>
          <View style={styles.resumoItem}>
            <Icon
              name="fire"
              size={25}
              color="#FF6347"
              style={styles.resumoIcon}
            />
            <Text style={styles.resumoText}>
              Total de Calorias: {totalCalorias}
            </Text>
          </View>
          <View style={styles.resumoItem}>
            <Icon
              name="timer"
              size={25}
              color="#1E90FF"
              style={styles.resumoIcon}
            />
            <Text style={styles.resumoText}>
              Total de Tempo: {totalTempo} minutos
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  header: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  headersubtxt: {
    fontSize: 14,
    marginTop: -10,
    marginBottom: 20,
  },

  card: {
    marginVertical: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    minWidth: "100%",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  content: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  fullDescription: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  disabledButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  finalizado: {
    backgroundColor: "#00BFFF",
  },

  finalizadoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  resumo: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  resumoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  resumoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  resumoText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  resumoIcon: {
    marginRight: 2,
  },
});

export default Principal;