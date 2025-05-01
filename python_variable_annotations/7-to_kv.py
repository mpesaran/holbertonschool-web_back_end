#!/usr/bin/env python3
"""Typed annotation function to_kv"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns strin representation of a float number"""
    return (k, float(v**2))
