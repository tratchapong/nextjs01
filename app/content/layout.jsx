import React from "react";

export default function TestLayout({children}) {
  return (
    <section>
      <div className="bg-blue-200 p-2">Sub-Header</div>
      {children}
    </section>
  );
}
