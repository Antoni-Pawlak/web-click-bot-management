
import './App.css'
import KeywordTable from './components/keywords/KeywordTable'
import { IoLogoPlaystation } from "react-icons/io"

import { Toaster } from "react-hot-toast";
import { useStartBot } from "./hooks/useStartBot"
import Button from "./components/button/Button";

function App() {
  const startBot = useStartBot();
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
        <div>
                <Button text="Start Bot" icon={IoLogoPlaystation} classes="gap-2 items-center px-4 justify-center flex flex-row  text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-400 p-2 "
                                        onClick={() => startBot() } />
                </div>
        {/* tabs component */}

        {/* Keyword table */}
        <KeywordTable />
      </div>
    </>
  )
}

export default App
