import styles from '../../../../styles/Home.module.css'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Reminder = () => {


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [onCrud, setOnCrud] = useState(false)
  const params = useRouter().query
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:${params.type==='event'?'8081':'8080'}/${params.type==='event'?'events':'todos'}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  async function OnDelete (e, id){
    await fetch(`http://localhost:${params.type==='event'?'8081':'8080'}/${params.type==='event'?'events':'todos'}/${params.id}`, {method: 'DELETE'}).then(() => { window.location.href = '/'})
   
     
  }

  if (isLoading) return <p>Loading...</p>
console.log(data)
  return(
      <>

   <div style={{textAlign:"center",width:80+"%",margin:"auto",padding:5+"%"}}>
     <h1>
     <div className={styles.remove1} onClick={(e)=>OnDelete(e,data.id)} ><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.remove}><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></div>
     {!data ?<p>No Event To Show</p>:data.event||data.task}
     {!data ?<p>No Dates To Show</p>: params.type=='event'&&<><p style={{fontSize:"large"}}>Start: {data.startDateTime}</p><p style={{fontSize:"large"}}>End: {data.endDateTime}</p></>}
     {!data ?<p>No Description TO Show</p>:<p style={{fontSize:"large"}}>{data.description}</p>}
     <Link href="/"><a style={{fontSize:"small",color:"blue"}}>&larr; Go Back</a></Link>
     </h1>
   </div>

  <footer className={styles.footer}>
   
  </footer>
 
  </>
  )
}
export default Reminder