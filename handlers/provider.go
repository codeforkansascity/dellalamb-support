package handlers

import (
    "github.com/gofiber/fiber/v2"
    "github.com/codeforkansascity/dellalamb-support/config"
    "github.com/codeforkansascity/dellalamb-support/models"
)

// GetProviders retrieves all providers from the database
// and returns them as a JSON response.
// It uses the Fiber framework for handling HTTP requests.
// The function queries the database for all Provider records
// and returns them in the response.
// If an error occurs during the query, it returns a 400 status code
// with the error message. 
func GetProviders(c *fiber.Ctx) error {
    var providers []models.Provider
    config.DB.Find(&providers)
    return c.JSON(providers)
}

// CreateProvider handles the creation of a new provider.
// It expects the request body to contain the provider details in JSON format.
// If the body cannot be parsed, it returns a 400 status code with an error message.
// If successful, it creates a new provider record in the database
// and returns the created provider with a 201 status code. 
func CreateProvider(c *fiber.Ctx) error {
    provider := new(models.Provider)
    if err := c.BodyParser(provider); err != nil {
        return c.Status(400).JSON(fiber.Map{"error": err.Error()})
    }
    config.DB.Create(&provider)
    return c.Status(201).JSON(provider)
}
