import React, { useState, useRef } from "react";
import {
  View,
  ScroolView,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function App() {
  const [lista, setLista] = useState([
    {
      title: "O Justiceiro",
      text:
        "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg",
    },
    {
      title: "Bad Boys for life",
      text:
        "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg",
    },
    {
      title: "Viúva Negra",
      text:
        "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg",
    },
    {
      title: "Top Gun: MAVERICK",
      text:
        "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg",
    },
    {
      title: "BloodShot",
      text:
        "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg",
    },
    {
      title: "Free Guy",
      text:
        "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg",
    },
  ]);
  const [background, setBackgroud] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image source={{ uri: item.img }} style={style.carouselImg} />
          <Text style={style.carouselText}>{item.title}</Text>
          <Icon
            name="play-circle-outline"
            size={30}
            color="#FFF"
            style={style.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={style.container}>
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background }}
            style={style.imgBg}
            blurRadius={2}
          >
            <View style={style.viewSearch}>
              <TextInput style={style.input} placeholder="Busca de Filmes" />
              <TouchableOpacity style={style.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Acabou de chegar
            </Text>
            <View style={style.slideView}>
              <Carousel
                style={style.carousel}
                ref={carouselRef}
                data={lista}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackgroud(lista[index].img);
                  setActiveIndex(index);
                }}
              />
            </View>
            <View style={style.moreInfo}>
              <View style={{ marginTop: 10 }}>
                <Text style={style.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={style.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <Icon
                name="queue"
                color="#131313"
                size={30}
                style={{ marginRight: 15, marginTop: 10 }}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  viewSearch: {
    marginTop: 60,
    backgroundColor: "#FFF",
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 10,
  },
  slideView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImg: {
    alignSelf: "center",
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  carouselText: {
    padding: 15,
    color: "#FFF",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  moreInfo: {
    backgroundColor: "#FFF",
    marginTop: 100,
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  movieTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "#131313",
    marginBottom: 5,
  },
  movieDesc: {
    paddingLeft: 15,
    color: "#131313",
    fontSize: 14,
    fontWeight: "bold",
  },
});
