import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { ContactService } from '../utils';
import Spinner from './spinner';

let ViewContact = () =>   {

    let {contactId} = useParams();

    let [state, setState] = useState({
       loading: false,
       contact : {},
       errorMessage :''
    });

    useEffect(() => {
      const asyncFetchDailyData = async () => {
        try{
          setState({...state, loading: true});
          let response = await ContactService.getContact(contactId);
         setState({
            ...state, 
            loading:false,
            contact : response.data
         });

        }catch(error){

          setState({
            ...state, 
            loading:false,
            errorMessage: error.message
         });
        }
      }
        asyncFetchDailyData()
    }, [contactId]);

    let { loading, contact, errorMessage} = state;
    return(
        <React.Fragment>
           <section className='view-contact-intro  p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p className='h3 text-warning fw-bold'>
                            View Contact
                        </p>
                        <p className='fst-italic'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem voluptatem dicta consectetur, iste doloremque incidunt commodi eligendi magnam nihil libero impedit corporis magni aperiam ut. Autem nostrum fugiat dolore.
                        </p>
                    </div>
                </div>
                </div>
           </section>

           {
            loading ? <Spinner/>: <React.Fragment>
           { 
             Object.keys(contact).length > 0 &&

             <section className="view-contact mt-3">
              <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png" alt="avatar" className="contact-img"/>
                    </div>
                    <div className="col-md-8">
                    <ul className="list-group">
                       
                        <li className="list-group-item list-group-item-action">
                          NAME : <span className="fw-bold">{contact.name}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          MOBILE : <span className="fw-bold">{contact.phone}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          EMAIL : <span className="fw-bold">{contact.email}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                        COMPANY : <span className="fw-bold">{contact.company.name}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                        JOB : <span className="fw-bold">{contact.company.catchPhrase}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                        ADD : <span className="fw-bold">{contact.address.street}, {contact.address.city}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                        WEBSITE : <span className="fw-bold">{contact.website}</span>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to={'/contacts/list'} className="btn btn-warning">
                         Back
                        </Link>
                    </div>
                </div>
              </div>
           </section>
}
            </React.Fragment>
           }

        </React.Fragment>
    )
};
export default ViewContact;