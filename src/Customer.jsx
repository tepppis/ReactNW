import './App.css'
import React, {useState} from 'react'

// props on nimeltään customer
const Customer = ({customer}) => {


// Komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)


  return (
    <div className='customerDiv'>

        <h4 onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        >
            {customer.companyName}
        </h4>

        {showDetails && <div className="customerDetails">
            {/* <h3>{customer.companyName}</h3> */}
            <h3>{customer.companyName}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Contact person</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{customer.contactName}</th>
                        <th>{customer.phone}</th>
                        <th>{customer.address}</th>
                        <th>{customer.city}</th>
                        <th>{customer.country}</th>                   
                    </tr>
                </tbody>
            </table>
    </div>}
    </div>
  )
}

export default Customer