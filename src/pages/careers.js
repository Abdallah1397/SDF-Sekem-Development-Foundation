import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Content from "../component/Content/Content";
import RightContent from "../component/rightContent.js/rightContent";
import LoadingSpinner from "../component/spinner/spinner";
const Careers = () => {
  const [type, setType] = useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    axios.get("http://10.0.30.166:8080/career-type").then((result) => {
      setType(result.data[0].type);
    });
  }, []);
  console.log(type, "type");
  // Create Schema to the input validations
  const joinValidations = Yup.object().shape({
    type: Yup.string().required("You Should Select The Type of Inquiry"),
    name: Yup.string()
      .min(2, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    data: Yup.boolean().required("Required"),
  });
  return (
    <div>
      <SliderBanner />
      <Content
        title="Join SEKEM’s Unique Community and Work with Us"
        topic="SEKEM is a multicultural company, where people from different nationalities, different cultural and religious backgrounds meet and exchange expertise and knowledge. SEKEM highly respects its employees and aims to establish a long-term relationship with them through treating the people fairly and satisfying their needs. SEKEMs community provides secure workplaces and career advancement opportunities."
      />
      <RightContent
        title="SEKEMs Morning Circle"
        topic="In order to always keep the big idea and team behind each individual task, the employees of each company meet in a circle every morning for a collective start. Each Thursday afternoon all employees of all SEKEM institutions located at the SEKEM main farm gather in a big circle in order to celebrate the achievements of the previous week. Standing in a circle shows that all participants are equal – an equality that stands for the dignity of the human being."
        topic1="Cultural activities support team building, and professional training develops further skills and increases the chances of the employees advancement."
      />
      <RightContent
        title="International and Egyptian Internships"
        topic="You are most welcome to make an internship or, if you are coming from abroad, to stay and work with us for a while at SEKEM or one of its subsidiaries. Please note that we can only accept interns who are staying for at least 12 months and are over 22 years of age."
      />
      <div className="careesLink">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpvKTE6D5MoGCEAGBtzXj-Ex18oqCDUeZIU9lCEvh-U2H_Pg/viewform" target="_blank">
          Apply here to join our internship program
        </a>
      </div>
      <div className="careersMail">
        <p>
          For further questions regarding our internship program, please contact{" "}
          <a
            href="mailto:community@sekem.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            community@sekem.org
          </a>
        </p>
        <p>
          For job opportunities, you can get in contact with our Human Resources
          on{" "}
          <a
            title=""
            href="mailto:hr@sekem.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hr@sekem.com
          </a>
          , or through this form:
        </p>
      </div>
      <div className="form">
        <Formik
          initialValues={{
            type: "",
            name: "",
            email: "",
            subject: "",
            message: "",
            data: false,
          }}
          validationSchema={joinValidations}
          onSubmit={(values,{resetForm}) => {
            setLoading(true);
            axios.post('http://10.0.30.166:8080/add-career',values).then((response)=>{
              console.log(response);
              resetForm({values:''});
              setLoading(false);
            })
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            values,
            touched,
            handleSubmit,
          }) => (
            <Form handleSubmit={handleSubmit}>

              {/* TYPE OF INQUIRY ************************  */}
              <label className="labels" style={{ display: "block" }}>
                PLEASE CHOOSE YOUR TYPE OF INQUIRY{" "}
              </label>
              <Field as="select"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
                className="listBox"
                
              >
                <option value="" label="---"  className="listBox" style={{ display: "block" }} />
                {/* map function to iterate through the type */}
                {type
                  ? type.map((item) => {
                      return (
                        <option
                          value={item}
                          label={item}
                          style={{ display: "block" }}
                          className="listBox"
                        />
                      );
                    })
                  : ""}
              </Field>
              {/* Handle Error */}
              {errors.type && touched.type ? (
                <div style={{ color: "#DB0E1B" }}>{errors.type}</div>
              ) : null}


              {/* Name ************************ */}
              <label className="labels" style={{ display: "block" }}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="fieldForm"
                handleChange={handleChange}
                value={values["name"]}
                handleBlur={handleBlur}
                style={{ display: "block" }}
              />
              {errors.name && touched.name ? (
                <div style={{ color: "#DB0E1B" }}>{errors.name}</div>
              ) : null}

              {/* Email ************************ */}
              <label className="labels" style={{ display: "block" }}>
                {" "}
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="fieldForm"
                handleChange={handleChange}
                value={values["email"]}
                handleBlur={handleBlur}
                style={{ display: "block" }}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "#DB0E1B" }}>{errors.email}</div>
              ) : null}

              {/* Subject ************************ */}
              <label className="labels" style={{ display: "block" }}>
                {" "}
                Subject
              </label>
              <Field
                type="text"
                name="subject"
                id="subject"
                className="fieldForm"
                handleChange={handleChange}
                value={values["subject"]}
                handleBlur={handleBlur}
                style={{ display: "block" }}
              />
              {errors.subject && touched.subject ? (
                <div style={{ color: "#DB0E1B" }}>{errors.subject}</div>
              ) : null}

              {/* Message ************************ */}
              <label className="labels" style={{ display: "block" }}>
                {" "}
                Message
              </label>
              <Field as="textarea"
                type="message"
                name="message"
                id="message"
                className="scrollabletextbox"
                handleChange={handleChange}
                value={values["message"]}
                handleBlur={handleBlur}
                style={{ display: "block" }}
              />
              {errors.message && touched.message ? (
                <div style={{ color: "#DB0E1B" }}>{errors.message}</div>
              ) : null}

              {/* Check data ************************ */}
              <label className="labels" style={{ display: "block" }}>
                <Field type="checkbox" name="checked" />
                BY SENDING YOUR DATA YOU AGREE TO RECEIVE INFORMATION FROM SEKEM
                AND AGREE WITH OUR PRIVACY NOTICE. YOU MAY UNSUBSCRIBE AT ANY
                TIME.
              </label>

             {/* Send Button ************************ */}
              <button
                className="btn btn-red"
                type="submit"
                style={{ display: "block" }}
              >
                Send
              </button>
              {loading ? <LoadingSpinner /> : "" }
              
            </Form>
          )}
        </Formik>
       
      </div>
    </div>
  );
};
export default Careers;
