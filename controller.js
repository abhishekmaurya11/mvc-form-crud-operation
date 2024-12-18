import data, { namee, fname, dob, religion, Caste, m, f, Country, State, District, pin, addres, education1, education2, education3, education4, myfilePhoto, myfileSignature } from './model.js';
import { renderReport, dataObj, cross, blankItForm, insertHtml, show_data_in_the_form } from './view.js';

let edit;
export let i;
export let num = 0;
export let index3;

const viewReport = document.getElementsByClassName('view-report')[0];
const editSave = document.getElementsByClassName('edit-save')[0];
const submitForm = document.getElementsByClassName('submit-form')[0];
const reportt = document.getElementsByClassName('reportt');

let view;
let del;

cross.addEventListener('click', function () {
   viewReport.style.display = "none";
});

/////////submit form ////////////////////

submitForm.addEventListener("click", myFunctionSubmit);
function myFunctionSubmit() {
   dataObj.push(data());
   console.log(dataObj);
   num++;

 /////// renderReport//////////////////
   renderReport();

   view = document.getElementsByClassName('view');

   let index = null;

   function viewfn(){
      for (let k = 0; k < num; k++) {

         view[k].addEventListener("click", function (event) {
            viewReport.style.display = "block";
            for (let j = 0; j < reportt.length; j++) {
               if (reportt[j] === event.currentTarget.parentNode) {
                  index = j;
                  break;
               }
            }
   
            // iiiiiiii
            for ( i = 0; i < num; i++) {
               if (index === i) {
   
                  // insert html///
                  insertHtml();
   
               }
            }
   
         });
      }
      for (let k = 0; k < num; k++) {

         view[k].addEventListener("click", function (event) {
            viewReport.style.display = "block";
            for (let j = 0; j < reportt.length; j++) {
               if (reportt[j] === event.currentTarget.parentNode) {
                  index = j;
                  break;
               }
            }
   
            // iiiiiiii
            for ( i = 0; i < num; i++) {
               if (index === i) {
   
                  // insert html///
                  insertHtml();
   
               }
            }
   
         });
      }
      
   }

   viewfn();
   // for (let k = 0; k < num; k++) {

   //    view[k].addEventListener("click", function (event) {
   //       viewReport.style.display = "block";
   //       for (let j = 0; j < reportt.length; j++) {
   //          if (reportt[j] === event.currentTarget.parentNode) {
   //             index = j;
   //             break;
   //          }
   //       }

   //       // iiiiiiii
   //       for ( i = 0; i < num; i++) {
   //          if (index === i) {

   //             // insert html///
   //             insertHtml();

   //          }
   //       }

   //    });
   // }

   // blank form//////////////////
   blankItForm();
   
   // delete//////////////////////
   let index2 = null;
   del = document.getElementsByClassName('del');

   for (let k = 0; k < num; k++) {
      del[k].addEventListener('click', function (e) {
         for (let j = 0; j < reportt.length; j++) {
            if (reportt[j] === e.currentTarget.parentNode) {
               index2 = j;
               reportt[j].style.display = 'none';
               break;
            }
         }
         dataObj.splice(index2, 1);

      });
   }

   // edit//////////////////////////////
   edit = document.getElementsByClassName('edit');
   // index3//////////
   for (let k = 0; k < num; k++) {
      edit[k].addEventListener('click', function (e) {
         submitForm.style.display = "none";
         editSave.style.display = "block";

         for (let l = 0; l < reportt.length; l++) {
            if (reportt[l] === e.currentTarget.parentNode) {
               index3 = l;
               break;
            }
         }
         // Show data in the form////////////////////////
         show_data_in_the_form();

         editSave.addEventListener('click', function () {
            submitForm.style.display = "block";
            editSave.style.display = "none";

            dataObj[index3].namee = namee.value;
            dataObj[index3].fname = fname.value;
            dataObj[index3].dob = dob.value;
            dataObj[index3].religion = religion.value;
            dataObj[index3].Caste = Caste.value;
            dataObj[index3].m = m.value;
            dataObj[index3].f = f.value;
            dataObj[index3].Country = Country.value;
            dataObj[index3].State = State.value;
            dataObj[index3].District = District.value;
            dataObj[index3].pin = pin.value;
            dataObj[index3].addres = addres.value;

            if (education1.checked === true) {
               dataObj[index3].education1 = 'High School';
            } else {
               dataObj[index3].education1 = 'Not High School';
            }

            if (education2.checked === true) {
               dataObj[index3].education2 = 'Intermidiate';
            } else {
               dataObj[index3].education2 = 'Not Intermidiate';
            }

            if (education3.checked === true) {
               dataObj[index3].education3 = 'Graduation';
            } else {
               dataObj[index3].education3 = 'Not Graduation';
            }

            if (education4.checked === true) {
               dataObj[index3].education4 = 'Post Graduation';
            } else {
               dataObj[index3].education4 = 'Not Post Graduation';
            }

            dataObj[index3].myfilePhoto = myfilePhoto.value;
            dataObj[index3].myfileSignature = myfileSignature.value;

            blankItForm();
            viewfn();

         });

      });
   }

}

