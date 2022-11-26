import { AuthContext } from 'context/AuthContext';
import Head from 'next/head';
import React, { useContext } from 'react';

const Profile = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div>Profile</div>
    </>
  );
};

export default Profile;
