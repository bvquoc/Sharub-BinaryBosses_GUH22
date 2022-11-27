import NavBar from 'components/layouts/NavBar';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <>
      <div className="grid grid-cols-[auto_auto] overflow-hidden bg-[#eff3fd]">
        <NavBar />
        <div className="grid place-items-center bg-[#eff3fd] shadow">
          <div className="w-[50%]">
            <h1 className="text-3xl font-semibold text-center">Sharub Team</h1>
            <img
              src="/img/sharub-team.jpg"
              alt="sharub-team"
              className="w-full h-full object-cover rounded-3xl my-4 shadow-md"
            />
            <h2 className="text-md text-center">Bùi Vĩ Quốc (Leader)</h2>
            <h2 className="text-md text-center">Lê Thị Liên (Content Creator)</h2>
            <h2 className="text-md text-center">Lê Tuấn Anh (Designer)</h2>
            <h2 className="text-md text-center">Nguyễn Xuân Bắc (Developer)</h2>
            <h2 className="text-md text-center">Trần Tuấn Kiệt (Developer)</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
