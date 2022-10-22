import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilHome,
  cilStar,
  cilPeople,
  cilNoteAdd,
  cilPaperclip,
  cilPenAlt,
  cilEducation,
  cilCommentSquare,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Blog',
    to: '/blog',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Lok Sewa Aayog',
  },
  {
    component: CNavItem,
    name: 'MCQ practice',
    to: '/mcq',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Online exam',
    to: '/blog',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Academics',
  },
  {
    component: CNavItem,
    name: 'Enotes',
    to: '/notes',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Discussion',
    to: '/discuss',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Jobs',
    to: '/blog',
    icon: <CIcon icon={cilPaperclip} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Biography',
    to: '/mcq',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
]

export default _nav
