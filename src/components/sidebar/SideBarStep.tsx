interface SideBarStepProps {
    step: string
    active: boolean
    onClick: (activeStep: number) => void
    index: number
}

const activeBackground = 'bg-sky-600'

const SideBarStep = ({ step, active, onClick, index }: SideBarStepProps) => {
    const handleClick = () => {
        if (active) return
        onClick(index)
    }

    const background = active ? activeBackground : 'transparent'

    return (
        <button
            className={`p-4 mt-2 rounded-xl ${background} min-w-[10rem] w-full flex items-center
            hover:${activeBackground} transition ease-in-out duration-500`}
            onClick={handleClick}
        >
            <div
                className="flex bg-white w-6 h-6 mr-4 rounded-full text-black items-center justify-center font-bold"
            >
                {index + 1}
            </div>
            {step}
        </button>
    )
}

export default SideBarStep
