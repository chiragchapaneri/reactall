import react from "react";
import { useState } from "react/cjs/react.development";
import { AiTwotoneDelete } from "react-icons/ai";
import todo from "../images/todo.svg";

export const Todo = () => {
  const [inputdata, setdata] = useState("");
  const [items, setitems] = useState([]);
  const additem = () => {
    if (inputdata.length) {
      setitems([...items, inputdata]);
      setdata("");
    }
  };

  const deleteiteam = (id) => {
    const updaitem = items.filter((data, ind) => {
      return ind != id;
    });

    setitems(updaitem);
  };

  const removeall = () => {
    setitems([]);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <div className="addItems">
          <input
            type="text"
            placeholder="add items"
            name="inputdata"
            value={inputdata}
            onChange={(e) => {
              setdata(e.target.value);
            }}
          ></input>
          <i className="fa fa-plus" title="add items" onClick={additem}></i>
        </div>
        <div className="showItems">
          {items.map((elem, ind) => {
            return (
              <div className="eachItem" key={ind}>
                <h3>{elem}</h3>
                <AiTwotoneDelete
                  onClick={() => {
                    deleteiteam(ind);
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="remove all"
            onClick={() => {
              removeall();
            }}
          >
            <span>check list</span>
          </button>
        </div>
      </div>
    </div>
  );
};
