import React from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CForm, CFormInput } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilCalculator, cilHeart, cilImage, cilShare, cilVideo } from '@coreui/icons'

const Discuss = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className="text-align-center">
          Discussion forum || You can reply to any one
        </CCardHeader>
        <CCardBody>
          <CForm className="form-box d-flex justify-content-between gap-4">
            <div className="d-flex w-100 gap-2 align-items-center">
              <CFormInput
                type="text"
                placeholder="Start discussion"
                className="shadow-none no-border"
              />
              <CIcon icon={cilVideo} size="xl" />
              <CIcon icon={cilImage} size="xl" />
            </div>
            <CButton color="dark" active tabIndex={-1}>
              Post
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
          <div className="d-flex pl-10 gap-2 mt-4 align-items-center">
            <CIcon icon={cilHeart} size="xl" />
            <CIcon icon={cilShare} size="xl" />
            <CButton color="dark" active tabIndex={-1}>
              Reply
            </CButton>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
          <div className="d-flex pl-10 gap-2 mt-4 align-items-center">
            <CIcon icon={cilHeart} size="xl" />
            <CIcon icon={cilShare} size="xl" />
            <CButton color="dark" active tabIndex={-1}>
              Reply
            </CButton>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
          <div className="d-flex pl-10 gap-2 mt-4 align-items-center">
            <CIcon icon={cilHeart} size="xl" />
            <CIcon icon={cilShare} size="xl" />
            <CButton color="dark" active tabIndex={-1}>
              Reply
            </CButton>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="callout callout-dark">
        <CCardBody>
          It is to certify that Mr Krishna Mahat had worked at Shree Bhadrakali Secondary School
          from August 2012 to March 2015 as a full time Computer Science teacher for Grade 8, 9 and
          10. We found him very good and devoted to the assigned tasks. He is punctual and can
          adjust quickly in any given circumtances. We wish him the best in his future endeavor.
          <div className="d-flex pl-10 gap-2 mt-4 align-items-center">
            <CIcon icon={cilHeart} size="xl" />
            <CIcon icon={cilShare} size="xl" />
            <CButton color="dark" active tabIndex={-1}>
              Reply
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}
export default Discuss
