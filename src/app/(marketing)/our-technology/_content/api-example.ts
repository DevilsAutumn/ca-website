// Direct accrual schema: https://api.currencyalliance.com/api-docs/v3
// Authentication setup is intentionally omitted from this marketing example.
export const accrualRequestExample = `import requests

response = requests.post(
    "https://sandbox.api.currencyalliance.com/public/v3.0/accruals/standard",
    json={
        "member": {"id": "M12334532"},
        "loyalty_currency": "EXAMPLE_POINTS",
        "amount": 250,
        "origin": "acc_abcd1234",
        "reason": "Purchase reward",
    },
    timeout=15,
)
response.raise_for_status()
accrual = response.json()`;
