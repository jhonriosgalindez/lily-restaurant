import React from 'react'

const useIntersection = (options = {}) => {  
  const elementRef = React.useRef()
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  React.useEffect(() => {
    const element = elementRef.current

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => 
        setIsIntersecting(entry.isIntersecting))
    }, options)

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return [elementRef, isIntersecting]
}

export default useIntersection
