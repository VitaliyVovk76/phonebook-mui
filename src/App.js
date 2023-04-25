import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componenrts/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="contacts" element={<ContactPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
