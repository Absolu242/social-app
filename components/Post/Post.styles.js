import styled from "styled-components"
import { colors } from "../../styles/globalstyles"

export const PostContainer = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 0 2rem;
  background-color: ${colors.white};
  border-radius: 16px;

  .content {
    &--top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 2rem 0;

      &__left {
        display: flex;
        align-items: flex-start;

        .info {
          padding-left: 1.5rem;

          .name {
            font-size: 1.4rem;
          }
          .time {
            font-size: 1.2rem;
            color: ${colors.gray};
            padding: 0.2rem 0;
          }
        }
      }

      &__right {
        outline: none;
      }
    }

    &--main {
      &__text {
        padding: 0.5rem 0 2rem 0;
        font-size: 1.3rem;
        text-align: justify;
      }
    }

    &--interactions {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 2rem 0;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        outline: none;

        img {
          padding-right: 1rem;
        }

        &:nth-child(2) {
          border-left: 1px solid ${colors.lightGray};
          border-right: 1px solid ${colors.lightGray};
        }
      }
    }

    &--input {
      display: flex;
      align-items: center;
      padding: 2rem 0;
      border-top: 1px solid ${colors.lightGray};
      img {
        padding-right: 2rem;
      }
      input {
        width: 100%;
        background-color: ${colors.lightGray};
        padding: 1.2rem 1.5rem;
        padding-right: 25%;
        border-radius: 16px;
        border: none;
        outline: none;
      }

      &__actions {
        position: absolute;
        right: 1rem;
        display: flex;
        align-items: center;

        button {
          padding-left: 0.5rem;
        }
      }
    }
  }
`
export const PostContentImages = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.number === 1 ? "1fr" : `repeat(2, 1fr)`};
  grid-template-rows: ${(props) =>
    props.number > 2 ? `repeat(${props.number}, 1fr)` : "1fr"};
  gap: 5px;
  width: 100%;
  min-height: 200px;

  .postImage {
    width: 100%;
  }
`
