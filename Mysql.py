 
import mysql.connector

mydb = mysql.connector.connect(
      host = "localhost",
      name = "myname",
      password = "mypassword",
      database = "mydatabase"
)

mycursor = mydb.cursor()

sql = ("UPDATE customers SET address = 'town val' WHERE address = 'bilal house'")

mycursor.execute(sql)

mydb.commit()

 



