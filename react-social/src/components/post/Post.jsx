import { MoreVert } from '@material-ui/icons';
import './post.css';
import { Users } from '../../dummyData.js';
import { useState } from 'react';

export default function Post({ post }) {
  const { comment, date, desc, photo, userId } = post;
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={Users.filter((u) => u.id === userId)[0].profilePicture}
              alt=''
              className='postProfileImg'
            />
            <span className='postUesrName'>
              {Users.filter((u) => u.id === userId)[0].username}
            </span>
            <span className='postDate'>{date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>

        <div className='postCenter'>
          <span className='postText'>{desc}</span>
          <img className='postImg' src={photo} alt='' />
        </div>

        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src='assets/like.png'
              alt=''
              className='likeIcon'
              onClick={handleLike}
            />
            <img
              src='assets/heart.png'
              alt=''
              className='likeIcon'
              onClick={handleLike}
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{comment} commetns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
