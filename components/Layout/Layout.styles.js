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
    grid-template-columns: 1fr 3.5fr 1fr;
    width: 100%;
    height: 100%;
    padding-top: 2rem;

    .mainsection {
      background-color: #f1f1f1;
      min-height: 100vh;
      width: 100%;
      border-radius: 16px;
    }

    .leftbar {
      width: 100%;
      height: 100%;
    }

    .rightbar {
      width: 100%;
      height: 100%;
    }
  }
`
