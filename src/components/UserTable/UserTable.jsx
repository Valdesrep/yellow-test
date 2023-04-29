import UserTablePost from '../UserTablePost/UserTablePost';
import s from './UserTable.module.css';
function UserTable({ users, onDelete }) {
  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.tableHead}>id</th>
            <th className={s.tableHead}>Name</th>
            <th className={s.tableHead}>Email</th>
            <th className={s.tableHead}>Age</th>
            <th className={s.tableHead}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserTablePost key={user.id} {...user} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;
