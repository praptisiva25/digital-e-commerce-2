import { SignUp } from '@clerk/nextjs'

// pages/auth/sign-up.js;
import CustomSignUpForm from '../../../_components/CustomSignUpForm'; // Adjust path if needed

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <CustomSignUpForm />
    </div>
  );
}
