"use client"

export default function Button(props:any) {
  return (
    <main>
   <button onClick={props.function}>{props.title}</button>
    </main>
  )
}
