import React from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Text,
  Body,
  Title,
  Button,
} from "native-base";

// Importing Icons
import { Entypo } from "@expo/vector-icons";

// Importing Spinner Screen
import Loading from "./loading Component/Loading";
import { TouchableOpacity } from "react-native";

export default function UsersList({ navigation }) {
  // Users State
  const [users, setUsers] = useState();
  const [isLoading, setLoading] = useState(true);

  // UseEffect to fetch data each time component is loaded
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch data from API and store to user State
  const fetchUsers = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  // Displays UsersList
  const DisplayUsers = function () {
    return (
      <Container>
        <Header style={{ backgroundColor: "#0066D5" }}>
          <Body style={{ paddingHorizontal: 20 }}>
            <Title>Users</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {users.map((user) => (
              <ListItem key={user.id}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    global.id = user.id;
                    navigation.navigate("BottomTabsScreen");
                  }}
                >
                  <Body>
                    <Text>{user.name}</Text>
                    <Text style={{ fontSize: 13, color: "#777" }}>
                      {user.email}
                    </Text>
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
  };

  return isLoading ? <Loading /> : <DisplayUsers />;
}
