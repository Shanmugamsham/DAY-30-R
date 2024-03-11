import { useState ,useEffect} from 'react'
import axios, { all } from 'axios'
import './App.css'
import Card from './Card'

function App() {
   
 const [alldata,setAlldata]=useState([])
 const [fname,setname]=useState("")

  const col={col: "col-12 col-md-6"}

  const getdata=async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then((respo)=>setAlldata(respo.data))
  }
  const handlname=(e)=>{
    const fname=e.target.value
     setname(name)


  }
  console.log(fname)
   
  useEffect(()=>{
    getdata()   
  },[])
  console.log(alldata)

    function Delete(findid){
       setAlldata(alldata.filter((d)=>d.id!==findid))
   }
   
   
  
  
  return (
  
  <div className='bg-image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='mainheading'>Employee Data</h1>
            </div>
        {alldata.map((d)=>(<div key={d.id} className={col.col}>
          
          <div className='cards'>
            <h1 className='maininfo'>Emplayee Info: </h1>
          <h1 className='mainid'>Id:  {d.id}</h1>
          <p>Name: {d.name}</p>
          <p>username:  {d.username}</p>
          <p>Email:  {d.email}</p>
          <p>Phone: {d.phone}</p>
          
          
         <h1 className='maininfo'>Address:</h1> 
         <p>City:  {d.address.city}</p>
         <p>Street: {d.address.street}</p>
         <p>Suite:  {d.address.suite}</p>
         <p>Zipcode:  {d.address.zipcode}</p>
         <h1 className='maininfo'>Company:</h1>
         <p>Company Name :  {d.company.name}</p>
         <p>Catch Phrase:   {d.company.bs}</p>
         <div className='websizebors mt-5'>
        
         
          <p className='webs'>webside :  {d.website}</p>
          </div> 
          <button className='delete' onClick={()=>Delete(d.id)}>Delete</button>        
          </div>

        
         
        </div>))}
         


          
          </div>
        </div>
        </div>
     
  )
}

export default App
