import {
    useRive,
    Layout, 
    Fit, 
    Alignment,
    Bounds
} from '@rive-app/react-canvas';

export default function BarTwo() {
    const { rive, RiveComponent } = useRive({
    src: "BarThree.riv",
    layout: new Layout({

    }),
    autoplay: true
    })

    return <RiveComponent style={{height: "500px"}}/>
}



