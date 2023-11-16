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
        if response.status_code == httpx.codes.OK:
            return response.json()[0].get("url")
        else:
            response.raise_for_status()
