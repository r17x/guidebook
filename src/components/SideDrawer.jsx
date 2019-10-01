import React, { isValidElement, createElement, cloneElement } from 'react'
import { bool, func } from 'prop-types'
import { SideDrawer } from 'atomize'

export default function SideDrawerX({
  left,
  right,
  isOpen,
  onClose,
  children,
  props
}) {
  const isElement = isValidElement(children)
  children = children
    ? isElement
      ? cloneElement(children, props)
      : createElement(children, props)
    : children
  return (
    <SideDrawer style={{ left, right }} isOpen={isOpen} onClose={onClose}>
      {children}
    </SideDrawer>
  )
}

SideDrawerX.defaultProps = {
  right: 'unset'
}

SideDrawerX.propTypes = {
  isOpen: bool,
  onClose: func
}
