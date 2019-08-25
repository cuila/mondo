import * as React from "react";
import styled from "styled-components"

type Props = {
  children: string,
  onClick: (event: React.SyntheticEvent) => void,
  className?: string
};

const Component: React.ComponentType<Props> = ({ onClick, children, className }) => (
  <button className={className} onClick={onClick}>
    <span />
    <ul>
      <li>{children}</li>
    </ul>
  </button>
);

// https://codepen.io/aaroniker/pen/ZVOrOZ
export const Button = styled(Component)`
  display: table;
  outline: none;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 20px rgba(blue, .15);
  line-height: 20px;
  padding: 12px;
  border-radius: 22px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: top;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    margin: 0 4px 0 0;
    position: relative;
    overflow: hidden;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 20px;
    width: 70px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    position: relative;
    transform-style: preserve-3d;
    transition: transform .3s ease;
  }

  li {
    --rotateX: 0deg;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    transform-origin: 50% 50%;
    transform: rotateX(var(--rotateX)) translateZ(10px);
  }
`