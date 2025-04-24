#!/usr/bin/env python3
"""Spawns task_wait_random n times and returns the list of delays"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Runs task_wait_random n times concurrently"""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    result = await asyncio.gather(*tasks)
    return sorted(result)
