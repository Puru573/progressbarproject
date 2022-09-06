const dropdowns=document.querySelectorAll('.dropdown');
// loop through all dropdown elements
dropdowns.forEach(dropdown=>{
    // get inner elements from each element
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelectorAll('.menu li');
    const selected=dropdown.querySelector('.selected');

    select.addEventListener('click',()=>{
        // add a click event to the select element

        // add the select-clicked style to the select element
        select.classList.toggle('select-clicked');

        // add the rotate style to the caret element
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu');
        // If force is not given, "toggles" token, removing it if it's present and adding it if it's not present.
    });
    
    options.forEach(option=>{
        option.addEventListener('click',()=>{

            // change selected innertext to clicked option innertext
            selected.innerText=option.innerText;
            // sare selected styles ko remove kr dia
            // select.classList.remove('select-clicked');
            // caret.classList.remove('caret-rotate');
            // menu.classList.remove('menu');
            options.forEach(option=>{
                option.classList.remove('active');
            })
            option.classList.add('active');
        });
    });

});
let back=document.querySelector(".back-cont");
back.addEventListener("click",()=>{
    location.assign("./second.html");
});

