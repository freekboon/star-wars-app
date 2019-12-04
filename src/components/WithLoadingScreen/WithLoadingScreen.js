import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Item } from "../Grid/Grid";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(Item)`
  text-align: center;
`;

Loader.displayName = "Loader";

const Image = styled.img`
  width: 10rem;
  margin-bottom: 3rem;
  animation: ${rotate} 2s linear infinite;
  border-radius: 50%;
`;

export default ({ loading, children }) =>
  loading ? (
    <Container justifyContent="center">
      <Loader mx={3} my={3}>
        <Image src="https://i7.pngguru.com/preview/974/364/955/5bb8f50a92870.jpg" />
        <div>Loading</div>
      </Loader>
    </Container>
  ) : (
    <>{children}</>
  );
