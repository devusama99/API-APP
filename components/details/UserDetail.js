import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Title,
  Right,
} from "native-base";

// Importing Icons
import { MaterialIcons } from "@expo/vector-icons";

// Importing Loading Component
import Loading from "../loading Component/Loading";

export default function UserDetail({ navigation }) {
  const [detail, setDetail] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetail();
  }, []);

  const fetchDetail = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${global.id}`)
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
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              User ID
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.id}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>Name</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.name}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>Email</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.email}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              Userame
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.username}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>Phone</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.phone}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              Website
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.website}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              Company
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{detail.company.name}</Text>
              <Text style={{ fontSize: 13, color: "#666" }}>
                {detail.company.bs}
              </Text>
              <Text style={{ fontSize: 11, color: "#ececec" }}>
                {detail.company.catchPhrase}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              Address
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {detail.address.suite} {detail.address.street},{" "}
                {detail.address.city}
              </Text>
              <Text style={{ fontSize: 13, color: "#ececec" }}>
                Zip Code:
                {detail.address.zipcode}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              Address
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {detail.address.suite} {detail.address.street},{" "}
                {detail.address.city}
              </Text>
              <Text style={{ fontSize: 13, color: "#ececec" }}>
                Zip Code:
                {detail.address.zipcode}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text style={{ fontWeight: "bold", color: "#0066D5" }}>
              Address
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {detail.address.suite} {detail.address.street},{" "}
                {detail.address.city}
              </Text>
              <Text style={{ fontSize: 13, color: "#ececec" }}>
                Zip Code:
                {detail.address.zipcode}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
