/**
 * Use jest to test each case (even exceptions)
 * You can use Faker.js to generate random data
 * You will need to mock function httpx.get
 * https://jestjs.io/docs/jest-object#jestspyonobject-methodname
 * https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
 */

export class Cat {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  async getImage(apiKey: string): Promise<string> {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${this.breed}&api_key=${apiKey}`
    );

    if (response.ok) {
      const json = await response.json();
      return json[0]['url'];
    } else {
      throw new Error(`HTTP error ${response.status}`);
    }
  }
}
