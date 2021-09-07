import React from "react"
import { LayoutContainer } from "./Layout.styles"
import Topbar from "./Topbar/Topbar"

export default function Layout() {
  return (
    <LayoutContainer>
      <div className='topbar'>
        <Topbar />
      </div>
      <div className='container'>
        <div className='leftbar'></div>
        <div className='mainsection'></div>
        <div className='rightbar'></div>
      </div>
    </LayoutContainer>
  )
}
