package handlers

import (
    "github.com/gofiber/fiber/v2"
    "github.com/codeforkansascity/dellalamb-support/config"
    "github.com/codeforkansascity/dellalamb-support/models"
)

func GetProviders(c *fiber.Ctx) error {
    var providers []models.Provider
    config.DB.Find(&providers)
    return c.JSON(providers)
}

func CreateProvider(c *fiber.Ctx) error {
    provider := new(models.Provider)
    if err := c.BodyParser(provider); err != nil {
        return c.Status(400).JSON(fiber.Map{"error": err.Error()})
    }
    config.DB.Create(&provider)
    return c.Status(201).JSON(provider)
}
