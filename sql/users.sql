-- Fetch User
CREATE USER 'Fetch'@'localhost' IDENTIFIED BY 'OccasionsFetch';

-- Grant Read permissions on the desired table(s)
GRANT INSERT, UPDATE, DELETE ON your_database.your_table TO 'Fetch'@'localhost';


--  Insert user
CREATE USER 'Insert'@'localhost' IDENTIFIED BY 'OccasionsFetch';

-- Grant Insert permissions on the desired table(s)
GRANT INSERT ON your_database.your_table TO 'Insert'@'localhost';


--  Update user
CREATE USER 'Update'@'localhost' IDENTIFIED BY 'OccasionsFetch';

-- Grant Update permissions on the desired table(s)
GRANT UPDATE ON your_database.your_table TO 'Update'@'localhost';


--  Delete user
CREATE USER 'DeleteRow'@'localhost' IDENTIFIED BY 'OccasionsFetch';

-- Grant Delete permissions on the desired table(s)
GRANT DELETE ON your_database.your_table TO 'read_write_user'@'localhost';

-- Repeat the above GRANT statement for each table the user needs write access to, replacing 'your_database' with the actual database name and 'your_table' with the table name.

-- Step 4: Flush privileges to apply the changes
FLUSH PRIVILEGES;

