import React from 'react'
import { CCard, CCardHeader, CCardBody, CRow, CCol, CButton } from '@coreui/react'
import './Notes.css'

export const Mcq = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Enotes || Choose Class and Subject</CCardHeader>
        <CCardBody>
          <form className="form-box d-flex justify-content-between gap-4">
            <div className="levelselection w-100">
              <select className="form-select" name="grade" id="grade">
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="setselection w-100">
              <select className="form-select" name="subject" id="subject">
                <option value="maths">Maths</option>
                <option value="science">Science</option>
                <option value="computer">Computer</option>
                <option value="nepali">Nepali</option>
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
