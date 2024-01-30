import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Please enter your first and last name').required("First and Last names are required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact number is required"),
    date: yup.date().required("Date is required"),
   /*  time: yup.date().required("Time is required"), */
  
    

});