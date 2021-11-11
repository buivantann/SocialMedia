import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

ListStory.propTypes = {};

function ListStory(props) {
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      // get stories

      const storiesRes = await axios.get(`/stories/${currentUser._id}`);
    })();
  }, [currentUser]);

  return (
    <div className='storyListPage'>
      <div className='pageLeft'>
        <div className='pageLeftTop'>
          <div className='pageLeftTopTitle'>Tin</div>
          <div className='pageLeftTopAction'>
            <div className='pageLeftTopActionArchive'>Kho lưu trữ</div>
          </div>
        </div>
        <hr className='pageLeftHr' />
        <div className='pageLeftBottom'>
          <div className='pageLeftSubTitle'>Tin của bạn</div>
          <Link to='/stories/create' className='pageLeftBtn'>
            <div className='pageLeftSubTitleLink'>
              <div className='pageLeftSubTitleBtn'>+</div>
            </div>
            <div className='pageLeftBtnText'>Thêm vào tin</div>
          </Link>
        </div>
      </div>
      <div className='pageRight'>
        <div className='pageRightTop'>
          <div className='pageRightTopTitle'>Tin của bạn</div>
          <div className='pageRightTopSubTitle'>
            Bộ sưu tập tin của bạn bè, các trang và nhóm mà bạn theo dõi
          </div>
        </div>
        <div className='pageRightStoryList'></div>
      </div>
    </div>
  );
}

export default ListStory;