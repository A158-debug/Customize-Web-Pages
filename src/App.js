import React from 'react'


import photography from './images/photography.png'
import photography_upper from './images/photography_upper.png'

import Group8img1 from './images/Group8img1.png'

import Group9img1 from './images/Group9img1.png'
import Arrow1 from './images/Arrow1.png'
import Footer from './components/Footer'
import Sponsors from './components/Sponsors'
import Awards from './components/Awards'
import Line from './components/Line'
import Offers from './components/Offers'
import Navbar from './components/Navbar'
import Wedding from './components/Wedding'
import Associate from './components/Associates'


const App = () => {
  return (
    <>
     <Navbar/>
     <Associate/>

      {/*--------- Our Featured Services ---------- */}
      <div className="flex flex-col p-4 flex-wrap">
        <div className="basis-2/12 p-3 my-2">
          <p style={{ color: '#4C696D', lineHeight: '42px' }} className="text-4xl">Our Featured Services </p>
          <p>Discover the range of services provided by FliqaIndia</p>
        </div>
        <div className="basis-10/12 flex flex-row justify-around flex-wrap">
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group8img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="text-center">Pre Wedding Photoshoot  </p>
              <div className="flex flex-row justify-center p-1">
                <div className="h-px bg-black w-11/12"></div>
              </div>
              <p className="text-center">Starting at 25,000 (One Day)</p>
            </div>
            <div className="flex  justify-center mb-3 mt-2">
              <p className="w-8/12 bg-red-500 text-center p-1 text-white" style={{background: '#4E99A4',borderRadius: '10px'}}>Know More</p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group8img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="text-center">Pre Wedding Photoshoot  </p>
              <div className="flex flex-row justify-center p-1">
                <div className="h-px bg-black w-11/12"></div>
              </div>
              <p className="text-center">Starting at 25,000 (One Day)</p>
            </div>
            <div className="flex  justify-center mb-3 mt-2">
              <p className="w-8/12 bg-red-500 text-center p-1 text-white" style={{background: '#4E99A4',borderRadius: '10px'}}>Know More</p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group8img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="text-center">Pre Wedding Photoshoot  </p>
              <div className="flex flex-row justify-center p-1">
                <div className="h-px bg-black w-11/12"></div>
              </div>
              <p className="text-center">Starting at 25,000 (One Day)</p>
            </div>
            <div className="flex  justify-center mb-3 mt-2">
              <p className="w-8/12 bg-red-500 text-center p-1 text-white" style={{background: '#4E99A4',borderRadius: '10px'}}>Know More</p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group8img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="text-center">Pre Wedding Photoshoot  </p>
              <div className="flex flex-row justify-center p-1">
                <div className="h-px bg-black w-11/12"></div>
              </div>
              <p className="text-center">Starting at 25,000 (One Day)</p>
            </div>
            <div className="flex  justify-center mb-3 mt-2">
              <p className="w-8/12 bg-red-500 text-center p-1 text-white" style={{background: '#4E99A4',borderRadius: '10px'}}>Know More</p>
            </div>
          </div>
       

        </div>
      </div>

      {/* <div className="flex flex-col flex-wrap p-2 " style={{background: '#DDF8F3'}}>
        <div className="flex basis-2/12">
          <div>
            <p>Our Blogs</p>
            <p>Check out our Latest Blog</p>
          </div>
        </div>
        <div className="flex basis-10/12 flex-row">
          <div className="basis-7/12 flex-row flex-wrap flex">
              <img src={Group9img1} alt="" className="w-2/4 " />
              <img src={Group9img1} alt="" className="w-2/4"/>
          </div>
          <div className="basis-5/12 flex flex-col flex-wrap">
            <div className="basis-2/12 flex flex-row justify-between">
              <p>Trending Now</p>
              <p>View All</p>
            </div>
            <div className="basis-10/12 flex flex-col flex-wrap">
              <div className="flex flex-row justify-center content-center">
                  <img src={Group9img1} alt=""  className="w-32"/>
                  <div>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a placeat quae repellendus animi eius minima quibusdam dolor impedit ipsa?</p>
                  </div>
              </div>
              <div className="flex flex-row justify-center content-center">
                  <img src={Group9img1} alt=""  className="w-32"/>
                  <div>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a placeat quae repellendus animi eius minima quibusdam dolor impedit ipsa?</p>
                  </div>
              </div>
              <div className="flex flex-row justify-center content-center">
                  <img src={Group9img1} alt=""  className="w-32"/>
                  <div>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a placeat quae repellendus animi eius minima quibusdam dolor impedit ipsa?</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/*--------- Real wedding ---------- */}
      <Wedding />
      <div className="flex justify-center content-center my-5 cursor-pointer">
        <div className="flex p-5" style={{
          background: '#DDF9FF', border: '0.2px solid #000000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '7px', lineHeight: '32px'
        }}>
          <p className="text-xl">View more weddings</p>
          <img src={Arrow1} alt="" className="px-3" />
        </div>
      </div>
      <Line />
      <Offers />
      <Line />
      <Awards />
      <Sponsors />
      <div className="photography relative">
        <img src={photography} alt="" />
        <img src={photography_upper} alt="" className="photography-upper absolute  left-2/4" />
        <div className="absolute top-20 left-10  text-white sm:block hidden ">
          <p className="lg:text-5xl md:text-2xl sm:text-sm">ULTIMATE COURSE IN</p>
          <p className="lg:text-5xl md:text-2xl sm:text-sm">PHOTOGRAPHY</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App