import React from "react";
import { useForm } from "react-hook-form";
import { getFirestore, collection, getDocs, addDoc, setDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import CustomDialog from './dialogbox/dialogbox.jsx';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const jsonData = {};

  const onSubmit = async (data, e) =>{
    if (data.name) {
      jsonData.name = data.name;
    }
    if (data.email) {
      jsonData.email = data.email;
    }
    if (data.subject) {
      jsonData.subject = data.subject;
    }
    if (data.message) {
      jsonData.message = data.message;
    }
    try {
      // Specify the document reference within the "ClientMessages" collection
      console.log(data);
      const docRef = await addDoc(collection(db, "ClientMessages"), 
       {
        "name": data.name,
        "email": data.email,
        "subject": data.subject,
        "message": data.message,
        "timestamp": new Date()
       }
      );
      console.log("Document written with ID: ", docRef.id);
      e.target.reset();
      alert("Your message has been sent successfully. We will get back to you soon.");
      // CustomDialog();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              {...register(
                "email",
                {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                },
                { required: true }
              )}
              type="email"
              placeholder="Email *"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("subject", { required: true })}
              placeholder="Subject *"
            />
            {errors.subject && (
              <span className="invalid-feedback">Subject is required.</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required.</span>
          )}
        </div>
        {/* End .third */}

        <div className="beny_tm_button">
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">Submit</span>
              <span className="second">Submit</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
