// import { Component } from 'react';
import { useState } from 'react';
import st from './Contactform.module.css';

export const ContactForm = ({addUser}) => {
  //   initState = {
  //       name: '',
  //       number: '',
  //     };
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name,setName] = useState('')
  const [number,setNumber] = useState('')

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   console.log()
  //   if (name==="name") setName(value)
  //   if (name==="number") setNumber(value)
    
  // };

  const handleAddUser = e => {
    e.preventDefault();
    addUser({name,number});
    setName('');
    setNumber('')
  };

  
    return (
      <form action="#" onSubmit={handleAddUser} className={st.form}>
        <label htmlFor="" className={st.labelName}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={st.name}
            value={name}
            onChange={e=>setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={number}
            onChange={e=>setNumber(e.target.value)}
            required
          />
        </label>
        <button className={st.addContact}>Add contact</button>
      </form>
    );
  }

