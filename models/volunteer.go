package models

// Volunteer represents a person giving support that is not part of an organization.
//
// swagger:model
type Volunteer struct {
    ID    uint   `json:"id" gorm:"primaryKey"`
    Name  string `json:"name"`
    Email string `json:"email"`
}
