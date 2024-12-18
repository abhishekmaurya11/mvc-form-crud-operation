"use strict";

export const namee= document.getElementsByClassName('name')[0];
export const fname= document.getElementsByClassName('fname')[0];
export const dob= document.getElementsByClassName('dob')[0];
export const religion= document.getElementsByClassName('Religion')[0];
export const Caste= document.getElementsByClassName('Caste')[0];
export const m= document.getElementsByClassName('m')[0];
export const f= document.getElementsByClassName('f')[0];
export const Country= document.getElementsByClassName('Country')[0];
export const State= document.getElementsByClassName('State')[0];
export const District= document.getElementsByClassName('District')[0];
export const pin= document.getElementsByClassName('pin')[0];
export const addres= document.getElementsByClassName('addres')[0];
export const education1= document.getElementsByClassName('education1')[0];
export const education2= document.getElementsByClassName('education2')[0];
export const education3= document.getElementsByClassName('education3')[0];
export const education4= document.getElementsByClassName('education4')[0];
export const playingG= document.getElementsByClassName('playing-g')[0];
export const watchMovies= document.getElementsByClassName('watch-movies')[0];
export const myfilePhoto= document.getElementsByClassName('myfile-photo')[0];
export const myfileSignature= document.getElementsByClassName('myfile-signature')[0];

export default function data(){
    return {
        namee: namee.value,
        fname: fname.value,
        dob: dob.value,
        religion: religion.value,
        Caste: Caste.value,
        m: m.value,
        f: f.value,
        Country: Country.value,
        State: State.value,
        District: District.value,
        pin: pin.value,
        addres: addres.value,
        education1: `${education1.checked? "High School" : "Not High School"}` ,
        education2: `${education2.checked? "Intermidiate" : "Not Intermidiate"}`,
        education3: `${education3.checked? "Graduation" : "Not Graduation"}`,
        education4: `${education4.checked? "Post Graduation" : "Not Post Graduation"}`,       
        myfilePhoto: myfilePhoto.value,
        myfileSignature: myfileSignature.value,

    };
}





