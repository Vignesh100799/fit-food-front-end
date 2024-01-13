
import * as Yup from "yup";

export const loginInitialValue = {
    email: "",
    password: "",
}
export const loginValidation =Yup.object({
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
})
    

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    goals: "",
    gender: "",
    age: "",
    activationLevel: "",
    weight: {
        value: "",
        unit: "kg",
    },
    height: {
        feet: "",
        inches: "",
        unit: "ft",
    },
    healthConditionCategory: "",
    healthCondition: "",
}
export const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(3, "Too short")
        .max(30, "Too long")
        .required("First Name is required"),
    lastName: Yup.string()
        .max(30, "Too long")
        .required("Last Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("Confirm Password is required"),
    username: Yup.string().required("Required"),
    goals: Yup.string().required("Please select a goal"),
    gender: Yup.string().required("Select a gender"),
    age: Yup.number()
        .required("Age is required")
        .min(16, "Age must be at least 16 years"),
    activationLevel: Yup.string().required("Activation level is required"),
    weight: Yup.object().shape({
        value: Yup.number()
            .required("Weight is required")
            .min(40, "Weight must be at least 40 kg")
            .when("unit", {
                is: "lbs",
                then: Yup.number().min(88, "Weight must be at least 88 lbs"),
            }),
        unit: Yup.string()
            .required("Unit is required")
            .oneOf(["kg", "lbs"], "Invalid unit"),
    }),

    height: Yup.object().shape({
        feet: Yup.number().required("Feet is required"),
        inches: Yup.number()
            .required("Inches is required")
            .min(0, "Inches must be greater than or equal to 0"),
        unit: Yup.string()
            .required("Unit is required")
            .oneOf(["ft", "cm"], "Invalid unit"),
    }),
    healthConditionCategory: Yup.string().required(
        "Health condition category is required"
    ),
    healthCondition: Yup.string().required("Health condition is required"),
})