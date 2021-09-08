import React from "react"
import { LayoutContainer } from "./Layout.styles"
import Leftbar from "./Leftbar/Leftbar"
import Rightbar from "./Rightbar/Rightbar"
import Topbar from "./Topbar/Topbar"

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <div className='topbar'>
        <Topbar />
      </div>
      <div className='container'>
        <div className='leftbar'>
          <Leftbar />
        </div>
        <div className='mainsection'>{children}</div>
        <div className='rightbar'>
          <Rightbar />
        </div>
      </div>
    </LayoutContainer>
  )
}
