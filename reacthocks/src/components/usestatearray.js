import react from "react";
import { useState } from "react/cjs/react.development";

const UsestateArray = () => {
  const bioData = [
    { id: 0, myname: "chirag", age: 22 },
    { id: 5, myname: "chirag", age: 23 },
    { id: 3, myname: "jay", age: 24 },
  ];

  const [myArray, setmyArray] = useState(bioData);
  console.log(useState());
  const clearearray = () => {
    setmyArray([]);
  };

  const remove = (id) => {
    console.log(id);
    const mynewaray = myArray.filter((data) => {
      return data.id !== id;
    });
    setmyArray(mynewaray);
  };
  return (
    <>
      {myArray.map((data) => {
        return (
          <h1 key={data.id}>
            name:{data.myname} age:{data.age}
            <button onClick={() => remove(data.id)}>delete</button>
          </h1>
        );
      })}
      ascascasc
      {/* {myArray.map((data) => {
        return (
          <h1 key={data.id}>
            name:{data.myname} age:{data.age}
            <button onClick={remove(data.id)}>remove</button>
          </h1>
        );
      })} */}
      <button onClick={clearearray}>clear</button>
    </>
  );
};

export default UsestateArray;
