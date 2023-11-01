import React from 'react'

const useRandomId = () => {
    return String(Math.random(Math.random() * 1000000))
}

export default useRandomId