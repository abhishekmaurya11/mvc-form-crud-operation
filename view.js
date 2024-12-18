
import { namee, fname, dob, religion, Caste, m, f, Country, State, District, pin, addres, education1, education2, education3, education4, myfilePhoto, myfileSignature } from './model.js';

import {num, i, index3} from './controller.js'

const reportList = document.getElementsByClassName('report-list')[0];
export const cross = document.getElementsByClassName('cross')[0];

export const dataObj = [];
// export let num = 0;

export function renderReport(){
    reportList.insertAdjacentHTML(
        'beforeend',
        `<span class="reportt">Application-${num} <button class="edit">Edit</button>   <button class="del">Delete</button>  <button class="view" ">View</button></span> <br>`,
     );
}

export function blankItForm(){
    namee.value = '';
         fname.value = '';
         dob.value = '';
         religion.value = '';
         Caste.value = '';
         m.value = '';
         f.value = '';
         Country.value = 'Country 1';
         State.value = 'State 1';
         District.value = 'District 1';
         pin.value = '';
         addres.value = '';
         education1.checked = false;
         education2.checked = false;
         education3.checked = false;
         education4.checked = false;
         myfilePhoto.value = '';
         myfileSignature.value = '';


}

export function insertHtml(){
    cross.innerHTML = `<span class="cfrm">Close Form</span>
         <p class='detail' >Name: ${dataObj[i].namee}</p>
           <p class='detail'>Father's Name: ${dataObj[i].fname}</p>
           <p class='detail'>Date Of Birth: ${dataObj[i].dob}</p>
           <p class='detail'>Religion: ${dataObj[i].religion}</p>
           <p class='detail'>Caste: ${dataObj[i].Caste}</p>
           <p class='detail'>Gender: ${dataObj[i].m ? "Male" : "Female"}</p>
           <p class='detail'>Country: ${dataObj[i].Country}</p>
           <p class='detail'>State: ${dataObj[i].State}</p>
           <p class='detail'>District: ${dataObj[i].District}</p>
           <p class='detail'>Pin Code: ${dataObj[i].pin}</p>
           <p class='detail'>Address: ${dataObj[i].addres}</p>
           <span>Education</span>
           <p class='detail'>${dataObj[i].education1}</p>
           <p class='detail'>${dataObj[i].education2}</p>
           <p class='detail'>${dataObj[i].education3}</p>
           <p class='detail'>${dataObj[i].education4}</p>
           <span>Photo:</span>
           <p class='detail'>${dataObj[i].myfilePhoto}</p>
           <span>Signature:</span>
           <p class='detail'>${dataObj[i].myfileSignature}</p>
         `
                  ;
}

export function show_data_in_the_form(){
    namee.value = dataObj[index3].namee;
         fname.value = dataObj[index3].fname;
         dob.value = dataObj[index3].dob;
         religion.value = dataObj[index3].religion;
         Caste.value = dataObj[index3].Caste;
         m.value = dataObj[index3].m;
         f.value = dataObj[index3].f;
         Country.value = dataObj[index3].Country;
         State.value = dataObj[index3].State;
         District.value = dataObj[index3].District;
         pin.value = dataObj[index3].pin;
         addres.value = dataObj[index3].addres;

         if (dataObj[index3].education1 === 'High School') {
            education1.checked = true;
         } else {
            education1.checked = false;
         }

         if (dataObj[index3].education2 === 'Intermidiate') {
            education2.checked = true;
         } else {
            education2.checked = false;
         }

         if (dataObj[index3].education3 === 'Graduation') {
            education3.checked = true;
         } else {
            education3.checked = false;
         }

         if (dataObj[index3].education4 === 'Post Graduation') {
            education4.checked = true;
         } else {
            education4.checked = false;
         }

         myfilePhoto.value = ``;
         myfileSignature.value = ``;
}



