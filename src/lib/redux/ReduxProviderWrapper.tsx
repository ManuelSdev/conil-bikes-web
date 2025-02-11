'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { reduxStore } from './store'

interface ReduxProviderWrapperProps {
   children: ReactNode
}

export default function ReduxProviderWrapper({
   children,
}: ReduxProviderWrapperProps) {
   return <Provider store={reduxStore}>{children}</Provider>
}
