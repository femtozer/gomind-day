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
