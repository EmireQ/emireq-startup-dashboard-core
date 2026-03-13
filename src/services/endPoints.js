export const BASE_URL = 'https://emireq-accounting-481415653907.europe-west1.run.app';

// Startups
export const STARTUP_LOGIN = "/startups/auth/login/"
export const STARTUP_REGISTER = "/startups/auth/register/"
export const STARTUP_PREVIEW = "/startups/enrich/preview/"
export const STARTUP_PROFILE = "/startups/me/"
export const STARTUP_STEP = "/startups/onboarding/step/"

// Subscriptons
export const SUBSCRIPTION_PROVIDER = "/api/v1/providers"
export const SUBSCRIPTION_PLANS = "/api/v1/plans"

// Transactions 
export const CREATE_TRANSACTIONS = "/api/v1/transactions/"
export const LIST_TRANSACTIONS = "/api/v1/transactions/"
export const TRANSACTION_FROM_ID  = "/api/v1/transactions/{transaction_id}"
export const UPDATE_TRANSACTION  = "/api/v1/transactions/{transaction_id}"
export const DELETE_TRANSACTION  = "/api/v1/transactions/{transaction_id}"
export const UPLOAD_TRANSACTION  = "/api/v1/transactions/upload"

// Journals
export const JOURNAL_ENTRIES = "/api/v1/journals/entries"

// Sales (AR)
export const CREATE_CUSTOMER = "/api/v1/sales/customers"
export const LIST_CUSTOMERS = "/api/v1/sales/customers"
export const GET_CUSTOMER_FROM_ID = "/api/v1/sales/customers/{customer_id}"
export const UPDATE_CUSTOMER_FROM_ID = "/api/v1/sales/customers/{customer_id}"
export const DELETE_CUSTOMER_FROM_ID = "/api/v1/sales/customers/{customer_id}"
export const GET_CUSTOMER_BALANCE_FROM_ID = "/api/v1/sales/customers/{customer_id}/balance"
export const CREATE_INVOICE = "/api/v1/sales/invoices"
export const LIST_INVOICES = "/api/v1/sales/invoices"
export const GET_INVOICES_FROM_ID = "/api/v1/sales/invoices/{invoice_id}"
export const UPDATE_INVOICE_FROM_ID = "/api/v1/sales/invoices/{invoice_id}"
export const ISSUE_INVOICE_FROM_ID = "/api/v1/sales/invoices/{invoice_id}/issue"
export const CANCEL_INVOICE_FROM_ID = "/api/v1/sales/invoices/{invoice_id}/cancel"
export const CREATE_PAYMENT = "/api/v1/sales/payments"
export const LIST_PAYMENT = "/api/v1/sales/payments"
export const GET_PAYMENT_FROM_ID = "/api/v1/sales/payments/{payment_id}"
export const GET_AGING_ANALYSIS = "/api/v1/sales/aging-analysis"
export const GET_DASHBOARD_SUMMARY = "/api/v1/sales/dashboard"
