import * as Yup from "yup";

export const UserDetailsSchema = Yup.object().shape({
    address: Yup.string().required('Campo requerido'),
    city: Yup.string().required('Campo requerido'),
    neighborhood: Yup.string().required('Campo requerido'),
    phone: Yup.string().required('Campo requerido'),
});