terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "terraform"
    storage_account_name = "pranavtfremotestate"
    container_name       = "tfstate"
    key                 = "xirr.terraform.tfstate"
    use_oidc            = true
  }
}

provider "azurerm" {
  skip_provider_registration = true
  features {}
}
