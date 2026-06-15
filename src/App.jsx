import { useState } from 'react'

import './App.css'

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
   const [textarea, setTextArea] = useState("");
   const [query, setQuery] = useState("");

  return (
    <>
      <section className='form'>
      <div className="form-container">
<form action="">
  <div className='text-input'>
 <h1>Contact Us</h1>
  <div className='name'>
    <div className='fname'>
<label htmlFor="fname">First Name</label>
  <input type="text" id="fname" value={fname} onChange={(e)=>setFname(e.target.value)} name="firstname" placeholder=""/>
    </div>
 <div className='lname'>
<label htmlFor="lname">Last Name</label>
  <input type="text" id="lname" value={lname} onChange={(e)=>setLname(e.target.value)} name="lastname" placeholder=""/>
 </div>
  
  </div>
  <div className='email'>
 <label htmlFor="email">Email Address</label>
  <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=""/>
  </div>
  

  <div className='query-container'>
 <label htmlFor="query">Query Type</label>
 <div className='query-type'>
  <div className='radio-container'>
<input type="radio" name="query-type" id="general-enquiry" value="general" checked={query==="general"} onChange={(e) => setQuery(e.target.value)}/>
<label htmlFor="general-enquiry">General Enquiry</label>
</div>
<div className='radio-container'>
<input type="radio" name="query-type" id="support-request" value="support" checked={query==="support"} onChange={(e) => setQuery(e.target.value)}/>
<label htmlFor="support-request">Support Request</label>
</div>
 </div>


  </div>

  <div className='text-area'>
  <label htmlFor="message">Message</label>
  <textarea name="message" id="message" value={textarea} onChange={(e)=>setTextArea(e.target.value)}></textarea>
</div>

  </div>
 



<div className="buttons">
<div className='consent'>  
<input type="checkbox" id="agree"/>
<label htmlFor="checkbox"></label>I consent to being contacted by the team.</div>

<button type="submit">Submit</button>
</div>

 
</form>
      </div>
      </section>

     
    </>
  )
}

export default App
