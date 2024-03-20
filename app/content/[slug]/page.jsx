import React from "react";

export default function Page({ params }) {
  return (
    <>
      <div className="text-2xl p-2">Content page</div>
      <p className="text-3xl">Params is {params.slug}</p>
    </>
  );
}
