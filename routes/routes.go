package routes

import (
    "github.com/gofiber/fiber/v2"
    "github.com/codeforkansascity/dellalamb-support/handlers"
    "github.com/gofiber/contrib/swagger" // Fiber Swagger middleware

)

func Setup(app *fiber.App) {
    app.Get("/clients", handlers.GetClients)
    app.Post("/clients", handlers.CreateClient)

    app.Get("/providers", handlers.GetProviders)
    app.Post("/providers", handlers.CreateProvider)

    app.Use(swagger.New(swagger.Config{
        BasePath: "/",
        FilePath: "./docs/swagger.json",
        Path:     "swagger",
        Title:    "Dellalamb Support API Docs",
    }))
    
}
