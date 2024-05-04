import React, { useEffect } from 'react';
import { Avatar, Button, Card, CardHeader, TableCell, TableContainer, TableHead, TableRow,Paper, Table, TableBody} from '@mui/material';
import { Category } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../State/Product/Action';
//import { Card} from '@mui/material'; 

const ProductTableView = () => {

  const dispatch = useDispatch();
  const {products} = useSelector((store)=> store);


  useEffect( () => {
      
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      stock: "",
      pageNumber: 1,
      pageSize: 10,
    };
      dispatch(findProducts(data))
      
    }, []);

  return (
    <div className='p-5 '>Products Table View

    <Card className='mt-2 bg-[#1b1b1b]' // sx={{}}
     >
      <CardHeader title='Recent Products' />
    
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
                
              </TableRow>
            </TableHead>
            
            <TableBody>
            {products?.products?.content?.map((item) => (
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

                </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductTableView;
