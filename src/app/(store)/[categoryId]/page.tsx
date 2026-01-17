type Params = Promise<{categoryId: string}>

async function getProducts(categoryId: string) {
    console.log(categoryId)
}

export default async function StorePage({params}: {params: Params}) {

    const { categoryId } = await params
    await getProducts(categoryId)

    return (
        <>
            StorePage
        </>
    )
}