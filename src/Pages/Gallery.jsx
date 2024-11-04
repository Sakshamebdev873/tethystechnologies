import React, { useState } from "react";
import Tethnavbar from "../Components/Tethnavbar";
import EventFooter from "../Footer brand/EventFooter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Gallery = () => {
    
  const arr = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1618946506952-a93a84299d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZSUyMGhvdXNlfGVufDB8fDB8fHww",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1657302156653-a08a4681f449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwYXJjaGl0ZWN0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1659114340599-089aca79fe2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1684445035420-cc3aae0560cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1616132205093-3158f3a65fb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1654528485706-d147d3fec4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1650772263831-41aa1b2c80d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://images.unsplash.com/photo-1616486788371-62d930495c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxob3VzZSUyMGludGVyaW9yfGVufDB8fDB8fHww",
      category: "architecture",
    },
    {
      img: "/12.jpg",
      category: "architecture",
    },
    {
      img: "/gallery1.jpg",
      category: "cad",
    },
    {
      img: "/gallery5.jpg",
      category: "cad",
    },
    {
      img: "/gallery6.jpg",
      category: "cad",
    },
    {
      img: "/gallery10.jpg",
      category: "cad",
    },
    {
      img: "/gallery12.jpg",
      category: "cad",
    },
    {
      img: "/gallery13.jpg",
      category: "cad",
    },
    {
      img: "/gallery14.jpg",
      category: "cad",
    },
    {
      img: "/gallery15.jpg",
      category: "cad",
    },
    {
      img: "/gallery18.jpg",
      category: "cad",
    },
    {
      img: "/gallery19.jpg",
      category: "cad",
    },
    {
      img: "/gallery20.jpg",
      category: "cad",
    },
    {
      img: "/gallery21.jpg",
      category: "cad",
    },
    {
      img: "/gallery22.jpg",
      category: "cad",
    },
    {
      img: "/gallery23.jpg",
      category: "cad",
    },
    {
      img: "/gallery25.jpg",
      category: "cad",
    },
    {
      img: "/gallery26.jpg",
      category: "cad",
    },
    {
      img: "/gallery28.jpg",
      category: "cad",
    },
    {
      img: "/gallery29.jpg",
      category: "cad",
    },
    
    {
      img: "/gallery31.jpg",
      category: "cad",
    },
    {
      img: "/gallery32.jpg",
      category: "cad",
    },
    {
      img: "/gallery33.jpg",
      category: "cad",
    },
    {
      img: "/gallery34.jpg",
      category: "cad",
    },
    {
      img: "/gallery35.jpg",
      category: "cad",
    },
    {
      img: "/gallery36.jpg",
      category: "cad",
    },
    {
      img: "/gallery37.jpg",
      category: "cad",
    },
    {
      img: "/gallery38.jpg",
      category: "cad",
    },
    {
      img: "/gallery39.jpg",
      category: "cad",
    },
    {
      img: "/gallery40.jpg",
      category: "cad",
    },
    {
      img: "/gallery230.jpg",
      category: "cad",
    },
    {
        img: "https://img.freepik.com/free-photo/backpacker-deogyusan-mountains-winter_335224-465.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid",
        category: "travels"
    },
    {
        img: "https://img.freepik.com/premium-photo/haridwar-india_1271037-22568.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid",
        category: "travels",
    },
    {
        img: "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823131.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid",
        category: "travels",
    },{
        img: "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823127.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid",
        category: "travels",
    },{
        img: "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823129.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid",
        category: "travels",
    },{
        img: "https://img.freepik.com/free-photo/woman-with-fantastic-unicorn_23-2151626313.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid",
        category: "travels",
    },{
        img: "https://images.unsplash.com/photo-1593421045916-e0ac1f712f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm9ydGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
        category: "travels",
    },{
        img: "https://images.unsplash.com/photo-1695277501138-94d94ca4e8cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9ydGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
        category: "travels",
    },{
        img: "https://plus.unsplash.com/premium_photo-1697729564534-042a8d79da8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bm9ydGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
        category: "travels",
    },{
        img: "https://plus.unsplash.com/premium_photo-1697730350129-de0e9f2b1e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5vcnRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        category: "travels",
    },{
        img: "https://images.unsplash.com/photo-1653545709914-cbb1b2748e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5vcnRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        category: "travels",
    },{
        img: "https://images.unsplash.com/photo-1719065299629-0dd63e998353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5vcnRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        category: "travels",
    },{
        img: "https://images.unsplash.com/photo-1660678311031-7fb23017ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5vcnRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        category: "travels",
    },
    {
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
        category: "events",
    },
    {
        img: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
        category: "events",
    },{
        img: "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1470345961863-06d4b12d93b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1727430256509-0f897d6f4765?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1665960213530-3fb10da1f25e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1722953544956-192125062800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1648538923547-074724ca7a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRlc3RpbmF0aW9uJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc3RpbmF0aW9uJTIwd2VkZGluZyUyMGxvY2F0aW9uJTIwd2l0aCUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRlc3RpbmF0aW9uJTIwd2VkZGluZyUyMGxvY2F0aW9uJTIwd2l0aCUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1515962187632-cc5c908fd2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        category: "events",
    },{
        img: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
        category: "events",
    },
  ];
  const [images, setimages] = useState(arr);
const allclick =()=>{
    setimages(arr)
}
const cadclick =() =>{  
 const cadimg = arr.filter((item)=>(item.category === "cad" )) 
    setimages(cadimg)

}
const travelclick =()=>{
    const cadimg = arr.filter((item)=>(item.category === "travels" ))
    setimages(cadimg)
}
const archclick =()=>{
    const cadimg = arr.filter((item)=>(item.category === "architecture" )) 
    setimages(cadimg)
}
const eventclick =()=>{
    const cadimg = arr.filter((item)=>(item.category === "events" )) 
    setimages(cadimg)
}
useGSAP(()=>{
    gsap.from('.ww',{
        y: 100,
        opacity:0,
        duration: 2.4
    })
},[images])
  return (
    <>
      <Tethnavbar />
      <div className="flex flex-col   w-[100%]  mt-12 px-8">
        <h1 className="text-2xl font-medium font-serif text-center py-5 lg:text-5xl">
          Gallery{" "}
        </h1>
        <img
          src="https://img.freepik.com/free-photo/colorful-display-wood-with-sunset-background_1340-24434.jpg?ga=GA1.1.1491457353.1729703992&semt=ais_hybrid"
          alt="#"
          className="object-cover"
        />
        <div className="mt-8 flex gap-4 items-center justify-center flex-wrap flex-row  ">
          <button onClick={allclick}
            type="button"
            className="lg:text-2xl  font-medium transition-all ease-in px-2 py-1 lg:p-4 border border-black hover:text-white hover:bg-black text "
          >
            All
          </button>
          <button onClick={cadclick}
            type="button"
            className="lg:text-2xl  font-medium transition-all ease-in px-2 py-1 lg:p-4 border border-black hover:text-white hover:bg-black text "
          >
            Cad
          </button>
          <button
            type="button" onClick={travelclick}
            className="lg:text-2xl  font-medium transition-all ease-in px-2 py-1 lg:p-4 border border-black hover:text-white hover:bg-black text "
          >
            Travels
          </button>
          <button  onClick={eventclick}
            type="button"
            className="lg:text-2xl  font-medium transition-all ease-in px-2 py-1 lg:p-4 border border-black hover:text-white hover:bg-black text "
          >
            Events
          </button>
          <button onClick={archclick}
            type="button"
            className="lg:text-2xl  font-medium transition-all ease-in px-2 py-1 lg:p-4 border border-black hover:text-white hover:bg-black text "
          >
            Naksha ghar
          </button>
        </div>
      </div>
      <div className="flex flex-wrap flex-col lg:flex-row mt-8 gap-2 items-center justify-center">
        {images.map((imga) => {
          const { img, category } = imga;
          return (
            <a href={img} target="_blank" >
                <img
              src={img}
              alt={category}
              loading="lazy"
              className="w-[450px] h-[450px] ww cursor-pointer "
            />
            </a>
          );
        })}
      </div>
      <EventFooter />
    </>
  );
};

export default Gallery;
