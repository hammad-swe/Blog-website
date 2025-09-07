import React from 'react'

function Button(
    {
        children,
        type = "button",
        bgColor = "bg-blue-500",
        textColor = "text-white",
        ClassName = "",
        ...props
    }
) {
  return (
    <button
      type={type}
      className={` px-4 y-2 rounded-lg ${bgColor} ${textColor} ${ClassName}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button