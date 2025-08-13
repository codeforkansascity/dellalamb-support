package models

// Resource represents a community service available to refugees.
//
// It includes metadata about the service, contact info, eligibility, and location.
type Resource struct {
    ID              int64   `json:"id"`                          // Unique identifier
    Name            string  `json:"name"`                        // Name of the resource or program
    Description     string  `json:"description"`                 // Brief overview of what the service provides
    Category        string  `json:"category"`                    // e.g. "Housing", "Legal Aid", "Employment", "Education"
    Organization    string  `json:"organization"`                // Name of the organization offering the service
    ContactEmail    string  `json:"contact_email,omitempty"`     // Optional contact email
    ContactPhone    string  `json:"contact_phone,omitempty"`     // Optional contact phone
    Website         string  `json:"website,omitempty"`           // Optional website URL
    Address         string  `json:"address,omitempty"`           // Physical location of the service
    City            string  `json:"city"`                        // City where the service is offered
    State           string  `json:"state"`                       // State or region
    ZipCode         string  `json:"zip_code"`                    // Postal code
    Eligibility     string  `json:"eligibility,omitempty"`       // Who qualifies for the service
    Languages       []string `json:"languages,omitempty"`        // Languages supported
    IsActive        bool    `json:"is_active"`                   // Whether the resource is currently available
    CreatedAt       string  `json:"created_at"`                  // ISO timestamp
    UpdatedAt       string  `json:"updated_at"`                  // ISO timestamp
}
