import { TransactionsResponseSchema } from "@/schemas/schemas"

export async function getSalesByDate(date: string) {
    const offset = new Date().getTimezoneOffset()
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/sales?transactionDate=${date}&offset=${offset}`
    const req =  await fetch(url)
    const json = await req.json()
    const transactions = TransactionsResponseSchema.parse(json)
    return transactions
}