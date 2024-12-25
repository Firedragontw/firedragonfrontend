import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('hhttps://firedragonbackend.onrender.com/api') // 更改端口為 5001
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>歡迎來到我的簡介網站</h1>
        <p>這是一個簡單的前後端分離的網站範例。</p>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;