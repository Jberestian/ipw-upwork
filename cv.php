<!DOCTYPE html>
<html>
  <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CV</title>
        <link rel="stylesheet" href="css/style.css">
  </head>

  <body>
    <!-- le contenu de la page -->
    <?php include 'header.php'; ?>
    <main>
      <section id="etat-civil">
        <h1 class="etat-civil-title">Etat Civil</h1>
        <img src="./images/photos/image-principale.avif" class="etat-civil-img" />
        <p class="etat-civil-text">Jane Doe</p>
        <p>20 place de l'Eglise</p>
        <p>38000, GRENOBLE</p>
        <p>+336xxxxxx</p>
        <p>jane.doe@univ-grenoble-alpes.com</p>
      </section>
      <section id="formation">
        <h1 class="formation-title">Formation</h1>
        <dl>
          <dt class="formation-text">Master Spécialité Compétence Complémentaire en Informatique</dt>
          <dd>Université Joseph Fourier 2010–2012</dd>
          <dt>Master Spécialité XXXX</dt>
          <dd>Université YYY 2008–2010</dd>
          <dt>Licence Spécialité ZZZZ</dt>
          <dd>Université YYY 2005–2008</dd>
        </dl>
      </section>
      <section id="competences">
        <h1 class="competences-title">Compétences Informatique</h1>
        <dl>
          <dt class="competences-text">Langages de Programmation</dt>
          <dd>Java, Swift, C++, Python, Scala</dd>
          <dt>Technologies du web</dt>
          <dd>HTML, CSS, JavaScript, PHP, technologies XML</dd>
          <dt>Bases de données</dt>
          <dd>SQL - MySQL, PostgreSQL (extension PostGIS), MongoDB</dd>
          <dt>Méthodologies</dt>
          <dd>UML, Méthodes agiles, RUP, SCRUM</dd>
          <dt>Outils de développement</dt>
          <dd>Eclipse, VS Code, Git, Maven, Ant, Jenkins</dd>
        </dl>
      </section>
      <section id="experiences">
        <h1 class="experiences-title">Experiences profesionnelles</h1>
        <p class="experiences-text">à compléter.....</p>
      </section>
    </main>
    <?php include 'footer.php'; ?>

    <script src="./js/darkMode.js"></script>
  </body>
</html>