
import React,{useState} from 'react'

function Form() {
    const [formData, SetFormData]= useState({firstname:"", lastName: "",email :"", country:"", streetName:"",city:"", postalcode:"" ,state:"", comments: false, canditade:false, offers:false, pushNotification :""})

    function handlechange(event){
        const {name,value,checked, type}= event.target.value
        SetFormData(prevState => ({...prevState , [name] : type==="checkbox"? checked: value}))
        
    }
  return (
    <div>
        <form>
         <label  htmlFor='firstName'>firstName</label>
      <input  type='text'name='firstName'id ='firstName'value={formData.firstname}placeholder='please enter your name'onChange={handlechange}/>
      <label htmlFor='lastName'>lastName</label>
      <input type ="text"name="lastName" id = "lastName" value={formData.lastName}placeholder='please enter your lastName'onChange={handlechange}/>
    <label htmlFor='email'>email</label>
    <input type='text 'name='email'id ="email"value={formData.email}placeholder='@abc.com'onChange={handlechange}/>

    <label htmlFor='country'>country</label>
    <select 
    id="country"
     name="country"
     value={formData.country}
     onChange={handlechange}
     >

         <option value="">selectcountry</option>
        <option value="india">India</option>
        <option value="usa" >USA </option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
        <option value="australia">Australia</option>
        <option value="japan">Japan</option>
        <option value="china">china</option>
    </select>

   <label htmlFor='State'>State</label>
   <input type='text'name='state'id ="state"value={formData.state} onChange={handlechange} placeholder='state'/>
   
<br/>


    <label htmlFor='city'>city</label>
      <input type='text' name='city' id='city' value={formData.city} onChange={handlechange} placeholder='enter your city'/>
      <label htmlFor='streetAdress'>streetAdress</label>
      <input type='text'name='streetAdress'id='street'value={formData.streetAdress}onChange={handlechange} placeholder='21 street'/>
      <label htmlFor='postal code'></label>
      
    <fieldset>
        <div className='checkbox'>

        <legend>by email</legend>
        <input  name='comments' id ="comments"type='checkbox'checkox={formData.comments}onChange={handlechange}/>
        <div>
            <label htmlFor='comments'>comments
              <p>Get notifiaction from  some one post</p>
            </label>
        </div>
        </div>
    </fieldset>

   
    <fieldset>
        <div className='checkbox2'>

        <legend>canditate</legend>
        <input  name='canditate' id ="canditate"type='checkbox'checkox={formData.canditade}onChange={handlechange}/>
        <div>
            <label htmlFor='canditate'>comments
              <p>Get notifiaction on job offers</p>
            
            </label>
        </div>
        </div>
    </fieldset>


      <fieldset>

     <div className='checkbox3'>

        <legend>offers</legend>
        <input  name='offers' id ="offers"type='checkbox' checkbox={formData.offers}onChange={handlechange}/>
        <div>
            <label htmlFor='canditate'>offers
              <p>Get  notification  when a canditate accept or reject</p>
            
            </label>
        </div>
        </div>
    </fieldset>


<fieldset>
    <legend>push notifiaction</legend>
        <p>this will deliver some message to your mobile</p>
        <input name ="pushNotification" id ="pushNotification" type ="radio"/>
</fieldset>



        </form>
      
    </div>
  )
}

export default Form
