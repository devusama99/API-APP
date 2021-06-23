import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Left,
  Right,
  Thumbnail,
} from "native-base";
import { FlatList, View, Image } from "react-native";

// Importing Icons
import { MaterialIcons } from "@expo/vector-icons";

// Importing Loading Component
import Loading from "../loading Component/Loading";

export default function UserAlbumPhotos({ navigation, route }) {
  const [details, setDetail] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetail();
  }, []);

  const fetchDetail = function () {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${route.params.id}/photos`
    )
      .then((response) => response.json())
      .then((result) => {
        setDetail(result);
        setLoading(false);
      });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <Header style={{ backgroundColor: "#0066D5" }}>
        <Left style={{ padding: 10 }}>
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Right />
      </Header>
      <Content padder>
        {details.map((detail) => (
          <List>
            <ListItem thumbnail key={detail.id}>
              <Left>
                <Thumbnail circle source={{ uri: `${detail.thumbnailUrl}` }} />
              </Left>
              <Body>
                <Text>{detail.title}</Text>
              </Body>
            </ListItem>
          </List>
        ))}
      </Content>
    </Container>
  );
}
