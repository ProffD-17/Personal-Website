theme_button = document.getElementById('change-theme');
sky = document.getElementById('sky');
forrest = document.getElementById('forrest');
ground = document.getElementById('ground');
theme_backgrounds = document.getElementsByClassName('bg-responsive');

link_containers = document.getElementsByClassName('link-container');

nav_items = document.getElementsByClassName('nav-item');
nav_bar = document.getElementById('nav-bar');
nav_links = document.getElementsByClassName('nav-link');
nav_title = document.getElementById('navbar-brand');

white_text = '#FAFAFA';
black_text = '#000000';
dark_border = '#171717';
light_border = '#C0C0C0'
light_background = '#F5F5F5';
dark_background = '#363636';
extra_dark_background = '#000';
dark_light_background = '#C5C5C5'


day = true;

theme_button.addEventListener('click', function() {
    if (day) {
        // bg imgs
        if (sky != null) {
            sky.style.backgroundImage = 'url(images/night_sky.jpg)';
        };
        if (forrest != null) {
            forrest.style.backgroundImage = 'url(images/forrest_night.jpg)';
        };
        if (ground != null) {
            ground.style.backgroundImage = 'url(images/ground_night.jpg)';
        };

        // bgs borders and text for page
        for (let i = 0; i < theme_backgrounds.length; i++) {
            theme_backgrounds[i].style.backgroundColor = dark_background;
            theme_backgrounds[i].style.color = white_text;
            theme_backgrounds[i].style.borderColor = dark_border;
        };
        for (let i = 0; i < link_containers.length; i++) {
            link_containers[i].style.backgroundColor = dark_background;
            link_containers[i].style.color = black_text;
        }
        
        // nav bar
        for (let i = 0; i < nav_items.length; i++) {
            nav_items[i].style.backgroundColor = extra_dark_background;
        }
        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].style.color = white_text;
        }
        nav_title.style.color = white_text;
        theme_button.innerHTML = '☾';
        day = false;
    }
    else {
        // background images
        if (sky != null) {
            sky.style.backgroundImage = 'url(images/sky.jpg)';
        }
        if (forrest != null) {
            forrest.style.backgroundImage = 'url(images/forrest_day.jpg)';
        }
        if (ground != null) {
            ground.style.backgroundImage = 'url(images/ground.jpg)';
        }

        // backgrounds, text and borders for page
        for (let i = 0; i < theme_backgrounds.length; i++) {
            theme_backgrounds[i].style.backgroundColor = light_background;
            theme_backgrounds[i].style.color = black_text;
            theme_backgrounds[i].style.borderColor = light_border;
        };

        for (let i = 0; i < link_containers.length; i++) {
            link_containers[i].style.backgroundColor = light_background;
            link_containers[i].style.color = black_text;
        }
        
        // navbar
        theme_button.innerHTML = '☼';
        for (let i = 0; i < nav_items.length; i++) {
            nav_items[i].style.backgroundColor = dark_light_background;
        }
        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].style.color = black_text;
        }
        nav_title.style.color = black_text;

        day = true;
    }
});