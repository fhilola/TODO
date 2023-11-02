const addSuffix = num =>{
    return String(num).padStart(2, '0')
}

const formatData = date =>{
    date = new Date(date)
    const hours = addSuffix(date.getHours())
    const minutes= addSuffix(date.getMinutes())
    const day = addSuffix(date.getDate())
    const month = addSuffix(date.getMonth() + 1)
    const year = date.getFullYear()
    return({hours, minutes, day, month, year
    });
}
export {formatData}