import React from 'react';
import PropTypes from 'prop-types';

function ChatItem(message) {
  return (
    <div key={Date.now() + message.author}>
      {message.author}: {message.message}
    </div>
  );
}

ChatItem.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })
};

export default ChatItem;
