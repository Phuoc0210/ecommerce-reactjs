import { useState } from 'react';
import ConfirmOtp from './ConfirmOTP';
import VerifyEmail from './VerifyEmail';
import NewPassword from './NewPassword';
function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleEmailEntered = (enteredEmail) => {
    setEmail(enteredEmail);
    setStep(2);
  };

  const handleOtpVerified = () => setStep(3);

  if (step === 1) return <VerifyEmail onNext={handleEmailEntered} />;
  if (step === 2)
    return <ConfirmOtp email={email} onNext={handleOtpVerified} />;
  if (step === 3) return <NewPassword email={email} />;
}

export default ForgotPassword;
