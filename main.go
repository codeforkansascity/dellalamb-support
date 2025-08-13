// @title Dellalamb Support API
// @version 1.0
// @description API for Dellalamb support services
// @host localhost:3000
// @BasePath /
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/codeforkansascity/dellalamb-support/config"
    "github.com/codeforkansascity/dellalamb-support/routes"
)

func main() {
    app := fiber.New()

    config.ConnectDB()
    routes.Setup(app)

    app.Listen(":3000")
}
