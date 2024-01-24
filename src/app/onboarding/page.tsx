import * as React from "react"

export default function Onboarding () {
  return (
    <main>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'top', height: '50px'}}>
          <img src="/Quikest Logo.svg" alt="Image description" style={{ height: '32px', width: '32px', marginRight: '4px', marginTop: '4px' }} />
          <div style={{ fontWeight: '700', fontSize: '24px' }}>
            Quikest
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', fontSize: '30px' }}>
        Welcome to Quikest!
      </div>
    </main>
  )
}