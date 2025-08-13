// @title Dellalamb Support API
// @version 1.0
// @description API for Dellalamb support services
// @host localhost:3000
// @BasePath /
package main

import (
    "github.com/gofiber/fiber/v2"
    "dellalamb-support/config"
    "dellalamb-support/routes"
    "dellalamb-support/models" // Import models to ensure they are registered with the database
)

func main() {
    app := fiber.New()

    config.ConnectDB()
    routes.Setup(app)

    app.Listen(":3000")
}
