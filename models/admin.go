package models

// Admin represents a provider with administrative privileges.
//
// swagger:model
type Admin struct {
    ID    uint   `json:"id" gorm:"primaryKey"`
    Name  string `json:"name"`
    Email string `json:"email"`
}
