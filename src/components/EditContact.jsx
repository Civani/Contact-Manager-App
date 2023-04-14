import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "../utils";
import Spinner from './spinner';

let EditContact = () => {

  let navigate = useNavigate();
  let {contactId} = useParams();

  let [state, setState] = useState({
      loading : false,
      contact:{
      name: "",
      phone: "",
      email: "",
      company: "",
      job: "",
      address: "",
      website: "",
      },
      errorMessage:''
  });

  useEffect(()=> {
    const asyncFetchDailyData = async () => {

      try{
         setState({ ...state, loading:true});
        let response = await ContactService.getContact(contactId);
        setState({
          ...state,
          loading:false,
          contact: response.data
        });
      }
      catch(error){

        setState({
          ...state,
          loading:false,
          errorMessage:error.message
        })
      }


    }
    asyncFetchDailyData ()
  }, [contactId]);

 
  let updateInput = (event) =>{

    setState({
       ...state,
       contact:{
        ...state.contact,
        [event.target.name]: event.target.value
       }
    });
  };

  let submitForm = () =>{
    const dataSubmission = async (event) => {
  
      event.preventDefault();
 
      try{
        let response = await ContactService.updateContact(state.contact, contactId);
        if(response){
          navigate('/contacts/list', {replace:true});
        }
      }catch(error){
        setState({...state, errorMessage:error.message});
        navigate(`/contacts/edit/${contactId}`, {replace:false});
      }
   }; 
 dataSubmission()
  };


  let {loading, contact, errorMessage} = state;
  
  return (
    <React.Fragment>
      {
        loading ? <Spinner/>:<React.Fragment>
         <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores molestiae soluta, aliquam placeat deserunt architecto
                eligendi id dolorum tempore dolor voluptatum praesentium sed
                eum! Quis commodi voluptates quod sequi aliquam?
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-4">
              <form onSubmit={submitForm}>
                <div className="mb-2">
                  <input
                    required="true"
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
                    required="true"
                    name="phone"
                    value={contact.phone}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                  required="true"
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
                    required="true"
                    name="company"
                    value={contact.company.name}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required="true"
                    name="job"
                    value={contact.company.catchPhrase}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Job"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required="true"
                    name="address"
                    value= {contact.address.city}
                    onChange={updateInput}
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="mb-2">
                  <input
                  required="true"
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
                    className="btn btn-primary"
                    value="Update"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <img
                src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
                className="img-fluid contact-img"
              />
            </div>
          </div>
        </div>
      </section>


        </React.Fragment>
      }
      
    </React.Fragment>
  );
};
export default EditContact;