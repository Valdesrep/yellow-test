import s from './UserTablePost.module.css';

function UserTablePost({ id, name, email, age, onDelete }) {
  return (
    <tr>
      <td className={s.tableTd}>{id}</td>
      <td className={s.tableTd}>{name}</td>
      <td className={s.tableTd}>{email}</td>
      <td className={s.tableTd}>{age}</td>
      <td className={s.tableTd}>
        <button
          type="button"
          className={s.buttonDel}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default UserTablePost;
