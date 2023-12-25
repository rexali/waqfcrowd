"use client"

import Form from "form-data";
import { updateUserProfile } from "../api/updateUserProfile";

/**
 * Upadate the user profile form
 * @param event : an event
 * @param formData : data from form
 */
const updateUserProfileSubmit = async (event: React.FormEvent<HTMLFormElement>, userId: any, file: any, successCallback:any) => {
  // prevent the default behaviour of the form
  event.preventDefault();
  try {
    // create a FormData instance
    const data = new FormData(event.currentTarget);
    const fullName = data.get('fullName') as string;

    const form = new Form();
    form.append('firstName',fullName?.split(' ')[0]);
    form.append('userId', userId);
    form.append('lastName',fullName?.split(' ')[1]);
    form.append('file',file.file, file.name);

    let result = await updateUserProfile(form,userId);
    if (result?.affectedRows === 1) {
      successCallback(true);
      console.log('success');
    }

  } catch (error) {
    // show error if any
    console.warn(error);
  }

};

export {
  updateUserProfileSubmit
}