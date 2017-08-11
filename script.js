/**
 *  CSS Filter Preview Generator | github.com/Ar1sD/CSS-Filter-Preview-Generator
 *  Copyright (c) 2017 Ar1sD | github.com/Ar1sD
 *  Released under the MIT License; see LICENSE.txt
 *  ----------------------------------
 *  Created by Ar1sD on 2017-07-25.
 *  Last Modified on 2017-08-10.
 */

function init(){
    //DOM Variables
    originalImg=document.getElementById("original");
    previewImg=document.getElementById("preview");

    //Input Variables
    inbrightR=document.getElementById("inputVal-brightR");
    inbrightN=document.getElementById("inputVal-brightN");
    incontR=document.getElementById("inputVal-contR");
    incontN=document.getElementById("inputVal-contN");
    ingreyR=document.getElementById("inputVal-greyR");
    ingreyN=document.getElementById("inputVal-greyN");
    ininvR=document.getElementById("inputVal-invR");
    ininvN=document.getElementById("inputVal-invN");
    inopR=document.getElementById("inputVal-opR");
    inopN=document.getElementById("inputVal-opN");
    insatR=document.getElementById("inputVal-satR");
    insatN=document.getElementById("inputVal-satN");
    insepR=document.getElementById("inputVal-sepR");
    insepN=document.getElementById("inputVal-sepN");
    inhueR=document.getElementById("inputVal-hueR");
    inhueN=document.getElementById("inputVal-hueN");

    inBlur=document.getElementById("inputVal-blur");
    inShadowH=document.getElementById("inputVal-shadowH");
    inShadowV=document.getElementById("inputVal-shadowV");
    inShadowBlur=document.getElementById("inputVal-shadowBlur");
    inShadowC=document.getElementById("inputVal-shadowC");

    //Display Not Supported Div
    if(/Trident/i.test(navigator.userAgent)){
        console.log("IE Detected");
        document.getElementById("notSupported").style.display="block";
    }

    //Plugins
    // Color Picker - Browser Specific
    // IF NOT MS Edge, plugin
    /*
    MS Edge has a problem with e.preventDefault() when the plugin is used.
    This results in 2 layers of color picker panels, the first of which is default
    and does not work. The second, plugin version is usable.
    The current fix does not initiate the plugin, and so only the default picker shows up.
     */
    if(!/Edge/i.test(navigator.userAgent)){
        console.log("Not Edge Detected");
        initColorPicker()   //Function Code Relocated to color-picker.min.js
    }
}

// Custom File Input
function filechange(obj){
    // console.log(obj.files);
    var url=URL.createObjectURL(obj.files[0]);
    // console.log(url);
    originalImg.src=url;
    previewImg.src=url;
}

// Post-Init Funcs
function brightR(){
    inbrightN.value=inbrightR.value;
    change()
}
function brightN(){
    inbrightR.value=inbrightN.value;
    change()
}
function contR(){
    incontN.value=incontR.value;
    change()
}
function contN(){
    incontR.value=incontN.value;
    change()
}
function greyR(){
    ingreyN.value=ingreyR.value;
    change()
}
function greyN(){
    ingreyR.value=ingreyN.value;
    change()
}
function invR(){
    ininvN.value=ininvR.value;
    change()
}
function invN(){
    ininvR.value=ininvN.value;
    change()
}
function opR(){
    inopN.value=inopR.value;
    change()
}
function opN(){
    inopR.value=inopN.value;
    change()
}
function satR(){
    insatN.value=insatR.value;
    change()
}
function satN(){
    insatR.value=insatN.value;
    change()
}
function sepR(){
    insepN.value=insepR.value;
    change()
}
function sepN(){
    insepR.value=insepN.value;
    change()
}
function hueR(){
    inhueN.value=inhueR.value;
    change()
}
function hueN(){
    inhueR.value=inhueN.value;
    change()
}

function change() {
    preview.style.filter =
        "brightness("+inbrightN.value+"%) " +
        "contrast("+incontN.value+"%) " +
        "grayscale("+ingreyN.value+"%) " +
        "blur("+inBlur.value+"px) " +
        "invert("+ininvN.value+"%) " +
        "opacity("+inopN.value+"%) " +
        "saturate("+insatN.value+"%) " +
        "sepia("+insepN.value+"%) " +
        "hue-rotate("+inhueN.value+"deg) " +
        "drop-shadow("+inShadowH.value+"px "+inShadowV.value+"px "+inShadowBlur.value+"px "+inShadowC.value+")";
}

function resetFilter(buttonObj) { //*** CANNOT be resetFilter(this)
    buttonObj.form.reset();
    change();
}

window.onload=init;