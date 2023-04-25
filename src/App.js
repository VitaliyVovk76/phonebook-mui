import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componenrts/Layout';
import About from './pages/About';
import ContactPage from './pages/ContactsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />}></Route>
        <Route path="contacts" element={<ContactPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
