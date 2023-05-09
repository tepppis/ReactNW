import './App.css'
import React, {useState, useEffect} from 'react'



const Posts = () => {


// Komponentin tilan määritys
const [posts, setPosts] = useState([])

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) //muutetaan json data javascriptiksi
  .then(oliot => setPosts(oliot))
},[]  
)



  return (
    <>
        <h2>Posts from JsonPlaceholder.Typicode</h2>

        {
          //loopataan läpi taulukollinen olioita  posts &&  koska fetchaus kestää hetken pidempään kuin sivun latautuminen ja voi kaataa ohjelman
          posts && posts.map(p => 

          <div className='posts' key={p.id}>

            {/* kotitehtävä muodostaa mukavampi näkymä ja samalainen piilotustoiminto kuin laskurissa*/}
          {/* <p>{p.userId}</p> */}

          <p>{p.title}</p>

          </div>
          ) 
        }
    </>
  )
}

export default Posts
