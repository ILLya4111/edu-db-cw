import psycopg2


conn = psycopg2.connect(
    database="postgres",
    user="db",
    password="Root",
    host="localhost",
    port="5432"
)


