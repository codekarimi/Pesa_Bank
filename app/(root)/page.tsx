import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const page = () => {

  const loggedIn = {firstName:"Karimi"}
  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
        <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
        />

        {/* <TotalBalanceBox 
          accounts={accountsData}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts?.totalCurrentBalance}
        /> */}
      </header>

      {/* <RecentTransactions 
        accounts={accountsData}
        transactions={account?.transactions}
        appwriteItemId={appwriteItemId}
        page={currentPage}
      /> */}
    </div>

    {/* <RightSidebar 
      user={loggedIn}
      transactions={account?.transactions}
      banks={accountsData?.slice(0, 2)}
    /> */}
  </section>
  )
}

export default page