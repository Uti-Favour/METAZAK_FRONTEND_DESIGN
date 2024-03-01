document.addEventListener('DOMContentLoaded', ()=>{

    let display_hidden = document.querySelector('.menu_toggle_hidden');
    let display_block = document.querySelector('.menu_toggle_block');
    const btn = document.querySelector('.btn');


    function OpenNavigationBar(){
        btn.addEventListener('click' , () => {
            display_hidden.classList.toggle("display_block");
            

        });

    }

    
    OpenNavigationBar();
    

});