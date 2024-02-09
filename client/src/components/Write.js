import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className=' ml-20 mt-16 flex'>
      <div className='w-3/4'>
        <input type="text" placeholder="Title" className="w-[400px] h-10 text-2xl pl-2 border mb-10"/>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} className='h-64' />
        </div>
        <div>
          <div className='mt-20'>
            <input type="file" id="file" className="hidden"/>
            <label htmlFor="file" className="bg-black text-white rounded-lg py-1 w-36 text-center ml-1 hover:bg-white hover:text-black hover:border hover:border-black">Upload Image</label>
            <div>
              <button className="bg-black text-white rounded-lg py-1 w-28 text-center mt-5 mr-5 hover:bg-white hover:text-black hover:border hover:border-black">Publish</button>
              <button className="bg-black text-white rounded-lg py-1 w-28 text-center hover:bg-white hover:text-black hover:border hover:border-black">Save Draft</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/4 mx-20 mb-28 border'>
        <h1 className='text-xl font-bold pb-5 ml-3 mt-4'>Category</h1>
        <div className='ml-3'>
          <input type="radio" name="category" value="tech" className='mb-3'/>
          <label htmlFor="tech">Tech</label><br/>

          <input type="radio" name="category" value="science" className='mb-3'/>
          <label htmlFor="science">Science</label><br/>

          <input type="radio" name="category" value="business" className='mb-3'/>
          <label htmlFor="business">Business</label><br/>

          <input type="radio" name="category" value="sports" className='mb-3'/>
          <label htmlFor="sports">Sports</label><br/>

          <input type="radio" name="category" value="culinary" className='mb-3'/>
          <label htmlFor="culinary">Culinary</label><br/>

          <input type="radio" name="category" value="art" className='mb-3'/>
          <label htmlFor="art">Art</label><br/>
        </div>
      </div>
    </div>
  )
}

export default Write