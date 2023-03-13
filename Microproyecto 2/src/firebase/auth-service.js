//Metodos de autenticacion

import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-service";

let Error = '';
let strippedError = "";
let complete=false;
export function returnError(){
  return Error;
}
export function completed(){
  return complete;
}
export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(auth,googleProvider)//abre la ventana de login de google
        
        const {isNewUser}=getAdditionalUserInfo(result);
        if(isNewUser){
          await createUserProfile(result.user.uid,{
            email: result.user.email,
            name: result.user.displayName,
          })
        }
    } catch (error) {
      console.error(error)  
    }
};

export const logInWithEmailAndPassword = async(email,password)=>{
  try {
    const result = await signInWithEmailAndPassword(auth,email,password);
    complete=true;
  } catch (error) {
    Error=error.code;
    strippedError = Error.replace("auth/", "")
    if(strippedError=="user-not-found"){
      Error="Usuario o contraseña incorrectos"

    }if (strippedError=="internal-error") {
      Error="Ingrese los datos correctamente"
    } if(strippedError=="invalid-email") {
      Error="Email invalido"
    }if(strippedError=="wrong-password") {
      Error="Contraseña incorrecta"
    }

    
  }
};

export const registerWithEmailAndPassword = async(
  email,
  password,
  confirmPassword,
  extraData
  )=>{
    if(password==confirmPassword){
  try {
    const result = await createUserWithEmailAndPassword(auth,email,password);
    complete=true;
    await createUserProfile(result.user.uid,{
      email,
      password,
      ...extraData,
    })
    
  } catch (error) {
    Error=error.code;
    strippedError = Error.replace("auth/", "")
    if(strippedError=="user-not-found"){
      Error="Usuario o contraseña incorrectos"

    }if (strippedError=="internal-error") {
      Error="Ingrese los datos correctamente"
    } if(strippedError=="invalid-email") {
      Error="Email invalido"
    }if(strippedError=="wrong-password") {
      Error="Contraseña incorrecta"
    }if(strippedError=="email-already-in-use") {
      Error="Este correo ya se encuentra registrado"
    }  }
  }else{
    Error="Las contraseñas no coinciden"
  }
};

export const logout = async()=>{
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error)
  }
};