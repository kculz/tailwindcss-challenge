import { useState } from 'react'
import {data} from './assets/data'
function App() {

  const [activeItem, setActiveItems] = useState(3)

  return (
    <section className="container md:px-32 px-5 w-screen">
        <div className="md:text-start text-center space-y-4 lg:w-3/5 w-full  relative top-16  z-10 p-5">
          <h1 className="md:text-4xl text-3xl font-bold lg:w-full lg:px-0 px-10 flex justify-center items-center">Top-notch responsive website templates.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nostrum atque quos cumque dolorum laudantium, quas aut nulla quod laboriosam suscipit doloribus repellendus eum provident ut facere aliquam praesentium et?</p>
          <div>
            <input type="search" name="" id=""  className='py-2 rounded-md shadow border outline-none px-5' placeholder='search'/>
          </div>
        </div>

        <div className='lg:flex md:justify-center md:items-center gap-4 w-full h-[300px] hidden absolute top-5 right-0 md:px32'>
          
          {
            data.map((item, index) => {
              return (
                <div key={index} className=" w-[30%] h-[74%]  py-10 [&[aria-current='true']]:w-[50%] [&[aria-current='true']]:opacity-100 opacity-10 [&[aria-current='true']]:h-[100%] focus:opacity-1 first:w-[30%] last:w-[30%] overflow-hidden rounded  " aria-current={activeItem === index} onClick={() => setActiveItems(index)}>
                    <img src={item.src} alt="" className='bg-gray-100 w-full h-full object-cover'/>
                    <p className=''>{item.title}</p>
                </div>
                
              )
            })
          } 
        </div>

    </section>
  )
}

export default App
