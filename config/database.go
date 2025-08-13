package config

import (
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "github.com/codeforkansascity/dellalamb-support/models"
)

var DB *gorm.DB

func ConnectDB() {
    database, err := gorm.Open(sqlite.Open("support.db"), &gorm.Config{})
    if err != nil {
        panic("Failed to connect to database!")
    }

    database.AutoMigrate(&models.Client{}, &models.Provider{})
    DB = database
}
