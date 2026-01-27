'use client'

import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { format } from 'date-fns'
import { useQuery } from "@tanstack/react-query"
import { getSalesByDate } from "@/lib/api"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function TrasnsactionFilter() {
    
    const [date, setDate] = useState<Value>(new Date())
    const formattedDate = format(date?.toString() || new Date(), 'yyyy-MM-dd')
    const { data, isLoading } = useQuery({
        queryKey: ['sales', formattedDate],
        queryFn: () => getSalesByDate(formattedDate)
    })
 
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 mt-10">
            <div className="">
                <Calendar
                    value={date}
                    onChange={setDate}
                />
            </div>
            <div className="">
                2
            </div>
        </div>
    )
}
