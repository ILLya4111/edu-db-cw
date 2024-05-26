from psycopg2 import errors


def update_data(cur, id, last_update, content=None, description=None, format=None, name=None):
    try:
        cur.execute(f'''SELECT * FROM "datafiles" WHERE id = {id}''')
        get_data = cur.fetchone()
        if not get_data:
            return f"Data with id = {id} is not found!"
        else:
            content = get_data[2] if content is None else content
            description = get_data[3] if description is None else description
            format = get_data[4] if format is None else format
            name = get_data[5] if name is None else name
            update_data_in_db = f'''UPDATE "datafiles" SET 
                                    last_update = %s, content = %s, description = %s, format = %s, name = %s  
                                    WHERE id = %s'''
            data = (last_update, content, description, format, name, id)
            cur.execute(update_data_in_db, data)
            cur.connection.commit()
            return "Data update successful!"
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()
