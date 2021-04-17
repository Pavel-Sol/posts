import './App.css';
import Form from './components/Form';
import AsyncPosts from './components/AsyncPosts';
import SyncPosts from './components/SyncPosts';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Form />
        <div className="posts__wrapper">
          <SyncPosts />
          <AsyncPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
