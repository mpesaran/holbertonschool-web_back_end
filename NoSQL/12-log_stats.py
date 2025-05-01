#!/usr/bin/env python3
from pymongo import MongoClient
"""Log stats"""


def log_stats():
    client = MongoClient("mongodb://127.0.0.1:27017")
    db = client.logs
    collection = db.nginx

    total_logs = collection.count_documents({})

    methods = ['GET', 'POST', 'PATCH', 'DELETE']
    method_counts = {}
    for method in methods:
        method_counts[method] = collection.count_documents({"method": method})

    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{total_logs} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {method_counts[method]}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
