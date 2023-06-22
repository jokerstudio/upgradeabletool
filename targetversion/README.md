# Upgradeable tool for target contract version

This project demonstrates upgrade the target contract with Hardhat.

## Replace the proxy address:
replace the `PROXY_ADDRESS` in the deployment script with the deployed proxy address
e.g. the box deploy script `scripts/deploy_boxv2.ts`
```ts
const proxyAddress = "{{PROXY_ADDRESS}}";
```

## Deploy the origin version:
```bash
npx hardhat run {{path/to/you/script}} --network localhost
```

