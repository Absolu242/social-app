import styled from "styled-components"
import { colors } from "../../../styles/globalstyles"

export const RightbarSection = styled.div`
  padding: 2rem 3rem;
  padding-top: ${(props) => (props.Nopadding ? 0 : "inherit")};

  .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      text-transform: uppercase;
      color: ${colors.gray};
      font-size: 1.2rem;
    }
  }

  .List {
    padding: 1.5rem 0;
  }
`
