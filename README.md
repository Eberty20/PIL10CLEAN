git clone https://github.com/Eberty20/PIL10CLEAN.git
cd estoque
python -m venv .venv
.venv/script/activate
pip install -r requirements.txt
python contrib/env_gen.py
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
