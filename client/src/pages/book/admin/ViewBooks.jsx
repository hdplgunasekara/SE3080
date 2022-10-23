import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../../../components/admin/sideNav";
import TopNav from "../../../components/admin/topNav";
import UpdBookModal from "../../../components/modals/bookmodals/UpdBookModal";
import DelBookModal from "../../../components/modals/bookmodals/DelBookModal";

export default function ViewBooks() {
  const [book, setbook] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/book/")
      .then((res) => {
        setbook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <TopNav />
      <SideNav />
      <br />
{/* //dfssdfgsd */}
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Book Name</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Publisher</th>
                <th className="text-center" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {book.map((bk) => (
                <tr key={bk.bookID}>
                  {/* <th scope="row">{x}</th> */}
                  <td>{bk.bkName}</td>
                  <td>{bk.bkAuthor}</td>
                  <td>{bk.bkCategory}</td>
                  <td>{bk.bkPublisher}</td>
                  <td className="text-center">
                    <UpdBookModal bkid={bk.bookID} />
                    <DelBookModal bkid={bk.bookID} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </div>
  );
}
