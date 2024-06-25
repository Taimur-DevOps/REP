'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        // This is just a placeholder
        if (email === 'admin@example.com' && password === 'password') {
            // Redirect to the admin dashboard or another route
            router.push('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }} className='border p-6 flex ' >
                <h2>Admin Sign-In</h2>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='border'
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='border'
                    />
                </label>
                <button type="submit" className='mt-6'>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
