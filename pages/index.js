import Link  from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  //history call
  const callhistory =()=>{
    router.replace('/history')
  }
  return (
    <>
      <h3>Home page</h3>
      <h2><Link href="/posts"><a>Post</a></Link></h2>
      <button onClick={callhistory}>Call history</button>
    </>
  )
}
