"use client"
import { useSignUp } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' in the app directory

function CustomSignUpForm() {
  const { signUp, isLoaded, isSignUpLoading } = useSignUp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMounted, setIsMounted] = useState(false);  // To ensure the component is client-side only
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Set to true once the component is mounted
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Use Clerk's signUp function to register the user
      const user = await signUp.create({
        emailAddress: email,
        password,
        firstName: fullName.split(" ")[0],  // First Name from full name
        lastName: fullName.split(" ")[1],   // Last Name from full name
      });

      // Redirect to home or dashboard after successful sign-up
      if (isMounted) {
        router.push('/dashboard'); // Adjust this path accordingly
      }
    } catch (error) {
      console.error("Sign-up error: ", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  if (!isMounted) {
    return null; // Return null until the component is mounted (prevents SSR issues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isSignUpLoading}>
        {isSignUpLoading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
}

export default CustomSignUpForm;
