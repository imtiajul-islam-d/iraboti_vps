"use client"
import { ReactLenis, useLenis } from 'lenis/react'

export default function Layout({ children }) {
    const lenis = useLenis(({ scroll }) => {

    })

    return (
        <ReactLenis root >
            {children}
        </ReactLenis>
    )
}