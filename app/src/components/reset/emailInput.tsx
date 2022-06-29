import React from 'react'

function EmailInput(props: { email: String | boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined }) {
  return (
    <div className="rounded-md shadow-sm -space-y-px">
		<div className="">{props.email}</div>
		<input
			onChange={props.handleChange}
			type="email"
			pattern=".+@globex\.com"
			placeholder="E-mail"
			className="block w-full py-3 px-3 mt-2
        text-gray-800 appearance-none
        border-2 border-gray-100
        focus:text-gray-500 focus:outline-none focus:border-gray-600 rounded-xl"
		></input>
	</div>
  )
}

export default EmailInput