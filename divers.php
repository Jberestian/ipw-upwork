<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Divers</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <?php include 'header.php'; ?>
    
    <div class="game-container">
      <div class="game-card">
        <p>Trouvez le nombre caché entre 0 et 100<br> en 10 essais maximum</p>
        <label for="prop">Votre proposition : </label>
        <input type="text" id="prop" name="proposition" value="" /><br />
        <div id="message"></div>
        <div id="partieEncours">
          <button id="jouerBtn" class="btn play">Jouer</button>
          <button id="finPartieBtn" class="btn abandon">Abandonner</button>
        </div>
      </div>
    </div>
    
    <?php include 'footer.php'; ?>
    <script src="js/nombreCache.js"></script>
  </body>
</html>