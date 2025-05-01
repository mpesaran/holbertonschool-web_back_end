#!/usr/bin/env python3
"""Use Mongo in a python file"""


def schools_by_topic(mongo_collection, topic):
    """returns the list of school having a specific topic"""
    result = []
    return result.append(mongo_collection.filter(
        {"topic": topic}
    ))

