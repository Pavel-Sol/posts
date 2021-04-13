import './App.css';
import Form from './components/Form';
import AsyncPosts from './components/AsyncPosts';
import SyncPosts from './components/SyncPosts';

function App() {
  return (
    <div className="App">
      <Form />
      <div className="posts__wrapper">
        <SyncPosts />
        <AsyncPosts />
      </div>
    </div>
  );
}

export default App;
