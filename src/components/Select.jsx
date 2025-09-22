import React ,{useId} from 'react'

function Select(
    Options,
        label,
        className = "",
    ...props
){
    const id = useId();
  return (
   <>
<div className="w-full">
{label && <label htmlFor={id} className="" >{label}</label>}
    <select 
    {...props}
    id={id} 
    className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} 
    >
       {Options?.map((option) => (
           <option key={option} value={option}>
               {option}
           </option>
       ))}
    </select>
</div>
   </>
  
  )
}

export default React.forwardRef(Select)