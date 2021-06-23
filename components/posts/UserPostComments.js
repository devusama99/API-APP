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

// Importing Icons
import { MaterialIcons } from "@expo/vector-icons";

// Importing Loading Component
import Loading from "../loading Component/Loading";

export default function UserPostComments({ navigation, route }) {
  const [details, setDetail] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetail();
  }, []);

  const fetchDetail = function () {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`
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
        {details.map((detail, i) => (
          <List>
            <ListItem key={detail.id}>
              <Body>
                <Text>{detail.body}</Text>
                <Text note style={{ fontSize: 12, paddingTop: 20 }}>
                  Comment {i + 1}
                </Text>
              </Body>
            </ListItem>
          </List>
        ))}
      </Content>
    </Container>
  );
}
