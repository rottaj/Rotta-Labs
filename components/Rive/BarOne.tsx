import {
    useRive,
    Layout, 
    Fit, 
    Alignment,
    Bounds
} from '@rive-app/react-canvas';

export default function BarOne() {
    const { rive, RiveComponent } = useRive({
    src: "BarOne.riv",
    layout: new Layout({

    }),
    autoplay: true
    })

    return <RiveComponent style={{height: "500px"}}/>
}

