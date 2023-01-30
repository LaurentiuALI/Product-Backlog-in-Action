import React from 'react'

const ChecklistItem = (props: { icon: string | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <div className="flex flex-row items-center ml-4 mb-6">
          <img src={props.icon} alt="add" className="ml-10 opacity-90 mr-5" />
          <p className="text-lg text-white opacity-80 font-semibold font-inter">
            {props.text}
          </p>
        </div>
  )
}

export default ChecklistItem