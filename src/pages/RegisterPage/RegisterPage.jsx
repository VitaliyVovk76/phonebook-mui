import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/user-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        throw new Error(`Тип поля name ${name} не обрабатывается`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '' || name.trim() === '') {
      alert('Enter the form');
      return;
    }
    dispatch(userOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={email}
        placeholder="E-mail"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Registration</button>
    </form>
  );
};

export default RegisterPage;
