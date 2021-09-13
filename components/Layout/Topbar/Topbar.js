import React from "react"
import Link from "next/link"
import { TopbarContainer } from "./Topbar.styles"

export default function Topbar() {
  return (
    <TopbarContainer className='topbar'>
      <div className='topbar__content'>
        <div className='topbar__content--left'>
          <span>
            <img src='./icons/menu.png' alt='menu-icon' />
            <img className='logo' src={"./images/logo.png"} alt='logo' />
          </span>

          <span className='greetings'>
            <p>👋 Hi Rahan!</p>
          </span>
        </div>

        <div className='topbar__form'>
          <div className='topbar__form--input'>
            <img className='search' src='./icons/search.png' alt='' />
            <input type='text' placeholder='search something' />
            <button className='more'>
              <img src='./icons/more.png' alt='' />
            </button>
          </div>
        </div>

        <div className='topbar__content--right'>
          <span className='topbar-icon'>
            <button>
              <img src='./icons/addFriend.png' alt='add freind button' />
            </button>
          </span>

          <span className='topbar-icon'>
            <button>
              <img src='./icons/chat.png' alt='chat ' />
            </button>
          </span>

          <span className='topbar-icon'>
            <button>
              <img src='./icons/notice.png' alt='notice' />
              <span className='indice'>1</span>
            </button>
          </span>

          <span className='topbar-icon'>
            <Link href='/profile'>
              <a>
                <button>
                  <img
                    className='avatar'
                    src='./images/Avatar.png'
                    alt='add freind button'
                  />
                  <img className='more' src='./icons/more.png' alt='more' />
                </button>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </TopbarContainer>
  )
}
