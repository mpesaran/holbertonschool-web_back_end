#!/usr/bin/env python3
"""Async Generator"""
from typing import AsyncGenerator, List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    The coroutine will collect 10 random numbers using an async comprehensing
    over async_generator, then return the 10 random numbers.
    """
    result = [number async for number in async_generator()]
    return result
