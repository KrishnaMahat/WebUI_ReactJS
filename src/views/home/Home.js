import React from 'react'
import Search from '../Search/Search'
import './Home.scss'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const Home = () => {
  return (
    <>
      <div className="homebox wrapper">
        <h1>Readersnepal</h1>
        <Search />
      </div>
      {/* <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={6}>
              <div className="text-align-center">
                <h1 className="float-end display-2 me-4">R</h1>
                <h4 className="pt-3">Readersnepal</h4>
                <p className="text-medium-emphasis float-start">Learning on your tip of finger</p>
              </div>
              <CInputGroup className="input-prepend">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput
                  className="shadow-none"
                  type="text"
                  placeholder="What are you looking for?"
                />
                <CButton color="dark">Search</CButton>
              </CInputGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div> */}
    </>
  )
}

export default Home
