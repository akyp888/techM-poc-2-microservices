import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import EventCard from './cards/EventCard';

const Events = () => {


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [onCrud, setOnCrud] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({event:'',description:'',startDateTime:'',endDateTime:''})

 

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8081/events')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [onCrud])

  function OnDelete (e, id){
    fetch('http://localhost:8081/events/' + id, {method: 'DELETE'}).then(() => {setOnCrud(!onCrud);})
    e.preventDefault();
      return false;
  }
  async function OnAdd(){
    console.log(JSON.stringify(formData))
    await fetch('http://localhost:8081/events', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(formData)}).then(()=>{setOnCrud(!onCrud)})
    setFormData({event:'',description:'',enddatetime:'',startdatetime:''})
    closeModal()
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  if (isLoading) return <p>Loading...</p>

  return(
      <>
    <div className={styles.grid}>
    <div className={styles.navbar}style={{textAlign:"center",marginBottom:5+"%"}}>
    <p className={styles.description}>
      Track Your Events
    </p>
    <button onClick={()=>openModal()} className={`${styles.button} ${styles.button2}`} >+ Add Event</button>
    </div>
      {!data ?<p>No Events To Show</p>: data.map((data,index)=>(<EventCard key={data.id} Data={data} Index={index+1} OnDelete={OnDelete} />)).reverse()}
    </div>
 

  <footer className={styles.footer}>
   
  </footer>
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <label>Task</label>
    <input type="text" value={formData.event} onChange={(e)=>setFormData({...formData,event:e.target.value})} className={styles.input} placeholder="Learn Microservices Architecture" />
    <label>Start Date Time</label>
    <input type="text" value={formData.startdatetime} onChange={(e)=>setFormData({...formData,startDateTime:e.target.value})} className={styles.input} placeholder="Jan 10,2022" />
    <label>End Date Time</label>  
    <input type="text" value={formData.enddatetime} onChange={(e)=>setFormData({...formData,endDateTime:e.target.value})} className={styles.input} placeholder="Dec 10,2022" />
    <label>Description</label>
    <textarea type="text" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}  rows="4" cols="50" className={styles.input} placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    <input type="submit" onClick={()=>(OnAdd())} className={styles.input} value="Add" />
  </Modal>
  </>
  )
}
export default Events