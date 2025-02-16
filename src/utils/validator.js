import * as Yup from 'yup';


export const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordValidator = /^((?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,})$/;






export const valSchema = Yup.object({
  title: Yup.string().min(10).max(200).required(),
  detail: Yup.string().max(500).required(),
  locate: Yup.string().required(),
  genres: Yup.array().min(1).required(),
  country: Yup.string().required(),
});
