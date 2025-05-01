#!/usr/bin/env python3
"""Use Mongo in a python file"""


def update_topics(mongo_collection, name, topics):
    """Update the topics field for a school document"""
    mongo_collection.update_many({
        {"name": name},
        {"$set":{"topics": topics}}
    })
