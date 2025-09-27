## API
- [Azure API Hub](https://portal.azure.com/#@ColinWilliams91gmail.onmicrosoft.com/resource/subscriptions/23686d9b-2a79-4809-8c86-b7982afa8a1c/resourcegroups/auzre_rg_1/providers/Microsoft.Web/sites/colin-williams-api/appServices)
- [Azure App Service - Deploy API](https://portal.azure.com/#view/HubsExtension/DeploymentDetailsBlade/~/overview/id/%2Fsubscriptions%2F23686d9b-2a79-4809-8c86-b7982afa8a1c%2FresourceGroups%2Fauzre_rg_1%2Fproviders%2FMicrosoft.Resources%2Fdeployments%2FMicrosoft.Web-WebApp-Portal-022deba5-9741/packageId//primaryResourceId/%2Fsubscriptions%2F23686d9b-2a79-4809-8c86-b7982afa8a1c%2Fresourcegroups%2Fauzre_rg_1%2Fproviders%2FMicrosoft.Web%2Fsites%2Fcolin-williams-api/provisioningHash/customize-post-provisioning-steps-webapp-deployment/createBlade~/%7B%22extension%22%3A%22WebsitesExtension%22%2C%22telemetryId%22%3A%224573db36-b109-43f7-915a-c2c00f9c3014%22%7D)
## Client
- [Netlify CLIENT Hub](https://app.netlify.com/projects/colin-williams/overview)

|   |   |
|---|---|
|[GitHub Actions](https://learn.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment?tabs=github)|Existing GitHub Actions workflows that use basic authentication don't work. Disconnect the existing GitHub configuration and create a new GitHub Actions configuration that uses user-assigned identity.  <br>If the existing GitHub Actions deployment is [manually configured](https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions), try using a service principal or OpenID Connect instead.  <br>For new GitHub Actions workflows, use the **User-assigned identity** option.|

![[Pasted image 20250927021011.png]]