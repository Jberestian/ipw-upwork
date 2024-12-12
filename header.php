<!-- header.php -->

<header class="header">
    <div class="logo-container">
        <img src="images/logo-UGA-blanc-orange-pied.png" alt="Logo" class="logo">
    </div>
    <nav class="nav-menu">
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="cv.php">CV</a></li>
            <li><a href="blog.php">Blog</a></li>
            <li><a href="divers.php">Divers</a></li>
        </ul>
    </nav>
    <div class="contact-button-container">
        <a href="#footer" class="contact-button">Contact</a>
        <script>
        // Smooth scrolling for the "Contact" button
            document.querySelector('.contact-button').addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            document.getElementById('footer').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
                    });
                });
        </script>

    </div>
</header>

