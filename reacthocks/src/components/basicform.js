import React from "react";
import { useState } from "react/cjs/react.development";

export const Basicform = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [allentry, setnewentry] = useState([]);
  const submitform = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const newentry = { email: email, password: password };
      setnewentry([...allentry, newentry]);
    }
  };

  return (
    <>
      <form onSubmit={submitform}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      <div>
        {allentry.map((data, index) => {
          return (
            <div>
              {data.email} {data.password}
            </div>
          );
        })}
      </div>
    </>
  );
};
