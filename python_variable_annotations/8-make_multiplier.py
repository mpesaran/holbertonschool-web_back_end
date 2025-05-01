#!/usr/bin/env python3
"""Typed annotation function make_multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function which multiplies"""
    def multiply(x: float) -> float:
        return x * multiplier
    return multiply
