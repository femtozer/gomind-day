"""
Use pytest to test each case (even exceptions)
You can use Faker to generate random data
You can use Pytest fixtures to 'inject' data/behavior in your tests
"""
from dataclasses import dataclass
from typing import Literal


@dataclass
class User:
    first_name: str
    last_name: str
    email: str
    age: int
    country_code: Literal["fr", "us"]


def is_major(user: User) -> bool:
    age_min = 18 if user.country_code == "fr" else 21
    if user.age < 0:
        raise ValueError("Age must be greater than 0")
    return user.age >= age_min
