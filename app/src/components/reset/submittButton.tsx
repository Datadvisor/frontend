import React from 'react'

function SubmittButton(props: { onClick?: Function; label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined}) {
  return (
    <button
		type="submit"
		className=" whitespace-nowrap justify-center px-20 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-505"
		onClick={() => props.onClick}
	>
		{props.label}
	</button>
  )
}

export default SubmittButton