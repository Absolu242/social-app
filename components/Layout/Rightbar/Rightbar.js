import React from "react"
import { RightbarSection } from "./Rightbar.styles"
import {
  GroupComponent,
  ContactComponent,
} from "../../SmallComponents/SmallComponents"
import { contactsList } from "../../../data/contacts"

export default function Rightbar() {
  return (
    <div>
      <RightbarSection Nopadding>
        <div className='top'>
          <div className='label'>Your pages</div>
        </div>
        <div className='List'>
          <GroupComponent
            image='./icons/groupIcon.png'
            name='Carrot Labs'
            indice='1'
          />
          <GroupComponent
            image='./icons/groupIcon2.png'
            name='Carrot Team'
            indice=''
          />
        </div>
      </RightbarSection>

      <RightbarSection>
        <div className='top'>
          <div className='label'>Contacts</div>
        </div>
        <div className='List'>
          {contactsList.map((item, i) => (
            <ContactComponent item={item} key={i} />
          ))}
        </div>
      </RightbarSection>

      <RightbarSection>
        <div className='top'>
          <div className='label'>Groups</div>
        </div>
        <div className='List'>
          <GroupComponent
            image='./icons/groupIcon.png'
            name='Design Team'
            indice='1'
          />
          <GroupComponent
            image='./icons/groupIcon2.png'
            name='Development Team'
            indice=''
          />
        </div>
      </RightbarSection>
    </div>
  )
}
