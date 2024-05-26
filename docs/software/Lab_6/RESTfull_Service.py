from flask import Flask, jsonify, request
from psycopg2 import errors
from pytz import timezone

import datetime
import connection_to_db
import get_data_from_db
import insert_data_to_db
import delete_data_from_db
import update_data_in_db


app = Flask(__name__)


@app.route('/get_data', methods=['GET'])
def get_data():
    with connection_to_db.conn.cursor() as cur:
        data = get_data_from_db.get_all_data(cur)
    return jsonify(data)


@app.route('/get_data_with_id', methods=['POST'])
def get_description():
    request_data = request.get_json()
    id = request_data.get('id')
    if id:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = get_data_from_db.get_data_with_id(cur, id)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            connection_to_db.conn.rollback()
            return jsonify({'error': str(e)}), 400
    else:
        return jsonify({'error': 'Missing id parameter'}), 400


@app.route('/insert_data', methods=['POST'])
def insert_new_data():
    request_data = request.get_json()
    last_update = get_time()
    content = request_data.get('content')
    description = request_data.get('description')
    format = request_data.get('format')
    name = request_data.get('name')
    if content and description and format and name:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.insert_data(cur, content, description, format, last_update, name)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({'error': str(e)}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400


@app.route('/delete_data', methods=['DELETE'])
def delete_data():
    request_data = request.get_json()
    id = request_data.get('id')
    if id:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = delete_data_from_db.delete_data(cur, id)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            return jsonify({'error': str(e)}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing id parameter'}), 400


@app.route('/update_data', methods=['PUT'])
def update_data():
    request_data = request.get_json()
    id = request_data.get('id')
    last_update = get_time()
    content = request_data.get('content')
    description = request_data.get('description')
    format = request_data.get('format')
    name = request_data.get('name')
    if id:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = update_data_in_db.update_data(cur, id, last_update, content, description, format, name)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            return jsonify({'error': str(e)}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400


def get_time():
    uk_timezone = timezone("Europe/kiev")
    current_time = datetime.datetime.now(uk_timezone)
    time_str = current_time.strftime("%Y-%m-%d %H:%M:%S")
    return time_str


if __name__ == '__main__':
    app.run()
