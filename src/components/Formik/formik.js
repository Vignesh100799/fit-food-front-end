
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { selectUser } from "../reducers/state";



export const loginInitialValue = {
    email: "",
    password: "",
}
export const loginValidation = Yup.object({
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

export const settingsIntialvalues = {
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
export const settingsValidation = Yup.object({
    username: Yup.string().required("Required"),
    goals: Yup.string().required("Please select a goal"),
    food : Yup.string().required("Select Food Type"),

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
            .required("Unit is required"),
    }),
    height: Yup.object().shape({
        value: Yup.number()
            .required("Height is required")
            .min(54.6, "Height must be greater than or equal to the world's lowest person (54.6 cm)")
            .max(272, "Height must be less than or equal to the world's highest person (272 cm)"),
        unit: Yup.string()
            .required("Unit is required")
            .oneOf(["cm"], "Invalid unit"),
    }),
    healthConditionCategory: Yup.string().required(
        "Health condition category is required"
    ),
    healthCondition: Yup.string().required("Health condition is required"),
})

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    goals: "",
    food : "",
    gender: "",
    age: "",
    activationLevel: "",
    weight: {
        value: "",
        unit: "kg",
    },
    height: {
        value: "",
        unit: "cm",
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
    food : Yup.string().required("Select Food Type"),
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
            .required("Unit is required"),
    }),
    height: Yup.object().shape({
        value: Yup.number()
            .required("Height is required")
            .min(54.6, "Height must be greater than or equal to the world's lowest person (54.6 cm)")
            .max(272, "Height must be less than or equal to the world's highest person (272 cm)"),
        unit: Yup.string()
            .required("Unit is required")
            .oneOf(["cm"], "Invalid unit"),
    }),
    healthConditionCategory: Yup.string().required(
        "Health condition category is required"
    ),
    healthCondition: Yup.string().required("Health condition is required"),
})