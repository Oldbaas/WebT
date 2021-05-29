<?php
            if(!isset($_POST['vorname'])) {
            echo "Parameter 'vorname' not set"; return;
            }
            echo "<p>Hallo " . $_POST['vorname'] . "</p>";
        ?>