from psycopg2 import errors


def get_all_data(cur):
    cur.execute('''SELECT json_build_object(
                          'id', id,
                          'last_update', last_update,
                          'content', content,
                          'format', format,
                          'description', description,
                          'name', name
                          ) AS data
                          FROM "datafiles"''')
    get_data = cur.fetchall()
    cur.close()
    return {'data': get_data}


def get_data_with_id(cur, id):
    try:
        cur.execute(f'''SELECT json_build_object(
                            'id', id,
                            'last_update', last_update,
                            'content', content,
                            'format', format,
                            'description', description,
                            'name', name
                            ) AS data
                            FROM "datafiles" 
                            WHERE id = %s''', (id,))
        get_data = cur.fetchall()
        if get_data:
            return {'data': get_data}
        else:
            return {'Oops': "Неіснує даних з таким id"}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()

