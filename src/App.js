import './App.css';
import Postcard from './components/Postcard';
import {useState} from "react";
import Button from "./components/Button";

function App() {
  // initialize darkmode state variable
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'darkmode' : '' }`}>
      <Button 
        bgColor="#000"
        textColor="#fff"
        borderW="2px"
        onClick={() => setDarkMode(!darkMode)}
      >
          <span>Click me</span>
          <div style={{width: '1rem', height: '1rem', backgroundColor: 'yellow'}}></div>
      </Button>

      <Button 
        bgColor="green"
        textColor="orange"
        borderW="5px"
        onClick={() => console.log('CLICKED')}
      >
          Log to console
      </Button>

      <Postcard
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
        title="Beach"
        isDarkMode={darkMode}
      />
      <Postcard
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Mountain"
        isDarkMode={darkMode}
      />

      <Postcard imageSrc="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Desert"
        isDarkMode={darkMode}
      >

        This is the text that is displayed via the children prop
      </Postcard>
    </div>
  );
}

export default App;
