terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "terraform"
    storage_account_name = "pranavtfremotestate"
    container_name       = "tfstate"
    key                 = "xirr.terraform.tfstate"
    use_oidc            = true
    use_azuread_auth    = true
  }
}

provider "azurerm" {
  features {}
  use_oidc = true
  skip_provider_registration = true
}