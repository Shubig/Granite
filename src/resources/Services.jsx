import React, { useRef } from "react";

// Simple Error Boundary (class component)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-100 border border-red-300 rounded-lg text-red-800">
          Something went wrong while rendering this section.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const sectionRefs = {
    one: useRef(null),
    two: useRef(null),
    three: useRef(null),
    four: useRef(null),
    five: useRef(null),
  };

  const scrollToSection = (sectionKey) => {
    sectionRefs[sectionKey].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-8 space-y-8 bg-gray-700">
     
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollToSection("one")}
          className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-400  transition"
        >
          Tiles Section
        </button>
        <button
          onClick={() => scrollToSection("two")}
          className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-400 transition"
        >
         Granites Section
        </button>
        <button
          onClick={() => scrollToSection("three")}
          className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-400 transition"
        >
          Material Supply
        </button>
        <button
          onClick={() => scrollToSection("four")}
          className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-400 transition"
        >
          Bulk Ordering
        </button>
        <button
          onClick={() => scrollToSection("five")}
          className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-400 transition"
        >
          Handcrafts
        </button>
      </div>
      
      <ErrorBoundary>
        <div
          ref={sectionRefs.one}
          className="p-8 bg-blue-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">TILES SECTION</h2>
         <div className=" flex flex-wrap justify-center gap-10">
          <img src="/Tile5.jpg"className="w-50 "/>
          <img src="/Tile6.jpg"className="w-50 "/>
          <img src="/Tile7.jpg"className="w-50 "/>
          <img src="/Tile8.jpg"className="w-50 "/>
         </div>
         <p className="m-5 font-serif text-2xl text-gray-600">Tiles are more than just a surface covering they are a style statement that brings together durability, beauty, and character. Our tile collection is crafted with the highest quality standards, offering ceramic, porcelain, vitrified, mosaic, and natural stone options to suit every taste. <br /><br /> From kitchens to living rooms, bathrooms to outdoor patios, our tiles enhance every space with elegance. Choose from glossy, matte, and textured finishes, large or small formats, neutral tones or vibrant colors, and even nature-inspired or geometric patterns. <br /><br /> We offer marble and granite tiles for timeless luxury, wood-look tiles for warmth, anti-skid tiles for safety, and outdoor tiles built to withstand all weather conditions. Each tile is tested for water, stain, scratch, heat, UV, slip, and fire resistance, ensuring long-lasting performance. <br /><br /> Our team provides expert guidance, sample previews, 3D design layouts, custom size cutting, and professional installation services. You can mix and match styles, create feature walls, add decorative borders, or design minimalist, rustic, or industrial-inspired spaces. Our bathroom tiles resist mold and mildew, kitchen tiles stand up to stains and heat, and commercial-grade tiles handle heavy use with ease. We also provide sustainable options made from recycled materials, low-VOC adhesives, and locally sourced stone, with energy-efficient manufacturing processes that support eco-friendly living. Drawing inspiration from global trends, Italian and Spanish designs, and collaborations with top designers, our tiles blend modern innovation with timeless charm. Trusted by homeowners, architects, and interior designers for over two decades, we have transformed thousands of spaces into works of art. Whether you’re looking for understated elegance or bold statement designs, our showroom and online store bring you the finest selection, so you can experience tiles like never before — where design meets durability.</p>
        </div>
      </ErrorBoundary>


      <ErrorBoundary>
        <div
          ref={sectionRefs.two}
          className="p-8  bg-orange-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">GRANITES SECTION</h2>
           <div className=" flex flex-wrap justify-center gap-10">
            <img className=" w-50 shadow-2xl" src="/Granite1.jpg"/>
            <img className=" w-50 shadow-2xl " src="/Granite2.jpg"/>
            <img className=" w-50 shadow-2xl" src="/Granite3.jpg"/>
            <img className=" w-50 shadow-2xl" src="/Granite4.jpg"/>
           </div>
           <p className="m-5 font-serif text-2xl text-gray-600">Granite is the perfect choice to elevate your space with style and strength. Our premium-quality granite offers rich colors, unique patterns, and a polished finish that adds luxury to kitchens, bathrooms, and floors. <br /> <br /> Durable and low-maintenance, it’s built to last for years. Discover our exclusive collection and bring timeless beauty into your home or project.</p>
          <div className=" flex flex-wrap justify-center gap-10">
            <img className=" w-50 shadow-2xl" src="/Granite5.jpg"/>
            <img className=" w-50 shadow-2xl " src="/Granite6.jpg"/>
            </div>        
            <p className="m-5 font-serif text-2xl text-gray-600">Kota and Kadapa stones bring unmatched charm and durability to any project. Kota stone, with its smooth texture and earthy shades, is perfect for elegant flooring and outdoor spaces. Kadapa stone, known for its deep black tone and strength, is ideal for countertops, steps, and paving. Both are weather-resistant, easy to maintain, and long-lasting. <br /><br /> Our premium Kota and Kadapa collections combine natural beauty with functionality, making them the perfect choice for enhancing both residential and commercial spaces with style and value.</p>
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div
          ref={sectionRefs.three}
          className="p-8 bg-blue-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">MATERIAL SUPPLY</h2>
<div className=" flex flex-wrap justify-center gap-20">
          <img src="/Buildings.jpg"className="w-60"/>
          <img src="/Map1.jpg"className="w-100 "/>
         </div>
         <p className="m-5 font-serif text-2xl text-gray-600">Our material supply service ensures a steady and reliable flow of premium granite, marble, and natural stone for projects of every scale. We source high-grade stone directly from trusted quarries, both locally and internationally, to offer a wide selection of colors, patterns, and finishes. <br /><br /> Each slab is carefully inspected for quality, cut to precise dimensions, and processed using advanced machinery for a flawless finish. With well-stocked inventory and organized storage facilities, we are equipped to meet urgent orders and large-volume requirements without compromising on quality. Whether supplying raw slabs, polished tiles, or custom-cut pieces, our team coordinates closely with contractors, architects, and homeowners to ensure the right material reaches the right place at the right time. We offer flexible supply schedules, from single-piece requirements to regular bulk deliveries, supported by our efficient logistics network. <br /><br /> By combining dependable sourcing, meticulous quality control, and prompt delivery, we make sure your project always has the finest materials it needs to succeed.</p>
         
        </div>
      </ErrorBoundary>


      <ErrorBoundary>
        <div
          ref={sectionRefs.four}
          className="p-8 bg-orange-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">BULK ORDERING</h2>
         <div className=" flex flex-wrap justify-center gap-10">
            <img className=" w-50 h-50 shadow-2xl" src="/Tileground.jpg"/>
            <img className=" w-50 h-50 shadow-2xl" src="/Bulk2.jpg"/>
            <img className=" w-50 h-50 shadow-2xl" src="/Bulk3.jpg"/>
            <img className=" w-50 h-50 shadow-2xl" src="/Tileground2.jpg"/>
           </div>
           <p className="m-5 font-serif text-2xl text-gray-600">Our bulk ordering service is tailored for contractors, builders, architects, and large-scale project managers who require premium granite, marble, and natural stone in high volumes. We specialize in supplying consistent quality across every slab, ensuring uniform color, pattern, and finish to meet the exact specifications of your project. <br /><br /> With direct sourcing from trusted quarries and a robust inventory system, we are able to fulfill large orders promptly without compromising on quality. Our advanced processing facilities allow for precision cutting, polishing, and customization, so every piece arrives ready for installation. <br /><br /> We offer competitive bulk pricing, flexible payment terms, and coordinated delivery schedules to align with your construction timelines. Our logistics team ensures safe transport using specialized vehicles and secure packaging, minimizing the risk of damage during transit. Whether it’s for residential developments, commercial complexes, or public infrastructure projects, our bulk ordering solution provides the scale, reliability, and professional service you need to keep your project running smoothly from start to finish.</p>
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div
          ref={sectionRefs.five}
          className="p-8 bg-orange-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">HANDCRAFTS</h2>
          <div className=" flex flex-wrap justify-center gap-10">
          <img className=" w-50 h-50 shadow-2xl" src="/Handcraft1.jpg"/>
          <img className=" w-50 h-50 shadow-2xl" src="/Handcraft2.jpg"/>
          <img className=" w-50 h-50 shadow-2xl" src="/Handcraft3.jpg"/>
          </div>
          <p className="m-5 font-serif text-2xl text-gray-600">Discover the timeless beauty of handcrafted marbles at our granite showroom. Each piece is carefully selected and meticulously crafted by skilled artisans to bring unmatched elegance and durability to your space. Our handcrafted marbles showcase natural veining, rich textures, and unique patterns that add a luxurious touch to interiors, from kitchens and bathrooms to flooring and walls. We take pride in offering premium-quality materials that blend tradition with modern design, ensuring your project stands out. Whether you're renovating or building new, our handcrafted marble collection offers the perfect combination of artistry and strength for a truly refined and lasting impression.</p>
          
          </div>
      </ErrorBoundary>
    </div>
  );
}
