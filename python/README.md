# Unit testing in python with pytest

Create a new virtual env and activate it:

```bash
pip install virtualenv # if not already installed
virtualenv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a new test file in tests folder for each src example:

```
src/a_hello_world.py
=> tests/test_a_hello_world.py
```

Inside the test file, also name your tests with the prefix **test\_**:

```python
from a_hello_world import hello

def test_hello():
    assert hello() is not None
```

Run test with coverage:

```bash
pytest --cov=src --cov-report=term
```

Pytest documentation is [here](https://docs.pytest.org/en/7.1.x/contents.html), good luck!
