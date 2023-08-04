"use client";
import React, { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';
export default function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) => {
        const { name, username, email, id } = user;
        const query = searchQuery.toLowerCase();
        return (
          name.toLowerCase().includes(query) ||
          username.toLowerCase().includes(query) ||
          email.toLowerCase().includes(query)
        );
      });
      setFilteredUsers(filtered);
    }
  };

  return (
    <div className='m-5 h-screen ' >
      <SearchBar handleSearch={handleSearch} users={users} />

      <table className="shadow-lg border rounded w-full text-sm m-5 text-left text-gray-500 ">
        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 ">
          <tr>
          <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Website
            </th>
          </tr>
        </thead>
        <tbody>

          {filteredUsers.map((user) => (
            <tr className="bg-white  border-b ">
              <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap ">
                {user.id}
              </th>

              <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap ">
                {user.name}
              </th>

              <td className="px-6 py-6">
                {user.username}
              </td>
              <td className="px-6 py-6">
                {user.email}
              </td>
              <td className="px-6 py-6">
                {user.website}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

  );
}

