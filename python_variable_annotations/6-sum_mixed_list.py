#!/usr/bin/env python3
"""Typed annotation function sum_list"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """returns strin representation of a float number"""
    return sum(mxd_lst)
