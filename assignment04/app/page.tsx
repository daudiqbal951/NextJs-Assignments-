import Image from 'next/image'
import PersonList from "@/app/components/personList/PersonList"
export default function Home() {
  
  return (
    <main>
      <h1>Person List</h1>
      <PersonList/>
    </main>
  )
}