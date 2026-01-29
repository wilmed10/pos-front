import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center">
            <Heading>Producto No Encontrado</Heading>
            <p>Tal vez queras regresar a {''}
                <Link className="text-green-400" href={'/admin/products?page=1'}>Productos</Link>
            </p>
        </div>
    )
}
