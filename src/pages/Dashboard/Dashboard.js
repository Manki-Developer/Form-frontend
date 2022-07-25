import React, {useState} from 'react';
import Thread from '../../components/Thread/Thread';
import Button from "../../components/FormElements/Button/Button";
import Input from "../../components/FormElements/Input/Input";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from "@mui/icons-material/Clear";
import {
  VALIDATOR_REQUIRE
} from "../../util/validators";
import './Dashboard.css';

const Dashboard = () => {
  const [threadArray, setThreadArray] = useState([
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sadf asdf asdfasdfasdfasdf f asdfasd asdf fasd fasdf a sda fasdf asdfsafdsafasdf asdf asdfas sadfsadf asdf asdfasdfas saf sadfasdfasdf  asdf sdafasdfasdfasdf dsafsadfasdfasfasdf asdf sadf sad fasdfasdfsdfsadfawgsdfgasaf  safasdfsas",
      threadCount: 2,
      postCount: 7,
      userName: "Goku",
      pinMessage: "Welcome to Rengorum",
      announcement: "Announcement 1",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      threadCount: 2,
      postCount: 7,
      userName: "Goku",
      pinMessage: "Welcome to Rengorum",
      announcement: "Announcement 2",
    },
  ]);

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

  const inputHandler = () => {
    
  }

  return (
    <div>
      <div className='thread-container'>
        {elements()}
        {threadArray.map((thread, index) => (
          <Thread
            key={index}
            id={index}
            announcement={thread.announcement}
            description={thread.description}
            threadCount={thread.threadCount}
            postCount={thread.postCount}
            userName={thread.userName}
            pinMessage={thread.pinMessage}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard