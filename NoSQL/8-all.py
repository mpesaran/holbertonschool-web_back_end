#!/usr/bin python3
"""Use Mongo in a python file"""


def list_all(mongo_collection):
    """List all documents in Python"""
    if not mongo_collection:
        return []
    return list(mongo_collection.find())
