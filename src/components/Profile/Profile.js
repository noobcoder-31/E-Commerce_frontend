import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userData = JSON.parse(localStorage.getItem("userInformation"));
  console.log(userData);

  return (
    <div>
      <div>
        <h1 className="md:text-4xl text-xl font-semibold p-4">User Profile</h1>
        <div className="m-4 border border-black w-2/3 md:w-1/2 mx-auto p-4">
          <h2 className="md:text-xl text-lg font-semibold mb-4 p-2">
            Personal Information
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Name: </span>
            {userData.userFound.fullname}
          </p>
          <p className="mb-2">
            {" "}
            <span className="font-semibold">Email: </span>
            {userData.userFound.email}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Date Joined: </span>
            {userData.userFound.createdAt
              ? new Date(userData.userFound.createdAt).toLocaleString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "N/A"}
          </p>
          {/* Add more user data fields here */}
        </div>
        <div>
          <h2 className="md:text-xl text-lg font-semibold mb-4 p-2">
            Order History
          </h2>

          <p>No orders found.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
