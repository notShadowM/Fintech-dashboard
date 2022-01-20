import './App.css';
import SideNav from './components/SideNav';
import Heading from './components/Heading';
import MainContent from './components/MainContent';
import Message from './components/Message';

function App() {
  return (
    <div className='container'>
      <SideNav />
      <Heading />
      <div className="rightSide">
        <MainContent />
      </div>
      <Message />
    </div>
  );
}

export default App;
