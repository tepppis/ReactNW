import './App.css'
import React, {useState} from 'react'
import CustomerService from './services/Customer'


const CustomerAdd = ({setLisäystila}) => {


// Komponentin tilan määritys

const [newCustomerId, setNewCustomerId] = useState('')
const [newCompanyName, setNewCompanyName] = useState('')
const [newContactName, setNewContactName] = useState('')
const [newContactTitle, setNewContactTitle] = useState('')

const [newAddress, setNewAddress] = useState('')
const [newCity, setNewCity] = useState('')
const [newRegion, setNewRegion] = useState('')
const [newPostalCode, setNewPostalCode] = useState('')

const [newCountry, setNewCountry] = useState('')
const [newPhone, setNewPhone] = useState('')
const [newFax, setNewFax] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var newCustomer = {
        customerId: newCustomerId.toUpperCase(),
        companyName: newCompanyName,
        contactName: newContactName,
        contactTitle: newContactTitle,
        country: newCountry,
        address: newAddress,
        city: newCity,
        postalCode: newPostalCode,
        phone: newPhone,
        fax: newFax
    }
    
    CustomerService.create(newCustomer)
    .then(response => {
       if (response.status === 200) {
        alert("Added new Customer: " + newCustomer.companyName)
        setLisäystila(false)
       } 

    })
    .catch(error => {
        alert("Error")
    })
}


  return (
    <div id="addNew">
        <h2>Customer add</h2>
        
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newCustomerId} onChange={({target}) => setNewCustomerId(target.value)} required 
                placeholder="ID with 5 capital letters" maxLength="5" minLength="5" />
            </div>
            <div>
                <input type="text" value={newCompanyName} onChange={({target}) => setNewCompanyName(target.value)} required
                 placeholder="Company Name"/>
             </div>
            <div>
                <input type="text" value={newContactName} onChange={({target}) => setNewContactName(target.value)} 
                placeholder="Contact Name"/>
            </div>
            <div>
                <input type="text" value={newContactTitle} onChange={({target}) => setNewContactTitle(target.value)} 
                placeholder="Contact Title"/>
            </div>
            <div>
                <input type="text" value={newAddress} onChange={({target}) => setNewAddress(target.value)} 
                placeholder="Address"/>
            </div>
            <div>
                <input type="text" value={newCity} onChange={({target}) => setNewCity(target.value)} 
                placeholder="City"/>
            </div>
            <div>
                <input type="text" value={newRegion} onChange={({target}) => setNewRegion(target.value)} required 
                placeholder="Region"/>
            </div>
            <div>
                <input type="text" value={newPostalCode} onChange={({target}) => setNewPostalCode(target.value)} 
                placeholder="Postal Code"/>
            </div>
            <div>
                <input type="text" value={newCountry} onChange={({target}) => setNewCountry(target.value)} 
                placeholder="Country"/>
            </div>
            <div>
                <input type="text" value={newPhone} onChange={({target}) => setNewPhone(target.value)} 
                placeholder="Phone"/>
            </div>  
            <div>
                <input type="text" value={newFax} onChange={({target}) => setNewFax(target.value)} 
                placeholder="Fax"/>
            </div>

            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setLisäystila(false)}/>
        </form>
    </div>
  )
}

export default CustomerAdd
