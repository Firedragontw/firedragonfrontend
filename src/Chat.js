import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/chat', { message });
      const parsedData = JSON.parse(res.data.response.replace(/'/g, '"')); // 解析 JSON 字符串
      setData(parsedData);
    } catch (error) {
      console.error(error);
      setData([{ '問題': 'Error', '答案': error.message }]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-front">
              {item.問題}
            </div>
            <div className="card-back">
              {item.答案}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;