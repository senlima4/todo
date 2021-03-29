import { useRef, useEffect, RefObject } from 'react'

export default function useEventListener<
  T extends HTMLElement = HTMLDivElement
>(
  eventName: string,
  handler: (event: Event) => void,
  element?: RefObject<T>
) {
  // Create a ref that stores handler
  const savedHandler = useRef<(event: Event) => void>()

  useEffect(() => {
    const targetElement: T | Window = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) return
    if (savedHandler.current !== handler) savedHandler.current = handler
    const eventListener = (event: Event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) savedHandler.current(event)
    }

    targetElement.addEventListener(eventName, eventListener)

    // eslint-disable-next-line
    return () => targetElement.removeEventListener(eventName, eventListener)
  }, [eventName, element, handler])
}
