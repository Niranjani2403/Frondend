 import React, { useState } from 'react'; 
 import axios from 'axios'; 
 
 function RegisterPage() { 
    const [form, setForm] = useState({ name: '', email: '', address: '', password: '', role: 'user' }); 
    const handleRegister = async () => { const res = await axios.post('/api/auth/register', form); 
        if (res.data.success) window.location.href = '/';
     }; 
     
     return (
         <div className="container mt-5"> 
         <h2>Register</h2> 
         <input className="form-control my-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /> 
         <input className="form-control my-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /> 
         <input className="form-control my-2" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /> 
         <input className="form-control my-2" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /> 
         <select className="form-control my-2" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}> 
            <option value="user">Normal User</option> 
            <option value="store_owner">Store Owner</option> 
            </select> 
            
            <button className="btn btn-success" onClick={handleRegister}>Register</button> 
            </div> 
            ); 
        } 
        
        export default RegisterPage;
