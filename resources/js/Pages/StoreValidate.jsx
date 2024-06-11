import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Head } from '@inertiajs/react';
import axios from 'axios';

function StoreValidate({auth, stores: initialStores }) {
  const [stores, setStores] = useState(initialStores);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAcceptStore = async (store_id) => {
    if (window.confirm('Are you sure you want to allow this store?')) {
      try {
        await axios.patch(`/db/stores/requests/${store_id}`);
        setStores(stores.filter(store => store.id !== store_id));
        alert('Store has been allowed successfully.');
      } catch (error) {
        console.error('Error allowing store:', error);
        alert('There was an error allowing this store.');
      }
    }
  };

  const handleDeclineStore = async (store_id) => {
    if (window.confirm('Are you sure you want to decline this store?')) {
      try {
        await axios.delete(`/db/stores/requests/${store_id}`);
        setStores(stores.filter(store => store.id !== store_id));
        alert('Store has been declined successfully.');
      } catch (error) {
        console.error('Error declining store:', error);
        alert('There was an error declining this store.');
      }
    }
  };

  const template = (index, content) => (
    <tr key={content.id}>
      <th>{index + 1}</th>
      <td>{content.user.name}</td>
      <td>{content.name}</td>
      <td className='text-left text-break'>{content.description}</td>
      <td>{content.address}</td>
      <td>
        <button className='btn btn-success btn-sm' onClick={() => handleAcceptStore(content.id)}>Accept</button>
        <button className='btn btn-error btn-sm' onClick={() => handleDeclineStore(content.id)}>Decline</button>
      </td>
      <td>
        {/* <Link href={`/profile/${content.user_id}`} className='btn btn-warning'>View</Link> */}
      </td>
    </tr>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} auth={auth} />
        <Head title="Store List" />

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
                      <th>Owner</th>
                      <th>Store Name</th>
                      <th>Description</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
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

export default StoreValidate;
