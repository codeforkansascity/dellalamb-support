package models

type Provider struct {
    ID      uint   `json:"id" gorm:"primaryKey"`
    Name    string `json:"name"`
    Service string `json:"service"`
}
