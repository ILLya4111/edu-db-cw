from psycopg2 import errors


def insert_data(cur, content, description, format, last_update, name):
    try:
        cur.execute('SELECT MAX(id) FROM "datafiles" ')
        next_id = cur.fetchall()
        insert_data_to_db = (f'''INSERT INTO "datafiles"(
        	                                 id, content, description, format, last_update, name)
                                             VALUES (%s, %s, %s, %s, %s, %s)''')
        data = (next_id[-1][0] + 1, content, description, format, last_update, name)
        cur.execute(insert_data_to_db, data)
        cur.connection.commit()
        return "Data insert successful!"
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    finally:
        cur.close()
