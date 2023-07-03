# Use the official Python base image
FROM python:3.10

ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /backend

# Copy the project code to the working directory
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

# Activate the virtual environment and run the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
