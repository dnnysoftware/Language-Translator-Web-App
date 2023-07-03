pip3 install --no-cache-dir -r backend/requirements.txt &
npm install --prefix frontend --legacy-peer-deps &
python3 backend/manage.py runserver &
npm start --prefix frontend &

wait