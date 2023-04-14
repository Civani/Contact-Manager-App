import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../utils";

let AddContact = () => {

  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      phone: "",
      email: "",
      company: "",
      job: "",
      address: "",
      website: "",
    },
    errorMessage: "",
  });

  let updateInput = (event) => {
    setState({
        ...state,
        contact:{
            ...state.contact,
            [event.target.name] : event.target.value
        }
    });
  };


  let submitForm = () => {
  const dataSubmission = async (event) => {
  
     event.preventDefault();

     try{
       let response = await ContactService.createContact(state.contact);
       if(response){
         navigate('/contacts/list', {replace:true});
       }
     }catch(error){
       setState({...state, errorMessage:error.message});
       navigate('/contacts/add', {replace:false});
     }
  }; 
dataSubmission()
};

  let { loading, contact, errorMessage} = state;

  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores molestiae soluta, aliquam placeat deserunt architecto
                eligendi id dolorum tempore dolor voluptatum praesentium sed
                eum! Quis commodi voluptates quod sequi aliquam?
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <form onSubmit={submitForm}>
                <div className="mb-2">
                  <input
                    required ={true}
                    name="name"
                    value={contact.name}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                   required ={true}
                   name="phone"
                   value={contact.phone}
                   onChange={updateInput}
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required ={true}
                    name="email"
                    value={contact.email}
                    onChange={updateInput}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required ={true}
                    name="company"
                    value={contact.companyName}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required ={true}
                    name="job"
                   value={contact.companyRole}
                   onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Job"
                  />
                </div>
                <div className="mb-2">
                  <input
                  required ={true}
                  name="address"
                  value={contact.adddress}
                  onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required ={true}
                    name="website"
                    value={contact.website}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Create"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddContact;