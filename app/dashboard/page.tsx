"use client"
import {Navbar, Map, Stats } from '@/components'


const Dashboard = () => {

  return (
    <main className='flex flex-col contaniner lg:mt-[100px] mt-[70px]'>

      <section className="" id="dashboard">
        <Navbar />
      </section>

      <section className='mx-8 rounded-xl py-6 px-2 w-fill bg-pink-400 text-white'>
        <Map />
      </section>
      
      <section>
        <Stats />
      </section>
    </main>
  );
};

export default Dashboard;
