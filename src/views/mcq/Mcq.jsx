import React from 'react'
import { CCard, CCardHeader, CCardBody, CRow, CCol, CButton } from '@coreui/react'
import './Mcq.css'

export const Mcq = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className="align-items-center">
          Lok Sewa Aayog || Practice Multiple Choice Question
        </CCardHeader>
        <CCardBody>
          <form className="form-box d-flex justify-content-between gap-4">
            <div className="levelselection w-100">
              <select className="form-select" name="level" id="level">
                <option value="computeroperator">Computer Operator</option>
                <option value="nayabsubba">Nayab Subba</option>
                <option value="kharidar">Kharidar</option>
                <option value="sankhaadhikrit">Sankha Adhikrit</option>
                <option value="healthassistant">Health Assistant</option>
              </select>
            </div>
            <div className="setselection w-100">
              <select className="form-select" name="set" id="set">
                <option value="practiceset1">Practice Set 1</option>
                <option value="practiceset2">Practice Set 2</option>
                <option value="practiceset3">Practice Set 3</option>
                <option value="practiceset4">Practice Set 4</option>
              </select>
            </div>
            <CButton color="dark" active tabIndex={-1}>
              Submit
            </CButton>
          </form>
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardHeader className="bg-transparent">
          To Whom it May Concern, Letter of Recommendation
        </CCardHeader>
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardHeader className="bg-transparent">
          To Whom it May Concern, Letter of Recommendation
        </CCardHeader>
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardHeader className="bg-transparent">
          To Whom it May Concern, Letter of Recommendation
        </CCardHeader>
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardHeader className="bg-transparent">
          To Whom it May Concern, Letter of Recommendation
        </CCardHeader>
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardHeader className="bg-transparent">
          To Whom it May Concern, Letter of Recommendation
        </CCardHeader>
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardHeader className="bg-transparent">
          To Whom it May Concern, Letter of Recommendation
        </CCardHeader>
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
        </CCardBody>
      </CCard>
    </>
  )
}

export default Mcq
