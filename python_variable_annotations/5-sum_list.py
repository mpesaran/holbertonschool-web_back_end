#!/usr/bin/env python3
"""Typed annotation function sum_list"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """returns strin representation of a float number"""
    sum = 0
    for i in input_list:
        sum += i
    return sum
