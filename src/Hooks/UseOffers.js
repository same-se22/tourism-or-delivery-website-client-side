import { useEffect, useState } from "react"

const useOffers = () => {
    const [offers, setOffers] = useState([])

    useEffect(()=>{
        fetch("https://peaceful-forest-00600.herokuapp.com/offers")
        .then(res => res.json())
        .then(data => setOffers(data))
    },[])
    return {offers, setOffers}
}
export default useOffers;