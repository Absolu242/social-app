import Link from "next/link"
import { useRouter } from "next/router"
import { navigationList } from "../../../data/navigation"
import { GroupComponent } from "../../SmallComponents/SmallComponents"
import {
  LeftbarItem,
  LeftbarList,
  LeftShortcuts,
  LeftUser,
} from "./Leftbar.styles"

export default function Leftbar() {
  const route = useRouter()

  const { pathname } = route

  return (
    <div>
      <div className='leftbar__content'>
        <LeftUser>
          <div className='content'>
            <img src='./images/Avatar.png' alt='' />
            <span>
              <p className='name'>Rahan bouess</p>
              <p className='username'>@rahanbouess</p>
            </span>
          </div>
        </LeftUser>

        <LeftbarList>
          {navigationList.map((item, i) => (
            <LeftbarItem
              key={i}
              className={pathname === item.route ? "item active" : "item"}
            >
              <Link href={item.route}>
                <a className={pathname === item.route ? "active" : ""}>
                  <img
                    className='icon'
                    src={pathname === item.route ? item.iconActive : item.icon}
                    alt={item.name}
                  />

                  <p>{item.name}</p>
                </a>
              </Link>
            </LeftbarItem>
          ))}
        </LeftbarList>

        <LeftShortcuts>
          <div className='top'>
            <div className='label'>SHORTCUTS</div>
            <button>
              <img src='./icons/more.png' alt='' />
            </button>
          </div>
          <div className='shortcutsList'>
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
        </LeftShortcuts>
      </div>
    </div>
  )
}
