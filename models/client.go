package models


// Client represents a person receiving support.
//
// swagger:model
type Client struct {
    ID    uint   `json:"id" gorm:"primaryKey"`
    Name  string `json:"name"`
    Email string `json:"email"`
}
