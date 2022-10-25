import React from 'react'

interface PaperProps {
    className?: string
    children: React.ReactNode
}

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(({ className = '', children }, ref) => {
    return (
        <div ref={ref} className={`p-4 bg-neutral-900 h-full rounded-xl ${className}`}>
            {children}
        </div>
    )
})

export default Paper
