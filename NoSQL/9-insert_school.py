#!/usr/bin/env python3
"""Use Mongo in a python file"""


def insert_school(mongo_collection, **kwargs):
    """Add a new document in a collection"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
