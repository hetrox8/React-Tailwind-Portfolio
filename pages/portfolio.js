import React from 'react'
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import spaceTravel  from "../public/space-travel.png";
import awesomeBooks from '../public/awesomeBooks.png';
import maths from '../public/maths.png';

const  Portfolio = ()  => {
  return (
    <>

    <section>
    <div>
      <h3 className="headings text-3xl py-1 dark:text-white ">Services I offer</h3>
      <p className="p-para text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Since the beginning of my journey as a freelance designer and
        developer, I've done remote work for
        <span className="text-teal-500"> agencies </span>
        consulted for <span className="text-teal-500">startups </span>
        and collaborated with talanted people to create digital products
        for both business and consumer use.
      </p>
      <p className=" p-para text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including programming,
        Automation  and Ethical Hacking.
      </p>
    </div>
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image src={design} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2  ">
          System Administration
        </h3>
        <p className="py-2">
          Ensuring Well Aligned System Flow and threat Free on your network
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={code} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">
          Code your dream project
        </h3>
        <p className="py-2">
          Do you have an idea for your next great website? Let us make it a
          reality.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={consulting} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
        <p className="py-2">
          Are you interested in feedback for your current project? I can
          give you tips and tricks to level it up.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
    </div>
  </section>

{/* portfolio section */}

  <section className="py-10">
    <div>
      <h3 className="headings text-3xl py-1 dark:text-white ">Portofolio</h3>
      <p className="p-para text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Since the beginning of my journey as a freelance designer and
        developer, I've done remote work for
        <span className="text-teal-500"> agencies </span>
        consulted for <span className="text-teal-500">startups </span>
        and collaborated with talanted people to create digital products
        for both business and consumer use.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p>
    </div>
    <div className="flex flex-wrap gap-6 justify-center">
{/* Card 1 */}
{/* Card 1 */}
<div className="flex-1 max-w-sm flex">
<div className="rounded-lg overflow-hidden shadow-lg dark:bg-white flex-1">
  <div className='image-card'>
<Image
className="w-full h-48 object-cover"
src={spaceTravel}
alt="Project 1"
layout="responsive"
/>
</div> 
<div className="p-4 flex flex-col">
<h4 className="text-xl font-medium mb-2">Space Travellers Hub</h4>
<p className="project-p text-gray-800 dark:text-gray-200 flex-1">
Space Travellers Hub is a React App where Users can check available Space Shuttles,
 Book or Cancel Booking. There are Various Space
 Shuttles for Booking Including the Very Best Eagle Falcon from Space X.
</p>
{/* Add live demo link */}
<button className="bg-teal-500 text-white py-2 px-4 rounded-full h-10 transition duration-300 ease-in-out hover:bg-teal-600">
  <a
    href="https://6586dec1b2a7d78b0b4e8b3e--willowy-gaufre-5ca032.netlify.app/"
    target="_blank"
    className="text-white underline"
  >
    Live Demo
  </a>
</button>
</div>
</div>
</div>

{/* Card 2 */}
<div className="flex-1 max-w-sm flex">
<div className="rounded-lg overflow-hidden shadow-lg dark:bg-white flex-1">
  <div className='image-card'>
<Image
className="w-full h-48 object-cover"
src={awesomeBooks}
alt="Project 1"
layout="responsive"
/>
</div>
<div className="p-4 flex flex-col">
<h4 className="text-xl font-medium mb-2">Math Magicians</h4>
<p className="project-p text-gray-800 dark:text-gray-200 flex-1">
  Math Magicians is a Javascript Built Web App where Users can Perform Mathematical Calculations, At the Same time having Random Quotes being Displayed to cheer up the Client in times of difficulty.
  <br />
  The main languages used are: <br/>
  <br />
  1. Vanilla Javascript
  <br />
  2. CSS
  <br />
  3. HTML
</p>
{/* Add live demo link */}
<button className="bg-teal-500 text-white py-2 px-4 rounded-full h-10 transition duration-300 ease-in-out hover:bg-teal-600">
  <a
    href="https://6586dec1b2a7d78b0b4e8b3e--willowy-gaufre-5ca032.netlify.app/"
    target="_blank"
    className="text-white underline"
  >
    Live Demo
  </a>
</button>
</div>
</div>
</div>

{/* Card 3 */}
<div className="flex-1 max-w-sm flex">
<div className="rounded-lg overflow-hidden shadow-lg dark:bg-white flex-1">
<div className='image-card'> 
<Image
className="w-full h-48 object-cover"
src={maths}
alt="Project 1"
layout="responsive"

/>
</div>
<div className="p-4 flex flex-col">
<h4 className="text-xl font-medium mb-2">Awesome Books</h4>
<p className="project-p text-gray-800 dark:text-gray-200 flex-1">
  Awesome books is a friendly educational website where users can preview the books, add them and delete in the future once done with them.
  <br />
  The main languages used to achieve this include:
  <br />
  The main languages used are: <br/>
  <br />
  1. Vanilla Javascript
  <br />
  2. CSS
  <br />
  3. HTML
</p>
{/* Add live demo link */}
<button className="bg-teal-500 text-white py-2 px-4 rounded-full h-10 transition duration-300 ease-in-out hover:bg-teal-600">
  <a
    href="https://6586dec1b2a7d78b0b4e8b3e--willowy-gaufre-5ca032.netlify.app/"
    target="_blank"
    className="text-white underline"
  >
    Live Demo
  </a>
</button>
</div>
</div>
</div>
{ /* end of portfolio*/}

</div>
  </section>
  </>
  )
}

export default Portfolio
