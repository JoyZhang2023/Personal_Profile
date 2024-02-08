import './App.css';
import './Profile';
import './Hobbies';
import Profile from './Profile';
import Hobbies from './Hobbies';


function App() {
  return (
    <div className="App">
      <Profile>Profile()</Profile>
      <Hobbies>Hobbies()</Hobbies>
    </div>
  );
}

export default App;
