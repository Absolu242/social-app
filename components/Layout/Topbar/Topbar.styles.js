import styled from "styled-components"
import { colors } from "../../../styles/globalstyles"

export const TopbarContainer = styled.div`
  position: relative;
  width: 100%;

  .topbar {
    &__content {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &--left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 28%;

        .logo {
          padding: 0 1.5rem;
        }

        .greetings {
          p {
            color: ${colors.black};
            font-size: 2.2rem;
          }
        }
      }

      &--right {
        display: flex;
        align-items: center;

        .topbar-icon {
          position: relative;
          padding: 0 1.1rem;

          button {
            position: relative;
            .indice {
              position: absolute;
              background-color: ${colors.blue};
              padding: 0.1rem 0.5rem;
              top: -0.5rem;
              right: -0.2rem;
              border-radius: 50%;
              color: #fff;
              font-size: 1.2rem;
            }

            .more {
              position: relative;
              top: -0.5rem;
            }
          }
        }
      }
    }

    &__form {
      position: relative;
      &--input {
        position: relative;
        input {
          background-color: ${colors.lightGray};
          padding: 1.5rem 8rem 1.5rem 5rem;
          width: 35rem;
          border-radius: 12px;
          border: none;
          outline: none;
        }

        .search {
          position: absolute;
          top: 1.4rem;
          left: 1rem;
        }

        .more {
          position: absolute;
          top: 1.2rem;
          right: 1rem;
        }
      }
    }
  }
`
