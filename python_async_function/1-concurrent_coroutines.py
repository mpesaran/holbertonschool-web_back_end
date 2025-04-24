#!/usr/bin/env python3
"""Execute multiple coroutines at the same time"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """spawns wait_random n times with the specified max_delay"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    result = await asyncio.gather(*tasks)
    return sorted(result)
