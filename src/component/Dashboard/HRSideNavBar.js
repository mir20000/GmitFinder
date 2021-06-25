import {PencilSquare } from 'react-bootstrap-icons';
import { Nav,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useState,useEffect } from 'react';


function HRSideNavBar(props) {

    const [open, setOpen] = useState(false)
    const [windowSize,setWindowSize]=useState(window.innerWidth)

    const handleSize = () => {
        const size = window.innerWidth;
        setWindowSize(size);
      };

    useEffect(() => {
        window.addEventListener('resize', handleSize);
    }, []);

    if (windowSize<768) {
        return(
    
            <>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
            variant="primary"
          >
            Menu
          </Button>
          
                {open?
                <Nav  className="my-5 flex-column">    
                    <Nav.Link 
                        className={ props.sideNavBarOption==='edit_details'?"m-1 p-3 bg-primary text-white rounded":"m-1 p-3 text-dark border border-primary rounded"}
                        onClick={()=>{props.setSideNavBarOption('edit_details')}}
                    >
                        <PencilSquare height='22px' width='22px'/> &nbsp; Edit Information
                     </Nav.Link>
                     <Nav.Link 
                        className={ props.sideNavBarOption==='add_academic'?"m-1 p-3 bg-primary text-white rounded":"m-1 p-3 text-dark border border-primary rounded"}
                        onClick={()=>{props.setSideNavBarOption('add_academic')}}
                    >
                        <PencilSquare height='22px' width='22px'/> &nbsp; Add Academic Info
                     </Nav.Link>
                </Nav>
                :null}
        </>
        )
        
    }else{
        
    return(
        <Nav  className="mt-5 flex-column">
            
    
                    <Nav.Link 
                        className={ props.sideNavBarOption==='edit_details'?"m-1 p-3 bg-primary text-white rounded":"m-1 p-3 text-dark border border-primary rounded"}
                        onClick={()=>{props.setSideNavBarOption('edit_details')}}
                    >
                        <PencilSquare height='22px' width='22px'/> &nbsp; Edit Information
                     </Nav.Link>
                     <Nav.Link 
                        className={ props.sideNavBarOption==='add_academic'?"m-1 p-3 bg-primary text-white rounded":"m-1 p-3 text-dark border border-primary rounded"}
                        onClick={()=>{props.setSideNavBarOption('add_academic')}}
                    >
                        <PencilSquare height='22px' width='22px'/> &nbsp; Add Academic Info
                     </Nav.Link>
            </Nav>
        )
    }
}
export default HRSideNavBar;