import '@/styles/globals.css'
import { League_Spartan, Lato } from "next/font/google"
import Script from 'next/script';
import { useState, useEffect } from 'react';

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan"
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400"]
})

export default function App({ Component, pageProps }) {
  const [viewPortWidth, setViewPortWidth] = useState(10)
  const [cellDimensions, setCellDimensions] = useState(10)
  const [viewPortHeight, setViewPortHeight] = useState(10)

  useEffect(() => {
    const updateSize = () => {
      setViewPortWidth(window.innerWidth)
      setViewPortHeight(window.innerHeight)
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    // Use same tailwind breakpoint values to set the width of each cell in the background grid. Ensuring a perfect grid no matter the size of the viewport. 
    if (viewPortWidth <= 640) {
      setCellDimensions(viewPortWidth / 15)
    } else if (viewPortWidth > 640 && viewPortWidth <= 1024) {
      setCellDimensions(viewPortWidth / 20)
    } else {
      setCellDimensions(viewPortWidth / 35)
    }

  }, [viewPortWidth])

  useEffect(() => {
    // Create SVG to be used as the body element's background
    const setGridBG = () => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", `0 0 ${viewPortWidth} ${viewPortHeight}`);

      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

      defs.innerHTML = `
                <pattern id="horz" width="1" height=${cellDimensions} patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="#DDDDDD33" stroke-width="1px"></line>
                </pattern>

                <pattern id="vert" width=${cellDimensions} height="100%" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke="#DDDDDD33" stroke-width="1px"></line>
                </pattern>
        `;
      svg.appendChild(defs);

      // define Horizontal grid line
      const horzLine = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      horzLine.setAttribute("x", "0");
      horzLine.setAttribute("y", "0");
      horzLine.setAttribute("fill", "url(#horz)");
      horzLine.setAttribute("width", "100%");
      horzLine.setAttribute("height", "100%");


      // define Vertical grid line
      const vertLine = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      vertLine.setAttribute("x", "0");
      vertLine.setAttribute("y", "0");
      vertLine.setAttribute("fill", "url(#vert)");
      vertLine.setAttribute("width", "100%");
      vertLine.setAttribute("height", "100%");

      svg.appendChild(vertLine)
      svg.appendChild(horzLine)

      const svgString = new XMLSerializer().serializeToString(svg);
      const dataURL = `url('data:image/svg+xml,${encodeURIComponent(svgString)}')`;
      document.body.style.backgroundImage = dataURL;
    }

    setGridBG()
  }, [viewPortWidth, viewPortHeight, cellDimensions])


  return (
    <div className={`${lato.variable} ${leagueSpartan.variable} font-sans`}>
      <Script defer src='https://assets.calendly.com/assets/external/widget.js' ></Script>
      <Component {...pageProps} />
    </div>
  )
}
