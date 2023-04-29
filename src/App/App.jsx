import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserForm from '../components/UserForm/UserForm';
import UserTable from '../components/UserTable/UserTable';
import SortButton from '../components/SortButtnon/SortButton';
import s from './App.module.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = ({ name, email, age }) => {
    setUsers([...users, { id: uuidv4(), name, email, age }]);
  };

  const onDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const sortUserDesc = () => {
    const descCopyUsers = [...users];
    descCopyUsers.sort((a, b) => b.age - a.age);
    setUsers(descCopyUsers);
  };
  const sortUserAsc = () => {
    const ascCopyUsers = [...users];
    ascCopyUsers.sort((a, b) => a.age - b.age);
    setUsers(ascCopyUsers);
  };

  return (
    <>
      <div className={s.container}>
        <UserForm users={users} handleSubmit={addUser}></UserForm>
        <SortButton
          users={users}
          sortUserDesc={sortUserDesc}
          sortUserAsc={sortUserAsc}
        ></SortButton>
        <UserTable users={users} onDelete={onDelete}></UserTable>
      </div>
    </>
  );
}
export default App;
