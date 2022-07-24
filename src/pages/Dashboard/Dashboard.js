import React, {useState} from 'react';
import Thread from '../../components/Thread/Thread';
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

  return (
    <div>
      <div className='thread-container'>
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