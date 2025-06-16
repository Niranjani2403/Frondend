import React, { useState } from 'react'; 
import axios from 'axios'; 

function LoginPage() { 
    
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const handleLogin = async () => { 
        const res = await axios.post('/api/auth/login', { email, password }); 
        if (res.data.success) 
            { 
                localStorage.setItem('user', JSON.stringify(res.data.user)); 
                window.location.href = '/dashboard'; } 
            }; 
            
            return ( 
            <div className="container mt-5"> 
            
            <h2>Login</h2> 
            <input className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <input className="form-control my-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
             </div> 
             ); 
            } 
            
            export default LoginPage;
