import React from 'react'

const useRandomId = () => {
    return String(Math.random(Math.random() * 1000000)).slice(2, 8)
}

export default useRandomId