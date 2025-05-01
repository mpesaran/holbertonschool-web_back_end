#!/usr/bin/env python3
"""Typed annotation function element_length"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return length of e"""
    return [(i, len(i)) for i in lst]
