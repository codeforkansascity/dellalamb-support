package models

// Manager represents a person managing a specific client case.
//
// swagger:model
type Manager struct {
    ID    uint   `json:"id" gorm:"primaryKey"`
    Name  string `json:"name"`
    Email string `json:"email"`
}
