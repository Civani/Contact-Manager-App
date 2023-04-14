import axios from "axios";

export class ContactService{
  static serverURL = `https://jsonplaceholder.typicode.com/users`;

  static getAllContacts() {
    let dataURL = `${this.serverURL}`;
    return axios.get(dataURL);
  } 

  static getContact(contactId){
     let dataURL  = `${this.serverURL}/${contactId}`;
     return axios.get(dataURL);
  }

  static createContact(contact){

    let dataURL = `${this.serverURL}`;
    return axios.post(dataURL, contact);
  }
  static updateContact(contact, contactId){
    let dataURL = `${this.serverURL}/${contactId}`;
    return axios.put(dataURL, contact);
  }
  static deleteContact(){
    let dataURL = `${this.serverURL}/${contactId}`;
     return axios.delete(dataURL);
  }
}
