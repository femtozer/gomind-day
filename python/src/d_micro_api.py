"""
Use pytest to test each case (even exceptions)
You should use FastAPI test client:
https://fastapi.tiangolo.com/tutorial/testing/

You will need to mock function is_admin_user
There are different ways to do this:
https://fastapi.tiangolo.com/advanced/testing-dependencies/
https://pytest-mock.readthedocs.io/en/latest/usage.html
"""
from typing import Annotated

from fastapi import FastAPI, HTTPException, Security, status
from pydantic import BaseModel

from lib.is_admin_user import is_admin_user

app = FastAPI()


class Message(BaseModel):
    message: str


@app.get("/hello/{name}")
async def hello(name: str) -> Message:
    if name.capitalize() != name:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A name must starts with a capital letter",
        )

    return Message(message=f"Hello {name}!")


@app.get("/admin/hello")
async def hello_auth(is_admin: Annotated[bool, Security(is_admin_user)]) -> Message:
    if not is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="User must be admin"
        )

    return Message(message="Hello Admin!")
