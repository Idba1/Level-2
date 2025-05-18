-- Active: 1747534458831@@localhost@5432@test_db2
CREATE TABLE Employees (
    Employee_Id INT PRIMARY KEY,
    First_Name VARCHAR(50),
    Last_Name VARCHAR(50),
    Date_of_Birth DATE,
    Department_Id INT,
    Salary DECIMAL(10, 2)
);

INSERT INTO
    Employees (
        Employee_Id,
        First_Name,
        Last_Name,
        Date_of_Birth,
        Department_Id,
        Salary
    )
VALUES
    (
        1,
        'Alice',
        'Johnson',
        '1985-04-12',
        101,
        75000.00
    ),
    (2, 'Bob', 'Smith', '1990-06-23', 102, 68000.00),
    (
        3,
        'Carol',
        'Williams',
        '1982-11-30',
        103,
        82000.00
    ),
    (4, 'David', 'Brown', '1987-01-15', 101, 72000.00),
    (5, 'Eve', 'Davis', '1995-09-05', 104, 64000.00),
    (
        6,
        'Frank',
        'Miller',
        '1980-03-18',
        102,
        91000.00
    ),
    (
        7,
        'Grace',
        'Wilson',
        '1992-07-22',
        103,
        70000.00
    ),
    (8, 'Hank', 'Moore', '1986-12-11', 104, 76000.00),
    (9, 'Ivy', 'Taylor', '1991-10-02', 101, 69000.00),
    (
        10,
        'Jack',
        'Anderson',
        '1983-05-27',
        102,
        85000.00
    );

SELECT
    *
FROM
    Employees;

SELECT
    FIRST_NAME
FROM
    Employees;

