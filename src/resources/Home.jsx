import { Link } from "react-router-dom"


function Home() {
  return (
    <>
    <div className='flex flex-wrap bg-gray-900 w-full'>
<div className='bg-gray-900 w-full relative'><img className='w-full h-125 shadow-2xl' src="/Background.jpg"/></div>
<div className='absolute text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-14 font-bold font-serif italic text-gray-900 mt-30 '>EXPERIENCE . QUALITY . LEGACY</div>
<div className='absolute text-xl sm:text-3xl md:text-4xl lg:text-5xl px-14 font-bold font-serif italic text-gray-800 mt-60 '>That's The Foundation We've Built</div>
<div className='absolute text-lg sm:text-2xl md:text-3xl lg:text-4xl px-14 font-bold font-serif italic text-zinc-900 mt-90'>and We'r Just Getting Started</div>
</div>



<div className='bg-gray-700 w-full gap-5 justify-center p-10 flex flex-wrap'>
  <div className='m-10 shadow-2xl'><img className="w-100 " src='/Italian.jpg'/></div>
  <div className='m-10 shadow-2xl'><img className="w-100 " src='/Italian2.jpg'/></div>
<div className="flex flex-col gap-10 flex-wrap"> <p className='text-gray-400 font-serif text-2xl font-bold '>Popular CounterTop Material</p>
<p className='text-gray-400 font-serif text-xl '>Elegant and timeless, marble countertops bring natural beauty and sophistication to any kitchen or bathroom. Known for its unique veining and cool, smooth surface, marble adds a luxurious touch that’s hard to replicate. While it requires a bit more care than other stones, its aesthetic appeal makes it a favorite for those who value classic design and refined texture. Ideal for baking enthusiasts due to its naturally cool temperature, marble is more than just a surface</p>
<div className=''><button className='bg-amber-300 rounded-2xl font-bold px-5 py-3  '><Link to='/contact'>Contact us</Link></button></div>
</div></div>



<div className='flex justify-center'>
  <div className='relative shadow-2xl'><img src="/Slab.png" alt="" /></div>
  <div className='absolute shadow-2xl'><img src="/Slabshade.png" alt="" /></div>
  <div className='absolute p-10'><img src="/Slabtext.png" alt="" /></div>
</div>


<div className='bg-gray-700 w-full  p-10 justify-items-center' >
  <div className='flex gap-20 p-10 flex-wrap'>
<img className="w-40 h-50 shadow-2xl" src="/Locally1.png" alt="" />
<img className="w-40 h-50 shadow-2xl" src="/Locally2.png" alt="" />
<img className="hidden sm:block w-40 h-50 shadow-2xl" src="/Locally3.png" alt="" />
<img className="hidden sm:block w-40 h-50 shadow-2xl" src="/Locally4.png" alt="" />
<img className="w-40 h-50 shadow-2xl" src="/Locally5.png" alt="" />
</div>
</div>
    </>   )
}

export default Home