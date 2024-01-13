import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { initialValues, validationSchema } from "../Formik/formik";
import Side from "./Side";
import EditSetting from "../Settings/EditSetting";
import ViewSetting from "../Settings/ViewSetting";

const Settings = () => {
  const [isEditing, setEditing] = useState(false);
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <Side>
      {isEditing ? (
        <EditSetting onCancelEdit={handleCancelEdit} />
      ) : (
        <ViewSetting onEditClick={handleEditClick} />
      )}
    </Side>
  );
};

export default Settings;
