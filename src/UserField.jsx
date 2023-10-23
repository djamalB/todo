import { useState } from "react";

function UserField({ id, field, value, changeField }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleBlur = () => {
    setIsEdit(false);
  };

  const handleValueChange = (event) => {
    changeField(id, field, event.target.value);
  };

  return (
    <td>
      {isEdit ? (
        <input value={value} onChange={handleValueChange} onBlur={handleBlur} />
      ) : (
        <span onClick={handleEditClick}>{value}</span>
      )}
    </td>
  );
}

export default UserField;
