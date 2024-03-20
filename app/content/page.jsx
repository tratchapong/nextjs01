import React from "react";

async function getPosts() {
  const resp = await fetch('https://dummyjson.com/posts')
  return resp.json()
}

export default async function Page() {
  const posts = (await getPosts()).posts
  // console.log('Posts is Array', Array.isArray(posts))
  // console.log(Object.keys(posts))
  return (
    <>
      <div className="text-xl p-2">Post (SSR)</div>
      <hr/>
      {posts.map(el=>(
        <p key={el.id}> {el.id} : {el.title}</p>
      ))}
    </>
  );
}
