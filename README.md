![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Sequelize Inc.

## Introduction

In this exercise, we will practice creating a seeding script for a database used as a registry of companies and employees. We will start small by creating one company record together with the associated records in other tables. By the end of the exercise you will have a chance to expand your seeding script and create a full-blown seed containing multiple company records.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.

## Instructions

### Iteration 0 - Setup

#### Database setup

Before we create the model and the schema that will connect to an database, we have to create the database. Using `psql` open the PostgreSQL interactive terminal:

```bash
$ psql postgres
```

If you haven't done so previously, first create a new `admin` user by running the following statement:

```sql
CREATE USER admin SUPERUSER PASSWORD 'admin';
```

Then create a new database called **`sequelize_inc`**:

```sql
CREATE DATABASE sequelize_inc OWNER admin;
```

#### Install Dependencies

We will need to install PostgreSQL and Sequelize dependencies. While in the root folder, run the following commands:

```bash
$ npm install sequelize pg pg-hstore
```

#### Helper function

To make your work a bit easier, we included a helper function `printRows`. You can use this function to log the results of your Sequelize queries. You can find it in the file `utils/print-rows.js`.

### Iteration 1 | Create models

In the `models/` folder, you will find the files for database models `Company`, `Address` and `Employee`.

The initial structure is already provided. Your task is to finish the models by defining the following schemas:

<details>
<summary><b>Company</b></summary>

<br>

The **`Company`** model schema should have the following fields:

- **company_name** - Type `STRING`. It should be unique and null value not allowed.

- **category** - Type `ENUM`. Can be one of the following values: `"web"`, `"software"`, `"hardware"`, `"social"`.

- **number_of_employees** - Type `INTEGER`. The minimum value should be `0`.Null value not allowed.

- **founded_year** - Type `INTEGER`. The minimum value should be `1950`. Null value not allowed.

- **homepage_url** - Type `STRING`. Null value not allowed.

- **twitter_username** - Type `STRING`. Null value not allowed.

- **active** - Type `BOOLEAN`. By default `true` (option `defaultValue`).

  <hr>

</details>

<details>
<summary><b>Address</b></summary>

<br>

The **`Address`** model schema should have the following fields:

- **company_name** - Type `STRING`. It should be unique and null value not allowed.

- **street** - Type `STRING`. Null value not allowed.

- **city** - Type `STRING`. Null value not allowed.

- **state** - Type `STRING`.

- **country** - Type `STRING`. Null value not allowed.

- **image** - Type `STRING`.

  <hr>

</details>

<details>
<summary><b>Employee</b></summary>

<br>

The **`Employee`** model schema should have the following fields:

- **first_name** - Type `STRING`. Null value not allowed.

- **last_name** - Type `STRING`. Null value not allowed.

- **date_of_birth** - Type `DATE`. Null value not allowed.

- **email** - Type `STRING`. It should be unique and null value not allowed.

- **salary** - Type `DECIMAL`. It should store decimal numbers with two decimal places. Null value not allowed.

- **department** - Type `ENUM`. Can be one of the following values: `"it"`, `"hr"`, `"marketing"`, `"finance"`, `"other"`.

- **rank** - Type `ENUM`. Can be one of the following values: `"employee"`, `"contractor"`, `"supervisor"`, `"executive"`.

  <hr>

</details>

### Iteration 2 | One-to-one relationship - Company <-> Address

In `db.js`, after the connection to the database and model initialization, you should setup the _one-to-one_ relationship between the tables `Company` and `Address`. This is to say that one company can have only one address.

The `Company` table should have a foreign key `AddressId` and an alias `address` that will be used for getting the associated Address row holding the address info of the company.

To create a relationship between these two tables you will need to use Sequelize association methods `hasOne` and `belongsTo`.

### Iteration 3 | One-to-many relationship Company <-> Employee

Next, we'll need to set up a _one-to-many_ relationship between the tables `Company` and `Employee`. One company may have many employees, and one employee can only belong to one company.

The `Employee` table should have a foreign key `CompanyId`, meant to store the primary key of the company row.

The `Company` table should have and alias `employees` that will be used for getting the associated Employee rows.

To create a relationship between these two tables you will need to use Sequelize association methods `hasMany` and `belongsTo`.

### Iteration 4 | Seed Script - create address row

Once done setting up the above relationships, we'll move on to seeding. In the following iterations you'll be asked to create a seeding script that will:

- Create 1 `Address` row.
- Create 1 `Company` row and link it with the previously created `Address` row,
- Create 15 `Employee` rows and link the with the previously created `Company` row.

Your task in this iteration is to create 1 `Address` row. You will be working in the `seed.js` file available in the root folder. Part of the code for the initial setup is already included. As well, at the top you will see that seed data is imported from the `seed-data.js` file.

Using the `address` object coming from `seed-data.js` create a new row in the `Address` table. Once done `console.log` the created row.

### Iteration 5 | Seed Script - create company row

Continuing our work in the `seed.js`, the next step is to create 1 `Company` row.

Using the `company` object coming from `seed-data.js` create a new row in the `Company` table. The row should have a foreign key `AddressId` holding the `id` of the previously created `Address` row.

Once done `console.log` the created `Company` row.

### Iteration 6 | Retrieve a company row and embed the address

Now that we have the address and the company row created and linked together via the foreign key, let's test that everything is working fine.

Using the Sequelize model method `findOne` retrieve the previously created company row and embed the linked address row using the option `include`.

Once done `console.log` the retrieved `Company` row with the embedded address.

### Iteration 7 | Seed Script - create employee rows

Our databse now contains information about the company and its address, but we are still missing the employee data. No worries, we'll fix that in this iteration.

Using the `employees` array coming from `seed-data.js` bulk create new rows in the `Employee` table. Each row should have a foreign key `CompanyId` holding the `id` of the previously created `Company` row.

Once done `console.log` the created `Employee` rows.

### Iteration 8 | Retrieve a company row and embed address and employees

Now that we have our employee rows created, it would be good to test that we the foreign key was properly set and that a relationship between the company and the employee rows was created.

Using the Sequelize model method `findOne` retrieve the previously created company row. The retrieved company row should have embedded the associated **_address_** row and **_employees_** rows. Same as before, you'll need to use the option `include`.

Once done `console.log` the retrieved `Company` row with the embedded _address_ and _employees_.

### Iteration 9 (BONUS) | Create a seed with multiple companies

Now that you have a working seed script, you may want to practice by creating more advanced seeding scripts. In the `bonus/seed-data.bonus.js` file we provided you with an update seed data set that contains multiple companies.

Create a new seed script in the `bonus/seed.bonus.js` file. The new seed script should do the following:

- Create 5 `Address` rows.

- Create 5 `Company` rows and link them with the previously created `Address` rows.

- Create 30 `Employee` rows and link the with the previously created `Company` rows.

  Each company should have 6 employees associated to it.

Happy coding! 💙
