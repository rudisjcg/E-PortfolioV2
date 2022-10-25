//template_hrwqx1b
//service_a6t5ufe
//rW_c_LhJK_6vXIgrS

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs.sendForm (
            'service_a6t5ufe',
            'template_hrwqx1b',
            event.target,
            'rW_c_LhJK_6vXIgrS'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on rudisjcg@gmail.com"
            );
        })
}

let isModalOpen = false;


function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open";
    
}