import s from './SortButton.module.css';

function SortButton({ sortUserDesc, sortUserAsc,users }) {
  return (
    <div className={s.btnWrapp}>
      <button className={s.buttonSort} onClick={() => sortUserDesc(users.age)} type="button">
        desc
      </button>
      <button className={s.buttonSort} onClick={() => sortUserAsc(users.age)} type="button">
        asc
      </button>
    </div>
  );
}

export default SortButton;
