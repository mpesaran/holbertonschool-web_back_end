#!/usr/bin/env python3
"""Async Generator"""
import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """measure the total runtime and return it"""
    start = time.perf_counter()
    numbers = [asyncio.create_task(async_comprehension()) for _ in range(4)]
    await asyncio.gather(*numbers)
    end = time.perf_counter()
    return end - start
