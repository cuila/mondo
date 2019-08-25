import * as React from "react";
import { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Index: NextPage<{}> = () => (<Title>Hello, Mondo!</Title>)

export default Index;