import time
import random


def is_admin_user() -> bool:
    # fake admin validation
    time.sleep(random.random() * 3)
    return random.choice([True, False])
