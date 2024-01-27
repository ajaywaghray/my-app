import * as React from "react"

import { useState } from 'react';

import OnboardingStepOne from '@/components/ui/onboardingStepOne';

import OnboardingStepTwo from '@/components/ui/onboardingStepOne';

import OnboardingStepThree from '@/components/ui/onboardingStepThree';

import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Checkbox } from "@/components/ui/checkbox"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const OnboardingPage = () => {
  const [state, setState] = React.useState();
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div>
      {step === 1 && <OnboardingStepOne onNext={nextStep} onBack={prevStep} />}
      {step === 2 && <OnboardingStepTwo onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <OnboardingStepThree onNext={nextStep} onBack={prevStep} />}
    </div>
  );
};

export default OnboardingPage;