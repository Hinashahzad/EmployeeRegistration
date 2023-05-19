import * as yup from "yup";

export const userSchema = yup.object().shape(
    {
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required")
}
)

export const employeeRegistrationSchema = yup.object().shape(
    {
        firstName: yup.string()
        .required( "First Name is required" ),
        lastName: yup.string()
        .optional(),
        email: yup.string()
        .required( 'Email is required' )
        .email( 'Email is invalid' )
        .matches( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ),
    /*country: yup.string()
        .required(),*/
        address: yup.string()
        .required( "Address is required" ),
        phone: yup.string()
        .matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number is not valid" ),
        /*age: yup.string().test(
            "DOB",
            "error message",
            value => {
              return moment().diff(moment(value),'years') >= 18;
            }
          ),*/
         jobTitle:yup.string()
         .required("Job Title is required")

}
)