import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; {new Date().getFullYear()} Readersnepal</span>
      </div>
      <div className="ms-auto">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
