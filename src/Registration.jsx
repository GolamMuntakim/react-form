import { useState } from "react"


function Registration() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    // console.log({name: name, email: email, password : password})
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!isChecked){
            return;
        }
       
        const user ={
            name: name,
            email : email,
            password: password
        }
        setIsSubmit(true)
    }
  return (
    <div className='h-screen flex items-center justify-center '>
    <form onSubmit={(event)=>handleSubmit(event)}>
    <div className='bg-blue-400 p-16 rounded-3xl flex flex-col '>
    <h1 className='text-4xl font-extrabold mb-4'>Sign Up Form</h1>
    <label class="mb-2 text-lg font-bold">Name :</label>
    <input onChange={(event)=>{setName(event.target.value)}} type="text" class=" input input-bordered" placeholder="type your name" required/>
    <label  class="mb-2 text-lg font-bold">Email :</label>
    <input onChange={(event)=>{setEmail(event.target.value)}} type="email" class="input input-bordered mb-2" placeholder="type your mail" required/>
    <label class="mb-2 text-lg font-bold">Password :</label>
    <input onChange={(event)=>{setPassword(event.target.value)}} type="password" class="input input-bordered mb-2" placeholder="type your Password" required/>

    <div><input type="checkbox" onChange={(event)=>setIsChecked(event.target.checked)}/> Do You agree with our terms and conditions?</div>

    <button class="btn btn-outline btn-success">Sign Up</button>
      </div>
    </form>
   {
    isSubmit &&  <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
    <div className="w-1/2 h-1/2 rounded bg-purple-300 text-center">
        <h1 className="text-3xl mb-6 text-purple-500">You have submitted the form successfully!</h1>
        <p className="text-xl mb-3">Name : {name}</p>
        <p className="text-xl mb-3">Email : {email}</p>
    </div>
</div>
   }
    </div>
  )
}

export default Registration