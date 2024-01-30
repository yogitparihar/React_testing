import React from "react";

export const GetAllByLabelText = () => {
  return (
    <div>
      GetAllByLabelText
      <div>
        <label htmlFor="user_name1">User name</label>
        <input type="text" id="user_name1" defaultValue={"yo"} />
        <br />
        <label htmlFor="user_name2">User name</label>
        <input type="text" id="user_name2" defaultValue={"yo"} />
        <br />
        <label htmlFor="user_name3">User name</label>
        <input type="text" id="user_name3" defaultValue={"yo"} />
      </div>
      <div>
        <label htmlFor="check1">Skills</label>
        <input type='checkbox' id="check1" defaultChecked={true} />
        <br />
        <label htmlFor="check2">Skills1</label>
        <input type='checkbox' id="check2" defaultChecked={true} />
        <br />
        <label htmlFor="check3">Skills</label>
        <input type='checkbox' id="check3" defaultChecked={true} />
      </div>
    </div>
  );
};
