import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

function UserList({ auth, users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const template = (index, content) => (
    <tr key={content.id}>
      <th>{index + 1}</th>
      <td>{content.name}</td>
      <td>{content.username}</td>
      <td>{content.email}</td>
      <td>
        <Link href={`/profile/${content.id}`} className='btn btn-warning'>view</Link>
      </td>

    </tr>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/*  Site header */}
        <Header auth={auth} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Head title="Report List" />

        <main>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            {/* Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="overflow-x-auto">
                <table className="table text-center">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>name</th>
                      <th>username</th>
                      <th>email</th>
                      <th>view profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      template(index, user)
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserList;
