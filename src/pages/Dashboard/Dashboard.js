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

  const [openForm, setOpenForm] = useState(false);
  let isLogin = true;

  function elements() {
    if(isLogin && openForm){
      return (<div className='add-thread'>
        <button
          className="clearIcon-button-2"
          onClick={() => {setOpenForm(false)}}
        >
          <ClearIcon sx={{ color: "black", fontSize: 20 }}></ClearIcon>
        </button>
        <form>
          <Input
            id="title"
            element="input"
            type="text"
            placeholder="Enter a title"
            rows={6}
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            />
          <Input
            id="thread"
            element="textarea"
            type="text"
            placeholder="Create a thread"
            rows={6}
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
          <div className="submit-button">
            <Button size="big" register={true}>
              Submit
            </Button>
          </div>
        </form> 
      </div> );
    }else if(isLogin && !openForm){
      return (<button className='button-primary' onClick={() => {setOpenForm(true)}}>
        <AddIcon sx={{fontSize: 20}}></AddIcon>
        <p>Add New Thread</p>
      </button> );
    }else{
      return (<></>);
    }
  }

  // const inputHandler = () => {
    
  // }

  return (
    <div>
      <div className='thread-container'>
        {posts.map((post) => (
          <Thread key={post._id} post={post} />))}
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