import React, { useState } from 'react';
import './style.css';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { ReactComponent as Transactions } from '../../assets/Transactions.svg';
import { ReactComponent as Customers } from '../../assets/Customers.svg';
import { ReactComponent as Payouts } from '../../assets/Payouts.svg';
import { ReactComponent as Balances } from '../../assets/Balances.svg';
import { ReactComponent as Subscriptions } from '../../assets/Subscriptions.svg';
import { ReactComponent as PaymentPlans } from '../../assets/PaymentPlans.svg';
import { ReactComponent as Referrals } from '../../assets/Referrals.svg';
import { ReactComponent as AuditLogs } from '../../assets/AuditLogs.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export default function SideNav() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);

  return (
    <div className="navContainer">
      <div className="title">
        Payd
      </div>

      <div className={`category ${first || 'smallGap'}`}>
        <div className="categoryTitle" onClick={() => setFirst((prev) => !prev)}>
          Payments
          {' '}
          <Arrow className={`arrow ${first || 'closedArrow'}`} />
        </div>

        <div className={`categoryItems ${first || 'hide'}`}>
          <div className="categoryItem">
            <Transactions />
            {' '}
            Transactions
          </div>
          <div className="categoryItem">
            <Customers />
            {' '}
            Customers
          </div>
          <div className="categoryItem">
            <Payouts />
            {' '}
            Payouts
          </div>
          <div className="categoryItem">
            <Balances />
            {' '}
            Balances
          </div>
          <div className="categoryItem">
            <Subscriptions />
            {' '}
            Subscriptions
          </div>
          <div className="categoryItem">
            <PaymentPlans />
            {' '}
            Payment plans
          </div>
        </div>
      </div>

      <div className={`category ${second || 'smallGap'}`}>
        <div className="categoryTitle" onClick={() => setSecond((prev) => !prev)}>
          Commerce
          {' '}
          <Arrow className={`arrow ${second || 'closedArrow'}`} />
        </div>

        <div className={`categoryItems ${second || 'hide'}`}>
          <div className="categoryItem">
            <Referrals />
            {' '}
            Referrals
          </div>
          <div className="categoryItem">
            <AuditLogs />
            {' '}
            Audit logs
          </div>
          <div className="categoryItem">
            <Settings />
            {' '}
            Settings
          </div>
        </div>
      </div>
    </div>
  );
}
