import SideBarStep from './SideBarStep'
import Paper from '../Paper'

interface SideBarProps {
    steps: string[]
    activeStep: number
    onChange: (activeStep: number) => void
}

const SideBar = ({ steps, activeStep, onChange }: SideBarProps) => {
    return (
        <Paper>
            <div className="font-bold text-gray-500">Steps</div>
            {steps.map((step, index) => (
                <SideBarStep key={step} step={step} index={index} active={activeStep === index} onClick={onChange} />
            ))}
        </Paper>
    )
}

export default SideBar
