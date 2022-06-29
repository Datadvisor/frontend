import React from 'react'

function PasswordInput(props: { label: string; handleChangePass: React.ChangeEventHandler<HTMLInputElement> | undefined }) {
  return (
    <div className="rounded-md shadow-sm -space-y-px">
		<div className="">{props.label}</div>
		<input
			id="password"
			type="password"
			onChange={props.handleChangePass}
			placeholder={props.label}
			className="block w-full py-3 px-3 mt-2
        text-gray-800 appearance-none
        border-2 border-gray-100
        focus:text-gray-500 focus:outline-none focus:border-gray-600 rounded-xl"
		></input>
	</div>
  )
}

export default PasswordInput