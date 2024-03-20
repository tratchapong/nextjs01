'use client'

import { useState, useEffect } from "react"



export default function Page() {
  const [posts, setPosts] = useState([])
  
  async function getPosts() {
      const resp = await fetch('https://dummyjson.com/posts')
      return resp.json()
    }

  useEffect( ()=> {
    console.log('useEffect in posts')
    const run = async () => {
      const data = (await getPosts()).posts
      setPosts(data)
    }
    run()
  },[])

  return (
    <div>
      <div className="text-xl p-2">Post (CSR)</div>
      <hr/>
        {posts.map(el=>(
          <p key={el.id}> {el.id} : {el.title}</p>
      ))}
    </div>
  )
}
