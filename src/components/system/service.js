const createProduct = async ( values ) =>
{
    try
    {
        const result = await createProduct( values );
        if ( result.message === 'Product create successfully' )
        {
            alert( "Cập nhật sản phẩm thành công" );
        } else
        {
            alert( "Cập nhật sản phẩm thất bại" );
        }
    } catch ( error )
    {
        alert( "Cập nhật sản phẩm thất bại" );
        console.log( error );
    }
};

const getProductById = async ( productId ) =>
{
    try
    {
        const response = await fetch( `http://localhost/php/server/api/product/getById.php?id=${ productId }` );

        if ( response.ok )
        {
            const result = await response.json();
            return result;
        } else
        {
            throw new Error( 'Failed to get product by ID' );
        }
    } catch ( error )
    {
        throw new Error( 'Failed to get product by ID' );
    }
};

const editProduct = async ( productId ) =>
{
    try
    {
        const response = await fetch( `http://localhost/php/server/api/product/edit.php?id=${ productId }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
            } )
        } );

        if ( response.ok )
        {
            const result = await response.json();
            return result;
        } else
        {
            throw new Error( 'Failed to edit product' );
        }
    } catch ( error )
    {
        throw new Error( 'Failed to edit product' );
    }
};

const deleteProduct = async ( productId ) =>
{
    try
    {
        const response = await fetch( `http://localhost/php/server/api/product/delete.php?id=${ productId }`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        } );

        if ( response.ok )
        {
            const result = await response.json();
            return result;
        } else
        {
            throw new Error( 'Failed to delete product' );
        }
    } catch ( error )
    {
        throw new Error( 'Failed to delete product' );
    }
};





export { createProduct, getProductById, editProduct, deleteProduct };
