import { useState, useRef } from 'react'

function Body() {
    const [data, setData] = useState("", "", "", "", "")
    const CvRef = useRef()
    const copiedRef = useRef()
    
    // function popUpToasty() {
    //     return (
    //     <div className="toast-container position-fixed bottom-0 end-0 p-3">
    //         <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    //             <div className="toast-header">
    //                 <img src="..." className="rounded me-2" alt="..." />
    //                 <strong className="me-auto">CV App</strong>
    //                 <small>One second ago</small>
    //                 <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    //             </div>
    //             <div className="toast-body">
    //                 CV saved to clipboard
    //             </div>
    //         </div>
    //     </div>
    // )}

    return (
    <div className="row align-items-start">
        <div className="col">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Smith" onChange={e => setData([e.target.value, data[1], data[2], data[3], data[4]])} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={e => setData([data[0], e.target.value, data[2], data[3], data[4]])} />
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                <input type="text" className="form-control" id="phoneNumber" placeholder="0412 345 678" onChange={e => setData([data[0], data[1], e.target.value, data[3], data[4]])} />
            </div>
            <div className="mb-3">
                <label htmlFor="education" className="form-label">Education 🎓</label>
                <textarea className="form-control" id="education" placeholder="College - Harvard University: Comp Sci major, 4.0 GPA" onChange={e => setData([data[0], data[1], data[2], e.target.value, data[4]])} />
            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience 👷</label>
                <textarea className="form-control" id="experience" placeholder="CEO of Google" onChange={e => setData([data[0], data[1], data[2], data[3], e.target.value])} />
            </div>
            <button type="button" id="copyForm" className="btn btn-outline-primary" onClick={() => {navigator.clipboard.writeText(CvRef.current.innerText); copiedRef.current.innerText="Copied!"}}>Copy</button>
            <p><em ref={copiedRef}></em></p>
        </div>
        <div className="col" ref={CvRef}>
            <center><h3><b>{data[0]}</b></h3></center>
            <center><p><em>{data[1]} | {data[2]}</em></p></center>
            <h5>EDUCATION</h5>
            <hr />
            <p><em>{data[3]}</em></p>
            <h5>EXPERIENCE</h5>
            <hr />
            <p><em>{data[4]}</em></p>
        </div>
    </div>
    )
  }
  
  export default Body