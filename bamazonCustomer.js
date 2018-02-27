const mysql = require("mysql");
const inquirer = require("inquirer");
const user = process.env.username;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",
  password: "edtms1987",
  database: "bamazon"
});

inquirer
  .prompt([
    {
      type: "confirm",
      name: "confirmSeeProducts",
      message: "Hello " + user + ", would you like to see our current items?"
    }
  ])
  .then(function(response) {
    if (response.confirmSeeProducts === false) {
      console.log("Please visit us again soon!");
      return;
    }
    connection.connect(function(error) {
      if (error) {
        console.log(error);
      }
      //   console.log(`Connection acquired as id ${connection.threadId}`);

      connection.query("SELECT * FROM products", function(error, data) {
        if (error) {
          console.log(error);
        }
        for (var i = 0; i < 10; i++) {
          console.log(
            "Item_id:",
            data[i].item_id,
            "-",
            "QTY",
            data[i].stock_quantity,
            "-",
            data[i].product_name,
            "$",
            data[i].price
          );
        }
      });
      prompts();
    }); //connection.connect closing tag

    function prompts() {
      setTimeout(function() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "productSelection",
              message:
                "Using the Item_id, which product would you like to purchase?"
            },
            {
              type: "input",
              name: "quantityOfProduct",
              message: "How many would you like to purchase?"
            }
          ])
          .then(function(result) {
            connection.query("SELECT * FROM products", function(error, data) {
              if (error) {
                console.log(error);
              }
              const selection = Number(result.productSelection) - 1;
              const quantity = Number(result.quantityOfProduct);
              const existingQuantity = Number(data[selection].stock_quantity);
              const newQuantity = existingQuantity - quantity;
              console.log(
                "Your total price today will be $",
                data[selection].price * quantity
              );
              console.log({ newQuantity: newQuantity });

              connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: newQuantity
                  },
                  {
                    item_id: selection + 1
                  }
                ],
                function(error, result) {
                  if (error) {
                    console.log(error);
                  }
                  // console.log(result);
                }
              );
            });

            setTimeout(function() {
              connection.query("SELECT * FROM products", function(error, data) {
                if (error) {
                  console.log(error);
                }
                for (var i = 0; i < 10; i++) {
                  console.log(
                    "Item_id:",
                    data[i].item_id,
                    "-",
                    "QTY",
                    data[i].stock_quantity,
                    "-",
                    data[i].product_name,
                    "$",
                    data[i].price
                  );
                }
              });
              connection.end(function(error) {
                if (error) {
                  console.log(error);
                }
                console.log("Connection Terminated");
              });
            }, 500);
          });
      }, 500);
    }
  });
