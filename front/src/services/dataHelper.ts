export const getDataRu =(date:string)=>{
    const d = new Date(date)
    const day = `${d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`}`
    const month = `${
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`
    }`
            return `${day}.${month}.${d.getFullYear()}`
}