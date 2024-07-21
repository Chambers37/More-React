import { useState, useEffect } from "react";


const api = 'https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players'

const PuppyList = ({ puppyDetails, setPuppyDetails }) => {

  const [puppyList, setPuppyList] = useState([]);

  useEffect(() => {

    const getPuppies = async () => {
      const response = await fetch(api);
      const jsonResponse = await response.json();
      const allPuppies = jsonResponse.data.players
      setPuppyList(allPuppies)

    }
    getPuppies();
  }, [])

  const getPuppyDetails = async (puppyID) => {
    const response = await fetch(`${api}/${puppyID}`);
    const jsonResponse = await response.json();
    setPuppyDetails(jsonResponse.data.player)
    console.log(jsonResponse.data.player)
  }

  return (
    <ul>
      {
        puppyList.map((puppy) => {
          return (
            <section key={puppy.id} onClick={() => {
              getPuppyDetails(puppy.id)
            }}>
              <li>{puppy.name}</li>
              <img src={puppy.imageUrl} height="100px"></img>
            </section>
          )
        })
      }
    </ul>
  )

}

export default PuppyList