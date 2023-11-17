"""
Use pytest to test each case (even exceptions)
You can use Faker to generate random data
You can use Pytest fixtures to 'inject' data/behavior in your tests
You will need to mock function httpx.get
https://pytest-mock.readthedocs.io/en/latest/usage.html
"""
from dataclasses import dataclass

import httpx


@dataclass
class Cat:
    name: str
    breed: str

    def get_image(self, api_key: str) -> str:
        response = httpx.get(
            f"https://api.thecatapi.com/v1/images/search?breed_ids={self.breed}&api_key={api_key}"
        )
        if response.status_code != httpx.codes.OK:
            response.raise_for_status()

        return response.json()[0].get("url")
