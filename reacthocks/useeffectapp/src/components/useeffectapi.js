import { getSuggestedQuery } from "@testing-library/react";
import react, { useEffect, useState } from "react";
import axios from "axios";

function Usereffectapi() {
  const [usersd, setuser] = useState([]);
  // console.log(usersd);
  //   const getuser = async () => {
  //     const response = await fetch("https://api.github.com/users");
  //     console.log(response);
  //     const data = await response.json();
  //     setuser(data);
  //   };

  useEffect(() => {
    // getuser();
    async function getdata() {
      // const response = await fetch("http://localhost:5000/user/product");

      // axios.get(`https://localhost:3000/user/product`).then((res) => {
      const res = await axios.get(`http://localhost:3000/user/product`);

      // const data = await res.data.json();
      // const data = res.data.son();
      // console.log(response);
      //   .then((res) => {
      //     setuser(res.data);
      //   });
      // //   const res = await axios.get(`http://localhost:3000/user/product`);
      console.log(res.data.data[0]);
      setuser(res.data.data);

      //   console.log(res.data);
    }
    getdata();

    // github api
    //  https://api.github.com/users
  }, []);
  return (
    <div className="container-fluid mt-5">
      <div className="row text center">
        {usersd.map((curent, index) => {
          return (
            <div key={index}>
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {/* <img className="rounded" width="155" />{" "} */}
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-mt-0 textLeft"> {curent.price}</h4>{" "}
                      <span className="textLeft">Web DEve</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex Flex-column">
                          <span className="articles">Articles</span>{" "}
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex Flex-column">
                          <span className="articles">Articles</span>{" "}
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex Flex-column">
                          <span className="articles">Articles</span>{" "}
                          <span className="number1">38</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Usereffectapi;

// {usersd.map((curent) => {
//           return (
//             <div key={curent.id}>
//               <div className="col-10 col-md-4 mt-5">
//                 <div className="card p-2">
//                   <div className="d-flex align-items-center">
//                     <div className="image">
//                       {/* <img className="rounded" width="155" />{" "} */}
//                       </div>
//                       <div className="ml-3 w-100">
//                         <h4 className="mb-mt-0 textLeft"> {curent.login}</h4>{" "}
//                         <span className="textLeft">Web DEve</span>
//                         <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
//                           <div className="d-flex Flex-column">
//                             <span className="articles">Articles</span>{" "}
//                             <span className="number1">38</span>
//                           </div>
//                           <div className="d-flex Flex-column">
//                             <span className="articles">Articles</span>{" "}
//                             <span className="number1">38</span>
//                           </div>
//                           <div className="d-flex Flex-column">
//                             <span className="articles">Articles</span>{" "}
//                             <span className="number1">38</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
