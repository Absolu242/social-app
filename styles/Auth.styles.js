import styled from "styled-components"
import { colors } from "./globalstyles"

export const AuthContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;

  .auth {
    height: 100%;
    &__wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      &--top {
        display: flex;
        justify-content: space-between;
        padding: 3rem 5rem;

        select:not([multiple]) {
          -webkit-appearance: none;
          -moz-appearance: none;
          background-position: right 50%;
          background-repeat: no-repeat;
          background-image: url("../icons/more.png");
          padding: 1rem 2.5rem;
          border: 1px solid ${colors.gray};
          outline: none;
          background-color: ${colors.lightGray};

          option {
            padding: 1rem;
          }
        }

        #mySelect {
          border-radius: 12px;
          &:focus {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
      }

      &--content {
        position: absolute;
        transform: translate(30%, 8%);
        padding-bottom: 3rem;
        width: 50%;

        .content_top {
          padding-bottom: 4rem;

          h1 {
            font-size: 3rem;
            color: ${colors.black};
          }
          p {
            font-size: 1.6rem;
            color: ${colors.gray};

            a {
              color: ${colors.blue};
            }
          }
        }

        .content_form {
          position: relative;
          max-width: 54rem;
          width: 100%;
          .form {
            width: 100%;
            position: relative;

            &--item {
              position: relative;
              margin-bottom: 2rem;

              .error-msg {
                color: ${colors.red};
              }

              &_input {
                position: relative;
                width: 100%;
                padding: 1rem 2.5rem;
                border: none;
                border-radius: 12px;
                background-color: ${colors.lightGray};
                -moz-outline-radius: 12px;
                &:focus {
                  border-radius: 12px;
                  box-shadow: 0 0 0 1pt ${colors.blue};
                  outline: none;
                  transition: 0.1s;
                  background-color: ${colors.white};
                }
              }

              &_label {
                position: absolute;
                left: 2rem;
                top: 1rem;
                font-size: 1.2rem;
                color: ${colors.gray};
                transition: all 0.3s ease;
              }

              &_check {
                display: flex;
                align-items: center;

                input {
                  margin-right: 1rem;
                }
                p {
                  font-size: 1.1rem;
                  color: ${colors.gray};

                  a {
                    color: ${colors.blue};
                  }
                }
              }

              &_btns {
                position: relative;
                .btn {
                  &-primary {
                    width: 100%;
                    border-radius: 12px;
                    padding: 1.1rem 0;
                    margin-top: 2rem;
                  }
                  &-divider {
                    width: 100%;
                    text-align: center;
                    margin: 1.5rem 0;
                  }

                  &-google {
                    position: relative;
                    width: 87%;
                    border-radius: 12px;
                    padding: 1.1rem 0;

                    img {
                      position: absolute;
                      left: 1rem;
                    }
                  }

                  &-facebook {
                    width: 8%;
                    //width: fit-content;
                    border-radius: 12px;
                    padding: 1.1rem;
                    margin-left: 5%;
                  }
                }
              }
            }
          }
          .form--item_input {
            &:focus ~ .form--item_label,
            .form--item_input:not(:placeholder-shown).form--item_input:not(:focus)
              ~ .form--item_label {
              top: -0.8rem;
              font-size: 1rem;
              left: 1.5rem;
              color: ${colors.blue};
              background-color: ${colors.white};
              padding: 0 0.8rem;
            }
          }

          /* .form--item_input:not(:placeholder-shown).form--item_input:not(:focus)
            ~ .form--item_label {
            top: -0.8rem;
            font-size: 1rem;
            left: 1.5rem;
            color: ${colors.blue};
            background-color: ${colors.white};
            padding: 0 0.8rem; */
        }
      }
    }

    &__banner {
      position: absolute;
      top: 0;
      right: 0;
      width: 35vw;
      height: 100vh;
      z-index: -1;
    }
  }
`
