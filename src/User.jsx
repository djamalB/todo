import UserField from "./UserField";


function User({ user, changeField }) {
  const { id, name, surn, age } = user;

  return (
    <tr>
      <UserField id={id} field="name" value={name} changeField={changeField} />
      <UserField id={id} field="surn" value={surn} changeField={changeField} />
      <UserField id={id} field="age" value={age} changeField={changeField} />
    </tr>
  );
}

export default User;
