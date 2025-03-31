import * as React from "react"

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  if (!children) {
    return null
  }

  // If the child is a React element, clone it and merge the props
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ref: ref ? ref : children.props.ref,
    })
  }

  return <>{children}</>
})
Slot.displayName = "Slot"

export { Slot }

