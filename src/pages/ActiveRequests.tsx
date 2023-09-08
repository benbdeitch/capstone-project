import { useContext, useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import RequestsList from "../components/RequestsList"
import { UserContext } from "../contexts/UserProvider"
import { levelContext } from "../contexts/UrlProvider"




export default function ActiveRequestsPage() {
    const URL  = useContext(levelContext)
    const {username} = useContext(UserContext)
    const [requestList, setRequestList] = useState(<Spinner/>)
    useEffect( () => {

        setRequestList( <RequestsList />)
    }, [username])

    
            
       


    

    return (
        <>
        <div className="Box">
        <h1>Incoming Friend Requests</h1>
        </div>

        {requestList}
  
    </>)
}