import * as yup from 'yup';

const urlRegex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/

const loginSchema = yup.object().shape({
    mailOrPhone : yup
        .string()
        .required("Prière de fournir vos identifiants")
        .min(10, "Le numéro de téléphone ou l'addresse mail doit contenir au moins dix caractères"),
    password : yup 
        .string()
        .required("Veuiller fournir votre mot de passe")
        .min("Le mot de passe doit contenir au moins 8 caractères")
});

const signUpSchema = yup.object().shape({
    phone : yup
        .string()
        .required("Prière de fournir votre numéro de téléphone")
        .min(10, "Le numéro doit contenir au moins dix caractères"),
    email : yup
        .string()
        .email("Addresse électronique invalide"),
    password : yup 
        .string()
        .required("Veuiller fournir votre mot de passe")
        .min(8,"Le mot de passe doit contenir au moins huit caractères"),
    firstname : yup
        .string()
        .required("Veuiller fournir votre prénom")
        .min(3, "Votre prénom doit contenir au moins trois caractères"),
    lastname : yup
        .string()
        .required("Veuiller fournir votre nom")
        .min(3, "Votre nom doit contenir au moins trois caractères"),
    city : yup
        .string()

});

const articleSchema = yup.object().shape({
    name : yup
        .string()
        .required("Veuillez inscrire le nom de l'article")
        .min(4, "Le nom de l'article est trop court"),
    color : yup
        .string()
        .required("Veuillez indiquer la couleur"),
    link : yup
        .string()
        .matches(urlRegex, "Lien invalide")
        .required("Veuillez fournir le lien de l'article"),
    quantity : yup
        .number()
        .min(1)
        .required('Veuillez indiquer une quantité'),
    description : yup
        .string()
        .min(10, "La description est trop courte")
        .max(100)    
})


export { loginSchema, signUpSchema, articleSchema }