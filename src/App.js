import React from 'react'
import Fliga_logo from './images/Fliga_logo.png'
import image5 from './images/image5.png'
import Group1img1 from './images/Group1img1.png'
import Group1img3 from './images/Group1img3.png'
import Group1img4 from './images/Group1img4.png'
import Group1img5 from './images/Group1img5.png'
import photography from './images/photography.png'
import photography_upper from './images/photography_upper.png'

import Group3img1 from './images/Group3img1.png'
import Group5img1 from './images/Group5img1.png'
import Group5img2 from './images/Group5img2.png'
import Group6img1 from './images/Group6img1.png'
import Group6img0 from './images/Group6img0.png'
import Group7img1 from './images/Group7img1.png'
import Group8img1 from './images/Group8img1.png'
import Group7logo from './images/Group7logo.png'
import Group9img1 from './images/Group9img1.png'
import Arrow1 from './images/Arrow1.png'

import Footer from './components/Footer'
import Sponsors from './components/Sponsors'
import Awards from './components/Awards'


const App = () => {
  return (
    <>
      {/*--------- Navbar ----------*/}
      {/* <div className="text-white" style={{
        background: "#131514",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }}>
        <div className="flex flex-row flex-wrap">
          <div class="basis-2/12 flex flex-row flex-wrap justify-center content-center">
            <img src={Fliga_logo} alt="Fliga_logo" className="h-16 my-3 cursor-pointer" />
          </div>
          <div class="basis-6/12 flex flex-row flex-wrap justify-around items-center text-lg tracking-wide ">
            <div className="menu cursor-pointer hover:text-zinc-400" >
              <p>Home</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Services</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Portfolio</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Community</p>
            </div>
            <div className="menu cursor-pointer hover:text-zinc-400">
              <p>Blog</p>
            </div>
          </div>
          <div class="basis-4/12 flex flex-row justify-end content-center items-center pr-8">
            <div className="cursor-pointer py-2 px-5 mr-10 rounded-lg hover:text-zinc-400" style={{
              background: 'linear-gradient(180deg, rgba(78, 153, 164, 0.95) 0%, #004D58 100%)',

            }}>
              Sign Up
            </div>
            <div className="cursor-pointer py-2 px-5 rounded-lg hover:text-zinc-400" style={{
              background: 'linear-gradient(180deg, rgba(78, 153, 164, 0.95) 0%, #004D58 100%)',

            }}>
              Sign In
            </div>
          </div>
        </div>
      </div > */}

      {/*--------- Image ---------- */}
      {/* <div className="flex">
        <img src={image5} alt="" />
      </div>

      <div className="flex flex-col justify-center content-center mt-4">
        <div className="my-5">
          <p className="font-bold text-6xl text-center" style={{
            fontFamily: 'Jura', mixBlendMode: 'multiply', color: '#000000',
            lineHeight: '76px', fontStyle: 'normal'
          }}>India's Leading Creative Platform</p>
          <p className="text-center font-light text-3xl mt-2" style={{
            color: ' #4C696D', lineHeight: '32px', fontFamily: 'Josefin Sans',
            fontStyle: 'normal'
          }}>Experience hassle free bookings. Trusted by 2500+ Customers</p>
        </div>
        <div className="my-10 text-center">
          <input type="text" className="w-4/12 h-8 border-r-none" />
          <button className="text-white py-2 px-4 w-40" style={{
            background: '#221010',
            border: '1px solid #000000',
            borderRadius: '34px'
          }}>Search</button>
        </div>
        <div className="flex flex-row justify-around content-center flex-wrap">
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="justify-center content-center  flex flex-row ">
            <img src={Group1img3} alt="" className="h-20" />
            <div className="self-center pl-3">
              <p className="">Verified Reviews</p>
              <p>For verified reviewers</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center my-10">
          <div className="h-px bg-black w-11/12 mt-10"></div>
        </div>

      </div> */}

      {/* -------- Find Trusted Associate ------------*/}
      {/* <div className="flex flex-col flex-wrap p-3" style={{ background: '#A1E3D8' }}>
        <div className="basis-2/12 flex flex-row justify-between p-2 ">
          <div className="p-2 ">
            <p>Find Trusted Associate</p>
            <p>Find the best Fliqa Associate for your special day.</p>
          </div>
          <div className="p-2">
            <p>See More {'>'}{'>'}</p>
          </div>
        </div>
        <div className="basis-10/12 p-2 flex flex-row justify-around content-center  flex-wrap mb-5">
          <div className="flex flex-col" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '24px' }}>
            <img src={Group7img1} alt="" />
            <div className="flex flex-row justify-around bg-black p-1" style={{ borderBottomRightRadius: '24px', borderBottomLeftRadius: '24px' }}>
              <div className="text-white p-1">
                <p>Name Title</p>
                <p>Location</p>
              </div>
              <img src={Group7logo} alt="" className="w-28" />
            </div>
          </div>
          <div className="flex flex-col" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '24px' }}>
            <img src={Group7img1} alt="" />
            <div className="flex flex-row justify-around bg-black p-1" style={{ borderBottomRightRadius: '24px', borderBottomLeftRadius: '24px' }}>
              <div className="text-white p-1">
                <p>Name Title</p>
                <p>Location</p>
              </div>
              <img src={Group7logo} alt="" className="w-28" />
            </div>
          </div>
          <div className="flex flex-col" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '24px' }}>
            <img src={Group7img1} alt="" />
            <div className="flex flex-row justify-around bg-black p-1" style={{ borderBottomRightRadius: '24px', borderBottomLeftRadius: '24px' }}>
              <div className="text-white p-1">
                <p>Name Title</p>
                <p>Location</p>
              </div>
              <img src={Group7logo} alt="" className="w-28" />
            </div>
          </div>
          <div className="flex flex-col" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '24px' }}>
            <img src={Group7img1} alt="" />
            <div className="flex flex-row justify-around bg-black p-1" style={{ borderBottomRightRadius: '24px', borderBottomLeftRadius: '24px' }}>
              <div className="text-white p-1">
                <p>Name Title</p>
                <p>Location</p>
              </div>
              <img src={Group7logo} alt="" className="w-28" />
            </div>
          </div>

        </div>
      </div> */}

      {/*--------- Our Featured Services ---------- */}
      {/* <div className="flex flex-col p-4 flex-wrap">
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
      </div> */}
      
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
      {/* <div className="flex flex-col p-4 flex-wrap">
        <div className="basis-2/12 p-3 my-2">
          <p style={{ color: '#4C696D', lineHeight: '42px' }} className="text-4xl">Real Wedding</p>
          <p>List your wedding and browse portfolio</p>
        </div>
        <div className="basis-10/12 flex flex-row justify-around flex-wrap">
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group3img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="font-bold">Danielle & Ronnie </p>
              <p>38 photos. Kittery,Polland</p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group3img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="font-bold">Danielle & Ronnie </p>
              <p>38 photos. Kittery,Polland</p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group3img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="font-bold">Danielle & Ronnie </p>
              <p>38 photos. Kittery,Polland</p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center p-2" style={{ background: '#DDF8F3', boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.39)', borderRadius: '10px' }}>
            <img src={Group3img1} alt="" className="w-64 h-fit opacity-100" />
            <div className="p-2">
              <p className="font-bold">Danielle & Ronnie </p>
              <p>38 photos. Kittery,Polland</p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center content-center mt-20 mb-5">
        <div className="flex p-5" style={{
          background: '#DDF9FF', border: '0.2px solid #000000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '7px', lineHeight: '32px'
        }}>
          <p className="text-xl">View more weddings</p>
          <img src={Arrow1} alt="" className="px-3" />
        </div>
      </div> */}

      {/*--------- Horizontal Line ---------- */}
      {/* <div className="flex flex-row justify-center mb-10">
        <div className="h-px bg-black w-11/12 mt-10"></div>
      </div>

      <div className="flex flex-col flex-wrap mb-10">
        <div className="basis-2/12 text-center mb-5">
          <p>Best Offers</p>
          <p>Discover the best offers on our services</p>
        </div>
        <div className="basis-10/12 relative">
          <img src={Group5img2} alt="" className="h-50 w-full " />
          <img src={Group5img1} alt="" className="h-40 w-full " />
          <div className="flex flex-row flex-wrap top-16 absolute justify-around content-center w-full">
            <div className="flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 5px 9px 3px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }}>
              <div className="relative">
                <img src={Group6img1} alt="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.27)', boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }} />
                <img src={Group6img0} alt="" className="h-16 w-28 absolute top-52" />
                <p className="absolute top-44 text-white p-2 text-lg">Discount</p>
                <p className="absolute top-6 left-16 text-center text-white   p-2 text-xl">Wedding <br />Packages</p>
                <div className="flex flex-row justify-center">
                  <div className="h-px absolute top-24 bg-white w-10/12"></div>
                </div>
              </div>
              <p className="text-center p-4">BOOK NOW</p>
            </div>
            <div className="flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 5px 9px 3px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }}>
              <div className="relative">
                <img src={Group6img1} alt="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.27)', boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }} />
                <img src={Group6img0} alt="" className="h-16 w-28 absolute top-52" />
                <p className="absolute top-44 text-white p-2 text-lg">Discount</p>
                <p className="absolute top-6 left-16 text-center text-white   p-2 text-xl">Wedding <br />Packages</p>
                <div className="flex flex-row justify-center">
                  <div className="h-px absolute top-24 bg-white w-10/12"></div>
                </div>
              </div>
              <p className="text-center p-4">BOOK NOW</p>
            </div>
            <div className="flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 5px 9px 3px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }}>
              <div className="relative">
                <img src={Group6img1} alt="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.27)', boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }} />
                <img src={Group6img0} alt="" className="h-16 w-28 absolute top-52" />
                <p className="absolute top-44 text-white p-2 text-lg">Discount</p>
                <p className="absolute top-6 left-16 text-center text-white   p-2 text-xl">Wedding <br />Packages</p>
                <div className="flex flex-row justify-center">
                  <div className="h-px absolute top-24 bg-white w-10/12"></div>
                </div>
              </div>
              <p className="text-center p-4">BOOK NOW</p>
            </div>
            <div className="flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 5px 9px 3px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }}>
              <div className="relative">
                <img src={Group6img1} alt="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.27)', boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)', borderRadius: '11px' }} />
                <img src={Group6img0} alt="" className="h-16 w-28 absolute top-52" />
                <p className="absolute top-44 text-white p-2 text-lg">Discount</p>
                <p className="absolute top-6 left-16 text-center text-white   p-2 text-xl">Wedding <br />Packages</p>
                <div className="flex flex-row justify-center">
                  <div className="h-px absolute top-24 bg-white w-10/12"></div>
                </div>
              </div>
              <p className="text-center p-4">BOOK NOW</p>
            </div>

          </div>
        </div>
      </div> */}

   


      <Awards/>
      <Sponsors/>
      <div className="photography relative">
        <img src={photography} alt="" />
        <img src={photography_upper} alt="" className="photography-upper absolute  left-2/4"/>
        <div className="absolute top-20 left-10  text-white sm:block hidden ">
          <p className="lg:text-5xl md:text-2xl sm:text-sm">ULTIMATE COURSE IN</p>
          <p className="lg:text-5xl md:text-2xl sm:text-sm">PHOTOGRAPHY</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App