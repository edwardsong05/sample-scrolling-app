import type React from 'react'
import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Paper from '../Paper'
import './ScrollablePage.css'

interface ScrollablePageProps {
    children: React.ReactNode
    active: boolean
    duration?: number
}

const classNames = 'scrollable'
const initalHidden = `${classNames}-exit-done`
const initalShow = `${classNames}-enter-done`

const ScrollablePage = ({ children, active }: ScrollablePageProps) => {
    const nodeRef = useRef<HTMLDivElement>(null)
    const initialClass = useRef(initalHidden)
    if (active && initialClass.current === initalHidden) {
        initialClass.current = initalShow
    }
    if (!active && initialClass.current === initalShow) {
        initialClass.current = ''
    }

    return (
        <CSSTransition classNames={classNames} nodeRef={nodeRef} appear={active} in={active} timeout={500}>
            <div ref={nodeRef} className={initialClass.current}>
                <Paper className="text-lg">{children}</Paper>
            </div>
        </CSSTransition>
    )
}

export default ScrollablePage
