import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="screen join-screen active">
        <div className="form">
          <h2>Join Chatroom</h2>
          <div className="form-input">
            <label>Username</label>
            <input type="text" id='username' />
          </div>
          <div>
            <div className="form-input">
              <button id='join-user'>Join</button>
            </div>
          </div>
        </div>
      </div>
        <div className='screen chat-screen'>
          <div className="header">
            <div className="logo">Chatroom</div>
            <button id='exit-chat'>Exit</button>
          </div>
          <div className="messages">
            {/* Sample texts */}
            <div className="message my-message">
              <div className="name">You</div>
              <div className="text">Hi</div>
            </div>
            <div className="update">Another has joined the conversatino</div>
            <div className="message other-message">
              <div className="name">Another</div>
              <div className="text">Hi</div>
            </div>
          </div>
          <div className="typebox">
            <input type="text" id='message-input'/>
            <button id='send-message'>Send</button>
          </div>
        </div>
    </div>
  );
}

export default App;
