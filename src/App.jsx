import PuppyList from './PuppyList.jsx'
import PuppyDetails from './PuppyDetails.jsx'
import { useState } from 'react'

const App = () => {

  const [puppyDetails, setPuppyDetails] = useState({})
 

  return (
    <>
      <header>
        <nav>
          
           <button>Login</button>
          
        </nav>
      </header>
      
      <h1>Puppies</h1>
      
          {
            puppyDetails.name ? 
            <PuppyDetails puppyDetails={puppyDetails} setPuppyDetails={setPuppyDetails}/> :
            <PuppyList puppyDetails={puppyDetails} setPuppyDetails={setPuppyDetails}/>
            
          }
    </>
  )
}

export default App
