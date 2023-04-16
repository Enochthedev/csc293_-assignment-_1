<!DOCTYPE html>
<html>
  <head>
      <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
          <body>
              <header>
                    <h1>My Life Story</h1>
                        </header>
                            <nav>
                                  <?php
                                          $nav = array(
                                                    'Story of My Life' => 'story_of_my_life.php',
                                                              'University Experience' => 'university_experience.php',
                                                                        'Lecturers' => 'lecturers.php',
                                                                                  'Home'=>'index.php'
                                                                                          );
                                                                                                ?>
                                                                                                      <ul>
                                                                                                              <?php foreach ($nav as $name => $section): ?>
                                                                                                                        <li><a href="<?php echo $section; ?>"><?php echo $name; ?></a></li>
                                                                                                                                <?php endforeach; ?>
                                                                                                                                      </ul>
                                                                                                                                          </nav>
                                                                                                                                              <main>
                                                                                                                                                    <section id="lecturers">
                                                                                                                                                      <h2>Lecturers</h2>
                                                                                                                                                        <?php 
                                                                                                                                                            $stories = file_get_contents('stories.txt');
                                                                                                                                                                $stories = json_decode($stories, true);
                                                                                                                                                                    foreach ($stories['lecturers'] as $name => $bio): 
                                                                                                                                                                      ?>
                                                                                                                                                                          <h3><?php echo $name; ?></h3>
                                                                                                                                                                              <p>
                                                                                                                                                                                    <?php echo $bio; ?>
                                                                                                                                                                                        </p>
                                                                                                                                                                                          <?php endforeach; ?>
                                                                                                                                                                                          </section>
                                                                                                                                                                                              </main>
                                                                                                                                                                                                  <footer>
                                                                                                                                                                                                        <p>&copy; <?php echo date('Y'); ?> My Life Story</p>
                                                                                                                                                                                                            </footer>
                                                                                                                                                                                                              </body>
                                                                                                                                                                                                              </html>
                                                                                                                                                                                                              