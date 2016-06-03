
var section_pointer = [document.body.firstChild];
var resume_pointer = [resume_data];
var mode = "object";
while(section_pointer[0]) {
    var section_name = section.nodeType == 1 ? section.getAttribute('resume-section') : null;
    if(section_name && resume_pointer[section_name]) {
        console.log("populating",section_name);
        resume_pointer.unshift(resume_pointer[section_name]);
        section_pointer.unshift(section_pointer.firstChild);
    }
    
    section = section.nextSibling;
    if(section == null) {
        section_pointer.shift();
        resume_pointer.shift();
    }

}   
