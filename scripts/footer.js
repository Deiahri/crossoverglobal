let footer = document.createElement('div');
footer.style = 'padding: 10px';
footer.innerHTML = `
<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-5 row-cols-xl-7 py-5 my-5 border-top">
    <div class="col mb-3">
        <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img class="logo smaller"  style="max-width: 90vw;">
        </a>
        </div>
    
        <div class="col mb-3">
    
        </div>
    
        <div class="col mb-3">
        <h5>
            <a href="/">Home</a>
        </h5>
        
        </div>
    
        <div class="col mb-3">
        <h5>Make Change</h5>
        <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="/search/?type=projects" class="nav-link p-0 text-body-secondary">Projects</a></li>
            <li class="nav-item mb-2"><a href="/search/?type=sponsorship" class="nav-link p-0 text-body-secondary">Sponsorships</a></li>
        </ul>
        </div>
    
        <div class="col mb-3">
        <h5>Learn More</h5>
        <ul class="nav flex-column">
        <li class="nav-item mb-2"><a class="nav-link p-0 text-body-secondary" href="/search/?type=good_news">The Good News</a></li>
            <li class="nav-item mb-2"><a class="nav-link p-0 text-body-secondary" href="/about">About</a></li>
            <li class="nav-item mb-2"><a class="nav-link p-0 text-body-secondary" href="/contact">Contact us</a></li>
        </ul>
    </div>

</footer>
<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
    <p>© 2024 Crossover Global, Inc. All rights reserved.</p>
    <ul class="list-unstyled d-flex">
        <!-- YouTube -->
        <li class="ms-3">
            <a class="link-body-emphasis" href="https://www.youtube.com/@crossoverglobal478">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
            </a>
        </li>
        <li class="ms-3">
        <!-- Facebook -->
            <a class="link-body-emphasis" href="https://www.facebook.com/people/Crossover-Global-Facilitating-Ministry-Inc/100063746584058/">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
            </a>
        </li>
    </ul>
</div>
<div style="height: 100px;"></div>
`

try {
    body.appendChild(footer);
} catch {
    document.getElementsByTagName('body')[0].appendChild(footer);
}
