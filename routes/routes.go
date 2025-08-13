package routes

import (
    "github.com/gofiber/fiber/v2"
    "github.com/codeforkansascity/dellalamb-support/handlers"
)

func Setup(app *fiber.App) {
    app.Get("/clients", handlers.GetClients)
    app.Post("/clients", handlers.CreateClient)

    app.Get("/providers", handlers.GetProviders)
    app.Post("/providers", handlers.CreateProvider)
}
