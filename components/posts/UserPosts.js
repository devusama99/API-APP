import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Header,
  Left,
  Button,
  Row,
} from "native-base";

// Importing Icons
import { Entypo, MaterialIcons } from "@expo/vector-icons";

// Importing Loading
import Loading from "../loading Component/Loading";

export default function UserPosts({ navigation }) {
  const [detail, setDetail] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${global.id}/posts`)
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
      <Content>
        <List>
          {detail.map((detail) => (
            <ListItem key={detail.id}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("Comments", { id: detail.id })
                }
              >
                <Body>
                  <Text>{detail.title}</Text>
                  <Text note>{detail.body}</Text>
                </Body>
                <Right>
                  <Entypo name="chevron-right" size={24} color="black" />
                </Right>
              </TouchableOpacity>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}
