import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Shop() {
  console.log("done");
  useEffect(() => {
    fetchitem();
  }, []);
  const [iteams, setitems] = useState([]);
  const fetchitem = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/product`);
    console.log(data);
    // setitems(data.data);
  };
  return (
    <>
      <h1>ass</h1>
      <div>
        {/* {iteams.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))} */}
      </div>
    </>
  );
}

export default Shop;
