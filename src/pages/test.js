import { useEffect, useState } from "react"

export default function Test() {
    const gridColor = "#DDDDDD33"
    const [viewPortSize, setViewPortSize] = useState([0, 0])

    useEffect(() => {
        const updateSize = () => {
            setViewPortSize([window.innerWidth, window.innerHeight])
            console.log([window.innerWidth, window.innerHeight])
        }
        window.addEventListener("resize", updateSize)
        updateSize()
        return () => window.removeEventListener("resize", updateSize)
    }, [])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox={`0 0 ${viewPortSize[0]} ${viewPortSize[1]}`}
        // className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
            <defs>
                <pattern id="horz" width="1" height="20" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="#DDDDDD33" strokeWidth="1px"></line>
                </pattern>

                <pattern id="vert" width="20" height="100%" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke="#DDDDDD33" stroke-width="1px"></line>
                </pattern>
            </defs>

            <rect x="0" y="0" fill="url(#horz)" width="100%" height="100%"></rect>
            <rect x="0" y="0" fill="url(#vert)" width="100%" height="100%"></rect>
        </svg>

    )
}