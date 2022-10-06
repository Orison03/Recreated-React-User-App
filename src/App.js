import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import { useDispatch } from "react-redux";
import { AddNewUser } from "../src/actions/userActions";
import { db } from "../src/Firebase/configer";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const readdata = async () => {
      const q = query(collection(db, "allUsers"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
          cities.push(doc.data());
        });
        dispatch(AddNewUser(cities));
        console.log(cities);
      });
    };
    readdata();
  }, []);

  // const handleSubmit = (user) => {
  //   setUsers([
  //     ...users,
  //     {
  //       name: user.name,
  //       position: user.position,
  //       jerseyNumber: user.jerseyNumber,
  //       id: new Date().getTime().toString(),
  //     },
  //   ]);
  // };

  // // delete user
  // const deleteUser = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  // // edit user
  // const handleEdit = (id, newInfo) => {
  //   setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  // };
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddUserForm
            // addUser={handleSubmit}
            />
          </div>
          <div className="col-md-6">
            <AllUsers
            // userData={users}
            // deleteUser={deleteUser}
            // handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
