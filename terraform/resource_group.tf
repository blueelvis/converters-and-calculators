resource "azurerm_resource_group" "main" {
  name     = "calculators-and-converters"
  location = "Central India"  # Change this to your preferred region

  tags = {
    environment = "production"
  }
}