import React from "react";

export default function SectionMain({ children, className }) {
  return (
    <section className={"border-b border-gray-500 "}>
      <div className={"container border-x border-gray-500 flex justify-center " + className}>{children}</div>
    </section>
  );
}
