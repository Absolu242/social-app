import styled from "styled-components"
import { colors } from "../../../styles/globalstyles"

export const LeftUser = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .content {
    display: flex;
    padding: 1.5rem 5rem 1.5rem 1rem;
    background-color: ${colors.lightGray};
    border-radius: 16px;
    align-self: center;
  }

  span {
    padding: 0 1rem;
  }
  .name {
    color: ${colors.black};
    font-size: 1.4rem;
  }
  .username {
    color: ${colors.gray};
    font-size: 1.3rem;
  }
`

export const LeftbarList = styled.ul`
  position: relative;
  width: 100%;
  list-style: none;
  padding: 2rem 0;
`
export const LeftbarItem = styled.li`
  font-size: 1.6rem;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;

  .icon {
    position: relative;
    padding: 0 2rem;
  }
  a {
    display: flex;
    color: ${colors.black};

    &.active {
      color: ${colors.blue};
    }

    &:hover {
      color: ${colors.blue};
    }
  }

  &.active {
    &:after {
      display: none;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: ${colors.blue};
    }
  }
`
export const LeftShortcuts = styled.div`
  padding: 2rem 3rem;

  .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      text-transform: uppercase;
      color: ${colors.gray};
      font-size: 1.5rem;
    }
  }

  .shortcutsList {
    padding: 1.5rem 0;
  }
`
