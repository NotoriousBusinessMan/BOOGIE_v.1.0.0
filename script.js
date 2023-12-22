function countTo(){
    let from = 0;
    let to = 1100;
    let step = to > from ? 1 : -1;
    let interval = 0;

    if(from == to){
        document.querySelector("#user_count").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#user_count").textContent = from + ' +' + ' users';

        if(from == to){
            clearInterval(counter);
        }
        if(document.querySelector("#user_count").textContent == '1100 + users'){
            let count = document.querySelector("#user_count")
            count.style.color = '#e8b61e'
            count.style.scale = '1.2'
        }
    }, interval);
}
countTo();


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    const linkElements = document.querySelectorAll('.links');
    linkElements.forEach((link, index) => {
        link.addEventListener('click', function(e){
            mobile_menu.classList.remove('is-active');
            menu_btn.classList.remove('is-active');
        })
    });
});