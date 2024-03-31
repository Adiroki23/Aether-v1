import CreateUnwalletStep from './_components/create-unwallet-step'
import SelectDomainStep from './_components/select-domain-step'
import { OnboardingStep } from './types'

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: '1',
    title: 'Select Domain',
    shortTitle: 'Select Domain',
    description: 'Find your favorite multichain domain name.',
    component: SelectDomainStep,
  },
  {
    id: '2',
    title: 'Create Aether',
    shortTitle: 'Create Aether',
    description: 'Deploying smart wallet only using on-device biometrics.',
    component: CreateUnwalletStep,
  },
]
