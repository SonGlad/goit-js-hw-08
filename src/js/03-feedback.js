import throttle from "lodash.throttle";

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove item error: ", error.message);
  }
};

export default {
  save,
  load,
  remove,
};

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const refs = {
  formEl: document.querySelector(".feedback-form"),
  emailEl: document.querySelector(".feedback-form input"),
  messaEl: document.querySelector(".feedback-form textarea"),
};
const STORAGE_KEY = "feedback-form-state";
const formData = {};


document.addEventListener('DOMContentLoaded', getFormDataFromLocalStorage);
refs.formEl.addEventListener('submit', onFormSubmit);


refs.formEl.addEventListener('input', throttle(function(event) {
  formData[event.target.name] = event.target.value;

  // const formDataJason = JSON.stringify(formData);
  // localStorage.setItem(STORAGE_KEY, formDataJason);
  save(STORAGE_KEY, formData);
}, 500));


function getFormDataFromLocalStorage(){
  // const savedData = localStorage.getItem(STORAGE_KEY);
  const savedData = load(STORAGE_KEY);
 
  if(savedData){
    // const parsedData = JSON.parse(savedData);
    const { email, message } = savedData;
    // const { email, message } = parsedData;
    refs.emailEl.value = email || "";
    refs.messaEl.value = message || "";
    formData.email = email;
    formData.message = message;
  };
  };


function onFormSubmit(event){
  event.preventDefault();
  if(refs.emailEl.value === ''){
    return;
  }
  formData.email = refs.emailEl.value;
  formData.message = refs.messaEl.value;
  console.log(formData);
  // localStorage.removeItem(STORAGE_KEY);
  remove(STORAGE_KEY);
  refs.formEl.reset();
  formData.email = '';
  formData.message = '';
};







