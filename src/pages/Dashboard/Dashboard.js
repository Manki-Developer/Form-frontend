import React, {useEffect} from 'react';
import { getPosts } from '../../actions/post';
import Thread from '../../components/Thread/Thread';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Dashboard.css';

const Dashboard = ({ getPosts, post: { posts } }) => {

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  
  // const [threadArray, setThreadArray] = useState([
  //   {
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sadf asdf asdfasdfasdfasdf f asdfasd asdf fasd fasdf a sda fasdf asdfsafdsafasdf asdf asdfas sadfsadf asdf asdfasdfas saf sadfasdfasdf  asdf sdafasdfasdfasdf dsafsadfasdfasfasdf asdf sadf sad fasdfasdfsdfsadfawgsdfgasaf  safasdfsas",
  //     threadCount: 2,
  //     postCount: 7,
  //     userName: "Goku",
  //     pinMessage: "Welcome to Rengorum",
  //     announcement: "Announcement 1",
  //   },
  //   {
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     threadCount: 2,
  //     postCount: 7,
  //     userName: "Goku",
  //     pinMessage: "Welcome to Rengorum",
  //     announcement: "Announcement 2",
  //   },
  // ]);

  return (
    <div>
      <div className='thread-container'>
        {posts.map((post) => (
          <Thread key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  post: state.post
});


export default connect(mapStateToProps, { getPosts })(Dashboard);