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


// CreateClient adds a new client to the system.
//
// @Summary Create a new client
// @Description Adds a client with basic info
// @Tags clients
// @Accept json
// @Produce json
// @Param client body models.Client true "Client info"
// @Success 201 {object} models.Client
// @Failure 400 {object} models.ErrorResponse
// @Router /clients [post]
func CreateClient(c *fiber.Ctx) error {
    client := new(models.Client)
    if err := c.BodyParser(client); err != nil {
        return c.Status(400).JSON(fiber.Map{"error": err.Error()})
    }
    config.DB.Create(&client)
    return c.Status(201).JSON(client)
}
