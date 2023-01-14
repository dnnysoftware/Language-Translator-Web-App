# Create virtualenv
python -m venv env 

# Activate env
source env/bin/activate

# Deactivate env
deactivate

# Create django project
django-admin startproject [project name]

# Run django web server
python3 manage.py runserver

# Create django app
python3 manage.py startapp [app name]

# Create admin and see database tables for django app
python3 manage.py createsuperuser