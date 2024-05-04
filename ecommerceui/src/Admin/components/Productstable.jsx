import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, CardHeader, TableCell, TableContainer, TableHead, TableRow,Paper, Table, TableBody, Typography, Pagination} from '@mui/material';
import { Category } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../State/Product/Action';
import { useLocation, useNavigate } from 'react-router-dom';
//import { Card} from '@mui/material'; 

const ProductsTable = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {customersProduct} = useSelector((store)=> store);
    console.log("products - ", customersProduct);

  // create instances  
  const searchParams = new URLSearchParams(location.search);   
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  // handle pagination
  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value-1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  }

 
  useEffect( () => {
      
    const data = {
      category: category || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      stock: "",
      pageNumber: page || 1,
      pageSize: 10,
    };
      dispatch(findProducts(data))
      
    }, [/*products.deletedProduct*/]);

     //delete product handler  
  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId))
  };

  return (
    <div className='p-5 bg-[#242B2E] '>ProductsTable

    <Card className='mt-2 bg-[#1b1b1b]' //sx={{}}
     >
      <CardHeader title='All Products' />
    
        <TableContainer component={Paper}
          sx={{minWidth:650}} aria-label="simple-table" > 
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image </TableCell>
                <TableCell align='left'>Title</TableCell>
                <TableCell align='left'>Category</TableCell>
                <TableCell align='left'>Price</TableCell>
                <TableCell align='left'>Quantity</TableCell>
                <TableCell align='left'>Delete</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
            {customersProduct?.products.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td. &:last-child th': {border: 0} }}
                >
                  <TableCell component="th" scope="row" align='left'>
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell>
                    {item.title} 
                  </TableCell> 

                  <TableCell align='left'>{item.category.name} </TableCell>
                  <TableCell align='left'>{item.price} </TableCell>
                  <TableCell align='left'>{item.quantity} </TableCell>
                  <TableCell align='left'>
                    <Button onClick={()=>handleProductDelete(item.id)} 
                      variant='outlined'>
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      {/* Add pagination */}
      <Card className='mt-2'>
        <div className='mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md'>
              <Pagination 
                count={customersProduct.products?.totalPages}
                color='primary'
                onChange={handlePaginationChange}
              />
              <Typography>{customersProduct.products?.totalPages} </Typography>
        </div>
      </Card>
    </div>
  );
};

export default ProductsTable;
