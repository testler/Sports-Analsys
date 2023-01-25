# Prerequisites

You'll need the following

- node shell
- NPM shell
- MySQL shell
- Git Shell
- Working knowledge of Bash termial

## Getting Started

1. In termial Git clone this repository
2. Navigate inside the "ligoSports directory"
3. Run "(sudo) npm i" to install dependencies
4. Create a .env file with 2 variables DB_PASSWORD and DB_USERNAME, this is to give this program access to your local MySQL database
5. Run "node seed.js" this will generate the data in the database for the file.  The database is Named "SportsAnalsys"
6. Run "node(or nodemon) server.js" to start the local server on port 8000

## Endpoints

At it's current version there are only 2 endpoints:

1. GET "localhost:8000/Statistic/"
2. POST "localhost:8000/Statistic/"

## Database configuration

![database structure]("./database_structure.png)

## Final notes

You'll notice that there are a few data point missing such a PlayerId, I still need to fine tune that to get it working, but for this assement I felt that time was more important.
