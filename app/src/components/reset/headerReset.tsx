import React from 'react'

function HeaderReset(props: { title: String; subtitle: String }) {
  return (
    <div>
        <h1 className="text-2xl font-bold">{props.title}</h1>
	    <div className="text-xs text-gray-400">{props.subtitle}</div>
    </div>
  )
}

export default HeaderReset