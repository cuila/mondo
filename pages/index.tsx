import * as React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Button } from "../components/Button";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Index: NextPage<{}> = () => (
  <>
    <Title>Hello, Mondo!</Title>
    <Button onClick={() => alert("Monde!")}>Hello</Button>
  </>
)

export default Index;