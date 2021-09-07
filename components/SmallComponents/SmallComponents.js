import styled from "styled-components"
import { colors } from "../../styles/globalstyles"

export const GroupComponent = ({ name, image, indice }) => {
  const Container = styled.div`
    .item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1rem 0;

      img {
        width: 32px;
        height: 32px;
        border-radius: 8px;
      }

      p {
        padding: 0 1rem;
        font-size: 1.4rem;
      }

      .indice {
        position: absolute;
        background-color: ${colors.red};
        padding: 0.1rem 0.5rem;
        top: 1.7rem;
        right: 0.2rem;
        border-radius: 50%;
        color: #fff;
        font-size: 1rem;
      }
    }
  `

  return (
    <Container>
      <div className='item'>
        <img src={image} alt='shortcut' />
        <p>{name}</p>
        {indice !== "" && <span className='indice'>{indice}</span>}
      </div>
    </Container>
  )
}

export const ContactComponent = ({ item }) => {
  const Container = styled.div`
    .item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1rem 0;

      img {
        width: 32px;
        height: 32px;
        border-radius: 8px;
      }

      p {
        padding: 0 1rem;
        font-size: 1.4rem;
      }

      .indice {
        position: absolute;
        background-color: ${colors.red};
        padding: 0.1rem 0.5rem;
        top: 1.7rem;
        right: 0.2rem;
        border-radius: 50%;
        color: #fff;
        font-size: 1rem;
      }

      .online {
        position: absolute;
        background-color: ${colors.green};
        padding: 0.5rem;
        top: 2rem;
        right: 0.5rem;
        border-radius: 50%;
        color: #fff;
        font-size: 1.2rem;
      }

      .busy {
        position: absolute;
        top: 2rem;
        right: 0.3rem;

        img {
          width: 15px;
          height: 15px;
        }
      }

      .time {
        position: absolute;
        padding: 0.5rem;
        top: 1.4rem;
        right: 0;
        color: ${colors.gray};
        font-size: 1.2rem;
      }
    }
  `

  const { name, image, online, busy, offline, indice, offlineTime } = item

  const Status = () => {
    if (online === true && indice === 0 && busy === false) {
      return <div className='online'></div>
    }
    if (online === true && indice !== 0 && busy === false) {
      return <span className='indice'>{indice}</span>
    }

    if (busy === true && online === true && indice >= 0) {
      return (
        <span className='busy'>
          <img src='./icons/busyStatus.png' alt='' />
        </span>
      )
    }

    if (busy === true && online === false && indice >= 0) {
      return (
        <span className='busy'>
          <img src='./icons/busyStatus.png' alt='' />
        </span>
      )
    }

    if (offlineTime !== null && offline === true) {
      return <span className='time'>{offlineTime}</span>
    }

    return 1
  }

  return (
    <Container>
      <div className='item'>
        <img src={image} alt='shortcut' />
        <p>{name}</p>
        <Status />
      </div>
    </Container>
  )
}
