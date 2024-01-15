import { useState } from 'react'

function Form() {

    const [data, setData] = useState([])

    return (
    <>
        <input id="test" type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <p>{data}</p>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Smith" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone number</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="0412 345 678" />
        </div>
        <div className="mb-3">
            <label htmlFor="education" className="form-label">Education 🎓</label>
            <textarea className="form-control" id="education" placeholder="College - Harvard University: Comp Sci major, 4.0 GPA" />
        </div>
        <div className="mb-3">
            <label htmlFor="experience" className="form-label">Experience 👷</label>
            <textarea className="form-control" id="experience" placeholder="CEO of Google" />
        </div>
        <button type="button" id="submitForm" className="btn btn-outline-primary">Submit</button>
    </>
    )
  }
  
  export default Form