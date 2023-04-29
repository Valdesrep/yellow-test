import { useState } from 'react';
import s from './UserForm.module.css';

function UserForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    if (!name) {
      return;
    } else if (!email) {
      return;
    } else if (!age) {
      return;
    } else {
      handleSubmit({ name, email, age });
      setName('');
      setEmail('');
      setAge('');
    }
  };

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form className={s.form}>
        <div className={s.wrapper}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            required
            value={name}
            onChange={onInputChange}
            name="name"
          ></input>
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={onInputChange}
            name="email"
          ></input>
        </label>
        <label className={s.label}>
          Age
          <input
            className={s.input}
            type="number"
            required
            value={age}
            onChange={onInputChange}
            name="age"
            min={1}
            max={99}
          ></input>
        </label>
        </div>
        <button className={s.buttonForm} type="submit" onClick={onFormSubmit}>
          Add User
        </button>
      </form>
    </>
  );
}
export default UserForm;
