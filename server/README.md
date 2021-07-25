Inside server folder:

### Create Python Virtual Environment

python3 -m venv venv

### Activate Virtual Environment

. venv/bin/activate (Linux)
CMD
venv\Scripts\activate.bat (Windows)

#### Install Requirements

pip install -r requirements.txt

#### Update Requirements

pip freeze > requirements.txt