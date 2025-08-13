package handlers

import (
    "github.com/gofiber/fiber/v2"
    "github.com/codeforkansascity/dellalamb-support/config"
    "github.com/codeforkansascity/dellalamb-support/models"
)

func GetClients(c *fiber.Ctx) error {
    var clients []models.Client
    config.DB.Find(&clients)
    return c.JSON(clients)
}

func CreateClient(c *fiber.Ctx) error {
    client := new(models.Client)
    if err := c.BodyParser(client); err != nil {
        return c.Status(400).JSON(fiber.Map{"error": err.Error()})
    }
    config.DB.Create(&client)
    return c.Status(201).JSON(client)
}
