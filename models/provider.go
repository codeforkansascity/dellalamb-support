package models

// Provider represents a person with resources to support a Client.
//
// swagger:model
type Provider struct {
    ID      uint   `json:"id" gorm:"primaryKey"`
    Name    string `json:"name"`
    Service string `json:"service"`
}
