'use client'

import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { format } from 'date-fns'
import { useQuery } from "@tanstack/react-query"
import { getSalesByDate } from "@/lib/api"
import TransactionSummary from "./TransactionSummary"
import { formatCurrency } from "@/utils/utils"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function TrasnsactionFilter() {
    
    const [date, setDate] = useState<Value>(new Date())
    const formattedDate = format(date?.toString() || new Date(), 'yyyy-MM-dd')
    const { data, isLoading } = useQuery({
        queryKey: ['sales', formattedDate],
        queryFn: () => getSalesByDate(formattedDate)
    })

    const total = data?.reduce((total, transaction) => total + +transaction.total, 0) ?? 0
 
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 mt-10 relative items-start">
            <div className="lg:stricky lg:top-10">
                <Calendar
                    value={date}
                    onChange={setDate}
                    locale="es"
                />
            </div>
            <div className="">
                {isLoading && "Cargando..." }
                {data ? data.length ? data.map(transaction => (
                    <TransactionSummary
                        key={transaction.id}
                        transaction={transaction}
                    />
                )) : <p className="text-lg text-center">No hubo ventas en esta fecha</p> : null }
            </div>
            <p className="my-5 text-lg font-bold text-right">Total del dia {''}
                <span className="font-normal">{formatCurrency(total)}</span>
            </p>
        </div>
    )
}
