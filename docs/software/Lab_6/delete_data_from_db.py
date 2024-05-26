from psycopg2 import errors


def delete_data(cur, id):
    try:
        cur.execute(f'''SELECT * FROM "datafiles" WHERE id = {id}''')
        get_data = cur.fetchall()
        if get_data == []:
            return f"Data with id = {id} is not found!"
        else:
            delete_data_from_db = f'''DELETE FROM "datafiles" WHERE id = %s'''
            data = (id,)
            cur.execute(delete_data_from_db, data)
            cur.connection.commit()
            return "Data delete successful!"
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()
