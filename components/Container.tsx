import React from 'react'

interface TemplateProps {
    children: React.ReactNode
}
export default function Container({ children }: TemplateProps) {
    return (
        <div className='container mx-auto px-4'>{children}</div>
    )
}
