import React from "react";
import { Container, Spinner, Content } from "native-base";
export default function Loading() {
  return (
    <Container
      style={{
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner color="#3F51B5" />
    </Container>
  );
}
