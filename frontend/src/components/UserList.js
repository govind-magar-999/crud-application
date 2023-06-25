import React, { useState, useEffect } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://crud-application-production.up.railway.app"

export const UserList = () => {
  const [userData, setUserData] = useState("");

  const fetchUserData = async () => {
    const resp = await axios.get(`${BASE_URL}/getUser`);
    console.log(resp);

    // If no users, please dont set the values
    if(resp.data.users.length > 0) {
      setUserData(resp.data.users);
    }
  };

  useEffect(()=>{
    fetchUserData();
  }, [userData]);

  // To Edit a user
  const handleEdit = async (user) => {
    try {
    const userName = prompt("Enter your new name");
    const userEmail = prompt("Enter your new email");

    if(!userName || !userEmail) {
      toast.error("Please enter both name and email");
    }
    else {
      const resp = await axios.put(`${BASE_URL}/editUser/${user._id}`,{
        name: userName,
        email: userEmail,
      });
      console.log(resp);
      
      if (resp.data.success) {
        toast.success("User edited successfully");
        fetchUserData();
      }
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
  };

  // Delete a user

  const handleDelete = async (userId) => {
    try {
    const resp = await axios.delete(`${BASE_URL}/deleteUser/${userId}`);
    if (resp.data.success) {
      toast.success("User deleted successfully");
      fetchUserData();
      console.log(resp);
    }

    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
<section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {userData && userData.map((user)=>(
                <tr>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="hover:text-green-500"
                        onClick={()=> handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
              ))}    
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
};

