import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import { Col, Row} from 'react-bootstrap';
import ProfileCard from './ProfileCard';
import { useState,useEffect } from 'react';
import Axios from 'axios';
// import {Link} from 'react-router-dom';

function SearchResult(){
    const { search } = useParams()
    const [searchResults,setSearchResults]=useState()
    
    const searchData=()=>{
        Axios.post('http://localhost:4555/search',
        {
            name:search
        }
        ).then((dbData)=>{
            setSearchResults(dbData.data)
            console.log(dbData.data)
        })
    }

    useEffect(() => {
        searchData();
        
   }, []);// eslint-disable-line react-hooks/exhaustive-deps

console.log(searchResults)
    return(
        <>
            <div className="fontstyle bodycss" style={{minHeight:"93%"}}>
                <div className="container">
                    <Row className='p-3'>
                        <Col sm={12} className='my-3'>
                            {
                                Array.isArray(searchResults) ?
                                searchResults.length!==0?
                                    searchResults.map((result,index)=>{
                                        console.log(result.user_id)
                                        return <ProfileCard key={index} skill={result.skill} id={result.user_id}/>
                                    }):<h1 className="d-flex justify-content-center text-white">No data found</h1>:
                                <h1 className="d-flex justify-content-center text-white">Loading....</h1>
                            }
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
export default SearchResult;