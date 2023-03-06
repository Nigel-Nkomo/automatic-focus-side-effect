import { useEffect, useRef } from "react";

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  //focusing is a side effect
  //side effects happen on the side not during rendering
  //side effects are taken care of by event handlers or useEffect in react to keep functions pure
  useEffect(() => {
    ref.current.focus();
  });

  return (
    <>
      <input type="text" ref={ref} value={value} onChange={onChange} />
    </>
  );
}
