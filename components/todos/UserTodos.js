import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  List,
  Text,
  Body,
  Left,
  Title,
  Right,
} from "native-base";

// Importing Icons
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

// Importing Loading Component
import Loading from "../loading Component/Loading";

export default function UserTodos({ navigation }) {
  const [details, setDetail] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetail();
  }, []);

  const fetchDetail = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${global.id}/todos`)
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
            name="home"
            size={24}
            color="white"
            onPress={() => navigation.popToTop()}
          />
          <Text style={{ color: "white", fontSize: 11 }}>Home</Text>
        </Left>
        <Right />
      </Header>
      <Content padder>
        <List>
          {details.map((detail, i) => (
            <ListItem key={detail.id}>
              <Body>
                <Text>{detail.title}</Text>
                <Text note style={{ fontSize: 11, paddingTop: 10 }}>
                  Task: {i + 1}
                </Text>
              </Body>
              <Right>
                {detail.completed ? (
                  <Ionicons
                    name="checkmark-done-circle"
                    size={24}
                    color="green"
                  />
                ) : (
                  <Entypo name="circle-with-cross" size={24} color="red" />
                )}
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}
