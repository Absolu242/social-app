import styled from "styled-components"

export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  .topbar {
    width: 100%;
    height: 100px;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    width: 100%;
    height: 100%;
    gap: 20px;

    .mainsection {
      background-color: #fff;
      height: 100vh;
      width: 100%;
    }

    .leftbar {
      background-color: red;
      width: 100%;
      height: 100%;
    }

    .rightbar {
      background-color: green;
      width: 100%;
      height: 100%;
    }
  }
`
