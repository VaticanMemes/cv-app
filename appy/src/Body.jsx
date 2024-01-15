import Form from './Form.jsx'
import Cv from './Cv.jsx'

function Body() {

    return (
    <div className="row align-items-start">
        <div className="col">
            <Form />
        </div>
        <div className="col">
            <Cv />
        </div>
    </div>
    )
  }
  
  export default Body