"""
Use pytest to test each case
"""


def hello(name: str | None = None) -> str:
    if name:
        return f"Hello {name}!"
    else:
        return "Hello world!"
