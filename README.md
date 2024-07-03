# 🤖 Telegram_Bot

### 📖 About of Project

<img src="https://private-user-images.githubusercontent.com/142769545/340774812-15594158-1e3f-4714-b7a4-63b62673ea14.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTg3MzI0MDAsIm5iZiI6MTcxODczMjEwMCwicGF0aCI6Ii8xNDI3Njk1NDUvMzQwNzc0ODEyLTE1NTk0MTU4LTFlM2YtNDcxNC1iN2E0LTYzYjYyNjczZWExNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxOFQxNzM1MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNzBlYTA3ZjQ1NzQxOTg2NDZmMjQ4MmUyY2YwNzFjMTYyMjQzNTA1ZDk2OTVhMGFiODdlYjY5MmM0OTQ2YjZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.CY_biaIn2VI93qE0J-tU30aCRsgU5E2BXSbgWBTV1xc" alt="telegram bot">

The project is on integration a API of telegram for the posting automatication. 
Desenvolvido com TypeScript, oferece uma alta flexibilidade no controle do produtos ofertados no bot
ensuring that it can be easily used by anyone interested in promoting their products.

### ✔️ Adjustments and improvements

The project is still under development and the next updates will focus on the following tasks:

- [] make one web scraping
- [] add more plataform

### ✔️ Functions

There are currently 5 endpoints that can be used to:

- Create and Find Groups
- Create and Find Scripts
- Start bot

  ### 🕹️ Starting and using the Project

- Download the project on your machine
- Install dependencies
- Create file `.env` with the following list:
    * `TELEGRAM_BOT`
    * `DATABASE_URL`
    * `CHAT_ID`
- Start docker with: `docker compose up -d`
- Start prisma with: `npx prisma migrate dev`
- create one script:
  
`{ "product": "Name of product",`

 `  "description": "Description of your product",`
   
 `  "descont": "Value",`
   
 `  "link": "Link of product " } `
- create one group:

`{ "name": "Name of your group",`

 `  "validity":  "DataTime of promotions validation" }`
- Select your gruop:
  
`{ "groupId": "Id of your group that going run" }`
  

  ### 📬 Result

  The bot will run the entire group until the date determined in the validity and the products will be launched every 12 hours.


  
