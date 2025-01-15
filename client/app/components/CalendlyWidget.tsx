'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url: string
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    head!.appendChild(script)

    return () => {
      head!.removeChild(script)
    }
  }, [])

  useEffect(() => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
      })
    }
  }, [url])

  return (
    <div id="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }} />
  )
}

export default CalendlyWidget

