resource "azurerm_storage_account" "static_web" {
  name                     = "calculatorsandconverters"  # Must be globally unique
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document     = "xirr.html"
    error_404_document = "404.html"
  }
}

# Output the static website URL
output "static_website_url" {
  value = azurerm_storage_account.static_web.primary_web_endpoint
}

output "storage_account_name" {
  value = azurerm_storage_account.static_web.name
}
