import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

function StoreList({auth, stores: initialStores, jumlah }) {
  const [stores, setStores] = useState(initialStores);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const template = (index, content) => (
    <tr key={content.post_id}>
      <th>{index + 1}</th>
      <td>{content.name}</td>
      <td>{content.user.name}</td>
      <td>{content.is_open?'buka':'tutup'}</td>
      <td>
        <Link href={`/profile/${content.user_id}`} className='btn btn-warning'>view</Link>
      </td>
    </tr>
  );

  return (
    <div className="flex h-screen overflow-hidden dark:bg-slate-900">
      {/* Sidebar */}
      <Sidebar jumlah={jumlah} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
                  <thead className='dark:text-white'>
                    <tr>
                      <th></th>
                      <th>name</th>
                      <th>owner</th>
                      <th>open?</th>
                      <th>view store</th>
                    </tr>
                  </thead>
                  <tbody className='dark:text-white'>
                    {stores.map((store, index) => (
                      template(index, store)
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

export default StoreList;
