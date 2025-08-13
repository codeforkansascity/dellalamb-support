package models

// ErrorResponse represents a standard error message.
//
// swagger:model
type ErrorResponse struct {
    // Error message
    //
    // required: true
    Message string `json:"message"`
}