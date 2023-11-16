"""
Use pytest to test each case (even exceptions)
"""


def is_major(age: int) -> bool:
    if age < 0:
        raise ValueError("Age must be greater than 0")
    return age >= 18
