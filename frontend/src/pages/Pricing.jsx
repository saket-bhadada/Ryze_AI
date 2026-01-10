import React from 'react';
import PricingCard from '../components/PricingCard';

import LiquidHolo from '../components/LiquidHolo';
// import '../styles/pricing.css';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: ['1 Account', 'Basic Automations', 'Weekly Reports'],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$79',
    period: '/mo',
    features: ['5 Accounts', 'Advanced Automations', 'Priority Support'],
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited Accounts', 'Dedicated Onboarding', 'SLA & Integrations'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main className="pricing-page">
      <LiquidHolo className="pricing-orb" color1="#6d28d9" color2="#db2777" color3="#06b6d4" speed={0.25} density={1.2} amplitude={0.9} interactive={false} />

      <section className="pricing-hero container">
        {/* <h1 className="text-gradient">Simple pricing for teams of any size</h1>
        <p className="muted">Choose a plan that fits your growth. Upgrade, downgrade, or cancel anytime.</p> */}
      </section>

      <section className="pricing-grid container">
        {plans.map((p, index) => (
          <PricingCard key={p.id} plan={p} index={index} />
        ))}
      </section>
    </main>
  );
}
