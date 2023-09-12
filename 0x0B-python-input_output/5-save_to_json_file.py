#!/usr/bin/python3
"""
Contains the "to_json_string" fundtion
"""


import json


def save_to_json_file(my_obj, filename):
    """
    Writes an object to a text file using its JSON representation.
    """
    with open(filename, 'w') as file:
        json.dump(my_obj, file)
