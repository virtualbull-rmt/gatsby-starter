import React from "react"

export const onRenderBody = ({ pathname, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Avenir-Next/AvenirNextLTPro-Regular.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Avenir-Next/AvenirNextLTPro-Demi.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Avenir-Next/AvenirNextLTPro-Bold.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}
