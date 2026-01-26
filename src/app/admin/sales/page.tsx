import TrasnsactionFilter from "@/components/transactions/TrasnsactionFilter";
import Heading from "@/components/ui/Heading";

export default function SalesPage() {
  return (
    <>
      <Heading>Ventas</Heading>
      <p className="text-lg">En esta sección aparecerán las ventas, utiliza el calendario para filtrar por fecha.</p>
    
      <TrasnsactionFilter/>
    </>
  )
}
