import styled from "styled-components"
import { colors } from "./globalstyles"

export const HomeGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 2rem;
`

export const HomeGridLeft = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const HomeGridRight = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const Stories = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

export const AddStory = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 10.4rem;
  margin-right: 10px;
  height: 160px;
  background-color: ${colors.white};
  border-radius: 16px;
  cursor: pointer;

  .content {
    text-align: center;

    p {
      padding-top: 1rem;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`

export const StoryList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 104px);
  gap: 10px;
  width: 100%;
  height: 160px;
`

export const StoryItem = styled.div`
  position: relative;
  //background-color: ${colors.white};
  border-radius: 16px;
  width: 100%;
  height: 100%;
  cursor: pointer;

  .bkgImg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(180deg, #00000000, #80000000);
  }

  .info {
    position: absolute;
    bottom: 1.5rem;
    z-index: 1;
    padding: 0 1.2rem;

    img {
      margin: 0.5rem 0;
      border: 2px solid ${colors.blue};
      border-radius: 50%;
    }

    p {
      font-size: 1.2rem;
      text-transform: capitalize;
      color: ${colors.white};
    }
  }
`
export const NewPostForm = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 0 2rem;
  background-color: ${colors.white};
  border-radius: 16px;

  .content {
    &--top {
      display: flex;
      align-items: center;
      padding: 2rem 0;
      border-bottom: 1px solid ${colors.lightGray};
      img {
        padding-right: 2rem;
      }
      input {
        width: 100%;
        background-color: ${colors.lightGray};
        padding: 1.2rem 1.5rem;
        border-radius: 16px;
        border: none;
        outline: none;
      }
    }

    &--bottom {
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
  }
`
