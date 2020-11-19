import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './Chat.css';

function ChatItem({ message, key }) {
  const userName = useSelector(state => state.userName);

  const styledChat = (userName === message.author) ?
    (<div key={key} className={styles.me}>
      {message.message}
    </div>) :
    (<div key={key} className={styles.classmate}>
      {message.author}: {message.message}
    </div>);

  return (
    <section>
      {styledChat}
    </section>
  );
}

ChatItem.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })
};

export default ChatItem;
