import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout/Layout"
import Post from "../components/Post/Post"
import { storiesList } from "../data/stories"
import styles from "../styles/Home.module.css"

import {
  HomeGrid,
  HomeGridLeft,
  HomeGridRight,
  Stories,
  AddStory,
  StoryList,
  StoryItem,
  NewPostForm,
  RequestCard,
} from "../styles/Home.styles"

export default function Home() {
  return (
    <Layout>
      <HomeGrid>
        <HomeGridLeft>
          <Stories>
            <AddStory>
              <div className='content'>
                <button>
                  <img src='./icons/addStory.png' alt='add story' />
                </button>
                <p>
                  Create <br /> Your Story
                </p>
              </div>
            </AddStory>
            <StoryList>
              {storiesList.map((item, i) => (
                <StoryItem key={i}>
                  <img
                    className='bkgImg'
                    src={item.storyImages[0]}
                    alt='story'
                  />
                  <div className='info'>
                    <img src={item.userImage} alt='user' />
                    <p>{item.username}</p>
                  </div>
                </StoryItem>
              ))}
            </StoryList>
          </Stories>
          <NewPostForm>
            <div className='content'>
              <div className='content--top'>
                <img src='./images/Avatar.png' alt='avatar' />
                <input type='text' placeholder="What's on your mind, Rahan! " />
              </div>
              <div className='content--bottom'>
                <button className='item'>
                  <span className='item-icon'>
                    <img src='./icons/live.png' alt='' />
                  </span>
                  <span className='item-name'>Live Video</span>
                </button>

                <button className='item'>
                  <span className='item-icon'>
                    <img src='./icons/photo.png' alt='' />
                  </span>
                  <span className='item-name'>Photo/Video</span>
                </button>

                <button className='item'>
                  <span className='item-icon'>
                    <img src='./icons/feeling.png' alt='' />
                  </span>
                  <span className='item-name'>Feeling/Activity</span>
                </button>
              </div>
            </div>
          </NewPostForm>
          <Post />
        </HomeGridLeft>
        <HomeGridRight>
          <RequestCard>
            <div className='content'>
              <div className='content--top'>
                <p>Friend Requests</p>
                <Link href='/friends'>
                  <a>See All</a>
                </Link>
              </div>
              <div className='content--bottom'>
                <div className='content--bottom__friend'>
                  <img src='./images/katie.png' alt='user' />
                  <div className='info'>
                    <p className='name'>Joe Burke </p>
                    <p className='number'>18 mutual friends</p>
                  </div>
                </div>
                <div className='content--bottom__btns'>
                  <button className='btn-primary'>confirm</button>
                  <button className='btn-secondary'>Delete</button>
                </div>
              </div>
            </div>
          </RequestCard>

          <RequestCard>
            <div className='content'>
              <div className='content--top'>
                <p>Events</p>
                <button>
                  <img src='./icons/dots.png' alt='user' />
                </button>
              </div>
              <div className='content--bottom'>
                <div className='content--bottom__event'>
                  <img src='./icons/eventIcon.png' alt='user' />
                  <p className='number'>10 Events Invites</p>
                </div>

                <div className='content--bottom__birth'>
                  <img src='./icons/birthdayIcon.png' alt='user' />
                  <p className='number'>Today is Katie Waters birthday</p>
                </div>
              </div>
            </div>
          </RequestCard>

          <RequestCard>
            <div className='content'>
              <div className='content--top'>
                <p>Suggested Pages</p>
                <Link href='/friends'>
                  <a>See All</a>
                </Link>
              </div>
              <div className='content--bottom'>
                <div className='content--bottom__friend'>
                  <img src='./icons/groupIcon.png' alt='user' />
                  <div className='info'>
                    <p className='name'>Carrot Labs </p>
                    <p className='number'>Design Studio</p>
                  </div>
                </div>
                <img
                  src='./images/groupBanner.png'
                  alt='banner'
                  className='content--bottom__img'
                />
                <div className='content--bottom__btns'>
                  <button className='btn-secondary likeBtn'>
                    <img src='./icons/likePage.png' alt='like button' />
                    <span>Like Page</span>
                  </button>
                </div>
              </div>
            </div>
          </RequestCard>
        </HomeGridRight>
      </HomeGrid>
    </Layout>
  )
}
