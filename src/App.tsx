
import './App.css'
import KeywordTable from './components/keywords/KeywordTable'

import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster position='bottom-center'/>
      <div className='max-w-screen-xl mx-auto p-5'>
        <div className='text-3xl mx-auto px-8 py-4 font-semibold'>
          Bot Settings
          <div className='text-red-500 italic font-normal pt-3 text-sm'>
            Please reload the page if no data is visible and wait for a moment
          </div>
        </div>
        {/* tabs component */}

        {/* Keyword table */}
        <KeywordTable />
      </div>
    </>
  )
}

export default App
