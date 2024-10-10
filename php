<?php
$htmlCode = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Embedded in HTML</title>
</head>
<body>
  <h1><?php echo "Hello, World!"; ?></h1>
  <p><?php echo "This HTML content is dynamically printed using PHP."; ?></p>
</body>
</html>
';

// Use htmlspecialchars to convert special characters so they display as text
echo "<pre>" . htmlspecialchars($htmlCode) . "</pre>";
?>
