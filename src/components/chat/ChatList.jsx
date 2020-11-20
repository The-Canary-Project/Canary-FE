import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatItem from './ChatItem';
import { setChatItem } from '../../actions/classroomActions';
import { useSocket } from '../../provider/socketProvider';
import styles from './Chat.css';

function ChatList() {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', (data) => {

      dispatch(setChatItem(
        { author: data.author, message: data.message }
      ));
    });

    return () => {
      socket.off('RECEIVE_MESSAGE');
    };
  }, []);

  const messageArray = useSelector(state => state.chatItems);

  const messageElements = messageArray.map((message, i) => {
    return <ChatItem message={message} key={i} />;
  });

  return (
    <div className={styles.chatList}>
      {messageElements}
    </div>
  );
}

export default ChatList;
