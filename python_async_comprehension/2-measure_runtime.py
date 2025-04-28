#!/usr/bin/env python3
"""Async Generator"""
import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """measure the total runtime and return it"""
    start = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = time.perf_counter()
    return end - start
