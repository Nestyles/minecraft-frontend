import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [isServerConnected, setIsServerConnected] = useState(false)

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch("api/is_server_started")
        if (response.ok) {
          const data = await response.json()
          setIsServerConnected(data.is_connected)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetch_data();
  }, [])

  async function start_server() {
    try {
      const request_options = {
        method: 'POST'
      }
      const response = await fetch("api/start_server", request_options)
      if (response.ok) {
        const data = await response.json()
        if (data.success == true) {
          setIsServerConnected(true)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function stop_server() {
    try {
      const request_options = {
        method: 'POST'
      }
      const response = await fetch("api/stop_server", request_options)
      if (response.ok) {
        const data = await response.json()
        if (data.success == true) {
          setIsServerConnected(false)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {isServerConnected
          ? <p>Connected</p>
          : <p>Not Connected</p>
        }
        <button onClick={() => start_server()}>Start server</button>
        <button onClick={() => stop_server()}>Stop server</button>
      </header>
    </div>
  );
}

export default App;
