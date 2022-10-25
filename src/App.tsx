import { useState } from 'react'
import ScrollableContents from './components/scrollable/ScrollableContents'
import SideBar from './components/sidebar/SideBar'

const steps = ['First', 'Second', 'Third']
const contents = [
    `Make the moon look extra cool by photographing it behind an object near the horizon. Buildings, statues, trees, and
  hills can all make great foreground subjects. You could also silhouettee a person, animal, bicycle, or an airplane
  flying by. Of course, you'll need to find out what time and in which direction the moon will be rising so you can
  position yourself and your camera in a good spot.`,
    `For years, health enthusiasts have lived by the age-old motto, "an apple a day keeps the doctor away." While it's
  true that an apple provides ample vitamin C as well as antillergenic, anti-inflammatory, and antiviral benefits,
  there's an even more powerful fruit that contributes to your overall health.`,
    `Don't be susceptilbe to the two-for-a-dollar marketing tool unless it's to your advantage with a coupon.
  If you need two of the item, go ahead and buy them; but save by buying only one if that's what you need.`,
]

const App = () => {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <div className="max-w-3xl mx-auto px-8 py-16 h-screen flex flex-col">
            <h1 className="text-center">Sample Scrolling Application</h1>
            <div className="flex my-8 h-full">
                <SideBar onChange={setActiveStep} steps={steps} activeStep={activeStep} />
                <ScrollableContents contents={contents} activeStep={activeStep} onScroll={setActiveStep} />
            </div>
        </div>
    )
}

export default App
