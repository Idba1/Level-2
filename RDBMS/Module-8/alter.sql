SELECT * FROM students;

ALTER TABLE students
DROP COLUMN email;

ALTER TABLE students
RENAME COLUMN age TO user_age;

ALTER TABLE students
ALTER COLUMN first_name TYPE VARCHAR(50);

ALTER TABLE students
ALTER COLUMN user_age SET UNIQUE;

ALTER TABLE students
ALTER COLUMN user_age DROP NOT NULL;

ALTER TABLE students
ADD CONSTRAINT unique_students_user_age UNIQUE(user_age);

ALTER TABLE students
DROP CONSTRAINT unique_students_user_age;

TRUNCATE TABLE students;

DROP TABLE students;
