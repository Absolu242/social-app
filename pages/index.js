import Head from "next/head"
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
        <HomeGridRight>grid right</HomeGridRight>
      </HomeGrid>
    </Layout>
  )
}
