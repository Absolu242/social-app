import React from "react"
import { PostContainer, PostContentImages } from "./Post.styles"

export default function Post() {
  return (
    <PostContainer>
      <div className='content'>
        <div className='content--top'>
          <div className='content--top__left'>
            <img src='./images/katie.png' alt='user' />
            <div className='info'>
              <p className='name'>Katie waters</p>
              <p className='time'>10 mins</p>
            </div>
          </div>

          <button className='content--top__right'>
            <img src='./icons/dots.png' alt='see more' />
          </button>
        </div>

        <div className='content--main'>
          <p className='content--main__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dignissimos, enim, provident cupiditate sed recusandae ex delectus
            alias eligendi rerum illo pariatur. Inventore necessitatibus
            accusantium cum voluptatum ut vel eum?
          </p>

          <PostContentImages number={1}>
            <img className='postImage' src='./images/postImage.png' alt='' />
          </PostContentImages>
        </div>

        <div className='content--interactions'>
          <button className='item'>
            <span className='item-icon'>
              <img src='./icons/like.png' alt='like' />
            </span>
            <span className='item-name'>120k Likes</span>
          </button>

          <button className='item'>
            <span className='item-icon'>
              <img src='./icons/chat.png' alt='comment' />
            </span>
            <span className='item-name'>25 Comments</span>
          </button>

          <button className='item'>
            <span className='item-icon'>
              <img src='./icons/shares.png' alt='share' />
            </span>
            <span className='item-name'>120 Share</span>
          </button>
        </div>

        <div className='content--input'>
          <img src='./images/Avatar.png' alt='avatar' />
          <input type='text' placeholder="What's on your mind, Rahan! " />

          <div className='content--input__actions'>
            <button>
              <img src='./icons/emojiComment.png' alt='emoji' />
            </button>
            <button>
              <img src='./icons/attachComment.png' alt='attach comment' />
            </button>
            <button>
              <img src='./icons/photoComment.png' alt='emoji' />
            </button>
          </div>
        </div>
      </div>
    </PostContainer>
  )
}
