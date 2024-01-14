document.addEventListener("DOMContentLoaded", (event) => { 
    
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
             <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.376453008547!2d-3.6896299241681145!3d40.42266235527845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422899f1e2d9fb%3A0xcb802d3dedf5565a!2sCalle%20de%20Claudio%20Coello%2C%2019%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1684435838701!5m2!1ses!2ses"></iframe>
        `;
    }, 500);

});