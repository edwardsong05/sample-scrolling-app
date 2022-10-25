import type React from 'react'
import { useCallback, useEffect, useState } from 'react'
import ScrollablePage from './ScrollablePage'

interface ScrollableContentsProps {
    contents: React.ReactNode[]
    activeStep: number
    onScroll: (step: number) => void
}

const ScrollableContents = ({ onScroll, activeStep, contents }: ScrollableContentsProps) => {
    const [scrolling, setScrolling] = useState(false)

    const handleScroll = useCallback(
        (e: WheelEvent) => {
            const direction = e.deltaY > 0 ? 1 : -1
            const proposedStep = activeStep + direction
            if (proposedStep >= contents.length || proposedStep < 0 || scrolling) return
            setScrolling(true)
            setTimeout(() => {
                setScrolling(false)
            }, 500)
            onScroll(proposedStep)
        },
        [activeStep, scrolling]
    )

    useEffect(() => {
        window.addEventListener('wheel', handleScroll)
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [activeStep, scrolling])

    return (
        <div className="grow ml-8">
            {contents.map((content, index) => (
                <ScrollablePage key={index} active={index === activeStep}>
                    {content}
                </ScrollablePage>
            ))}
        </div>
    )
}

export default ScrollableContents
