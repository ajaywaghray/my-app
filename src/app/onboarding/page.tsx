'use client'

import * as React from "react"

import { useState } from 'react';

import OnboardingStepOne from '@/components/ui/onboardingStepOne';

import OnboardingStepTwo from '@/components/ui/onboardingStepTwo';

import OnboardingStepThree from '@/components/ui/onboardingStepThree';

const OnboardingPage = () => {
  const [state, setState] = React.useState();
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div>
      {step === 1 && <OnboardingStepOne onNext={nextStep} />}
      {step === 2 && <OnboardingStepTwo onNext={nextStep}/>}
      {step === 3 && <OnboardingStepThree onNext={nextStep}/>}
    </div>
  );
};

export default OnboardingPage;