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
          Delivery Logistics
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
      </div>
      
      <ErrorBoundary>
        <div
          ref={sectionRefs.one}
          className="p-8 bg-blue-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">TILES SECTION</h2>
         <div className=" flex flex-wrap justify-center gap-10">
          <img src="./src/assets/Tile1.jpg"className="w-50 "/>
          <img src="./src/assets/Tile2.jpg"className="w-50 "/>
          <img src="./src/assets/Tile3.jpg"className="w-50 "/>
          <img src="./src/assets/Tile4.jpg"className="w-50 "/>
         </div>
         <p className="m-5 font-serif text-2xl text-gray-600">Tiles are more than just a surface covering they are a style statement that brings together durability, beauty, and character. Our tile collection is crafted with the highest quality standards, offering ceramic, porcelain, vitrified, mosaic, and natural stone options to suit every taste. <br /><br /> From kitchens to living rooms, bathrooms to outdoor patios, our tiles enhance every space with elegance. Choose from glossy, matte, and textured finishes, large or small formats, neutral tones or vibrant colors, and even nature-inspired or geometric patterns. <br /><br /> We offer marble and granite tiles for timeless luxury, wood-look tiles for warmth, anti-skid tiles for safety, and outdoor tiles built to withstand all weather conditions. Each tile is tested for water, stain, scratch, heat, UV, slip, and fire resistance, ensuring long-lasting performance. <br /><br /> Our team provides expert guidance, sample previews, 3D design layouts, custom size cutting, and professional installation services. You can mix and match styles, create feature walls, add decorative borders, or design minimalist, rustic, or industrial-inspired spaces. Our bathroom tiles resist mold and mildew, kitchen tiles stand up to stains and heat, and commercial-grade tiles handle heavy use with ease. We also provide sustainable options made from recycled materials, low-VOC adhesives, and locally sourced stone, with energy-efficient manufacturing processes that support eco-friendly living. Drawing inspiration from global trends, Italian and Spanish designs, and collaborations with top designers, our tiles blend modern innovation with timeless charm. Trusted by homeowners, architects, and interior designers for over two decades, we have transformed thousands of spaces into works of art. Whether you’re looking for understated elegance or bold statement designs, our showroom and online store bring you the finest selection, so you can experience tiles like never before — where design meets durability.</p>
        </div>
      </ErrorBoundary>


      <ErrorBoundary>
        <div
          ref={sectionRefs.two}
          className="p-8  bg-orange-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">DELIVERY LOGISTICS</h2>
           <div className=" flex flex-wrap justify-center gap-10">
            <img className=" w-200 h-50" src="./src/assets/Delivery.jpg"/>
           </div>
           <p className="m-5 font-serif text-2xl text-gray-600">Our delivery and logistics services are designed to ensure that your granite, marble, and natural stone products arrive on time, in perfect condition, and ready for installation. <br /><br /> We operate a well-organized transport network with specialized vehicles equipped to handle heavy and delicate stone slabs safely. From our processing unit to your project site, every shipment is managed with precision, using secure packaging, protective padding, and careful loading methods to prevent damage. Our team coordinates each delivery with GPS tracking and optimized routes, ensuring timely arrival whether it’s a local drop-off or a long-distance dispatch. Strategically located warehouses and streamlined inventory management allow us to process orders quickly, while our trained logistics staff oversees every step to guarantee quality handling. Whether you’re a homeowner, contractor, or architect, we provide reliable delivery options—ranging from same-day local dispatches to scheduled bulk shipments—so your project runs smoothly without delays. <br /><br /> With our commitment to safety, efficiency, and transparency, we make sure your granite reaches you exactly when and how you need it.</p>
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div
          ref={sectionRefs.three}
          className="p-8 bg-blue-100 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-2">MATERIAL SUPPLY</h2>
<div className=" flex flex-wrap justify-center gap-30">
          <img src="./src/assets/Tileout.jpg"className="w-60 "/>
          <img src="./src/assets/Tileground.jpg"className="w-60 "/>
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
            <img className=" w-200 h-50" src="./src/assets/Bulk.jpg"/>
           </div>
           <p className="m-5 font-serif text-2xl text-gray-600">Our bulk ordering service is tailored for contractors, builders, architects, and large-scale project managers who require premium granite, marble, and natural stone in high volumes. We specialize in supplying consistent quality across every slab, ensuring uniform color, pattern, and finish to meet the exact specifications of your project. <br /><br /> With direct sourcing from trusted quarries and a robust inventory system, we are able to fulfill large orders promptly without compromising on quality. Our advanced processing facilities allow for precision cutting, polishing, and customization, so every piece arrives ready for installation. <br /><br /> We offer competitive bulk pricing, flexible payment terms, and coordinated delivery schedules to align with your construction timelines. Our logistics team ensures safe transport using specialized vehicles and secure packaging, minimizing the risk of damage during transit. Whether it’s for residential developments, commercial complexes, or public infrastructure projects, our bulk ordering solution provides the scale, reliability, and professional service you need to keep your project running smoothly from start to finish.</p>
        </div>
      </ErrorBoundary>
    </div>
  );
}
