#!/usr/bin/env python3
"""The basic of async"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """waits for a random seconds less that max_delay and returns it"""
    number = random.uniform(0, max_delay)
    await asyncio.sleep(number)
    return number
