import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './hooks/Layout';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
