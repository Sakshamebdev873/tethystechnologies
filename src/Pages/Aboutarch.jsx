import React from 'react'
import Archnavbar from './Archnavbar'
import Archfooter from '../Footer brand/Archfooter'
const Aboutarch = () => {
  return (
    <>
    <Archnavbar/>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 lg:px-36 mt-2 lg:mt-12 ">
        <img
          src="https://www.gilbaneco.com/wp-content/uploads/2023/06/R_210311_N1292_medium-1380x1001.jpg"
          alt="mountains"
          className="object-cover rounded-lg "
        />
        <div className="flex flex-col items-center pl-2 lg:pl-12 ">
          <h1 className="text-6xl font-medium  lg:mt-0 mt-7 ">About us</h1>
          <p className='mt-7' >
          नक्शा घर is a comprehensive construction and facilities-related solutions firm. And Focuses on Building  the success and trust from client, our best-in-class teams deliver complex, geographically dispersed projects to the clients. Strengthened by our  experience and depth of expertise, we bring the benefits of these experiences and adapt them to our local communities. Our teams are committed to the highest standards of safety and quality with a commitment to exceed our clients expectations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 lg:px-36 mt-12 ">
        <div className="flex flex-col items-center pl-2 lg:pl-12 ">
          <h1 className="text-4xl  lg:text-6xl font-medium  ">Our History</h1>
          <p className='mt-7 lg:mr-7  ' >
          नक्शा घर is the real estate infastructure development company. We utilize our experience in finance, project management, alternative transaction structures, marketing, and project delivery structures to develop projects and communities. Our knowledge, experience, agility and creativity allow us to underwrite and execute development opportunities across multiple markets throughout the nation. And our proven track record, vertically integrated approach, and client-driven solutions to complex real estate opportunities offer a competitive advantage.
          </p>
        </div>
        <img
          src="https://www.gilbaneco.com/wp-content/uploads/2022/11/1539_11b-1-1380x1035.jpg"
          alt="mountains"
          className="object-cover rounded-lg lg:mt-0 mt-7 "
        />
      </div>
      
    <Archfooter/>
    </>
  )
}

export default Aboutarch